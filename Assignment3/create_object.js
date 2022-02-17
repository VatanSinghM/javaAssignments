function CreateObject(arr) {
    // Write your code here
    brr={};
    for(var i=0;i<arr.length;i+=2){
        brr[arr[i]]=arr[i+1]
    }
    return brr
}

module.exports = CreateObject;
