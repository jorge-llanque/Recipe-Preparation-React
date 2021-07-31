import React, { useState } from 'react'
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import './styles/NavSidebar.css'
import { BiMenuAltLeft } from 'react-icons/bi';
import {useLocation} from 'wouter'


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

  return (
    <>
      <div
        onClick={() => setIsSidebarOpen(false)}
        className={`Back--Wrapper ${
          isSidebarOpen ? "Back--isSidebarOpen" : "Back--isNotSidebarOpen"
        }`}
      />

      <div>
        <button className="Btn--Menu" onClick={handleSetOpenNavbar} type="button" >
          <BiMenuAltLeft name="burger" className="Icon--Menu" />
        </button>
      </div>

      <div
        className={`Navigation--Wrapper ${isSidebarOpen ? "Navigation--isSidebarOpen" : "Navigation--isNotSidebarOpen" } `}
      >
        <Navigation
            activeItemId="/home"
            onSelect={({itemId}) => {
              if(itemId){
                handleSelect(itemId)
              }
            }}

            items={[
              {
                title: 'Home',
                itemId: '/',
                elemBefore: () => <BiMenuAltLeft name="inbox" />,
              },
              {
                title: 'Meal Type',
                elemBefore: () => <BiMenuAltLeft name="inbox" />,
                subNav: [
                  {
                    title: "Breakfast",
                    itemId: "/meal-type/breakfast",
                    elemBefore: () => <BiMenuAltLeft name="inbox" />,
                  },
                  {
                    title: "Dinner",
                    itemId: "/meal-type/dinner",
                    elemBefore: () => <BiMenuAltLeft name="inbox" />,
                  },
                  {
                    title: "Lunch",
                    itemId: "/meal-type/lunch",
                    elemBefore: () => <BiMenuAltLeft name="inbox" />,
                  },
                  {
                    title: "Snack",
                    itemId: "/meal-type/snack",
                    elemBefore: () => <BiMenuAltLeft name="inbox" />,
                  },
                  {
                    title: "Tea Time",
                    itemId: "/meal-type/teatime",
                    elemBefore: () => <BiMenuAltLeft name="inbox" />,
                  }
                ]
              },
              {
                title: 'Dish Type',
                elemBefore: () => <BiMenuAltLeft name="inbox" />,
                subNav: [
                  {
                    
                    title: "Biscuits",
                    itemId: "/dish-type/biscuits",
                    elemBefore: () => <BiMenuAltLeft name="inbox" />,
                  },
                  {
                    title: "Breads",
                    itemId: "/dish-type/bread",
                    elemBefore: () => <BiMenuAltLeft name="inbox" />,
                  },
                  {
                    title: "Cereals",
                    itemId: "/dish-type/cereals",
                    elemBefore: () => <BiMenuAltLeft name="inbox" />,
                  },
                  {
                    title: "Desserts",
                    itemId: "/dish-type/desserts",
                    elemBefore: () => <BiMenuAltLeft name="inbox" />,
                  },
                  {
                    
                    title: "Drinks",
                    itemId: "/dish-type/drinks",
                    elemBefore: () => <BiMenuAltLeft name="inbox" />,
                  }
                ]
              },
              {
                title: 'Healthy Foods',
                itemId: '/healthy-meals/food',
                elemBefore: () => <BiMenuAltLeft name="inbox" />,
              }
            ]}
          />
      </div>
    </>
  )
}
