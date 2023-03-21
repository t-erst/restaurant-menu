export interface MenuItem {
  itemNum: string;
  storeNum: string;
  name: string;
  description: string;
  itemPrice: string;
  inStock: string;
  image: string;
  displayItem: string;
  displayCategory: string;
  subName: string;
  categoryName: string;
  categoryDescription: string;
  categoryDisplayOrder: string;
  itemDisplayOrder: string;
  categoryStartTime: string;
  categoryEndTime: string;
  categoryAvailableDays: string;
  categoryImage: string;
  itemAvailableDays: string;
  cateringCategory: string;
  priceLevels?: PriceLevel[];
}

export interface PriceLevel {
  itemNum: string;
  storeNum: string;
  name: string;
  description: string;
  itemPrice: string;
  pos_id: string;
  inStock: string;
  image: string;
  hasPriceLevels: string;
  modPriceLevels: string;
  displayItem: string;
  displayCategory: string;
  parentID: string;
  subName: string;
  categoryName: string;
  categoryDescription: string;
  categoryDisplayOrder: string;
  itemDisplayOrder: string;
  categoryStartTime: string;
  categoryEndTime: string;
  categoryAvailableDays: string;
  categoryImage: string;
  itemAvailableDays: string;
  cateringCategory: string;
  parentPL_name: string;
  dbID: string;
  posID: string;
  id: string;
}

export interface HomeProps {
  menuItems: MenuItem[];
}

export interface MainLayoutChildren {
  children: string | JSX.Element;
}

export interface CategoriesData {
  data: {
    categories: string[];
    selectedCategory: string;
    setSelectedCategory: (item: string) => void;
  };
}

export interface DishesData {
  dishes: {
    menuItems: MenuItem[];
    selectedCategory: string;
  };
}

export interface MenuCardData {
  menuCard: MenuItem;
}
