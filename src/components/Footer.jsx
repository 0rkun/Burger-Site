import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/Footer.css";

function Footer() {
  const myGithub = () => {
    const myGithubUrl = "https://github.com/0rkun";
    window.open(myGithubUrl, "_blank");
  };
  return (
    <div className="footer">
      <div className="socialMedia">
        <FacebookRoundedIcon />
        <XIcon />
        <InstagramIcon />
        <button onClick={myGithub}>
          <GitHubIcon />
        </button>
      </div>
      <p>Tüm Hakları Saklıdır | Orkun Yılmaz</p>
    </div>
  );
}

export default Footer;
