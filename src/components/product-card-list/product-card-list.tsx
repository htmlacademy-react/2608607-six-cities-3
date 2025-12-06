import ProductCard from '../product-card/product-card';

type ProductCardListProps = {
  locationCount: number;
}

export default function ProductCardList({ locationCount }: ProductCardListProps): JSX.Element {
  const productCardList: JSX.Element[] = Array.from(
    { length: locationCount },
    (_, i) => <ProductCard key={i} rating={0} /> //the mapping callback returns a ProductCard for each index. Each ProductCard receives a numeric key based on the array index.
  );

  return (
    <div className="cities__places-list places__list tabs__content">
      {productCardList}
    </div>
  );
}
