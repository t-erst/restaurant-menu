import { PriceLevel } from '@/shared/types';
import Typography from '@mui/material/Typography';

interface Price {
  priceLevels: PriceLevel[];
}

const PriceLevels = ({ priceLevels }: Price) => {
  return (
    <>
      <hr className="my-2" />
      <Typography variant="subtitle2" color="text.secondary">
        Also available as:
      </Typography>
      {priceLevels?.map(({ itemNum, subName, itemPrice }) => (
        <Typography key={itemNum} variant="subtitle2" color="text.secondary">
          {subName} for ${Number(itemPrice) / 100}
        </Typography>
      ))}
    </>
  );
};

export default PriceLevels;
