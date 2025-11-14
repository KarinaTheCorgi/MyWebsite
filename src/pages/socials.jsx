import { useEffect } from "react";

export default function Socials() {
  return (
    <>
      <title>Socials</title>

      <main>
        <section className="socials-page">
          <div className="section-content">
            <div className="social-details">
              <h2 className="title">Follow Me on Social Media</h2>

              {/* Social links */}
              <div className="social-buttons">
                <a
                  href="https://www.twitch.tv/karinathecorgi"
                  className="social-button twitch"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-twitch"></i> Twitch
                </a>
                <a
                  href="https://twitter.com/karinathecorgi"
                  className="social-button twitter"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-twitter"></i> Twitter
                </a>
                <a
                  href="https://www.instagram.com/karinathecorgi"
                  className="social-button instagram"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}