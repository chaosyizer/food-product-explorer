// const Filters = ({ setCategory, setSort }) => {
//   return (
//     <div className="container my-4">
//       <div className="row g-3">
//         <div className="col-md-6">
//           <select className="form-select" onChange={(e) => setCategory(e.target.value)}>
//             <option value="">All Categories</option>
//             <option value="beverages">Beverages</option>
//             <option value="dairy">Dairy</option>
//             <option value="snacks">Snacks</option>
//           </select>
//         </div>

//         <div className="col-md-6">
//           <select className="form-select" onChange={(e) => setSort(e.target.value)}>
//             <option value="">Sort By</option>
//             <option value="name-asc">Name A-Z</option>
//             <option value="name-desc">Name Z-A</option>
//             <option value="nutrition">Nutrition Grade</option>
//           </select>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Filters;



const Filters = ({ setCategory, setSort }) => {
  return (
    <div className="container my-4">
      <div className="card shadow-sm p-3">
        <h6 className="fw-bold text-muted mb-3">
          Filter & Sort Products
        </h6>

        <div className="row g-3">
          <div className="col-md-6">
            <select
              className="form-select"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              <option value="beverages">Beverages</option>
              <option value="dairy">Dairy</option>
              <option value="snacks">Snacks</option>
            </select>
          </div>

          <div className="col-md-6">
            <select
              className="form-select"
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="">Sort By</option>
              <option value="name-asc">Name A–Z</option>
              <option value="name-desc">Name Z–A</option>
              <option value="nutrition">Nutrition Grade</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
