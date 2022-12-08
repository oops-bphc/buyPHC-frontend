import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { styled, Typography, Box, Skeleton } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const CustomImg = styled('img')(({ theme }) => ({
  width: '170px',
  marginLeft: 10,
  marginRight: 10,
  borderRadius: 5,
  position: 'relative',
  left: '50%',
  transform: 'translateX(-50%)',
  loading: 'lazy',
}));

function ItemCarousel({ data }) {
  const responsiveItems = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
      partialVisibilityGutter: 40,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1260 },
      items: 7,
      partialVisibilityGutter: 10,
    },
    smallDesktop: {
      breakpoint: { max: 1260, min: 1200 },
      items: 7,
      partialVisibilityGutter: 10,
    },
    extraSmallDesktop: {
      breakpoint: { max: 1200, min: 950 },
      items: 6,
      partialVisibilityGutter: 10,
    },
  };

  const navigate = useNavigate();

  return (
    <Carousel
      responsive={responsiveItems}
      infinite={false}
      centerMode={false}
      ssr
      swipeable={true}
      partialVisible={true}
    >
      {Array.from(data).map((item, _id) => (
        <div key={item.id}>
          {item ? (
            <motion.div
              whileHover={{ scale: 1.05 }}
              style={{ cursor: 'pointer' }}
              onClick={() =>
                navigate({
                  pathname: '/product',
                  search: `id=${item.id}`,
                })
              }
            >
              <div>
                <div>
                  <CustomImg
                    id='listitems'
                    src={item.image}
                    alt={item.name_en || item.name}
                  />
                </div>
                <Box style={{ height: 50 }}>
                  <div
                    style={{
                      width: '85%',
                      position: 'relative',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      paddingLeft: 20,
                      textAlign: 'center',
                    }}
                  >
                    <Typography
                      variant='subtitle2'
                      color='secondary'
                      sx={{
                        wordWrap: 'break-word',
                        height: '1.55rem',
                        overflow: 'scroll',
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      variant='subtitle2'
                      color='primary.light'
                      sx={{
                        wordWrap: 'break-word',
                        height: '0.8rem',
                      }}
                    >
                      {item.offer}
                    </Typography>
                  </div>
                </Box>
              </div>
            </motion.div>
          ) : (
            <Skeleton variant='rectangular' />
          )}
        </div>
      ))}
    </Carousel>
  );
}

export default ItemCarousel;
