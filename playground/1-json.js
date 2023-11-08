const fs=require('fs')


const dataBuffer=fs.readFileSync('1-json.json')
const dataJSON= dataBuffer.toString()
const data=JSON.parse(dataJSON)
data.name="Sachin"
data.age=21
console.log(data.name)
const string=JSON.stringify(data)
console.log(string)
const changed=fs.writeFileSync('1-json.json',string)




