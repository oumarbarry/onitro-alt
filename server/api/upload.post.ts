export default defineEventHandler(async (event) => {
  const files = await readMultipartFormData(event)

  return files.map(file => ({ ...file, data: undefined }))
})
