export default defineNitroConfig({
  srcDir: "server",

  errorHandler: "~/customErrorHandler",

  experimental: {
    openAPI: true,
    asyncContext: true,
  },

  typescript: { internalPaths: true },

  routeRules: {
    "/api/**": { cors: true },
  },

  runtimeConfig: {
    helloThere: "HELLO THERE",
  },

  imports: {
    dirs: ["./server/composables/**"],

    imports: [
      { from: "zod", name: "z" },
    ],
  },
})
