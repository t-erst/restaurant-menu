import MenuCard from './MenuCard';
import { DishesData } from '@/shared/types';

const Dishes = ({ dishes: { menuItems, selectedCategory } }: DishesData) => {
  return (
    <section className="grid grid-cols-[repeat(auto-fill,350px)] auto-rows-auto gap-4 justify-center">
      {menuItems
        .filter(({ categoryName }) => selectedCategory === categoryName)
        .map((menuItem) => (
          <MenuCard key={menuItem.itemNum} menuCard={menuItem}></MenuCard>
        ))}
    </section>
  );
};

export default Dishes;
