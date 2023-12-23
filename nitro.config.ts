export default defineNitroConfig({
  srcDir: "src",
  errorHandler: "~/customErrorHandler",

  experimental: {
    openAPI: true,
    asyncContext: true,
    typescriptBundlerResolution: true,
  },

  typescript: {
    // strict: true,
    internalPaths: true,
  },

  routeRules: {
    "/api/**": { cors: true },
  },

  runtimeConfig: {
    helloThere: "HELLO THERE",
  },

  imports: {
    dirs: ["./src/composables/**"],
    imports: [
      { from: "zod", name: "z" },
    ],
  },
})
