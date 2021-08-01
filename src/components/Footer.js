

const Footer= () => {

    return(
        <div className="footer__container">
            <table className="footer">
  <thead>
    <tr>
      <th>Open Source</th>
      <th className="padded">Stay in Touch</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>NETFLIX OPEN SOURCE</td>
      <td className="padded">OUR TECH BLOG</td>
      
    </tr>
    <tr>
      <td>GET IN ON THE FUN: JOIN US!</td>
      <td className="padded">@NetflixOSS</td>
     
    </tr>
    <tr>
      <td></td>
      <td className="padded">SLIDESHARE</td>
    </tr>
    <tr>
      <td></td>
      <td className="padded">NETFLIX MEETUP</td>
    </tr>
  </tbody>
</table>
<img className="footer__logo" alt="Netflix logo" src={process.env.PUBLIC_URL+"/assets/Netflix_Logo_CMYK.png"} />
        </div>
    )
}

export default Footer;