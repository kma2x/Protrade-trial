var arr_volumeBuy=[];
var arr_volumeSell=[];
var i=0;
var j=0;
var volumeBuy = document.getElementsByClassName("volume-buy")
for (key of volumeBuy) {
    arr_volumeBuy[i]=parseInt(key.innerText);
    i++;
}

var volumeSell = document.getElementsByClassName("volume-sell")
for (key of volumeSell) {
    arr_volumeSell[j]=parseInt(key.innerText);
    j++;
}
