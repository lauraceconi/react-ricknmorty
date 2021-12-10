import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardMedia,
} from '@material-ui/core';

export default function ImageCard({ imagePath, cardLink, children }) {
  return (
    <Link to={cardLink}>
      <Card className="image-card-link">
        <CardMedia image={imagePath} style={{ height: 0, paddingTop: '100%' }} />
        <CardContent>
          <div className="image-card-text">
            {children}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
