import React, { useState } from 'react'
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { BiMenuAltLeft } from 'react-icons/bi';
import './styles/NavSidebar.css'

export default function NavSidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  console.log(isSidebarOpen)

  const handleSetOpenNavbar = ()=>{
    console.log(isSidebarOpen)
    setIsSidebarOpen(true)
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
            // you can use your own router's api to get pathname
            activeItemId="/home"
            onSelect={({itemId}) => {
              // maybe push to the route
            }}
            items={[
              {
                title: 'Home',
                itemId: '/home',
                elemBefore: () => <BiMenuAltLeft name="inbox" />,
              },
              {
                title: 'Meal Type',
                itemId: '/meal-type',
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
                    title: "Teatime",
                    itemId: "/meal-type/teatime",
                    elemBefore: () => <BiMenuAltLeft name="inbox" />,
                  }
                ]
              },
              {
                title: 'Dish Type',
                itemId: '/dish-type',
                elemBefore: () => <BiMenuAltLeft name="inbox" />,
                subNav: [
                  {
                    title: "Biscuits and cookies",
                    itemId: "/dish-type/biscuits&cookies",
                    elemBefore: () => <BiMenuAltLeft name="inbox" />,
                  },
                  {
                    title: "Bread",
                    itemId: "/dish-type/bread",
                    elemBefore: () => <BiMenuAltLeft name="inbox" />,
                  },
                  {
                    title: "Cereals",
                    itemId: "/dish-type/cereals",
                    elemBefore: () => <BiMenuAltLeft name="inbox" />,
                  },
                  {
                    title: "Condiments and sauces",
                    itemId: "/dish-type/condiments&sauces",
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
                  },
                  {
                    title: "Main course",
                    itemId: "/dish-type/main-course",
                    elemBefore: () => <BiMenuAltLeft name="inbox" />,
                  },
                  {
                    title: "Pancake",
                    itemId: "/dish-type/pancake",
                    elemBefore: () => <BiMenuAltLeft name="inbox" />,
                  },
                  {
                    title: "Preps",
                    itemId: "/dish-type/preps",
                    elemBefore: () => <BiMenuAltLeft name="inbox" />,
                  },
                  {
                    title: "Preserve",
                    itemId: "/dish-type/preserve",
                    elemBefore: () => <BiMenuAltLeft name="inbox" />,
                  },
                  {
                    title: "Salad",
                    itemId: "/dish-type/salad",
                    elemBefore: () => <BiMenuAltLeft name="inbox" />,
                  },
                  {
                    title: "Sandwiches",
                    itemId: "/dish-type/sandwiches",
                    elemBefore: () => <BiMenuAltLeft name="inbox" />,
                  },
                  {
                    title: "Side dish",
                    itemId: "/dish-type/side-dish",
                    elemBefore: () => <BiMenuAltLeft name="inbox" />,
                  },
                  {
                    title: "Soup",
                    itemId: "/dish-type/soup",
                    elemBefore: () => <BiMenuAltLeft name="inbox" />,
                  },
                  {
                    title: "Starter",
                    itemId: "/dish-type/starter",
                    elemBefore: () => <BiMenuAltLeft name="inbox" />,
                  },
                  {
                    title: "Sweets",
                    itemId: "/dish-type/sweets",
                    elemBefore: () => <BiMenuAltLeft name="inbox" />,
                  }

                ]
              },
              {
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
