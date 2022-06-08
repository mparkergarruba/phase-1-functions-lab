function distanceFromHqInBlocks (pickup) {
    let hq = 42
    return Math.abs(pickup - hq)
}
function distanceFromHqInFeet (pickup) {
    return distanceFromHqInBlocks(pickup) * 264
}
function distanceTravelledInFeet (pickupBlock, dropoffBlock) {
    return Math.abs(pickupBlock - dropoffBlock) * 264
}
function calculatesFarePrice (start, destination) {
    if (distanceTravelledInFeet(start, destination) < 400) {
        return 0
    } else if (distanceTravelledInFeet(start, destination) < 2000) {
        return (distanceTravelledInFeet(start,destination) - 400) * 0.02
    } else if (distanceTravelledInFeet(start,destination) < 2500) {
        return 25
    } else return "cannot travel that far" 
}