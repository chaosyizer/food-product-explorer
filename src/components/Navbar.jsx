// const Navbar = ({ setSearch, searchByBarcode }) => {
//   return (
//     <nav className="navbar navbar-dark bg-success shadow">
//       <div className="container">
//         <span className="navbar-brand fw-bold">🥗 Food Explorer</span>

//         <div className="d-flex gap-2">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Search product..."
//             onChange={(e) => setSearch(e.target.value)}
//           />

//           <input
//             type="number"
//             className="form-control"
//             placeholder="Barcode"
//             onKeyDown={(e) =>
//               e.key === "Enter" && searchByBarcode(e.target.value)
//             }
//           />
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




const Navbar = ({ setSearch, searchByBarcode }) => {
  return (
    <nav className="navbar navbar-dark bg-success shadow-sm">
      <div className="container py-2">
        <span className="navbar-brand fw-bold fs-4">
          🥗 Food Explorer
        </span>

        <div className="d-flex gap-2 w-50">
          <input
            type="text"
            className="form-control"
            placeholder="Search food product..."
            onChange={(e) => setSearch(e.target.value)}
          />

          <input
            type="number"
            className="form-control"
            placeholder="Barcode"
            onKeyDown={(e) =>
              e.key === "Enter" && searchByBarcode(e.target.value)
            }
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
