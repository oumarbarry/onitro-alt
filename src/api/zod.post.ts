const userSchema = z.object({
  name: z.string().default('guest'),
  email: z.string().email(),
})

export default defineEventHandler(async (event) => {
  const user = await readValidatedBody(event, userSchema.safeParse) // or `.parse` to throw an error

  return user
})
