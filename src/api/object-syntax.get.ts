const auth = defineRequestMiddleware((event) => {
  event.context.auth = { name: "admin" }
})

export default defineEventHandler({
  onRequest: auth,
  handler(event) {
    return { msg: "authorized", user: event.context.auth }
  },
})
