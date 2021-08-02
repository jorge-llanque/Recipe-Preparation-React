import React, { useState } from 'react'
import './styles/NavSidebar.css'
import { BiMenuAltLeft, BiHomeAlt, BiFoodMenu, BiDish, BiDumbbell, BiChevronDown } from 'react-icons/bi';
import {Link, useRoute} from 'wouter'


export default function NavSidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const handleSetOpenNavbar = ()=>{
    setIsSidebarOpen(true)
  }

  const handleClick = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }
  
  const ActiveLink = props => {
    const [isActive] = useRoute(props.href)
    return (
      <Link {...props} >
         <a className={isActive ? "active" : "" }>{props.children}</a>
      </Link>
    )
  }

  return (
    <>
      <div
        onClick={() => setIsSidebarOpen(false)}
        className={`Back--Wrapper ${
          isSidebarOpen ? "Back--isSidebarOpen" : "Back--isNotSidebarOpen"
        }`}
      />

      <div>
        <button className="Menu__Button" onClick={handleSetOpenNavbar} type="button" >
          <BiMenuAltLeft name="burger" className="Icon--Menu" />
        </button>
      </div>

      <div
        className={`Navigation--Wrapper ${isSidebarOpen ? "Navigation--isSidebarOpen" : "Navigation--isNotSidebarOpen" } `}
      >
            <nav className="nav__container">
                    <div className="nav__logo">
                        <span className="nav__logo-name">RECIPE NUTRITION</span>
                    </div>
    
                    <div className="nav__list">
                        <div className="nav__items">
                            <ActiveLink href="/" className="nav__link" onClick={handleClick} >
                              <BiHomeAlt className="nav__icon" />
                                <span className="nav__name">Home</span>
                            </ActiveLink>
                            
                            <div className="nav__dropdown">
                              <div className="nav__link">
                                  <BiFoodMenu className="nav__icon" />
                                  <span className="nav__name">Meal Type</span>
                                  <BiChevronDown className='nav__icon nav__dropdown-icon'/>
                              </div>

                              <div className="nav__dropdown-collapse">
                                  <div className="nav__dropdown-content">
                                      <ActiveLink href="/meal-type/breakfast" className="nav__dropdown-item" onClick={handleClick}>Breakfast</ActiveLink>
                                      <ActiveLink href="/meal-type/dinner" className="nav__dropdown-item" onClick={handleClick}>Dinner</ActiveLink>
                                      <ActiveLink href="/meal-type/lunch" className="nav__dropdown-item" onClick={handleClick}>Lunch</ActiveLink>
                                      <ActiveLink href="/meal-type/snack" className="nav__dropdown-item" onClick={handleClick}>Snack</ActiveLink>
                                      <ActiveLink href="/meal-type/teatime" className="nav__dropdown-item" onClick={handleClick}>Tea Time</ActiveLink>
                                  </div>
                              </div>
                            </div>

                            <div className="nav__dropdown">
                              <div to="/" className="nav__link">
                                  <BiDish className="nav__icon" />
                                  <span className="nav__name">Dish Type</span>
                                  <i className='bx bx-chevron-down nav__icon nav__dropdown-icon'><BiChevronDown /></i>
                              </div>

                              <div className="nav__dropdown-collapse">
                                  <div className="nav__dropdown-content">
                                      <ActiveLink href="/dish-type/biscuits" className="nav__dropdown-item" onClick={handleClick}>Biscuits</ActiveLink>
                                      <ActiveLink href="/dish-type/bread" className="nav__dropdown-item" onClick={handleClick}>Breads</ActiveLink>
                                      <ActiveLink href="/dish-type/cereals" className="nav__dropdown-item" onClick={handleClick}>Cereals</ActiveLink>
                                      <ActiveLink href="/dish-type/desserts" className="nav__dropdown-item" onClick={handleClick}>Desserts</ActiveLink>
                                      <ActiveLink href="/dish-type/drinks" className="nav__dropdown-item" onClick={handleClick}>Drinks</ActiveLink>
                                  </div>
                              </div>
                            </div>

                            <ActiveLink href="/healthy-meals/food" className="nav__link" onClick={handleClick}>
                              <BiDumbbell className="nav__icon" />
                                <span className="nav__name">Healthy Foods</span>
                            </ActiveLink>
                            
                         </div>
                    </div>
            </nav>
          
      </div>
    </>
  )
}
