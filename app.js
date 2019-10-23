const isReachable = require('is-reachable')
const urlFile = require('./urls.json')

const urls = urlFile.urls

console.log(`🤖 ### Testing ${urls.length} URLs ###`)

urls.forEach(url => {
  ;(async () => {
    if (await isReachable(url)) {
      console.log(`✅ ${url} is ONLINE`)
    } else {
      console.log(`🚨 ${url} seems to be OFFLINE`)
    }
  })()
})
