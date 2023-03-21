import axios from 'axios';
import { useState } from 'react';
import { MenuItem } from '@/shared/types';
import Categories from '@/components/Categories';
import Dishes from '@/components/Dishes';
import MainLayout from '@/components/MainLayout';

interface Home {
  menuItems: MenuItem[];
}

export default function Home({ menuItems }: Home) {
  // creating an array of unique categories
  const categories = [...new Set(menuItems.map((item) => item.categoryName))];
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <MainLayout>
      <>
        <Categories data={{ categories, selectedCategory, setSelectedCategory }}></Categories>
        <Dishes data={{ menuItems, selectedCategory }}></Dishes>
      </>
    </MainLayout>
  )
}

export async function getStaticProps() {
  const response = await axios.get('https://www.gonogosupport.com/gonogoApi1909Secure/index.php/api_dev/pullExternalMenu', {
    params: {
      "token": "plHZDxMrf1NzXeElFLdOstRMBkpEdH8b",
      "client": "Active Culture",
      "storeNums[]": "1"
    }
  });
  const menuItems: MenuItem[] = response.data.desc;

  return {
    props: { menuItems }
  }
}