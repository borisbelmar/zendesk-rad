import fs from 'fs'

const saveDataAsJson = (entity, data) => {
  fs.writeFile(`${entity}.json`, JSON.stringify(data), 'utf8', (err) => {
    if (err) {
      console.log('Error:', err)
    }
  })
}

export default saveDataAsJson
