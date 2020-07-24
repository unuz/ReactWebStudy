import React from 'react';

//query param
/* locaton.search를 파싱 */
const Search = ({ location }) => {
    return (
        <div>
            {new URLSearchParams(location.search).get('keyword')} 검색
        </div>
    );
};

export default Search;