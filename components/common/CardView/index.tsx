import React from 'react';
import { CardViewContainer, CardItems, CardItemContainer } from './styles';

interface CardViewProps {
  rows: object[];
  renderCard: any;
}

const CardView: React.FC<CardViewProps> = ({ rows, renderCard }) => {
  return (
    <CardViewContainer>
      <CardItems>
        {rows.map((row: object, index: number) => (
          <CardItemContainer key={index}>{renderCard(row)}</CardItemContainer>
        ))}
      </CardItems>
    </CardViewContainer>
  );
};

export default CardView;
