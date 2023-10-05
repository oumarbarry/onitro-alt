export default defineEventHandler<{ body: { name: string } }>(
  async (event) => {
    const { id } = getQuery<{ id: string }>(event)
    const { name } = await readBody(event)

    return { id, name }
  }
)

// For runtime validation, check: /api/zod.post.ts
