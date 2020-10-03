import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const MenuIcon = styled.button`
  position: fixed;
  top: 1rem;
  left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: var(--main-bg-color);
  border: none;
  cursor: pointer;
  z-index: 5;

  div {
    display: inline-block;
    width: 1.5rem;
    height: 0.1rem;
    background-color: white;
    border:none;
    border-radius: 5px;
    padding: 2px;
    margin: 2px;
    transform-origin: 1px;
    position: relative;
    transition: opacity 300ms, transform 300ms;

    :first-child {
      transform: ${({nav}) => nav ? `rotate(45deg)` : `rotate(0)`}
    }

    :nth-child(2) {
      opacity: ${({nav}) => nav ? "0" : "1" }
    }

    :nth-child(3) {
      transform: ${({nav}) => nav ? `rotate(-45deg)` : `rotate(0)`}
    }
  }
`

const MenuLinks = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  width: 256px;
  background: var(--navbar-menu-bg-color);
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 300ms;
  transform: ${({nav}) => (nav ? "translateX(0)" : "translateX(-100%)")};

  ul {
    margin: 2rem 0 0 0;
    width: 100%;
    list-style-type: none;
  }

  li {
    margin: 1rem 0 0 0;
    width: 100%;
    background-color: var(--navbar-menu-bg-color);

    :hover {
      background-color: var(--navbar-menu-item-highlight-color);
    }
  }

  a {
    text-decoration: none;
    color: white;
    font-size: 1.5rem;
    transition: color 300ms;

    :hover {
      color: var(--text-color);
    }
  }
`

export default function NavigationBar( props ) {
  const [nav, showNav] = useState(false);
  return (
    <div>
      <MenuIcon nav={nav} onClick={() => showNav(!nav)}>
        <div/>
        <div/>
        <div/>
      </MenuIcon>
      <MenuLinks nav={nav}>
        <ul className="menu">
          <li>
            <Link to="/" onClick={() => showNav(!nav)}> Home </Link>
          </li>
          <li>
            <Link to="/academia" onClick={() => showNav(!nav)}> Academia </Link>
          </li>
        </ul>
      </MenuLinks>
    </div>
  )
}
