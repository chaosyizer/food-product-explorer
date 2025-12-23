// // import { Link } from "react-router-dom";

// // const ProductCard = ({ product }) => {
// //   return (
// //     <div className="col-lg-3 col-md-4 col-sm-6">
// //       <div className="card h-100 shadow-sm">
// //         <img
// //           src={product.image_url}
// //           className="card-img-top p-3"
// //           alt={product.product_name}
// //           style={{ height: "180px", objectFit: "contain" }}
// //         />

// //         <div className="card-body">
// //           <h6 className="fw-bold text-truncate">
// //             {product.product_name || "No Name"}
// //           </h6>
// //           <p className="small text-muted">
// //             {product.categories_tags?.[0] || "N/A"}
// //           </p>
// //           <span className="badge bg-success">
// //             Nutrition: {product.nutrition_grade?.toUpperCase()}
// //           </span>
// //         </div>

// //         <div className="card-footer bg-white">
// //           <Link
// //             to={`/product/${product.code}`}
// //             className="btn btn-outline-success btn-sm w-100"
// //           >
// //             View Details
// //           </Link>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductCard;




// import { Link } from "react-router-dom";

// const ProductCard = ({ product }) => {
//   return (
//     <div className="col-lg-3 col-md-4 col-sm-6">
//       <div className="card product-card h-100 shadow-sm">
//         <img
//           src={product.image_url}
//           className="card-img-top p-3"
//           alt={product.product_name}
//           style={{ height: "180px", objectFit: "contain" }}
//         />

//         <div className="card-body">
//           <h6 className="fw-bold text-truncate">
//             {product.product_name || "No Name"}
//           </h6>

//           <p className="small text-muted mb-2">
//             {product.categories_tags?.[0] || "N/A"}
//           </p>

//           {product.nutrition_grade && (
//             <span className="badge bg-success">
//               Nutrition: {product.nutrition_grade.toUpperCase()}
//             </span>
//           )}
//         </div>

//         <div className="card-footer bg-white border-0">
//           <Link
//             to={`/product/${product.code}`}
//             className="btn btn-outline-success btn-sm w-100"
//           >
//             View Details
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;



import { Link } from "react-router-dom";

const gradeColor = (grade) => {
  switch (grade) {
    case "a":
      return "success";
    case "b":
      return "primary";
    case "c":
      return "warning";
    case "d":
      return "orange";
    case "e":
      return "danger";
    default:
      return "secondary";
  }
};

const ProductCard = ({ product }) => {
  const grade = product.nutrition_grade;

  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
      <div className="card product-card h-100">
        {/* IMAGE */}
        <div className="product-image-wrapper">
          <img
            src={product.image_url}
            alt={product.product_name}
            className="img-fluid"
          />

          {/* GRADE BADGE */}
          {grade && (
            <span className={`nutrition-badge bg-${gradeColor(grade)}`}>
              Grade {grade.toUpperCase()}
            </span>
          )}
        </div>

        {/* BODY */}
        <div className="card-body">
          <h6 className="fw-bold text-truncate mb-1">
            {product.product_name || "No Name"}
          </h6>

          <p className="small text-muted mb-2">
            Category: {product.categories_tags?.[0] || "N/A"}
          </p>

          <p className="small text-secondary mb-0">
            Ingredients:{" "}
            {product.ingredients_text
              ? product.ingredients_text.slice(0, 50) + "..."
              : "Not available"}
          </p>
        </div>

        {/* FOOTER */}
        <div className="card-footer bg-white border-0">
          <Link
            to={`/product/${product.code}`}
            className="btn btn-outline-success btn-sm w-100"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
