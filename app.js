const text = "welcome to the user management system, how can I help you today!";
const cardsDisplay = document.getElementById("cardsDisplay");

let firstName = document.getElementById("firstName");
let firstNameTest = RegExp("^[A-Za-z0-9]+$");
let firstNameVerify = false;
let loginForm = document.getElementById("loginForm");
const submitButton = document.getElementById("submitButton");
const loginButton = document.getElementById("loginButton");
const loginModal = document.getElementById("loginModal");

let dynamicDisplay = (id, text, interval) => {
    let dynamicText = document.getElementById("dynamicText");
    let counter = 0;
    let letterDisplay = () => {
        if (counter < text.length) {
            dynamicText.innerHTML += text.charAt(counter);
            setTimeout(letterDisplay, interval);
            // call letterDisplay function every 0.2 seconds, it's a recursive way to display
            // the text and set the restriction of text length;
            counter++;
        }
    }
    letterDisplay();
}

dynamicDisplay("dynamicText", text, 50)
// set the speed to 0.2 seconds


let userArray = [
    {
        firstName: "Andy",
        lastName: "Bernard",
        email: "andy@hotmail.com",
        username: 1,
        roleIndicator: true,
        visualIdentifier: "/img/Andy Bernard.jpg"
    },
    {
        firstName: "Steve",
        lastName: "Carel",
        email: "carell@hotmail.com",
        username: 2,
        roleIndicator: true,
        visualIdentifier: "/img/Steve Carel.jpg"
    },
    {
        firstName: "Jenna",
        lastName: "Fischer",
        email: "jenna@hotmail.com",
        username: 3,
        roleIndicator: true,
        visualIdentifier: "/img/Jenna Fischer.jpg"
    },
    {
        firstName: "John",
        lastName: "Krasinski",
        email: "John@hotmail.com",
        username: 4,
        roleIndicator: false,
        visualIdentifier: "/img/John Krasinski.jpg"
    },
    {
        firstName: "Rainn",
        lastName: "Bert",
        email: "Rainn@hotmail.com",
        username: 5,
        roleIndicator: false,
        visualIdentifier: "/img/Rainn.jpg"
    },
    {
        firstName: "Angela",
        lastName: "Kinsey",
        email: "Angela@hotmail.com",
        username: 6,
        roleIndicator: false,
        visualIdentifier: "/img/Angela Kinsey.jpg"
    },
    {
        firstName: "Kate",
        lastName: "Flannery",
        email: "Kate@hotmail.com",
        username: 7,
        roleIndicator: false,
        visualIdentifier: "/img/Kate Flannery.jpg"
    },
    {
        firstName: "Leslie",
        lastName: "Baker",
        email: "Leslie@hotmail.com",
        username: 8,
        roleIndicator: false,
        visualIdentifier: "/img/Leslie Baker.jpg"
    },
    {
        firstName: "Brian",
        lastName: "Baumgartner",
        email: "brain@hotmail.com",
        username: 9,
        roleIndicator: false,
        visualIdentifier: "/img/Brian Baumgartner.jpg"
    },
    {
        firstName: "Phyllis",
        lastName: "Smith",
        email: "Phyllis@hotmail.com",
        username: 10,
        roleIndicator: false,
        visualIdentifier: "/img/Phyllis Smith.jpg"
    },
    {
        firstName: "Creed",
        lastName: "Bratton",
        email: "creed@hotmail.com",
        username: 11,
        roleIndicator: false,
        visualIdentifier: "/img/Creed Bratton.jpg"
    },
    {
        firstName: "Oscar",
        lastName: "Martinez",
        email: "Oscar@hotmail.com",
        username: 12,
        roleIndicator: false,
        visualIdentifier: "/img/Oscar Martinez.jpg"
    },
    {
        firstName: "Ryan",
        lastName: "Howard",
        email: "Ryan@hotmail.com",
        username: 13,
        roleIndicator: false,
        visualIdentifier: "/img/Ryan Howard.jpg"
    },
    {
        firstName: "Mindy",
        lastName: "Kaling",
        email: "Kaling@hotmail.com",
        username: 14,
        roleIndicator: false,
        visualIdentifier: "/img/Mindy Kaling.jpg"
    },
    {
        firstName: "Paul",
        lastName: "Lieberstein",
        email: "Lieberstein@hotmail.com",
        username: 15,
        roleIndicator: false,
        visualIdentifier: "/img/Paul Lieberstein.jpg"
    },
];
// create an array to store all the objects that we want to show


let displayAdmin = () => {
    for (let i = 0; i < 3; i++) {
        const card = `
            <div class="col-2 mt-3">
                <div class="card d-none" id = "card${i}">
                    <div class="card-header">
                        Admin${i + 1}
                    </div>
                    <img src="${userArray[i].visualIdentifier}" alt="" class="card-img-top">
                    <div class="card-body">
                        First Name: ${userArray[i].firstName}<br>
                        Last Name: ${userArray[i].lastName}<br>
                        Email Address: ${userArray[i].email}<br>
                    </div>
                </div>
            </div>`;
        cardsDisplay.innerHTML += card;
    }
}
// create a function to iterate the array and show all the admins.
displayAdmin();
//call the function created earlier


loginButton.addEventListener("click", () => {
    loginButton.classList.add("d-none");
    // logoutButton.classList.remove("d-none");
    loginForm.classList.remove("d-none");
})

// logoutButton.addEventListener("click", () => {
//     logoutButton.classList.add("d-none");
//     document.getElementById("cardsDisplay").classList.add("d-none");
//     loginButton.classList.remove("d-none");
// })


let removeCard = (cardNumber) => {
    userArray.splice(cardNumber);
    console.log("hello");
    console.log(userArray);
}

const nameToIndexMapping = {
    user1: 3,
    user2: 4,
    user3: 5,
    user4: 6,
    user5: 7,
    user6: 8,
    user7: 9,
    user8: 10,
    user9: 11,
    user10: 12,
    user11: 13,
    user12: 14,
    user13:15

    // Add more mappings as needed
};

function displayCardForUser(userInput) {
    // Check if userInput exists in the mapping
    const index = nameToIndexMapping[userInput];
    if (index !== undefined) {
        // Display the card for this index
        displayCard(index);
    } else if (userInput.startsWith('admin')) {
        // If admin, display all user cards
        displayAllUserCards();
    }
}

function displayCard(index) {
    const user = userArray[index];
    const cardHtml = `
        <div class="col-2 mt-3">
            <div class="card" id="card${index}">
                <div class="card-header">
                    ${user.firstName}
                </div>
                <img src="${user.visualIdentifier}" alt="" class="card-img-top">
                <div class="card-body">
                    First Name: ${user.firstName}<br>
                    Last Name: ${user.lastName}<br>
                    Email Address: ${user.email}<br>
                </div>
            </div>
        </div>`;
    cardsDisplay.innerHTML += cardHtml;
}

loginForm.addEventListener("click", function (event) {
    event.preventDefault();
    if (firstNameTest.test(firstName.value)) {
        firstName.classList.remove("is-invalid");
        firstNameVerify = true;
    } else {
        firstName.classList.add("is-invalid");
    }

    if (firstNameVerify) {
        document.getElementById("loginForm").setAttribute("class", "was-validated");
        submitButton.setAttribute("data-bs-dismiss", "modal");
        let myModal = bootstrap.Modal.getInstance(loginModal);
        myModal.hide();
        //
        if (firstName.value === "user1") {
            displayCardForUser(firstName.value);
        }
        else if (firstName.value === "user2") {
            displayCardForUser(firstName.value);
        } else if (firstName.value === "user3") {
            displayCardForUser(firstName.value);
        } else if (firstName.value === "user4") {
            displayCardForUser(firstName.value);
        } else if (firstName.value === "user5") {
            displayCardForUser(firstName.value);
        } else if (firstName.value === "user6") {
            displayCardForUser(firstName.value);
        } else if (firstName.value === "user7") {
            displayCardForUser(firstName.value);
        } else if (firstName.value === "user8") {
            displayCardForUser(firstName.value);
        } else if (firstName.value === "user9") {
            displayCardForUser(firstName.value);
        } else if (firstName.value === "user10") {
            displayCardForUser(firstName.value);
        } else if (firstName.value === "user11") {
            displayCardForUser(firstName.value);
        } else if (firstName.value === "user12") {
            displayCardForUser(firstName.value);
        } else if (firstName.value === "user13") {
            displayCardForUser(firstName.value);
        } else if (firstName.value === "admin1" || firstName.value === "admin2" || firstName.value === "admin3") {
            for (let i = 3; i < userArray.length; i++) {
                const card = `
            <div class="col-2 mt-3">
                <div class="card d-none" id = "card${i}">
                    <div class="card-header">
                        user${i}
                    </div>
                    <img src="${userArray[i].visualIdentifier}" alt="" class="card-img-top">
                    <div class="card-body">
                        First Name: ${userArray[i].firstName}<br>
                        Last Name: ${userArray[i].lastName}<br>
                        Email Address: ${userArray[i].email}<br>
                    </div>
                    <button class="btn btn-secondary" onclick="removeCard(3)">Alter</button>
                </div>
            </div>`;
                cardsDisplay.innerHTML += card;
            }
        }
    }
})

loginModal.addEventListener("hidden.bs.modal", event => {
    document.getElementById("cardsDisplay").classList.remove("d-none");
    for (let i = 0; i < 3; i++) {
        document.getElementById(`card${i}`).classList.remove("d-none");
    }
    if (firstName.value === "user1") {
        document.getElementById("card3").classList.remove("d-none");
    } else if (firstName.value === "user2") {
        document.getElementById("card4").classList.remove("d-none");
    } else if (firstName.value === "user3") {
        document.getElementById("card5").classList.remove("d-none");
    } else if (firstName.value === "user4") {
        document.getElementById("card6").classList.remove("d-none");
    } else if (firstName.value === "user5") {
        document.getElementById("card7").classList.remove("d-none");
    } else if (firstName.value === "user6") {
        document.getElementById("card8").classList.remove("d-none");
    } else if (firstName.value === "user7") {
        document.getElementById("card9").classList.remove("d-none");
    } else if (firstName.value === "user8") {
        document.getElementById("card10").classList.remove("d-none");
    } else if (firstName.value === "user9") {
        document.getElementById("card11").classList.remove("d-none");
    } else if (firstName.value === "user10") {
        document.getElementById("card12").classList.remove("d-none");
    } else if (firstName.value === "user11") {
        document.getElementById("card13").classList.remove("d-none");
    } else if (firstName.value === "user12") {
        document.getElementById("card14").classList.remove("d-none");
    } else if (firstName.value === "user13") {
        document.getElementById("card15").classList.remove("d-none");
    } else if (firstName.value === "admin1" || firstName.value === "admin2" || firstName.value === "admin3") {
        for (let i = 3; i < userArray.length; i++) {
            document.getElementById(`card${i}`).classList.remove("d-none");
        }
    }
})
//the event is "hidden.bs.modal", when the event happens, we remove the d-none on cardDisplay.

