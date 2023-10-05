export default () => {
  const hello = () => ({
    msg: useRuntimeConfig().helloThere,
    path: useEvent().path
  })

  return { hello }
}
