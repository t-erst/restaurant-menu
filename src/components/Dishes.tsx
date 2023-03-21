import { MenuItem } from '@/shared/types'
import React from 'react'
import MenuCard from './MenuCard';

interface Dishes {
    data: {
        menuItems: MenuItem[];
        selectedCategory: string;
    }
}

const Dishes = ({ data: { menuItems, selectedCategory } }: Dishes) => {
    return (
        <section className='grid grid-cols-[repeat(auto-fill,350px)] auto-rows-auto gap-4 justify-center'>
            {menuItems
                .filter(({ categoryName }) => selectedCategory.includes(categoryName))
                .map((menuItem) =>
                    <MenuCard key={menuItem.itemNum} data={menuItem}></MenuCard>
                )}
        </section>
    )
}

export default Dishes