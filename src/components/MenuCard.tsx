import Image from 'next/image';
import { MenuCardData } from '@/shared/types';
import { UPLOADS_URL } from '@/shared/const';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PriceLevels from './PriceLevels';

export default function MenuCard({
  menuCard: {
    name,
    image,
    categoryImage,
    itemPrice,
    categoryName,
    itemAvailableDays,
    description,
    priceLevels,
  },
}: MenuCardData) {
  return (
    <Card sx={{ maxWidth: 345, minWidth: 300, margin: 1 }}>
      <Image
        alt={name}
        src={`${UPLOADS_URL}${image ? image : categoryImage}`}
        height="138"
        width="345"
      />
      <CardContent>
        <Typography variant="h5">{name}</Typography>
        <Typography variant="h6">
          {itemPrice !== '0' ? `$${Number(itemPrice) / 100}` : 'for free'}
        </Typography>
        <Typography variant="subtitle1">
          {`${categoryName}, ${itemAvailableDays}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        {priceLevels && <PriceLevels priceLevels={priceLevels} />}
      </CardContent>
      {/* <CardActions>
                <Button size="small" color="primary">
                    Add to cart
                </Button>
            </CardActions> */}
    </Card>
  );
}
