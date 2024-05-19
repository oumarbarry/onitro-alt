export default defineEventHandler(async (event) => {
  setResponseHeader(event, "Content-Type", "text/html")

  const encoder = new TextEncoder()

  const stream = new ReadableStream({
    async start(controller) {
      for (const token of "Streaming is so cool with Nitro!".split("")) {
        controller.enqueue(encoder.encode(token))
        await new Promise(resolve => setTimeout(resolve, 50))
      }
      controller.close()
    },
  })

  return stream
})
