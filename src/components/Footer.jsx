export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© {new Date().getFullYear()} Book A Taxi. All rights reserved.</p>
        <div className="footer-links">
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/contacts">Contact</a>
        </div>
      </div>
    </footer>
  );
}
