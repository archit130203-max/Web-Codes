// Go to Products

function goToProducts() {
    window.location.href = "products.html";
}




var search = document.getElementById("search");

if (search) {

    search.addEventListener("keyup", function() {

        var text = search.value.toLowerCase();

        var products = document.querySelectorAll(".card");

        for (var i = 0; i < products.length; i++) {

            var name = products[i]
                .getAttribute("data-name")
                .toLowerCase();

            if (name.includes(text)) {
                products[i].style.display = "block";
            }
            else {
                products[i].style.display = "none";
            }
        }

    });
}



function filterProducts(category) {

    var products = document.querySelectorAll(".card");

    for (var i = 0; i < products.length; i++) {

        var productCategory =
            products[i].getAttribute("data-category");

        if (category == "all" ||
            productCategory == category) {

            products[i].style.display = "block";

        }
        else {

            products[i].style.display = "none";

        }
    }
}




function addCart(name, price) {

    var cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    var found = false;

    for (var i = 0; i < cart.length; i++) {

        if (cart[i].name == name) {

            cart[i].quantity++;

            found = true;
        }
    }

    if (found == false) {

        cart.push({
            name: name,
            price: price,
            quantity: 1
        });

    }

    localStorage.setItem("cart", JSON.stringify(cart));

    showCart();

    showCount();

    alert("Product added to cart!");
}




function showCount() {

    var cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    var count = 0;

    for (var i = 0; i < cart.length; i++) {

        count = count + cart[i].quantity;

    }

    var cartCount =
        document.getElementById("cartCount");

    if (cartCount != null) {

        cartCount.innerHTML = count;

    }
}



function showCart() {

    var cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    var cartItems =
        document.getElementById("cartItems");

    var totalText =
        document.getElementById("total");

    if (cartItems == null) {
        return;
    }

    cartItems.innerHTML = "";

    var total = 0;

    if (cart.length == 0) {

        cartItems.innerHTML =
            "Your cart is empty.";

    }


    for (var i = 0; i < cart.length; i++) {

        var item = cart[i];

        cartItems.innerHTML +=
            "<p>" +
            item.name +
            " - ₹" +
            item.price +
            " x " +
            item.quantity +

            " <button onclick='increase(" +
            i +
            ")'>+</button>" +

            " <button onclick='decrease(" +
            i +
            ")'>-</button>" +

            " <button onclick='removeCart(" +
            i +
            ")'>Remove</button>" +

            "</p>";

        total =
            total +
            item.price * item.quantity;
    }

    if (totalText != null) {

        totalText.innerHTML =
            "Total: ₹" + total;

    }
}




function increase(index) {

    var cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    cart[index].quantity++;

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    showCart();

    showCount();
}




function decrease(index) {

    var cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    if (cart[index].quantity > 1) {

        cart[index].quantity--;

    }
    else {

        cart.splice(index, 1);

    }

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    showCart();

    showCount();
}



function removeCart(index) {

    var cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index, 1);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    showCart();

    showCount();
}




function darkMode() {

    document.body.classList.toggle("dark");

}




var form =
    document.getElementById("contactForm");

if (form) {

    form.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            var name =
                document.getElementById("name").value;

            var email =
                document.getElementById("email").value;

            var phone =
                document.getElementById("phone").value;

            var subject =
                document.getElementById("subject").value;

            var message =
                document.getElementById("message").value;


            if (name == "" ||
                email == "" ||
                phone == "" ||
                subject == "" ||
                message == "") {

                alert(
                    "Please fill all the fields."
                );

            }
            else {

                alert(
                    "Form submitted successfully!"
                );

                form.reset();

            }

        }
    );
}



function showDetails(button) {

    var card = button.parentElement;

    var name =
        card.getAttribute("data-name");

    var price =
        card.getAttribute("data-price");

    var description =
        card.getAttribute("data-description");


    document.getElementById(
        "popupName"
    ).innerHTML = name;

    document.getElementById(
        "popupPrice"
    ).innerHTML = "Price: ₹" + price;

    document.getElementById(
        "popupDescription"
    ).innerHTML = description;


    document.getElementById(
        "popup"
    ).style.display = "block";
}




function closePopup() {

    document.getElementById(
        "popup"
    ).style.display = "none";

}




function addWishlist(name) {

    var wishlist =
        JSON.parse(
            localStorage.getItem("wishlist")
        ) || [];


    if (wishlist.includes(name)) {

        var position =
            wishlist.indexOf(name);

        wishlist.splice(position, 1);

        alert("Removed from wishlist.");

    }
    else {

        wishlist.push(name);

        alert("Added to wishlist.");

    }


    localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
    );

    showWishlist();
}




function showWishlist() {

    var wishlist =
        JSON.parse(
            localStorage.getItem("wishlist")
        ) || [];

    var wishlistDiv =
        document.getElementById("wishlist");

    if (wishlistDiv == null) {
        return;
    }


    wishlistDiv.innerHTML = "";


    if (wishlist.length == 0) {

        wishlistDiv.innerHTML =
            "Wishlist is empty.";

    }


    for (var i = 0; i < wishlist.length; i++) {

        wishlistDiv.innerHTML +=
            "<p>" + wishlist[i] + "</p>";

    }
}

function nextImage() {

    imageNumber++;

    if (imageNumber >= images.length) {

        imageNumber = 0;

    }

    var image =
        document.getElementById("sliderImage");

    if (image != null) {

        image.src = images[imageNumber];

    }
}


function previousImage() {

    imageNumber--;

    if (imageNumber < 0) {

        imageNumber =
            images.length - 1;

    }

    var image =
        document.getElementById("sliderImage");

    if (image != null) {

        image.src = images[imageNumber];

    }
}



// LOAD SAVED DATA


showCount();

showCart();

showWishlist();