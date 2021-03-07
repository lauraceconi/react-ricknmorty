import { Grid } from '@material-ui/core';
import React, { useContext } from 'react';
import Context from '../../core/context';
import { ButtonImageCard } from '../Cards';

export default function Home() {
  const { pages } = useContext(Context);

  return (
    <Grid container spacing={6}>
      {pages.map(page => (
        <Grid item xs={12} sm={6} key={page.url}>
          <ButtonImageCard imagePath={page.imagePath} buttonLink={page.url} buttonText="Take me there!">
            {page.text}
          </ButtonImageCard>
        </Grid>
      ))}
    </Grid>
  )
}