import requestAllData from './requestAllData.mjs'
import saveDataAsJson from './saveDataAsJson.mjs'

async function main() {
  const args = process.argv.slice(2)
  const [subdomain, entity, auth] = args
  try {
    const data = await requestAllData(subdomain, entity, auth)
    saveDataAsJson(entity, data)
  } catch(err) {
    console.log('Error:', err)
  }
}

export default main