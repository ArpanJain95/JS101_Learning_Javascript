const userName = document.getElementById("name");
        const userAge = document.getElementById("age");
        const form = document.getElementById("userForm");
        const displayData = document.getElementById("tableDisplay");
        form.addEventListener("submit", function(event){
            event.preventDefault();
            const userData = JSON.parse(localStorage.getItem("userData")) || [];
            const newUser = {
                name: userName.value,
                age: userAge.value
            };
            if(userName.value !== "" && userAge.value !== ""){
                userData.push(newUser);
                userName.value = ""
                userAge.value = ""
            }else{
                alert("Enter Name & Age")
            }
            localStorage.setItem("userData", JSON.stringify(userData));
        });

        const getData = ()=>{
            const userData = JSON.parse(localStorage.getItem("userData"));
            console.log(userData)
            displayData.innerHTML="";
            if(userData){
                userData.forEach(printData);
            }
        }
        
        const printData = (userData)=>{
            let newRow = document.createElement("tr")

            let nameCell = document.createElement("td")
            nameCell.textContent = userData.name

            let ageCell = document.createElement("td")
            ageCell.textContent = userData.age

            newRow.appendChild(nameCell)
            newRow.appendChild(ageCell)
            displayData.append(newRow)
        }