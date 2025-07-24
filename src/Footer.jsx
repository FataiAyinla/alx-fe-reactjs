function Footer() {
  return (
    <footer style={{
      marginTop: '40px',
      padding: '10px',
      textAlign: 'center',
      backgroundColor: '#eee'
    }}>
      <p>&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
