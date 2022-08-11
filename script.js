const data = [
    {
        username: "praveenkumar12@gmail.com",
        password: "1234"
    },
    {
        username: "ravikumarshashtri@gmail.com",
        password: "2389"
    },
    {
        username: "divyasharma345@gmail.com",
        password: "0934"
    },
    {
        username: "roshnijoshi456@gmail.com",
        password: "3409"
    }

]

const error = document.getElementById("error");
const message = document.getElementById("msg");
const form = document.getElementById("form")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const userName = event.target.sname.value;
    const password = event.target.spassword.value;

    const isUserExists = data.some((user) => {
        return user.username === userName && user.password === password;
    })

    if (isUserExists) {
        console.log("User Login")
        return; //void return
    }
    
    console.log("Un-Authentcated User!")

})

/**
 * 1. input username and password
 * 2. get inputed data
 * 3. when form submit
 * 4. when submit event call
 * 5. make an fake array of objects with username and password
 * 6. check username and password when user input the data in required fields
 * 7. if user credentials are correct then go
 */