fetch('./data/aldi-au-yass.json')
    .then((response) => response.json())
    .then((json) => printProductList(json));

const output = document.getElementById("output");


function printProductList(products) {
    products.sort(function compareFunction(product1, product2) {
        if (product1 && product2) {
            if (product1.position > product2.position) {
                return 1;
            } else if (product1.position < product2.position) {
                return -1;
            }
            return 0;
        }
    });
    products.forEach(product => {
        printProduct(product);
    });
}

function printShoppingList() {
    var shoppingList = [
        "Beef Mince",
        "Bananas",
        "Instant Noodles"
    ]
    shoppingList.sort(function compareFunction(product1, product2) {
        var product1Information = getProductInformation(product1);
        var product2Information = getProductInformation(product2);
        if (product1Information && product2Information) {
            if (product1Information.position > product2Information.position) {
                return 1;
            } else if (product1Information.position < product2Information.position) {
                return -1;
            }
            return 0;
        }
    });
    shoppingList.forEach(item => {
        var itemInformation = getProductInformation(item);
        if (itemInformation) {
            printProduct(itemInformation);
        }
    });
}

function printProduct(product) {
    const node = document.createElement("li");

    var text = product.name

    //text += " ["+itemInformation.compass+"]";

    if(product.choice_recommended){
        text += " [+++]";
    }

    const textnode = document.createTextNode(text);
    node.appendChild(textnode);
    output.appendChild(node);
}

function getProductInformation(item) {
    var foundItem = false;
    products.forEach(product => {
        if (product.name === item) {
            foundItem = product;
            return foundItem;
        }
    });
    return foundItem;
}