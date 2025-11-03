export default function Footer() {
  return (
    <footer className="site-footer">
        <div className="footer-content">
            <span>© 2025 Karina Solis</span>

            <div className="footer-links">
                {/* Social links */}
                <div className="footer-socials">
                    <a href="https://www.twitch.tv/karinathecorgi" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitch"></i>
                    </a>
                    <a href="https://twitter.com/karinathecorgi" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com/karinathecorgi" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                    </a>
                </div>

                {/* Professional links */}
                <div className="footer-professional">
                    <a href="https://www.linkedin.com/in/karinasolis55" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://www.youtube.com/@karinathecorgi" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-youtube"></i>
                    </a>
                    <a href="mailto:karinafsolis55@gmail.com" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-envelope"></i>
                    </a>
                </div>
            </div>
        </div>
    </footer>
  );
}