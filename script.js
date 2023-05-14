function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}import React from 'https://esm.sh/react@18.2.0';
import ReactDOM from 'https://esm.sh/react-dom@18.2.0';

const API = 'https://type.fit/api/quotes';

class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",

    {
      quote: [{
        text: 'Lorem Ipsum de fou malade',
        author: 'No lo sé' }],

      index: 0 });_defineProperty(this, "getRandomIndex",












    () => {
      const { quote } = this.state;
      const randomColor = '#' + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
      console.log(randomColor);
      if (quote.length > 0) {
        const index = Math.floor(Math.random() * quote.length);
        this.setState({
          index });

      }

      const page = document.querySelector('body');
      const quoteContent = document.getElementById('text');
      const author = document.getElementById('author');
      const icon = document.querySelector('.fa-quote-left');
      const tweetBtn = document.getElementById('tweet-quote');
      const quoteBtn = document.getElementById('new-quote');

      page.style.backgroundColor = randomColor;
      quoteContent.style.color = randomColor;
      author.style.color = randomColor;
      icon.style.color = randomColor;
      tweetBtn.style.backgroundColor = randomColor;
      quoteBtn.style.backgroundColor = randomColor;
    });}componentDidMount() {//call API and update state
    fetch(API).then(res => res.json()).then(res => {this.setState({ quote: res }, this.getRandomIndex);});}

  render() {
    const { quote, index } = this.state;
    const quotes = quote[index];

    const tweetURL = `https://twitter.com/intent/tweet?text=${quotes.text}-${quotes.author}`;

    return /*#__PURE__*/(
      React.createElement("div", { className: "wrapper d-flex align-items-center justify-content-center" }, /*#__PURE__*/
      React.createElement("div", { id: "quote-box", className: "col-xs-6 box p-5 rounded" },

      quotes && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/

      React.createElement("h5", null, /*#__PURE__*/React.createElement("cite", { id: "text" }, /*#__PURE__*/React.createElement("i", { className: "fas fa-quote-left fa-2x" }), " ", quotes.text)), /*#__PURE__*/
      React.createElement("br", null), /*#__PURE__*/
      React.createElement("p", { id: "author" }, "- ", quotes.author || "Anonyme")), /*#__PURE__*/


      React.createElement("div", { className: "d-flex justify-content-between" }, /*#__PURE__*/
      React.createElement("a", { href: tweetURL, className: "btn btn-primary", id: "tweet-quote" }, /*#__PURE__*/React.createElement("i", { className: "fab fa-twitter" }), " Tweet"), /*#__PURE__*/
      React.createElement("button", { id: "new-quote", className: "btn btn-primary", onClick: this.getRandomIndex }, /*#__PURE__*/React.createElement("i", { className: "fas fa-random" }), " New quote")))));



  }}



ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));