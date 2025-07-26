const headerGlobal = document.querySelector('#header-global');
headerGlobal.innerHTML = `
  <div id="header-logo">
    <img id="img-logo" src="" alt="Page logo.">
  </div>
  <div id="header-title">
    <h1>${pageTitle}</h1>
  </div>
  <nav id="header-nav">
    <ul id="header-navigation-ul">
      <li><a href="index.html">Home</a></li>
      <li><a href="biography.html">Biography</a></li>
      <li><a href="tutorial.html">Tutorial</a></li>
      <li><a href="animations.html">Animations</a></li>
    </ul>
  </nav>
`;

const footerGlobal = document.querySelector('#footer-global');
footerGlobal.innerHTML = `
  <p>&copy; 2025 Elizabeth Janssen. All rights reserved.</p>
`;