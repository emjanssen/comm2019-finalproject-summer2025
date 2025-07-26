if (typeof pageTitle !== 'undefined') {
  document.title = `Placeholder - ${pageTitle}`;
} else {
  document.title = `Placeholder - Untitled`;
}

const headerGlobal = document.querySelector('#header-global');
if (headerGlobal) {
  headerGlobal.innerHTML = `
    <div id="header-global-grid">

      <div id="header-global-grid-col-one">
        <div id="header-logo">
          <img id="img-logo" src="css/img/headerLogo.png" alt="Page logo.">
        </div>
      </div>

      <div id="header-global-grid-col-two">
        <div id="header-title">
          <h1>Placeholder - ${pageTitle || 'Untitled'}</h1>
        </div>
      </div>

      <div id="header-global-grid-col-three">
        <nav id="header-nav">
          <ul id="header-navigation-ul">
            <li><a href="index.html">Home</a></li>
            <li><a href="biography.html">Biography</a></li>
            <li><a href="tutorial.html">Tutorial</a></li>
            <li><a href="animations.html">Animations</a></li>
          </ul>
        </nav>
      </div>

    </div>
  `;
}

const footerGlobal = document.querySelector('#footer-global');
if (footerGlobal) {
  footerGlobal.innerHTML = `
      <div id="footer-global-grid">
            <div id="footer-global-grid-col-one">
    <p>&copy; 2025 Elizabeth Janssen. All rights reserved.</p>
          </div>
    </div>
  `;
}