# ---------- STAGE 1: Install dependencies ----------
FROM node:latest AS deps

# Disable telemetry & set env
ENV NEXT_TELEMETRY_DISABLED=1
WORKDIR /app

# Copy only lockfiles to leverage Docker caching
COPY package.json package-lock.json* yarn.lock* pnpm-lock.yaml* ./

# Install dependencies based on lockfile type
RUN if [ -f pnpm-lock.yaml ]; then \
      npm install -g pnpm && pnpm install --frozen-lockfile; \
    elif [ -f yarn.lock ]; then \
      npm install -g yarn && yarn install --frozen-lockfile; \
    else \
      npm ci; \
    fi

# ---------- STAGE 2: Build the Next.js app ----------
FROM node:latest AS builder
ENV NEXT_TELEMETRY_DISABLED=1
WORKDIR /app

# Copy dependencies from deps stage
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build optimized production version
RUN npm run build

# ---------- STAGE 3: Production runtime ----------
FROM node:latest AS runner
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
WORKDIR /app

# Create non-root user for security
RUN groupadd -r nextjs && useradd -r -g nextjs nextjs

# Copy only necessary output
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Expose port 3000
EXPOSE 3000

# Healthcheck (optional)
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD curl -f http://127.0.0.1:3000/ || exit 1

# Run as non-root user
USER nextjs

# Start the Next.js server
CMD ["npm", "run", "start"]
