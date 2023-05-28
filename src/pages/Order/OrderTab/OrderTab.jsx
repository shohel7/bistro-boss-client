import React, { useEffect, useState } from "react";
import FoodCard from "../../../components/FoodCard/FoodCard";
import ReactPaginate from "react-paginate";

const OrderTab = ({ items }) => {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, items]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentItems.map((item) => (
          <FoodCard key={item._id} item={item} />
        ))}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="text-center flex justify-center gap-5 py-10"
        pageClassName="bg-yellow-600 px-3 py-.5 text-white rounded-sm"
        previousLinkClassName="text-yellow-600 font-bold"
        nextLinkClassName="text-yellow-600 font-bold"
        activeLinkClassName="active"
      />
    </div>
  );
};

export default OrderTab;

{
  /* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{items.map((item) => (
  <FoodCard key={item._id} item={item} />
))}
</div> */
}
