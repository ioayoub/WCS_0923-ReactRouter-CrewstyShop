import { useState, useEffect } from "react";
import Card from "./Card";

function CardList() {
  const [products, setProducts] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(null);
  const [currentFilter, setCurrentFilter] = useState(null);

  useEffect(() => {
    fetch("https://ioayoub.fr/api/eshop")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    products && setFilteredProducts(products);
  }, [products]);

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
        {filteredProducts &&
          filteredProducts.map((p) => (
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

export default CardList;
