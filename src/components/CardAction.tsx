import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const CardAction = () => {
  const [quantity, setQuantity] = useState(0);

  const decreaseQuantity = () => {
    setQuantity((prev) => prev - 1);
  };
  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <CardActions sx={{ position: 'absolute', bottom: 2, right: 2 }}>
      {quantity ? (
        <>
          <RemoveIcon onClick={decreaseQuantity} color="primary" />
          <p className="ml-2">{quantity}</p>
          <AddIcon onClick={increaseQuantity} color="primary" />
        </>
      ) : (
        <Button
          size="small"
          color="primary"
          className="bg-sky-100"
          onClick={increaseQuantity}
        >
          Add to cart
        </Button>
      )}
    </CardActions>
  );
};

export default CardAction;
