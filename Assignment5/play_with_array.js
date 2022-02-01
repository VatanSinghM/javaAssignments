function getEven(arr) {
    let n = arr.length
    let res = []
    for(var i =0; i<n;i++){
        if(arr[i]%2==0){
            res.push(arr[i])
        }
    }
    return res
    

}

function multiplyByN(arr, n) {
    let res =[]
    for(var i=0;i<arr.length;i++){
        res.push(n*arr[i])
    }
    return res

   
}

function removeNthElement(arr, n) {
    res =[]
    for(var i=0;i<arr.length;i++){
        if(n!==i){
            res.push(arr[i])
        }
    }
    return res
    
}

module.exports = {
    getEven,
    multiplyByN,
    removeNthElement
}