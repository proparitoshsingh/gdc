var a=0;
const btn=document.getElementsByClassName("previous");
function btn_check(){
    if (a==0){
        btn.disabled=true;
    }else{
        btn.disabled=false;
    }
}

function request(i){
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then(function (responce){
        return responce.json()
    })
    .then((responce) =>{
        console.log(responce[i]);
        var res =document.getElementById("result");
        var img_chng=document.getElementById("main_img");
        img_chng.src=responce[i].url;   
        res.innerHTML= "Title - "+ responce[i].title + "<br />" ;
    })
}
request(a)

function previous(){
    btn_check()
    if(btn.disabled==false){
        a=a-1;
        request(a)
    }else{
        console.log("its the first element of the array")
    }
}

function next(){
    a=a+1;
    request(a)
    btn_check()
}

function shuffle(){
    var ran=Math.floor((Math.random()*1000)+1);
    a=ran;
    request(ran)
    btn_check()
}


