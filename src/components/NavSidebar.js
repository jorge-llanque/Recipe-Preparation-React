import React, { useState } from 'react'
import './styles/NavSidebar.css'
import { 
  BiMenuAltLeft, 
  BiHomeAlt, 
  BiFoodMenu, 
  BiDish, 
  BiDumbbell, 
  BiChevronDown } from 'react-icons/bi';
import {Link, useRoute} from 'wouter'



export default function NavSidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const handleSetOpenNavbar = ()=>{
    setIsSidebarOpen(!isSidebarOpen)
  }

  const handleClick = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }
  
  const ActiveLink = props => {
    const [isActive] = useRoute(props.href)
    return (
      <Link {...props} >
         <a className={isActive ? "active Nav__Link" : "Nav__Link " }>{props.children}</a>
      </Link>
    )
  }

  return (
    <div className="Navbar__Container-1024">
      <div
        onClick={handleSetOpenNavbar}
        className={`Back-Wrapper ${
          isSidebarOpen ? "Back--isSidebarOpen" : "Back--isNotSidebarOpen"
        }`}
      />

      <div className="Menu__Button-Origin">
        <button className="Menu__Button" onClick={handleSetOpenNavbar} type="button" >
          <BiMenuAltLeft className="Icon-Menu" />
        </button>
      </div>

      <div
        className={`Navigation-Wrapper ${isSidebarOpen ? "Navigation--isSidebarOpen" : "" } `}
      >
            <nav className="Nav__Container">
                    <div className="Nav__Logo">
                        <span className="Nav__Logo-Name">RECIPE NUTRITION</span>
                    </div>
    
                    <div className="Nav__List">
                        <div className="Nav__Items">
                            <ActiveLink href="/" data-testid="Nav__Link" className="Nav__Link" onClick={handleClick} >
                              <BiHomeAlt className="Nav__Icon" />
                                <span className="Nav__Name">Home</span>
                            </ActiveLink>

                            <ActiveLink href="/healthy-meals/food" className="Nav__Link" onClick={handleClick}>
                              <BiDumbbell className="Nav__Icon" />
                                <span className="Nav__Name">Healthy Foods</span>
                            </ActiveLink>
                            
                            <div className="Nav__Dropdown Help1">
                              <div className="Nav__Link">
                                  <BiFoodMenu className="Nav__Icon" />
                                  <span className="Nav__Name">Meal Type</span>
                                  <BiChevronDown className='Nav__Icon Nav__Dropdown-Icon'/>
                              </div>

                              <div className="Nav__Dropdown-Collapse">
                                  <div className="Nav__Dropdown-Content">
                                      <ActiveLink href="/meal-type/breakfast" className="Nav__Dropdown-Item" onClick={handleClick}>Breakfast</ActiveLink>
                                      <ActiveLink href="/meal-type/dinner" className="Nav__Dropdown-Item" onClick={handleClick}>Dinner</ActiveLink>
                                      <ActiveLink href="/meal-type/lunch" className="Nav__Dropdown-Item" onClick={handleClick}>Lunch</ActiveLink>
                                      <ActiveLink href="/meal-type/snack" className="Nav__Dropdown-Item" onClick={handleClick}>Snack</ActiveLink>
                                      <ActiveLink href="/meal-type/teatime" className="Nav__Dropdown-Item" onClick={handleClick}>Tea Time</ActiveLink>
                                  </div>
                              </div>
                            </div>

                            <div className="Nav__Dropdown Help2">
                              <div to="/" className="Nav__Link">
                                  <BiDish className="Nav__Icon" />
                                  <span className="Nav__Name">Dish Type</span>
                                  <i className='Nav__Icon Nav__Dropdown-Icon'><BiChevronDown /></i>
                              </div>

                              <div className="Nav__Dropdown-Collapse">
                                  <div className="Nav__Dropdown-Content">
                                      <ActiveLink href="/dish-type/Pancake" className="Nav__Dropdown-Item" onClick={handleClick}>Pancake</ActiveLink>
                                      <ActiveLink href="/dish-type/Bread" className="Nav__Dropdown-Item" onClick={handleClick}>Breads</ActiveLink>
                                      <ActiveLink href="/dish-type/Cereals" className="Nav__Dropdown-Item" onClick={handleClick}>Cereals</ActiveLink>
                                      <ActiveLink href="/dish-type/Desserts" className="Nav__Dropdown-Item" onClick={handleClick}>Desserts</ActiveLink>
                                      <ActiveLink href="/dish-type/Drinks" className="Nav__Dropdown-Item" onClick={handleClick}>Drinks</ActiveLink>
                                  </div>
                              </div>
                            </div>


                            
                         </div>
                    </div>
            </nav>
          
      </div>
    </div>
  )
}
