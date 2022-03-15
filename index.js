// Write your solution in this file!

let driver = {name:"Timble"
}

function updateDriverWithKeyAndValue(driver,key,value) {
    const newDriver = {...driver}
    newDriver[key] = value
    return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(driver) {
    driver['name'] = "Sam"
    driver['address'] = "12 Broadway"
    return driver
}

function deleteFromDriverByKey(driver) {
    const newDriver = {...driver}
    newDriver['name'] = undefined
    return newDriver
}

function destructivelyDeleteFromDriverByKey(driver) {
    driver['name'] = undefined
    return driver
}












