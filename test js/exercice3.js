function majuscules(ch){
    let ch1 = "";
    ch1 = ch[0].toUpperCase() + '.' + ch[(ch.indexOf(' '))+ 1].toUpperCase();
    console.log(ch1);
}
majuscules('sam harris')
majuscules('patrick feeney')