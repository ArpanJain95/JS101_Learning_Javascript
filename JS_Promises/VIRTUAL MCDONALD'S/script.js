const foodItems = [
    {
        foodItem: "Big Mac",
        foodImg: "https://raw.githubusercontent.com/ArpanJain95/mcdonalds_asset/main/Big%20Mac.png",
        price: "$5",
        timeTaken: 2000
    },
    {
        foodItem: "McNuggets",
        foodImg: "https://raw.githubusercontent.com/ArpanJain95/mcdonalds_asset/main/McNuggets.png",
        price: "$3",
        timeTaken: 4000
    },
    {
        foodItem: "French Fries",
        foodImg: "https://raw.githubusercontent.com/ArpanJain95/mcdonalds_asset/main/French%20Fries.png",
        price: "$1.5",
        timeTaken: 1000
    },
    {
        foodItem: "Sundae",
        foodImg: "https://raw.githubusercontent.com/ArpanJain95/mcdonalds_asset/main/Sundae.png",
        price: "$3",
        timeTaken: 5000
    },
    {
        foodItem: "McFloat",
        foodImg: "https://raw.githubusercontent.com/ArpanJain95/mcdonalds_asset/main/McFloat.png",
        price: "$2",
        timeTaken: 4000
    },
    {
        foodItem: "Latte",
        foodImg: "https://raw.githubusercontent.com/ArpanJain95/mcdonalds_asset/main/Latte.png",
        price: "$6",
        timeTaken: 7000
    },
    {
        foodItem: "Paneer Wrap",
        foodImg: "https://raw.githubusercontent.com/ArpanJain95/mcdonalds_asset/main/Paneer%20Wrap.png",
        price: "$6",
        timeTaken: 10000
    },
    {
        foodItem: "Oreo Shake",
        foodImg: "https://raw.githubusercontent.com/ArpanJain95/mcdonalds_asset/main/Oreo%20Shake.png",
        price: "$5",
        timeTaken: 4000
    }
];

const foodList = document.getElementById('foodList');

foodItems.forEach(item => {
    const li = document.createElement('li');
    const label = document.createElement('label');
    const checkbox = document.createElement('input');
    const img = document.createElement('img');
    const price = document.createElement('p');

    checkbox.type = 'checkbox';
    checkbox.name = 'foodItem';
    checkbox.value = item.foodItem;
    img.src = item.foodImg;
    price.textContent = `Price: ${item.price}`;
    li.className = "foodObject";

    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(item.foodItem));
    li.appendChild(img);
    li.appendChild(label);
    li.appendChild(price);
    foodList.appendChild(li);
});

document.getElementById('orderBtn').addEventListener('click', () => {
    const selectedItems = Array.from(document.querySelectorAll('input[name="foodItem"]:checked'))
        .map(checkbox => checkbox.value);

    selectedItems.forEach(itemName => {
        const selectedItem = foodItems.find(item => item.foodItem === itemName);
        if (selectedItem) {
            new Promise((resolve) => {
                setTimeout(() => {
                    resolve(selectedItem);
                }, selectedItem.timeTaken);
            })
            .then(selectedItem => {
                displayOrder(selectedItem);
            });
        }
    });
});

function displayOrder(selectedItem) {
    const orderDetails = document.getElementById('orderDetails');
    orderDetails.innerHTML = '';

    const img = document.createElement('img');
    img.src = selectedItem.foodImg;

    const orderId = document.createElement('p');
    orderId.textContent = `Order ID: ${generateRandomOrderId()}`;

    const itemName = document.createElement("p");
    itemName.textContent = `Item: ${selectedItem.foodItem}`;

    const note = document.createElement("p");
    note.textContent = "Your order is complete"

    orderDetails.appendChild(orderId);
    orderDetails.appendChild(img);
    orderDetails.appendChild(itemName);
    orderDetails.appendChild(note);
}

function generateRandomOrderId() {
    return Math.floor(100 + Math.random() * 1000);
}