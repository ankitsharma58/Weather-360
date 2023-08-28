function Footer(props) {
  return (
    <footer className={`footer ${props.theme ? "night" : "day"}`}>
     Ankit Sharma | s.ankitsharma0501@gmail.com | +91 - 9548769575
    </footer>
  );
}

export default Footer;
