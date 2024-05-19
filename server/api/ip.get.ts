export default defineEventHandler(event => ({ ip: getRequestIP(event, { xForwardedFor: true }) }))
