import React, { useState, useEffect } from "react";
import { Container, Navbar, Form, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const NavBar = ({ searchQuery, setSearchQuery }) => {
  // State to control navbar expansion
  const [navExpanded, setNavExpanded] = useState(false);

  // Hook for navigation
  const navigate = useNavigate();

  // Function to close the navigation
  const closeNav = () => {
    setNavExpanded(false);
  };

  // Function to handle link clicks
  const handleLinkClick = () => {
    setSearchQuery(""); // Clear the search input when a link is clicked
  };

  // Function to handle combined click actions
  const handleCombinedClick = () => {
    closeNav();
    handleLinkClick();
  };

  // Function to handle search input change
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Effect to navigate when searchQuery changes
  useEffect(() => {
    if (searchQuery) {
      const encodedQuery = encodeURIComponent(searchQuery);
      navigate(`/search?query=${encodedQuery}`);
    }
  }, [searchQuery, navigate]);

  return (
    <Navbar
      expand="lg"
      className="text-white bg-black"
      expanded={navExpanded}
      onToggle={() => setNavExpanded(!navExpanded)}
    >
      <Container>
        {/* Home Link */}
        <Link to="/" className="text-decoration-none">
          <span
            className="text-black bg-warning px-3 py-2 fw-bold rounded-2"
            onClick={handleCombinedClick}
          >
            Eng / Sohaila Abo El-Wafa
          </span>
        </Link>

        {/* Navbar Toggle */}
        <Navbar.Toggle aria-controls="navbarScroll" className="bg-black" />

        {/* Navbar Collapse */}
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {/* Links for different movie categories */}
            <Link
              to="/movies/popular"
              className="text-decoration-none me-4 fs-4 text-white link-warning"
              onClick={handleCombinedClick}
            >
              <span>Popular</span>
            </Link>
            <Link
              to="/movies/top_rated"
              className="text-decoration-none me-4 fs-4 text-white link-warning"
              onClick={handleCombinedClick}
            >
              <span>Top Rated</span>
            </Link>
            <Link
              to="/movies/upcoming"
              className="text-decoration-none me-4 fs-4 text-white link-warning"
              onClick={handleCombinedClick}
            >
              <span>Upcoming</span>
            </Link>
          </Nav>

          {/* Search Form */}
          <Form className="d-flex">
            <Form.Control
              onChange={handleSearchInputChange}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchQuery}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

// import { Container, Navbar, Form, Nav } from 'react-bootstrap';
// import { Link, useNavigate } from 'react-router-dom';

// const NavBar = ({ searchQuery, setSearchQuery }) => {
//   const [navExpanded, setNavExpanded] = useState(false);
  
//   const navigate = useNavigate();

//   const closeNav = () => {
//     setNavExpanded(false);
//   };

//   useEffect(() => {
//     // Navigate to the search page when searchQuery changes
//     if (searchQuery) {
//       const encodedQuery = encodeURIComponent(searchQuery);
//       navigate(`/search?query=${encodedQuery}`);
//     }
//   }, [searchQuery, navigate]);

//   return (
//     <Navbar
//       expand="lg"
//       className="text-white bg-black"
//       expanded={navExpanded}
//       onToggle={() => setNavExpanded(!navExpanded)}
//     >
//       <Container>
//         <Link to="/" className='text-decoration-none'>
//           <span className='text-black bg-warning px-3 py-2 fw-bold rounded-2'
//             onClick={closeNav}
//           > Eg / Sohaila Abo El-Wafa </span>
//         </Link>
//         <Navbar.Toggle aria-controls="navbarScroll" className='bg-black' />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="m-auto my-2 my-lg-0"
//             style={{ maxHeight: '100px' }}
//             navbarScroll
//           >
//             <Link
//               to="/movies/popular"
//               className="text-decoration-none me-4 fs-4 text-white link-warning"
//               onClick={closeNav}
//             >
//               <span>Popular</span>
//             </Link>
//             <Link
//               to="/movies/top_rated"
//               className="text-decoration-none me-4 fs-4 text-white link-warning"
//               onClick={closeNav}
//             >
//               <span>Top Rated</span>
//             </Link>
//             <Link
//               to="/movies/upcoming"
//               className="text-decoration-none me-4 fs-4 text-white link-warning"
//               onClick={closeNav}
//             >
//               <span>Upcoming</span>
//             </Link>
//           </Nav>
//           <Form className="d-flex">
//             <Form.Control
//               onChange={(e) => {
//                 setSearchQuery(e.target.value);
//               }}
//               type="search"
//               placeholder="Search"
//               className="me-2"
//               aria-label="Search"
//             />
//           </Form>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default NavBar;



// import React, { useState, useEffect } from 'react';
// import { Container, Navbar, Form , Nav } from 'react-bootstrap';
// import { Link, useNavigate } from 'react-router-dom';

// const NavBar = ({ searchQuery, setSearchQuery }) => {
//   const [navExpanded, setNavExpanded] = useState(false);
//   const navigate = useNavigate();

//   const closeNav = () => {
//     setNavExpanded(false);
//   };

//   useEffect(() => {
//     // Navigate to the search page when searchQuery changes
//     if (searchQuery) {
//       const encodedQuery = encodeURIComponent(searchQuery);
//       navigate(`/search?query=${encodedQuery}`);
//     }
//   }, [searchQuery, navigate]);

//   return (
//     <Navbar
//       expand="lg"
//       className="text-white bg-black"
//       expanded={navExpanded}
//       onToggle={() => setNavExpanded(!navExpanded)}
//     >
//       <Container>
//         <Link to="/" className='text-decoration-none'>
//           <span className='text-black bg-warning px-3 py-2 fw-bold rounded-2'
//             onClick={closeNav}
//           > Eg / Sohaila Abo El-Wafa </span>
//         </Link>
//         <Navbar.Toggle aria-controls="navbarScroll" className='bg-black' />
//         <Navbar.Collapse id="navbarScroll">
//                    <Nav
//                      className="m-auto my-2 my-lg-0"
//                      style={{ maxHeight: '100px' }}
//                      navbarScroll
//                    >
//                        <Link
//                        to="/movies/popular"
//                        className="text-decoration-none me-4 fs-4 text-white link-warning"
//                        onClick={closeNav}
//                      >
//                        <span>Popular</span>
//                      </Link>
//                      <Link
//                        to="/movies/top_rated"
//                        className="text-decoration-none me-4 fs-4 text-white link-warning"
//                        onClick={closeNav}
//                      >
//                        <span>Top Rated</span>
//                      </Link>
//                      <Link
//                        to="/movies/upcoming"
//                        className="text-decoration-none me-4 fs-4 text-white link-warning"
//                        onClick={closeNav}
//                      >
//                        <span>Upcoming</span>
//                      </Link>
//                    </Nav>
//         <Form className="d-flex">
//           <Form.Control
//             onChange={(e) => {
//               setSearchQuery(e.target.value);
//             }}
//             type="search"
//             placeholder="Search"
//             className="me-2"
//             aria-label="Search"
//           />
//         </Form>
//       </Navbar.Collapse>

//       </Container>
//     </Navbar>
//   );
// };

// export default NavBar;