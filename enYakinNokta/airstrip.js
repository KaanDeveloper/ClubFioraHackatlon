const airstripCoordinates = [[10.41, 0,21], [50.41, 1.11], [30.25, 2.12], [80.65, 0.55]]
const clientCoordinates = [20.12, 0.55]

function closestAirstrip(airstripCoordinates, clientCoordinates) {
    let distances = []
    let temp = 0
    let result
    let min
    for(let i = 0; i < airstripCoordinates.length; i++) {
        for(let j = 0; j < airstripCoordinates[i].length; j++) {
            temp += (airstripCoordinates[i][j] - clientCoordinates[j]) * (airstripCoordinates[i][j] - clientCoordinates[j])
        }
        result = Math.sqrt(temp)
        distances.push(result)
        temp = 0
        result = 0
    }
    min = myArrayMin(distances)
    if(distances[distances.indexOf(min)] === distances[0]) {
        console.log("En Yakın Havaalanı A Havaalanıdır: " + Math.round(min) + " km")
    }
    if(distances[distances.indexOf(min)] === distances[1]) {
        console.log("En Yakın Havaalanı B Havaalanıdır: " + Math.round(min) + " km")
    }
    if(distances[distances.indexOf(min)] === distances[2]) {
        console.log("En Yakın Havaalanı C Havaalanıdır: " + Math.round(min) + " km")
    }
    if(distances[distances.indexOf(min)] === distances[3]) {
        console.log("En Yakın Havaalanı D Havaalanıdır: " + Math.round(min) + " km")
    }
}

function myArrayMin(arr) {//This is a helper method
    let len = arr.length;
    let min = Infinity;
    while (len--) {
      if (arr[len] < min) {
        min = arr[len];
      }
    }
    return min;
  }

closestAirstrip(airstripCoordinates, clientCoordinates)