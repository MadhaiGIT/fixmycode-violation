import React from 'react';
import BlogList from "../components/BlogList";
import Pagination from "../components/Pagination";

export const PAGE_SIZE = 9;

export default function (props) {
  const {blogData, onClickPost, page, totalPage, nextPage, prevPage, onPageChange} = props;
  const {searchResult} = props;

  return (
    <section id="features" className="contain" style={{
      padding: '0 0 600px 0',
      backgroundImage: 'url(\'/images/SVG/clouds-blog.svg\')',
      backgroundSize: 'cover'
    }}>
      <div className="inner" style={{paddingBottom: '100px'}}>
        {/* Second Header */}
        <div className="page-desc desktop-only" style={{color: '#fff'}}>
          <div className="col-lg-5 col-md-5 col-sm-12">
            {searchResult ? <h5 style={{color: '#2d526b'}}>
              <span>Search</span> Results <span style={{color: '#34bcaf'}}>.</span>
            </h5> : <h5 style={{color: '#2d526b'}}>
              <span>Latest</span> News <span style={{color: '#34bcaf'}}>.</span>
            </h5>}
            <div className="underscore" style={{width: 160, height: 3}}/>
            <br/>
          </div>
          <div className="col-lg-7 col-md-7 col-sm-12" style={{paddingTop: '0px'}}>
            <p style={{color: '#2d526b', textAlign: 'justify'}}>

            </p>
          </div>
        </div>
        <BlogList data={blogData.data} onClickPost={onClickPost}/>

        {blogData.data.length &&
        <Pagination page={page} totalPage={totalPage} nextPage={nextPage} prevPage={prevPage}
                    onPageChange={onPageChange}/>}

        <div className="clear"/>
      </div>
      {/* End Inner div */}
    </section>
  )
}
