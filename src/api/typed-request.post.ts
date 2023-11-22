// For runtime validation, check: src/api/zod.post.ts

export default defineEventHandler<{ body: { name: string } }>(async (event) => {
  const { id } = getQuery<{ id: string }>(event)
  const { name } = await readBody(event)

  return { id, name }
})
