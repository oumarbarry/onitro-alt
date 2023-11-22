export default defineEventHandler(async (event) => {
  const formData = await readFormData(event)

  const email = formData.get("email")
  const password = formData.get("password")

  return { email, password }
})
