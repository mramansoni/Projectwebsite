import React from 'react'

export default function detail() {
    return (
        <div>
            {/* <nav id="navbar-example2" className="navbar navbar-light bg-light px-3">
                <a className="navbar-brand" href="#">Navbar</a>
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <a className="nav-link" href="#scrollspyHeading1">First</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#scrollspyHeading2">Second</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#scrollspyHeading3">Third</a></li>
                            <li><a className="dropdown-item" href="#scrollspyHeading4">Fourth</a></li>
                            <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item" href="#scrollspyHeading5">Fifth</a></li>
      </ul>
    </li>
  </ul>
</nav> */}
                <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" className="scrollspy-example" tabindex="0">
                    <h4 id="scrollspyHeading1">First heading</h4>
                    <p>Write your pragarph here ***</p>
                    <h4 id="scrollspyHeading2">Second heading</h4>
                    <p>Write your pragarph here ***</p>
                    <h4 id="scrollspyHeading3">Third heading</h4>
                    <p>Write your pragarph here ***</p>
                    <h4 id="scrollspyHeading4">Fourth heading</h4>
                    <p>Write your pragarph here ***</p>
                    <h4 id="scrollspyHeading5">Fifth heading</h4>
                    <p>Write your pragarph here ***</p>
                </div>
        </div>
            )
}
