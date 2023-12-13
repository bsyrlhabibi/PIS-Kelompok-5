import React from 'react';
import styled from "styled-components";
import {MdMenu} from "react-icons/md";
import {Link} from 'react-router-dom';
import { useSidebarContext } from '../context/sidebar_context';


const Navbar = () => {
  const {openSidebar} = useSidebarContext();

  return (
    <NavbarWrapper className = "bg-white flex">
      <div className='container w-100'>
        <div className='brand-and-toggler flex flex-between w-100'>
          <Link to = "/" className='navbar-brand text-uppercase ls-1 fw-8'>
            <span>Belajar</span>jar Kuy
          </Link>
          <div className='navbar-btns flex'>
            <button type = "button" className='sidebar-open-btn' onClick={() => openSidebar()}>
              <MdMenu />
            </button>
          </div>
        </div>
      </div>
    </NavbarWrapper>
  )
}

const NavbarWrapper = styled.nav`
  height: 90px;
  box-shadow: rgba(50, 50, 93, 0.15) 0px 16px 12px -2px, rgba(0, 0, 0, 0.2) 0px 3px 7px -3px;

  .navbar-brand{
    font-size: 35px;
    span{
      color: var(--clr-orange);
    }
  }
  .cart-btn{
    margin-right: 18px;
    font-size: 30px;
    position: relative;
    .item-count-badge{
      background-color: var(--clr-orange);
      position: absolute;
      right: -9px;
      top: -10px;
      font-size: 20px;
      font-weight: 650;
      display: block;
      width: 23px;
      height: 23px;
      color: var(--clr-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .sidebar-open-btn{
    transition: all 300ms ease-in-out;
    &:hover{
      opacity: 0.7;
    }
  }
`;

export default Navbar;