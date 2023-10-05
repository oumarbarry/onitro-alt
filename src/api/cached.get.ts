export default defineCachedEventHandler(() => {
  const sum = useSum(7, 9)
  return { sum }
})
