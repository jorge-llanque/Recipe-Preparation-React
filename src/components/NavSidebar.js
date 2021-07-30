import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { BiMenuAltLeft } from 'react-icons/bi';
import './styles/NavSidebar.css'
import {useLocation} from 'wouter'

export default function NavSidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [location, setLocation] = useLocation()

  console.log(isSidebarOpen)

  const handleSetOpenNavbar = ()=>{
    console.log(isSidebarOpen)
    setIsSidebarOpen(true)
  }

  const handleSelect = (itemId) => {
    console.log(itemId)
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
              if(itemId !== undefined){
                handleSelect(itemId)
              }
            }}
            items={[
              {
                key: uuidv4(),
                title: 'Home',
                itemId: '/',
                elemBefore: () => <BiMenuAltLeft name="inbox" />,
              },
              {
                key: uuidv4(),
                title: 'Meal Type',
                elemBefore: () => <BiMenuAltLeft name="inbox" />,
                subNav: [
                  {
                    key: uuidv4(),
                    title: "Breakfast",
                    itemId: "/meal-type/breakfast",
                    elemBefore: () => <BiMenuAltLeft name="inbox" />,
                  },
                  {
                    key: uuidv4(),
                    title: "Dinner",
                    itemId: "/meal-type/dinner",
                    elemBefore: () => <BiMenuAltLeft name="inbox" />,
                  },
                  {
                    key: uuidv4(),
                    title: "Lunch",
                    itemId: "/meal-type/lunch",
                    elemBefore: () => <BiMenuAltLeft name="inbox" />,
                  },
                  {
                    key: uuidv4(),
                    title: "Snack",
                    itemId: "/meal-type/snack",
                    elemBefore: () => <BiMenuAltLeft name="inbox" />,
                  },
                  {
                    key: uuidv4(),
                    title: "Teatime",
                    itemId: "/meal-type/teatime",
                    elemBefore: () => <BiMenuAltLeft name="inbox" />,
                  }
                ]
              },
              {
                key: uuidv4(),
                title: 'Dish Type',
                elemBefore: () => <BiMenuAltLeft name="inbox" />,
                subNav: [
                  {
                    key: uuidv4(),
                    title: "Biscuits and cookies",
                    itemId: "/dish-type/biscuits&cookies",
                    elemBefore: () => <BiMenuAltLeft name="inbox" />,
                  },
                  {
                    key: uuidv4(),
                    title: "Bread",
                    itemId: "/dish-type/bread",
                    elemBefore: () => <BiMenuAltLeft name="inbox" />,
                  },
                  {
                    key: uuidv4(),
                    title: "Cereals",
                    itemId: "/dish-type/cereals",
                    elemBefore: () => <BiMenuAltLeft name="inbox" />,
                  },
                  {
                    key: uuidv4(),
                    title: "Condiments and sauces",
                    itemId: "/dish-type/condiments&sauces",
                    elemBefore: () => <BiMenuAltLeft name="inbox" />,
                  },
                  {
                    key: uuidv4(),
                    title: "Desserts",
                    itemId: "/dish-type/desserts",
                    elemBefore: () => <BiMenuAltLeft name="inbox" />,
                  },
                  {
                    key: uuidv4(),
                    title: "Drinks",
                    itemId: "/dish-type/drinks",
                    elemBefore: () => <BiMenuAltLeft name="inbox" />,
                  },
                  {
                    key: uuidv4(),
                    title: "Main course",
                    itemId: "/dish-type/main-course",
                    elemBefore: () => <BiMenuAltLeft name="inbox" />,
                  },
                  {
                    key: uuidv4(),
                    title: "Pancake",
                    itemId: "/dish-type/pancake",
                    elemBefore: () => <BiMenuAltLeft name="inbox" />,
                  },
                  {
                    key: uuidv4(),
                    title: "Preps",
                    itemId: "/dish-type/preps",
                    elemBefore: () => <BiMenuAltLeft name="inbox" />,
                  },
                  {
                    key: uuidv4(),
                    title: "Preserve",
                    itemId: "/dish-type/preserve",
                    elemBefore: () => <BiMenuAltLeft name="inbox" />,
                  },
                  {
                    key: uuidv4(),
                    title: "Salad",
                    itemId: "/dish-type/salad",
                    elemBefore: () => <BiMenuAltLeft name="inbox" />,
                  },
                  {
                    key: uuidv4(),
                    title: "Sandwiches",
                    itemId: "/dish-type/sandwiches",
                    elemBefore: () => <BiMenuAltLeft name="inbox" />,
                  },
                  {
                    key: uuidv4(),
                    title: "Side dish",
                    itemId: "/dish-type/side-dish",
                    elemBefore: () => <BiMenuAltLeft name="inbox" />,
                  },
                  {
                    key: uuidv4(),
                    title: "Soup",
                    itemId: "/dish-type/soup",
                    elemBefore: () => <BiMenuAltLeft name="inbox" />,
                  },
                  {
                    key: uuidv4(),
                    title: "Starter",
                    itemId: "/dish-type/starter",
                    elemBefore: () => <BiMenuAltLeft name="inbox" />,
                  },
                  {
                    key: uuidv4(),
                    title: "Sweets",
                    itemId: "/dish-type/sweets",
                    elemBefore: () => <BiMenuAltLeft name="inbox" />,
                  }

                ]
              },
              {
                key: uuidv4(),
                title: 'Healthy Meals',
                itemId: '/healthy-meals',
                elemBefore: () => <BiMenuAltLeft name="inbox" />,
              }
            ]}
          />
      </div>
    </>
  )
}
