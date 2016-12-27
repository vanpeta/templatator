import React from 'react';

import Body from '../Body';
import guessStyle from '../../../../styles/Guess';

export default class GuessUS extends React.Component {
  constructor(props) {
    super(props)
    this.state = {fssWanted: false}
  }

  render() {
    const fssWanted = this.props.updatedFss.visible;
    let fssBanner = null;
    if (fssWanted) {
      fssBanner = (
        <tr>
          <td valing="top" style={{'textAlign': 'left'}}>
            <table width="100%" border="0" cellPadding="0" cellSpacing="0">
            <tbody>
              <tr>
                <td valing="middle" style={guessStyle.freeShipping}>
                  <a style={guessStyle.freeShippingA}_label="HEADER-Free-Shipping-Banner"  href="http://shop.guess.com/en/" >
                      <strong>FREE SHIPPING*</strong> {this.props.updatedFss.copy}
                  </a>
                </td>
              </tr>
              </tbody>
            </table>
          </td>
        </tr>
      )
    }



    return (
      <div>
        <html xmlns={guessStyle.html}>
          <body style={guessStyle.body}>
            <div className="gmailfix" style={guessStyle.gmailFix}>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            </div>
            <div className="background" style={guessStyle.background}>
              <table width="100%" border="0" cellSpacing="0" cellPadding="0">
              <tbody>
                <tr>
                  <td  valign="top" className="padd_10">
                    <table className="set_width_100" width="582" border="0" cellSpacing="0" cellPadding="0">
                    <tbody>
                      <tr>
                        <td style={{textAlign: 'left'}} valing="top">
                          <table className="preheader" width="100%" border="0" cellSpacing="0" cellPadding="0">
                          <tbody>
                            <tr>
                              <td valing="top" width='85%' style={guessStyle.preheader1}>

                                {this.props.updatedPreheader}

                              </td>
                              <td align="left" valing="top" width='15%' style={guessStyle.preheader2}>
                                <a _label="PREHEADER-Mirror-Page" style={guessStyle.preheaderLink} href="<%@ include view='MirrorPageUrl' %>" _label="Mirror Page" _type="mirrorPage" >
                                  <strong>View in Browser</strong>
                                </a>
                              </td>
                            </tr>
                          </tbody>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td valing="top" style={guessStyle.logo}>
                          <table width="100%" border="0" cellSpacing="0" cellPadding="0">
                          <tbody>
                            <tr>
                              <td valign="top">
                                <a _label="HEADER-Logo"  href="http://shop.guess.com/en/">
                                  <img src="http://content.guess.com/GuessUS/Guess/headersFooters/2016/imgs/GUESS-Email-bold.png" width="100%" style={guessStyle.logoImg}/>
                                </a>
                              </td>
                            </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      {fssBanner}
                      <tr>
                        <td valing="top" style={guessStyle.body}>



                          <Body element={this.props.element} />



                        </td>
                      </tr>
                      <tr>
                        <td valing="top" style={guessStyle.newArrivals}>
                          <table width="100%" border="0" cellPadding="0" cellSpacing="0">
                          <tbody>
                            <tr>
                              <td valing="top">
                                <a _label="FOOTER-Button-New-Arrivals"  style={guessStyle.buttonRow} href="http://shop.guess.com/en/Catalog/Browse/new-arrivals/">
                                  <strong style={{fontWeight: 'normal'}}>NEW ARRIVALS</strong>
                                </a>
                              </td>
                            </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td valing="top" style={guessStyle.saleAndStore}>
                          <table width="100%" border="0" cellPadding="0" cellSpacing="0">
                          <tbody>
                            <tr>
                              <td  valing="top">
                                <a _label="FOOTER-Button-New-Arrivals" style={guessStyle.buttonRow} href="http://shop.guess.com/en/Catalog/Browse/?f_on_sale=Y">
                                  <strong style={{fontWeight: 'normal'}}>SALE</strong>
                                </a>
                              </td>
                            </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td valing="top" style={guessStyle.saleAndStore}>
                          <table width="100%" border="0" cellPadding="0" cellSpacing="0">
                          <tbody>
                            <tr>
                              <td  valing="top">
                                <a _label="FOOTER-Button-New-Arrivals" style={guessStyle.buttonRow} href="http://shop.guess.com/en/StoreLocator/" >
                                  <strong style={{fontWeight: 'normal'}}>FIND A STORE</strong>
                                </a>
                              </td>
                            </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td valing="top" style={guessStyle.list}>
                          <table width="100%" border="0"  cellPadding="0" cellSpacing="0">
                          <tbody>
                            <tr>
                              <td  valing="top" style={guessStyle.listTd}>
                                <a _label="FOOTER-Button-Join-Guess-List" style={guessStyle.listA} href="https://shop.guess.com/en/Account/Register/?IsLoyalty=true" >
                                  <strong style={{fontWeight: 'normal'}}>JOIN GUESS LIST</strong>
                                </a>
                              </td>
                            </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td valing="top" style={{backgroundColor: '#000000'}}>
                          <table width="100%" border="0" cellPadding="0" cellSpacing="0">
                          <tbody>
                            <tr>
                              <td  valing="top">
                                <table width="100%" border="0"  cellPadding="0" cellSpacing="0">
                                <tbody>
                                  <tr>
                                    <td valing="top" style={guessStyle.hashtag}>
                                      <a _label="FOOTER-Hashtag" href="https://shop.guess.com/en/" style={guessStyle.hashtagA}>
                                        <strong style={{fontWeight: 'normal'}}>#LOVEGUESS</strong>
                                      </a>
                                    </td>
                                  </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td valing="top" style={{'textAlign': 'left'}}>
                                <table width="100%" border="0"  cellPadding="0" cellSpacing="0" style={{paddingBottom: '10px'}}>
                                <tbody>
                                  <tr>
                                    <td style={{'textAlign': 'left'}} valing="top">
                                      <a _label="FOOTER-Social-Facebook" href="https://facebook.com/GUESS">
                                        <img width="100%" alt="facebook" border="0" height="auto" src="http://content.guess.com/GuessUS/Guess/headersFooters/2016/imgs/G_facebook_15900.png" />
                                      </a>
                                    </td>
                                    <td style={{'textAlign': 'left'}} valing="top">
                                      <a _label="FOOTER-Social-Twitter" href="http://twitter.com/guess">
                                        <img width="100%" alt="twitter" border="0" height="auto" src="http://content.guess.com/GuessUS/Guess/headersFooters/2016/imgs/G_twitter_15900.png" />
                                      </a>
                                    </td>
                                    <td style={{'textAlign': 'left'}} valing="top">
                                      <a _label="FOOTER-Social-Instagram" href="http://instagram.com/guess">
                                        <img width="100%" alt="instagram" border="0" height="auto" src="http://content.guess.com/GuessUS/Guess/headersFooters/2016/imgs/G_Instagram_15900.png" />
                                      </a>
                                    </td>
                                    <td style={{'textAlign': 'left'}} valing="top">
                                      <a _label="FOOTER-Social-Pinterest" href="http://pinterest.com/guess/">
                                        <img width="100%" alt="pinterest" border="0" height="auto" src="http://content.guess.com/GuessUS/Guess/headersFooters/2016/imgs/G_Pinterest_15900.png" />
                                      </a>
                                    </td>
                                    <td style={{'textAlign': 'left'}} valing="top">
                                      <a _label="FOOTER-Social-YouTube" href="https://youtube.com/user/GUESSincTV">
                                        <img width="100%" alt="youtube" border="0" height="auto" src="http://content.guess.com/GuessUS/Guess/headersFooters/2016/imgs/G_youtube_15900.png" />
                                      </a>
                                    </td>
                                    <td style={{'textAlign': 'left'}} valing="top">
                                      <a _label="FOOTER-Social-Snapchat" href="https://www.snapchat.com/add/Guesssnaps">
                                        <img width="100%" alt="snapchat" border="0" height="auto" src="http://content.guess.com/GuessUS/Guess/headersFooters/2016/imgs/G_snapchat_15900.png" />
                                      </a>
                                    </td>
                                  </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td valing="top" style={guessStyle.privacyPolicyAppContact}>
                          <table width="100%" border="0"  cellPadding="0" cellSpacing="0">
                          <tbody>
                            <tr>
                              <td style={guessStyle.privacyPolicy}>
                                <a _label="FOOTER-Bottom-Privacy-Policy" style={guessStyle.corporateA} href="https://shop.guess.com/en/PrivacyPolicy/" >
                                  <strong style={{fontWeight: 'normal'}}>PRIVACY POLICY</strong>
                                </a>
                              </td>
                              <td style={guessStyle.app}>
                                <a _label="FOOTER-Bottom-Get-The-App" style={guessStyle.corporateA} href="https://shop.guess.com/en/guessapp/" >
                                  <strong style={{fontWeight: 'normal'}}>GET THE APP</strong>
                                </a>
                              </td>
                              <td style={guessStyle.contact}>
                                <a _label="FOOTER-Bottom-Contact-Us" style={guessStyle.corporateA} href="mailto:customercare@guess.com" >
                                  <strong style={{fontWeight: 'normal'}}>CONTACT US</strong>
                                </a>
                              </td>
                            </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td style={{'textAlign': 'left'}}valing="top">
                          <table width="100%" border="0" cellPadding="0" cellSpacing="0">
                          <tbody>
                            <tr class="legal">
                              <td valing="top" style={guessStyle.legal}>
                                <br />
                                <p>
                                  <strong>*DISCLAIMERS</strong>
                                  <br />
                                  <br />
                                  <strong>SITE EVENT:</strong> Prices shown reflect discount. Some sizes and colors may not be included. Quantities limited. Prices online and in-store may vary. Offer valid online and in participating stores. Offer excludes Marciano, Gc timepieces, GUESS Originals, previously purchased merchandise, e-gift card and gift card purchases. Other exclusions may apply. Offer not valid at Marciano, G by GUESS or GUESS Factory stores, or at any of their affiliated online stores, including GUESSkids.com. Cannot be combined with other offers or discounts. GUESS?, Inc. reserves the right to extend, modify or discontinue this offer at any time without notice.
                                </p>
                                <p>
                                  <strong>SECRET SAVINGS:</strong> For a limited time only. Discount will be applied at online checkout. Offer valid on select styles online only. Some sizes and colors may not be included. Quantities limited.  Offer valid online only. Prices online and in-store may vary. Offer not valid on previously purchased m merchandise, e-gift card or gift card purchases. Offer not valid at GUESS, Marciano, GUESS Accessories, G by GUESS or GUESS Factory stores, or any of their affiliated online stores. Cannot be combined with other offers or discounts. GUESS?, Inc. reserves the right to extend, modify or discontinue this offer at any time without notice.
                                </p>
                                <p>
                                  <strong>FREE SHIPPING: </strong> For a limited time. Offer valid ONLINE ONLY at GUESS.com. Must select "Standard 5-7 Business Days" on the shipping page to receive this offer. Offer valid online only at GUESS.com. Shipping offer applies to standard ground shipping within the contiguous United States only (excludes Hawaii, Alaska and U.S. territories). Shipping discount will be reflected on the Payment Page. Offer cannot be combined with other shopping promotions or discounts. Offer not valid on purchases of gift cards or previously purchased merchandise. Offer not valid at GUESS, Marciano, G by GUESS or GUESS Factory stores, or at any of their affiliated online stores, including GUESS.ca. Cannot be combined with other offers or discounts. GUESS?, Inc. reserves the right to extend, modify or discontinue this offer at any time without notice.
                                </p>
                                <p style={guessStyle.addUS}>
                                  To ensure you always receive emails from GUESS, including the latest styles and exclusive events, add
                                  <a style={guessStyle.addUsA} _label="LEGAL-TEXT-Add-To-Favorites" href="mailto:noreply@admarketing.guess.com" target="_self" alt="Disclaimer">
                                     noreply@admarketing.guess.com
                                  </a> to your address book.
                                </p>
                                <p style={guessStyle.unsubscribe}>
                                  <a _label="LEGAL-Unsubscribe" href="https://shop.guess.com/en/Subscription/Unsubscribe" >
                                    <strong>Unsubscribe</strong>
                                  </a>
                                </p>
                                <p style={guessStyle.address}>
                                    Attn: Customer Care |
                                  <span>1444 South Alameda Street | Los Angeles, CA 90021</span>
                                </p>
                              </td>
                            </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr><td colSpan="3" height="20">&nbsp;</td></tr>
                </tbody>
              </table>
            </div>
            <div > &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </div>
          </body>
        </html>
      </div>
    );
  };
};
