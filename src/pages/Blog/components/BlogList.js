import React from 'react';
import BlogItem from './BlogItem';

const BlogList = (props) => {
  const {data, onClickPost} = props;
  // console.log('data', data);

  let rowGroup = [], temp = [];
  for (let item of data) {
    temp.push(item);
    if (temp.length >= 3) {
      rowGroup.push(temp);
      temp = [];
    }
  }

  if (temp.length > 0) {
    rowGroup.push(temp)
  }

  return (
    <div>
      {
        rowGroup.length> 0 ? rowGroup.map((row, rIdx) => {
          return (
            <div className="row" key={rIdx}>
              {
                row.map((item, iIdx) => {
                  return (<BlogItem data={item} key={iIdx} onClickPost={onClickPost}/>)
                })
              }
            </div>
          )
        }) : <p style={{color: '#2d526b'}}>
          No result
        </p>
      }
    </div>
  );
};

export default BlogList;
