const rootEle = document.getElementById("root");
const whole_div = document.getElementById("wholeDiv")
const fetchButton = document.createElement("button");
fetchButton.textContent = "Fetch Users";
rootEle.append(fetchButton)
let flag = false;
fetchButton.addEventListener("click", function(){
    if(!flag){
        fetch('https://reqres.in/api/users')
        .then(res => res.json())
        .then(res=>{
            console.log(res.data);
            printData(res.data);
            flag=true;
        })
        .catch(error=>{
            console.log("error");
        });
    }
});


const printData = (userData)=>{
    alert("clicked")
    userData.forEach(function(user){
        let userCard = document.createElement("div");
        userCard.classList.add("user-card");
        
        let image = document.createElement("img");
        image.src = user.avatar
        
        let userDetails = document.createElement("div");
        userDetails.classList.add("user_details");

        let fullName = document.createElement("h3");
        fullName.textContent = user.first_name + " " + user.last_name

        let userEmail = document.createElement("p");
        userEmail.textContent = user.email

        let userID = document.createElement("p");
        userID.textContent = user.id

        userDetails.append(fullName, userEmail, userID)
        userCard.append(image, userDetails)
        whole_div.append(userCard)
    })
}
