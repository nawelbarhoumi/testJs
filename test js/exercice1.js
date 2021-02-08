function somme(array){
    let s = 0;
    let arr = [];
    arr = array.filter((x) => x>0).sort((a,b) =>a-b)
    s = arr[0] + arr[1];
    console.log(s);
}
somme([1,-2,8,5,9]);
  
    
  