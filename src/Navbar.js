import React from "react";

function navbar (props){
    console.log(props);
return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Completed Tasks <span className="badge badge-secondary">{props.value.completed}</span></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
<a className="nav-link" href="#">Pending Tasks <span className="badge badge-secondary">{props.value.pending}</span></a>
      </li>
      <li className="nav-item">
<a className="nav-link" href="#">High <span className="badge badge-secondary">{props.value.high}</span></a>
      </li>
      <li className="nav-item">
<a className="nav-link" href="#">low <span className="badge badge-secondary">{props.value.low}</span></a>
      </li>
      <li className="nav-item">
<a className="nav-link disabled" href="#" aria-disabled="false">Medium <span className="badge badge-secondary">{props.value.medium}</span></a>
      </li>
    </ul>
  </div>
</nav>
)
}

export default navbar;