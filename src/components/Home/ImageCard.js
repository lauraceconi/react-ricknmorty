import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Button
} from '@material-ui/core';

export default function ImageCard({ imagePath, buttonLink, children }) {
  return (
    <Card>
        <CardMedia image={imagePath} style={{height: 0, paddingTop: '43%'}} />
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            {children}
          </Typography>
        </CardContent>
      <CardActions>
        <Button component={Link} to={buttonLink} size="small" color="primary">
          Take me there!
        </Button>
      </CardActions>
    </Card>
  )
}