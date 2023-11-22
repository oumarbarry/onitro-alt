import type { NitroErrorHandler } from "nitropack"

export default <NitroErrorHandler> function (error, event) {
  event.node.res.writeHead(error.statusCode, error.statusMessage)
  event.node.res.end(JSON.stringify({ code: error.statusCode, message: error.statusMessage }))
}
