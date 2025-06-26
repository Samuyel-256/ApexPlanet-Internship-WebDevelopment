const products = [
  {
    name: "Smartphone",
    price: 24999,
    rating: 4.5,
    category: "electronics",
    image: "https://res.cloudinary.com/ddxtfqmt4/image/upload/v1750915129/sm_ph_ipznap.jpg"
  },
  {
    name: "Book: AI for Beginners",
    price: 499,
    rating: 4.8,
    category: "books",
    image: "https://res.cloudinary.com/ddxtfqmt4/image/upload/v1750915055/ai_book_ztksts.jpg"
  },
  {
    name: "Bluetooth Headphones",
    price: 1799,
    rating: 4.2,
    category: "electronics",
    image: "https://res.cloudinary.com/ddxtfqmt4/image/upload/v1750915194/bt_hp_qm3rqh.webp"
  },
  {
    name: "T-Shirt - Tech Vibes",
    price: 799,
    rating: 4.3,
    category: "fashion",
    image: "https://res.cloudinary.com/ddxtfqmt4/image/upload/v1750915055/Black-T-shirt_xcn53l.webp"
  },
  {
    name: "Notebook",
    price: 299,
    rating: 4.0,
    category: "books",
    image: "https://res.cloudinary.com/ddxtfqmt4/image/upload/v1750915135/notebook_elvv20.jpg"
  }
];

const grid = document.getElementById("productGrid");
const categoryFilter = document.getElementById("categoryFilter");
const sortOption = document.getElementById("sortOption");

function displayProducts(productList) {
  grid.innerHTML = "";
  productList.forEach(p => {
    grid.innerHTML += `
      <div class="product-card">
        <img src="${p.image}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>Price: ₹${p.price}</p>
        <p>Rating: ⭐ ${p.rating}</p>
        <p>Category: ${capitalize(p.category)}</p>
      </div>`;
  });
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function filterAndSort() {
  let filtered = products;

  const category = categoryFilter.value;
  if (category !== "all") {
    filtered = filtered.filter(p => p.category === category);
  }

  const sort = sortOption.value;
  if (sort === "price-asc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "price-desc") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sort === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  displayProducts(filtered);
}

// Initial Load
displayProducts(products);

// Event Listeners
categoryFilter.addEventListener("change", filterAndSort);
sortOption.addEventListener("change", filterAndSort);
