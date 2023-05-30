#!/usr/bin/env zx

const destDir = path.join(__dirname, `../content/en/core/`)
const sourceDir = path.join(__dirname, `../../_github/wagmi/docs/pages/core/`)

await $`cd ${sourceDir} && git pull`
await $`mkdir -p ${destDir} && cp -r ${sourceDir}/** ${destDir}`

