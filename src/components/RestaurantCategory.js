import React from 'react'

import ItemList from './ItemList'

const RestaurantCategory = ({ card, showItems, setOpenMenuIndex }) => {
    return (<>

        {card?.card?.card?.title && (
            <div data-testid="menuItem" className="mb-4 bg-gray-50">
                <div className="flex justify-between w-full p-4 shadow-md cursor-pointer bg-gray-50" onClick={() => {
                    setOpenMenuIndex()
                }}>
                    {
                        card?.card?.card?.title ? (<>
                            <span className="text-lg font-bold">
                                {card?.card?.card?.title}
                                ({card?.card?.card?.itemCards?.length || '0'})
                            </span>
                            <span>+</span>
                        </>
                        ) : null
                    }

                </div>
                {card?.card?.card?.title && (
                    <ItemList items={card.card.card.itemCards} />
                )}
            </div>
        )}
    </>
    )
}

export default RestaurantCategory