import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

const products = [
  {
    name: 'Crochet-look Crop Top',
    desc: 'Color: White',
    price: '$12.99',
    
  },
  {
    name: 'Flounce-trimmed Chiffon Blouse',
    desc: 'Color: Light Blue',
    price: '$12.99',
  },
  {
    name: 'Halterneck V-neck Top',
    desc: 'Color: Light beige',
    price: '$5.99',
  },

  { name: 'Shipping', desc: '', price: 'Free' },
];

// const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
//   { name: 'Card type', detail: 'Visa' },
//   { name: 'Card holder', detail: 'Mr John Smith' },
//   { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
//   { name: 'Expiry date', detail: '04/2024' },
];

export default function Review() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom >
      <b>Order summary</b>
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            $31.97
          </Typography>
        </ListItem>
      </List>

      <img id="productOne" width="100" src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F56%2F3b%2F563b76945dab8b7582e1287931cf9def3eb6e4e7.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_tops_croppedtops%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
            alt="productOne" />

      <img id="productTwo" width="100" src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F2b%2Fbf%2F2bbf11a29fde773adcd6c63a9c64cc625fab659b.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
            alt="productTwo" />
        
      <img id="productThree" width="100" src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ffc%2F48%2Ffc48176e4940ddfa9bd2610321f14c83399d3d5c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
            alt="productThree" />

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          {/* <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography> */}
          {/* <Typography gutterBottom>John Smith</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography> */}
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          {/* <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography> */}
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}