// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { getProductByBarcode } from "../services/api";
// import Loader from "../components/Loader";

// const ProductDetail = () => {
//   const { barcode } = useParams();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     getProductByBarcode(barcode).then((data) =>
//       setProduct(data.product)
//     );
//   }, [barcode]);

//   if (!product) return <Loader />;

//   return (
//     <div className="container my-5">
//       <div className="row">
//         <div className="col-md-5 text-center">
//           <img
//             src={product.image_url}
//             className="img-fluid shadow rounded"
//             alt={product.product_name}
//           />
//         </div>

//         <div className="col-md-7">
//           <h2>{product.product_name}</h2>
//           <p>{product.ingredients_text || "Ingredients not available"}</p>

//           <ul className="list-group">
//             <li className="list-group-item">
//               Energy: {product.nutriments?.energy} kcal
//             </li>
//             <li className="list-group-item">
//               Fat: {product.nutriments?.fat} g
//             </li>
//             <li className="list-group-item">
//               Carbs: {product.nutriments?.carbohydrates} g
//             </li>
//             <li className="list-group-item">
//               Protein: {product.nutriments?.proteins} g
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;


import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductByBarcode } from "../services/api";
import Loader from "../components/Loader";

const ProductDetail = () => {
  const { barcode } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductByBarcode(barcode).then((data) =>
      setProduct(data.product)
    );
  }, [barcode]);

  if (!product) return <Loader />;

  return (
    <div className="container my-5">
      <button
        className="btn btn-outline-secondary mb-4"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <div className="row bg-white p-4 rounded shadow-sm">
        <div className="col-md-5 text-center">
          <img
            src={product.image_url}
            className="img-fluid rounded"
            alt={product.product_name}
          />
        </div>

        <div className="col-md-7">
          <h2 className="fw-bold">{product.product_name}</h2>
          <p className="text-muted">
            {product.ingredients_text || "Ingredients not available"}
          </p>

          <h6 className="fw-bold mt-4">Nutritional Values</h6>
          <ul className="list-group">
            <li className="list-group-item">
              Energy: {product.nutriments?.energy || "—"} kcal
            </li>
            <li className="list-group-item">
              Fat: {product.nutriments?.fat || "—"} g
            </li>
            <li className="list-group-item">
              Carbohydrates: {product.nutriments?.carbohydrates || "—"} g
            </li>
            <li className="list-group-item">
              Protein: {product.nutriments?.proteins || "—"} g
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
