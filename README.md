# CS601 - Assignment 6: Inventory App (Update)

## 📄 Project Description

**Fresh Eats** - Inventory App is a React-based web application for managing and viewing grocery store inventory. Users can view the main inventory list, click any item to see detailed product info (including images and descriptions), and access a help tab for support. The application is fully responsive, user-friendly, and features clean, organized code with meaningful comments. It is an extension and enhancement of the Assignment 5 inventory app, adding product detail pages, responsive design, a help/search tab, and improved navigation using React Router v6. The app is client-side and uses React + Vite for fast performance and scalability.

---

## 📁 Project Structure

<details>
<summary>Click to expand folder and file descriptions</summary>

```plaintext
/CS601_HW6_HernandezPena
  inventory-app/
    public/
      images/                # Contains all product detail images used in ProductDetail pages
      inventory.json         # JSON file containing all inventory product data (SKU, name, qty, price, description, image)
      store-logo.png         # Store logo image, shown in the header
      menu-icon.png          # Icon used for responsive/hamburger menu in small screens
    src/
      components/
        Footer.jsx           # Persistent footer for site info and navigation links
        Header.jsx           # Top header with store logo and main title
        HelpTab.jsx          # Help tab with a search input (shows wait cursor when searching)
        InventoryItem.jsx    # Renders individual inventory item (SKU, name, qty, price)
        InventoryList.jsx    # Fetches inventory.json and displays the clickable list of items
        Menu.jsx             # Top navigation bar; highlights active page, disables Product link on detail pages
        ProductDetail.jsx    # Detailed view of a selected product, with image, description, SKU, etc.
        ProductTab.jsx       # Placeholder for the product section when no product is selected
    App.css                  # App-wide CSS styles including layout, responsiveness, and visual effects
    App.jsx                  # Root React component: includes layout, routing, and main component mounting
    index.css                # Additional global CSS (not applicable for this project)
    main.jsx                 # Entry point: initializes the app and wraps it with BrowserRouter
  .gitignore                 # Node and Vite ignore settings
  eslint.config.js           # ESLint configuration for code linting
  index.html                 # Main HTML entry point, includes favicon and #root
  package-lock.json          # Dependency lock file
  package.json               # Project manifest and scripts
  vite.config.js             # Vite configuration
README.md                    # This documentation file
```
</details>

---

## ✨ Key Features

- 📊 Product Detail Pages: Click any item in the inventory to see a detailed page, including image, description, SKU, quantity, and price.
- 🧩 Routing & Navigation: Uses React Router v6 for page navigation (`/`, `/product/:sku`, `/help`). Menu highlights the current page.
- 🎨 Responsive Design: Layout adapts for desktop, tablet, and mobile using modern CSS Grid and media queries.
- 🆘 Help Tab: Includes a search bar and button. When "Search" is clicked, the UI simulates a loading state with a wait cursor.
- 📍 Active Menu Highlighting: Navigation bar visually highlights the active section/page.
- 🔓 Accessibility: Uses semantic HTML, alt tags for images, and good color contrast.
- 📱 Mobile-optimized layout with conditional hiding, scaling, and icon fallback.

---

## 🛠️ Technologies Used

- [React 19](https://react.dev/) with Hooks
- [React Router v6](https://react.dev/learn/creating-a-react-app#react-router-v6)
- [Vite](https://vitejs.dev/) for development & build
- [JavaScript (JSX)](https://reactjs.org/docs/introducing-jsx.html)
- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [ESLint](https://eslint.org/) for linting
- JSON (for product data)
- GitHub for version control and hosting

---

## 💾 Inventory Data

Located in `public/inventory.json` and includes:

- `sku`: Unique identifier
- `name`: Product name
- `qty`: Inventory quantity
- `price`: Unit price
- `description`: Brief product description
- `image`: Path to the product image

**Example entry:**

```json
{
  "sku": "001",
  "name": "Apples",
  "qty": 30,
  "price": 1.75,
  "description": "Crisp and juicy fruit, perfect for snacks or dessert.",
  "image": "/images/apples.png"
}
```

---

## 🌐 GitHub Repository
This project's live repository may be found on GitHub at:
   ```
   https://github.com/joelhdzp/CS601_HW6_HernandezPena
   ```

---

## 🚀 How to Run Locally

Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.

### 1. Clone the repository

```bash
git clone https://github.com/joelhdzp/CS601_HW6_HernandezPena.git
cd CS601_HW6_HernandezPena/inventory-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run development server

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

---

## 💫 Highlights

### App.jsx

- Main layout, includes header, menu, and footer.
- Uses `<Routes>` to swap between:
  - `InventoryList` (`/`)
  - `ProductTab` (`/product`)
  - `ProductDetail` (`/product/:sku`)
  - `HelpTab` (`/help`)
- All page transitions are handled by React Router.

### InventoryList.jsx

- Fetches all inventory data from `/public/inventory.json`.
- Maps through items and wraps each in a `<Link>` so the whole item is clickable.
- Key: Passes SKU, name, qty, and price as props to `InventoryItem`.

### ProductDetail.jsx

- Uses React Router’s `useParams()` to extract the SKU from the URL.
- Fetches product data and filters for the selected item.
- Displays product image, description, and all info.
- Includes a Home button to navigate back.

### Menu.jsx

- Uses `<NavLink>` for active styling and highlights.
- Renders Product as a non-link on product detail pages to prevent unnecessary navigation.
- Responsive: adapts to small screens, shows hamburger menu icon.

### HelpTab.jsx

- Renders an input and search button.
- On search, simulates a loading state for 1 second with a wait cursor.

### App.css

- Responsive grid layout for inventory.
- Detailed styles for header, menu, items, footer, product detail.
- Pseudo-classes and media queries ensure good usability and aesthetics on any device.
- Menu and items show visual cues on hover or when active.

---

## 👨‍💻 Author
**Joel Hernandez Pena**  
MET CS601 – Web Application Development  
Boston University