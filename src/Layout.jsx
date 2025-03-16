import React from 'react'

export default function Layout() {
  return (
    <nav>
        <ul>
          <Link to="/">
            <li>Home </li>
          </Link>
          <Link to="/about/$id">
            <li>about </li>
          </Link>
          <Link to="/contact">
            <li>contact </li>
          </Link>
        </ul>
      </nav>
  )
}
