import Image from 'next/image';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const TopNavigation = () => {
  return (
    <>
      <nav className="flex justify-between m-5 items-center">
        <Image alt="logo" src="/favicon.ico" height="60" width="60" />
        <Typography variant="h5">Restaurant</Typography>
        <ShoppingCartIcon fontSize="large" />
      </nav>
      <hr />
    </>
  );
};

export default TopNavigation;
