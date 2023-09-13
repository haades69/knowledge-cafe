import PropTypes from "prop-types";

const Blog = ({ blog, handleAddToBookmark }) => {
  const {
    Title,
    Cover,
    Author,
    Author_img,
    Reading_time,
    Posted_date,
    Hashtags,
  } = blog;
  return (
    <div>
      <img className=" w-2/3" src={Cover} alt={`cover pic of ${Title}`} />
      <div className="flex justify-between items-center">
        <div className="flex justify-around">
          <img className="w-14 rounded-full" src={Author_img} alt="" />
          <div>
            <h3 className="">{Author} </h3>
            <h4 className="">{Posted_date}</h4>
          </div>
        </div>
        <div>
          <span>{Reading_time} min read</span>
          <button
            onClick={() => handleAddToBookmark(blog)}
            className=" bg-teal-50"
          >
            bo
          </button>
        </div>
      </div>
      <h2 className="text-4xl">{Title}</h2>
      <p>{Hashtags} </p>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func.isRequired,
};
export default Blog;
