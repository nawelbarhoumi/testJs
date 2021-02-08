function sum(array){
    let arr = [];
    arr = array.filter((x) => x>0).reduce((x,total)=> x+total)
    console.log(arr);
}
sum([1, -4,7,12]);
