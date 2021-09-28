import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import News from '../News/News';

const Newspaper = () => {
  const [articles,setAritcles]=useState([])
  useEffect(()=>{
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-08-28&sortBy=publishedAt&apiKey=0392244cdc3646309ee737817d68a797')
    .then(res=>res.json())
    .then(data=>setAritcles(data.articles))
  },[])
  return (
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {
       
         articles.map(article=> <Grid item xs={2} sm={4} md={4} >
          <News article={article}></News>

        </Grid>)
       
     }
    </Grid>
  </Box>
  );
};

export default Newspaper;