import { Typography } from '@mui/material';
import axios from 'axios';
import React from 'react';
import HomePageCarousel from '../../../Components/HomepageCarousel';
import ItemCarousel from '../../../Components/ItemCarousel';

function Homepage({ products, setProducts }) {
  const [categories, setCategories] = React.useState([]);

	const capitalize = (s) => {
		const lower = s.toLowerCase();
		return s.charAt(0).toUpperCase() + lower.slice(1)
	}

  React.useEffect(() => { // Get a list of all the categories 
    const getAllCategories = async () => {
      const response = await axios.get(
        "/product/categories"
      );
      setCategories(response.data);
    };
    getAllCategories();
  }, []);

  React.useEffect(() => { // Get all the products
    const AllProducts = async () => {
      const repsonse = await axios.get(
        "/product/all"
      );
      setProducts(repsonse.data);
    };
    AllProducts();
  }, []);

  return (
    <>
      <HomePageCarousel />
      <div style={{ padding: 20 }}>
        <div>
          <Typography variant='h4' pb={2}>
            New Arrivals
          </Typography>
          <ItemCarousel data={products} />
        </div>
        {categories.map((category) => (
          <div style={{ marginTop: 30 }} key={category}>
            <Typography variant='h4' pb={2}>
              Top {capitalize(category)}
            </Typography>
            <ItemCarousel
              data={products.filter(product => product.category === category)}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Homepage;
