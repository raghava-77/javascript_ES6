var item = [10,11,7,12,14]
function max_difference(n,arr){
    var max = 0;
    var temp;
    for(i=0;i<n - 1;i++){
        temp = Math.abs(arr[i] - arr[i+1]);
        max = Math.max(max,temp);
    }
    return max;
}
console.log(item);
console.log(max_difference(3,[10,11,7,12,14]))