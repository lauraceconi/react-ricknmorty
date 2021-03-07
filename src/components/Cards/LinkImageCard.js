import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import './LinkImageCard.scss';

export default function ImageCard({ imagePath, cardLink, children }) {
  return (
    <Link to={cardLink}>
      <Card className="link-image-card">
        <CardMedia image={imagePath} style={{ height: 0, paddingTop: '100%' }} />
        <CardContent>
          <Typography color="secondary">
            {children}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  )
}
