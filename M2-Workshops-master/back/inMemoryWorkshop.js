inMemoryWorkshop = []


function getWorkshopList() {
    return new Promise((resolve, ) => {
        resolve(inMemoryWorkshop)
    })
}

function getWorkshopByName(name) {
    return new Promise((resolve, reject) => {
        if (!name) {
            reject(new Error("name parameter is required"))
        }
        resolve(inMemoryWorkshop.find(workshop => workshop.name === name))
    })
}

function addWorkshop(name, description) {
    return new Promise((resolve, reject) => {
        if (!name) {
            reject(new Error("Workshop name required"))
        }
        if (!description) {
            reject(new Error("Workshop description required"))
        }
        inMemoryWorkshop.push({
            name,
            description
        })
        resolve()
    })
}

function removeWorkshopByName(name) {
    return new Promise((resolve, reject) => {
        if (!name) {
            reject(new Error("Workshop name required"))
        }

        console.log(inMemoryWorkshop);
        getWorkshopByName(name)
        .then(workshop => {
            inMemoryWorkshop.indexOf(workshop)
        })
        .then(index => {
            if(index != -1){
                inMemoryWorkshop.splice(index,1);
            }
        })
        .then(() => console.log(inMemoryWorkshop))

        resolve()
    })
}

function updateWorkshop(oldName, name, description) {
    return new Promise((resolve, reject) => {
        if (!name) {
            reject(new Error("Workshop name required"))
        }
        if (!description) {
            reject(new Error("Workshop description required"))
        }

        getWorkshopByName(oldName)
        .then(workshop => {
            workshop.name = name;
            workshop.description = description;
        })

        resolve()
    })
}

module.exports = {
    getWorkshopList,
    getWorkshopByName,
    addWorkshop,
    removeWorkshopByName,
    updateWorkshop
}