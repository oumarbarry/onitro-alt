export default defineEventHandler(async (event) => {
  const formData = await readFormData(event)

  const email = formData.get("email")
  const password = formData.get("pwd")

  return { email, password }
})
