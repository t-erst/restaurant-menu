import axios from 'axios';
import { useState } from 'react';
import { MenuItem, HomeProps } from '@/shared/types';
import Categories from '@/components/Categories';
import Dishes from '@/components/Dishes';
import MainLayout from '@/components/MainLayout';
import { API_URL, REQUEST_PARAMS } from '@/shared/const';
import TopNavigation from '@/components/TopNavigation';

export default function Home({ menuItems }: HomeProps) {
  // creating an array of unique categories
  const categories = [
    ...new Set(menuItems.map(({ categoryName }) => categoryName)),
  ];
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <MainLayout>
      <>
        <TopNavigation />
        <Categories
          data={{ categories, selectedCategory, setSelectedCategory }}
        />
        <Dishes dishes={{ menuItems, selectedCategory }} />
      </>
    </MainLayout>
  );
}

export async function getStaticProps() {
  const response = await axios.get(API_URL, REQUEST_PARAMS);
  const menuItems: MenuItem[] = response.data.desc;
  return {
    props: { menuItems },
  };
}
