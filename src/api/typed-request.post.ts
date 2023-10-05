interface TypedEventRequest {
  body: { name: string }
  query: { id: string }
}

export default defineEventHandler<TypedEventRequest>(async (event) => {
  const query = getQuery(event)
  const body = await readBody(event)

  return { query, body }
})
