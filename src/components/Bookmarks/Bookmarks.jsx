import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks})=> {
   
    return (
            <div className="w-1/3">
            <h2 className=" text-3xl">bookmarks:{bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.ID} bookmark={bookmark}></Bookmark>)    
            }
            
        </div>
        
    );
};

Bookmarks.propTypes = {
    bookmarks:PropTypes.array
};

export default Bookmarks;