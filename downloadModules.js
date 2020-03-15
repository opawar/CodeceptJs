const cp = require('child_process')
require("fs")

const req = async module => {
  try {
    require.resolve(module)
  } catch (e) {
    console.log(`Could not resolve "${module}"\nInstalling`)
    cp.execSync(`npm install ${module}`)
    await setImmediate(() => {})
    console.log(`"${module}" has been installed`)
  }
  console.log(`Requiring "${module}"`)
  try {
    return require(module)
  } catch (e) {
    console.log(`Could not include "${module}". Restart the script`)
    process.exit(1)
  }
}

const main = async () => {
  const http    = await req('yargs')
  const path    = await req('@wdio/selenium-standalone-service')
  const fs      = await req('fs')
  const express = await req('express')

  // The rest of the app's code goes here
}

main()