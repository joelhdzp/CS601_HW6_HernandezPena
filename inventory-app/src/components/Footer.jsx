/* Persistent footer displayed at the bottom of all pages:
 * Edits footer's description
 * Edits footer's navigation links
 */
function Footer() {
  return (
    <div>
      <div className="footer-title">
        {/* Footer branding and copyright */}
        <p><strong>© 2025 Fresh Eats 🍎 All Rights Reserved</strong></p>
      </div>
      <div className="bottom-nav">
        {/* Footer navigation links */}
        <a href="#about" className="nav-text">About Us</a>
        <a href="#contact" className="nav-text">Contact</a>
        <a href="#policy">Privacy Policy</a>
      </div>
    </div>
  )
}

export default Footer;
