import React, { useEffect } from "react";

function Nav({ pages = [], setCurrentPage, currentPage }) {
  useEffect(() => {
    document.title = currentPage.name;
  }, [currentPage]);

  return (
    <div className="navDiv">
      <ul className="flex-row">
        {pages.map((Page) => (
          <li
            id="navlink"
            className={`mx-5 ${currentPage.name === Page.name && "navActive"}`}
            key={Page.name}
          >
            <span onClick={() => setCurrentPage(Page)}>{Page.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Nav;
