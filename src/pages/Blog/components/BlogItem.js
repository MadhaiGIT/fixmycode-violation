import React from 'react';
import datetime from 'node-datetime';

const BlogItem = (props) => {
  const {onClickPost} = props;
  const {title, published, author, content, url, meta_description, featured_image, summary} = props.data;
  const date = datetime.create(new Date(published));

  return (
    <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 blog-box">
      <div onClick={() => onClickPost(url)} style={{cursor: 'pointer'}}>
        <img src={featured_image || '/images/i4.jpg'} className={"blog-image"}/>
        <div className={"blog-content"}>
          <div className={"blog-title"}>{title}</div>
          <div className={"blog-info"}>{date.format('n d, Y')}, by <span>{`${author.first_name} ${author.last_name}`}</span></div>
          <p className={"blog-text"}>{summary}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
