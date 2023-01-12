'use strict';

function Homepage() {
  return ( <div>
      <div>Welcome</div>
      <a href="/cards">Click here to Cards</a>
      <img src="/static/img/balloonicorn.jpg"></img>
    </div>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
