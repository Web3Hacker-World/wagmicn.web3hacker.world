#!/usr/bin/env zx

const destDir = path.join(__dirname, `../content/en/`)
const sourceDir = path.join(__dirname, `../../_github/wagmi/docs/pages/core/`)

await $`cd ${sourceDir} && git pull`
await $`cp -r ${sourceDir}/** ${destDir}`

