const isReachable = require('is-reachable')
const chalk = require('chalk')
const isOnline = require('is-online')

const urlFile = require('./urls.json')
const urls = urlFile.urls

;(async () => {
  const online = await isOnline()

  if (online) {
    console.log(chalk.yellow(`### Testing ${urls.length} URLs ###`))

    urls.forEach(url => {
      ;(async () => {
        if (await isReachable(url)) {
          console.log(`${url}: ` + chalk.green('OK'))
        } else {
          console.log(`${url}: ` + chalk.red('not reachable'))
        }
      })()
    })
  } else {
    console.log(chalk.red("You're offline – could not check sites"))
    process.exit()
  }
})()
