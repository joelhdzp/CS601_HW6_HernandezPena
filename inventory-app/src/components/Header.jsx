/* Persistent header with store logo and title:
 * Edits combo Header-Logo
 * Edits store logo
 */
function Header() {
  return (
    <div className="header-image">
      <img src="/store-logo.png" alt="Store Logo" className="logo"/>
      <h1>Fresh Eats</h1>
    </div>
  )
}

export default Header;