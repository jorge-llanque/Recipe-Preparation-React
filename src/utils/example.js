<Navigation
            activeItemId="/home"
            onSelect={({itemId}) => {
              if(itemId){
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
                    title: "Tea Time",
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
                    title: "Biscuits",
                    itemId: "/dish-type/biscuits",
                    elemBefore: () => <BiMenuAltLeft name="inbox" />,
                  },
                  {
                    key: uuidv4(),
                    title: "Breads",
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
                    title: "Desserts",
                    itemId: "/dish-type/desserts",
                    elemBefore: () => <BiMenuAltLeft name="inbox" />,
                  },
                  {
                    key: uuidv4(),
                    title: "Drinks",
                    itemId: "/dish-type/drinks",
                    elemBefore: () => <BiMenuAltLeft name="inbox" />,
                  }
                ]
              },
              {
                key: uuidv4(),
                title: 'Healthy Foods',
                itemId: '/healthy-meals/food',
                elemBefore: () => <BiMenuAltLeft name="inbox" />,
              }
            ]}
          />









