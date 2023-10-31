import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Card from "./Card";

function CardList({ apiProducts }) {
  const products = apiProducts;
  const [filteredProducts, setFilteredProducts] = useState(apiProducts);
  const [currentFilter, setCurrentFilter] = useState(null);

  useEffect(() => {
    if (!currentFilter) return;

    if (currentFilter !== "All") {
      setFilteredProducts(products.filter((p) => p.category === currentFilter));
    } else {
      setFilteredProducts(products);
    }
  }, [currentFilter, products]);

  const handleFiltersChange = (e) => {
    setCurrentFilter(e.target.value);
  };

  return (
    <>
      <div className="flex flex-row justify-center my-6">
        <select name="selectFilter" onChange={handleFiltersChange}>
          <option value="All">All</option>
          <option value="Mode">Mode</option>
          <option value="Maison">Maison</option>
          <option value="Électronique">Électronique</option>
        </select>
      </div>

      <div className="flex flex-row flex-wrap justify-center gap-4">
        {filteredProducts.map((p) => (
          <Card
            image={p.picture_resized}
            description={p.description}
            name={p.name}
            category={p.category}
            id={p.id}
            price={`${p.price}  €`}
            key={p.id}
          />
        ))}
      </div>
    </>
  );
}

CardList.propTypes = {
  apiProducts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,

      category: PropTypes.string.isRequired,
      picture_resized: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default CardList;
