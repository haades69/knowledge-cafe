import PropTypes from "prop-types";

const Bookmark = ({ bookmark }) => {
  console.log(bookmark.Title);
  const { Title } = bookmark;
  return (
    <div>
      <h2 className="text-3xl ">{Title}</h2>
    </div>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.object,
};

export default Bookmark;
