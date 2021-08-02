import React, { useState } from 'react'
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import './styles/NavSidebar.css'
import { BiMenuAltLeft, BiHomeAlt, BiFoodMenu, BiDish, BiDumbbell, BiChevronDown } from 'react-icons/bi';
import {Link, useLocation} from 'wouter'
import {v4 as uuidv4} from 'uuid'


export default function NavSidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [location, setLocation] = useLocation()

  const handleSetOpenNavbar = ()=>{
    setIsSidebarOpen(true)
  }

  const handleSelect = (itemId) => {
    setLocation(itemId)
    setIsSidebarOpen(false)
  }

  const handleClick = () => {
    setIsSidebarOpen(!isSidebarOpen)
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
                            <Link to="/" className="nav__link active" onClick={handleClick} >
                              <BiHomeAlt className="nav__icon" />
                                <span className="nav__name">Home</span>
                            </Link>
                            
                            <div className="nav__dropdown">
                              <Link to="/" className="nav__link">
                                  <BiFoodMenu className="nav__icon" />
                                  <span className="nav__name">Meal Type</span>
                                  <BiChevronDown className='nav__icon nav__dropdown-icon'/>
                              </Link>

                              <div className="nav__dropdown-collapse">
                                  <div className="nav__dropdown-content">
                                      <Link to="/meal-type/breakfast" className="nav__dropdown-item" onClick={handleClick}>Breakfast</Link>
                                      <Link to="/meal-type/dinner" className="nav__dropdown-item" onClick={handleClick}>Dinner</Link>
                                      <Link to="/meal-type/lunch" className="nav__dropdown-item" onClick={handleClick}>Lunch</Link>
                                      <Link to="/meal-type/snack" className="nav__dropdown-item" onClick={handleClick}>Snack</Link>
                                      <Link to="/meal-type/teatime" className="nav__dropdown-item" onClick={handleClick}>Tea Time</Link>
                                  </div>
                              </div>
                            </div>

                            <div className="nav__dropdown">
                              <Link to="/" className="nav__link">
                                  <BiDish className="nav__icon" />
                                  <span className="nav__name">Dish Type</span>
                                  <i className='bx bx-chevron-down nav__icon nav__dropdown-icon'><BiChevronDown /></i>
                              </Link>

                              <div className="nav__dropdown-collapse">
                                  <div className="nav__dropdown-content">
                                      <Link to="/dish-type/biscuits" className="nav__dropdown-item" onClick={handleClick}>Biscuits</Link>
                                      <Link to="/dish-type/bread" className="nav__dropdown-item" onClick={handleClick}>Breads</Link>
                                      <Link to="/dish-type/cereals" className="nav__dropdown-item" onClick={handleClick}>Cereals</Link>
                                      <Link to="/dish-type/desserts" className="nav__dropdown-item" onClick={handleClick}>Desserts</Link>
                                      <Link to="/dish-type/drinks" className="nav__dropdown-item" onClick={handleClick}>Drinks</Link>
                                  </div>
                              </div>
                            </div>

                            <Link to="/healthy-meals/food" className="nav__link" onClick={handleClick}>
                              <BiDumbbell className="nav__icon" />
                                <span className="nav__name">Healthy Foods</span>
                            </Link>
                            
                         </div>
                    </div>
            </nav>
          
      </div>
    </>
  )
}
