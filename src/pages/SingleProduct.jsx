import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function SingleProduct() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("https://ioayoub.fr/api/eshop")
      .then((res) => res.json())
      .then((data) => setProduct(data.find((d) => d.id === parseInt(id, 10))))
      .catch((err) => console.error(err));
  }, [id]);

  if (isNaN(parseInt(id, 10))) return navigate("/toto");

  return (
    <>
      {product && (
        <>
          <div className="lg:max-w-none max-w-2xl mx-auto">
            <div className="flex flex-row my-16 gap-8 justify-center">
              <img
                src={product.picture_resized}
                alt={`alt ${product.picture_resized}`}
                className="sm:rounded-lg object-cover w-2/4"
              />

              <div className="mt-10 sm:mt-16 lg:mt-0 px-4 sm:px-0 flex flex-col justify-center">
                <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
                  {product.name}
                </h1>
                <div className="mt-3">
                  <p className="text-3xl text-gray-900 tracking-tight">
                    {product.price} €
                  </p>
                </div>

                <div className="mt-6 text-gray-700">
                  <p>{product.description}</p>
                </div>
                <div className="mt-10">
                  <button className="w-full max-w-xs px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white border border-transparent rounded-md text-base font-medium">
                    Ajouter au panier
                  </button>
                  <button className="ml-4 px-3 py-3 text-gray-400 hover:bg-gray-100 rounded-md"></button>
                </div>
              </div>
            </div>
          </div>

          <p className="w-2/4 text-center mx-auto">
            La totalité des produits sont issus de la boutique en ligne de la
            marque de <span className="font-bold">MyWebsite_</span>
            <br />
            Tous nos produits sont disponible à la livraison ou au retrait en
            boutique.
          </p>
          <Link
            to="/products"
            className="block mx-auto p-4 text-white bg-neutral-800 rounded-full w-fit my-8"
          >
            Retour aux produits
          </Link>
        </>
      )}
    </>
  );
}

export default SingleProduct;
