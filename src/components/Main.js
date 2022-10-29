import React from 'react'

import weixin from '../img/wx.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      />
    )

    return (
      <div
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        {/* About me*/}
        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
       >
          <h1 className="major">Обо мне</h1>

          <h2>Information</h2>
          <p></p>
          <h2>Skills</h2>
          <ul>
            <li>Language：Javascript</li>
            <li>Platform | Framework：Node.js/Vue.js</li>
            </ul>
          {close}
        </article>
      </div>
    )
  }
}

export default Main
