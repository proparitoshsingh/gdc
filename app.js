var a=0;
const pre_btn=document.getElementsByClassName("prev");
const next_btn=document.getElementsByClassName("nex");
function prev_check(){
    if (a==0){
        pre_btn.disabled=true;
    }else{
        pre_btn.disabled=false;
    }
}
function next_check(){
    if (a==9){
        next_btn.disabled=true;
    }else{
        next_btn.disabled=false;
    }
}


function request(i){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(function (responce){
        return responce.json()
    })
    .then((responce) =>{
        console.log(responce[i]);
        var res =document.getElementById("result");
        res.innerHTML=" id - " +responce[i].id +"<br />" +"name - " +responce[i].name +"<br />" +"username - " +responce[i].username +"<br />" + "email - " +responce[i].email +"<br />" +
        "address - 1.Street - " +responce[i].address.street +"<br />" +"   2.Suite - " +responce[i].address.suite +"<br />" + "    3.City - " +responce[i].address.city +"<br />" +
        "  4. Zipcode - " +responce[i].address.zipcode +"<br />" + "   5.Geo - *lat - " +responce[i].address.geo.lat +"<br />" + "     *lng - " +responce[i].address.geo.lng +"<br />" +
        "phone - " +responce[i].phone +"<br />" + "website - " +responce[i].website +"<br />" + "company - 1. Name - " +responce[i].company.name +"<br />"+
        "  2. Catch Phrase - " +responce[i].company.catchPhrase +"<br />"+"  3. bs - " +responce[i].company.bs +"<br />";
    })
}
request(a)

function previous(){
    prev_check();
    if(pre_btn.disabled==false){
        a=a-1;
        request(a)
    }else{
        console.log("its the start of the array")
    }
    next_check();
}

function next(){
    next_check();
    if(next_btn.disabled==false){
        a=a+1;
        request(a)
    }else{
        console.log("Its the end of the array")
    }
    prev_check()
}

function shuffle(){
    var ran=Math.floor((Math.random()*9)+1);
    a=ran;
    request(ran)
    prev_check()
}

