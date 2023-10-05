import { CronJob } from 'cron'

export default defineNitroPlugin(() => {
  const job = new CronJob('00 00 00 * * *', () => {
    console.log(`Midnight: ${new Date()}`)
  })

  job.start()
})
