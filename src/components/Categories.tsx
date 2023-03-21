import Button from '@mui/material/Button';
import { CategoriesData } from '@/shared/types';

const Categories = ({
  data: { categories, selectedCategory, setSelectedCategory },
}: CategoriesData) => {
  return (
    <header className="flex row flex-wrap mx-8 mt-8">
      {categories.map((category) => (
        <Button
          key={category}
          variant="text"
          onClick={() => setSelectedCategory(category)}
          color="inherit"
          className={selectedCategory === category ? 'bg-sky-100' : ''}
        >
          {category}
        </Button>
      ))}
    </header>
  );
};

export default Categories;
