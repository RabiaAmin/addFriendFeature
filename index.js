let isNotFriend = true;


var  iStatus = document.querySelector("h3");
var addFriend = document.querySelector(".add_btn");




addFriend.addEventListener("click",()=>{
 if(isNotFriend){
    iStatus.textContent = "Friend";
    iStatus.style.color = "cadetblue";
    isNotFriend = false;
    addFriend.innerHTML = "Remove";
    addFriend.style.backgroundColor = "#adadadad"
 }else{
    iStatus.textContent = "Strange";
    iStatus.style.color = "palevioletred";
    isNotFriend = true;
    addFriend.innerHTML = "Add friend";
    addFriend.style.backgroundColor = "palevioletred"
 }
});
