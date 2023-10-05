export default defineEventHandler(async () => {
  const kv = useStorage("data")

  const counter = (await kv.getItem<number | null>("counter") ?? 0) + 1

  await kv.setItem<number>("counter", counter)

  return { counter }
})
