# Food Product Explorer 🍽️

A React-based web application that allows users to search, filter, sort, and explore food products using the OpenFoodFacts public API.

---

## 🚀 Features

- Browse food products with images and nutrition grades
- Search products by **name**
- Search products by **barcode**
- Filter products by **category**
- Sort products by:
  - Name (A–Z / Z–A)
  - Nutrition grade
- Product detail page with:
  - Ingredients
  - Nutritional values
- Responsive design using **Bootstrap**
- Load more pagination
- Professional UI with hover effects

---

## 🛠 Tech Stack

- **Frontend:** ReactJS
- **Styling:** Bootstrap + Custom CSS
- **Routing:** React Router DOM
- **API:** OpenFoodFacts API

---

## 🔗 API Endpoints Used

- Search products by name  
  `https://world.openfoodfacts.org/cgi/search.pl?search_terms={name}&json=true`

- Get products by barcode  
  `https://world.openfoodfacts.org/api/v0/product/{barcode}.json`

- Get products by category  
  `https://world.openfoodfacts.org/category/{category}.json`

---

## 📦 Installation & Setup

```bash
git clone <your-github-repo-url>
cd food-product-explorer
npm install
npm start
