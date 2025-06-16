import { useLocation, NavLink } from 'react-router-dom';

/* Top navigation menu with active link highlighting and route awareness:
 * Left-side navigation bar - Home, Product and Help
 * Right-side navigation bar - User Name
 * <NavLink> for highlighting active nav tab: Home, Product or Help
*/
function Menu() {
  const location = useLocation();
  // Detect if currently viewing a product detail page
  const isProductDetail = /^\/product\/[^/]+$/.test(location.pathname);

  return (
    <div className="top-nav">
      <div className="left-side">
        {/* Ensures the "Home" link is only active on the exact route */}
        <NavLink to="/"
        end
        className={({ isActive }) => isActive ? "menu-link active" : "menu-link"}>
          Home
        </NavLink>
        {/* Render the "Product" as non-link if it's on a product detail page */}
        {isProductDetail ? (
          <a className="menu-link active">Product</a>
        ) : (
          <NavLink to="/product"
          className={({ isActive }) => isActive ? "menu-link active" : "menu-link"}>
            Product
          </NavLink>
        )}
        {/* Help link */}
        <NavLink to="/help"
        className={({ isActive }) => isActive ? "menu-link active" : "menu-link"}>
          Help
        </NavLink>
      </div>
      <a className="right-side"><span>User Name</span></a>
    </div>
  )
}

export default Menu;