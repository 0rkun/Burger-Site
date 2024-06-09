import "../styles/Contact.css";
import Hamburger from "../assets/hamburger.jpg";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${Hamburger})` }}
      ></div>
      <div className="rightSide">
        <h1>Bizimle İletişime Geçin</h1>
        <form>
          <label>Ad Soyad</label>
          <input
            type="text"
            placeholder="Lütfen adınızı soyadınızı giriniz..."
          />

          <label>Emailiniz</label>
          <input type="email" placeholder="Lütfen emailinizi giriniz..." />

          <label>Mesajınız</label>
          <textarea
            placeholder="Lütfen mesajınızı giriniz..."
            rows="6"
          ></textarea>
          <button>Gönder</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
