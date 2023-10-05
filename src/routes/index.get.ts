export default defineEventHandler(async (event) => {
  return await useStorage('assets:server').getItem(`index.html`)
})
