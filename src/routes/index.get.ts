export default defineEventHandler(async () => {
  return await useStorage("assets:server").getItem("index.html")
})
