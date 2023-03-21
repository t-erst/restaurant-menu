import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import { MenuItem } from '@/shared/types';

interface MenuCard {
    data: MenuItem
}

export default function MenuCard({ data }: MenuCard) {

    const { name, image, categoryImage, itemPrice, categoryName, itemAvailableDays, description } = data;

    return (
        <Card sx={{ maxWidth: 345, minWidth: 300, margin: 1 }}>
            <CardMedia
                component="img"
                height="140"
                image={`https://www.gonogosupport.com/gonogoApi1909Secure/uploads/foodimages/${image ? image : categoryImage}`}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5">
                    {name}
                </Typography>
                <Typography gutterBottom variant="h6">
                    {`$${Number(itemPrice) / 100}`}
                </Typography>
                <Typography gutterBottom variant="subtitle1">
                    {`${categoryName}, ${itemAvailableDays}`}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary">
                    Add to cart
                </Button>
            </CardActions>
        </Card>
    );
}