var React = require('react');
var ReactRouter = require('react-router');
var styles = require('../styles');
var Link = ReactRouter.Link

function GuessUS () {
  return (
    <iframe style={styles.iframe}>
      <html xmlns="http://www.w3.org/1999/xhtml">
        <head>
        </head>
        <body>
          <table>
            <tbody>
              <tr>
                <td>HELLO</td>
                <td>WORLD</td>
              </tr>
            </tbody>
          </table>
        </body>
      </html>
    </iframe>
  )
}






function HeaderFooter () {

  return (
    <div><GuessUS /></div>
  )
}

module.exports = HeaderFooter;
