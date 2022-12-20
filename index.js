const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const reducer = (accumulator, item) => {
    let total = 0
    console.log(accumulator, item)
    const batteries = () => {
        let totalBatteries = 0
        totalBatteries = item
        console.log(totalBatteries)
    return total += totalBatteries
}
    return accumulator += total
}

let totalBatteries = batteryBatches.reduce(reducer,31)

