import path from 'path'

export const envVars = {
  corsOrigins: 'CORS_ORIGINS',
  databaseUrl: 'DATABASE_URL',
  nodeEnv: 'NODE_ENV',
}

export const port = 3000
export const production = process.env[envVars.nodeEnv] === 'production'
export const staticPath = path.resolve(__dirname, '../../../site/public')
export const corsOrigins = production
  ? getEnvVarOrThrow(envVars.corsOrigins).split(',')
  : ['*']
export const dbConnectionString = production
  ? getEnvVarOrThrow(envVars.databaseUrl)
  : 'postgres://mad:devonly@localhost:5432/mad'

export function getEnvVarOrDefault(
  varName: string,
  defaultValue: string,
): string {
  const maybeValue = process.env[varName]
  if (maybeValue !== undefined) {
    return maybeValue
  } else {
    return defaultValue
  }
}

export function getEnvVarOrThrow(varName: string): string {
  const maybeValue = process.env[varName]
  if (maybeValue !== undefined) {
    return maybeValue
  } else {
    throw new Error(`Nothing set for environment variable '${varName}'.`)
  }
}
