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
  priceLevels?: {
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
  };
}