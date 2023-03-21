import Button from '@mui/material/Button';

interface Categories {
    data: {
        categories: string[];
        selectedCategory: string;
        setSelectedCategory: (item: string) => void
    }
}

const Categories = ({ data: { categories, selectedCategory, setSelectedCategory } }: Categories) => {
    return (
        <header className='flex row flex-wrap mx-8 mt-8'>
            {categories.map((item) =>
                <Button
                    key={item}
                    variant='text'
                    onClick={() => setSelectedCategory(item)}
                    className={selectedCategory.includes(item) ? 'bg-sky-100' : ''}
                >
                    {item}
                </Button>
            )}
        </header>
    )
}

export default Categories