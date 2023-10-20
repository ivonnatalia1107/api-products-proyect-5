const fs = require ("fs")

const readData = () => {
    try {
        const data = fs.readFileSync("./db.json")
        return JSON.parse(data)
    } catch (error) {
        console.log(error)
        
    }
}

module.exports = {readData}