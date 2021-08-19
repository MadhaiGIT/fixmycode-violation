/**
 * BlogPage
 *
 * This is the page we show when the user visits a url, /blog
 *
 */
import React, {useState, useEffect, createRef} from 'react';
import Butter from 'buttercms';
import Helmet from 'react-helmet';
import GridView, {PAGE_SIZE} from './parts/GridView';
import ReadView from './parts/ReadView';
// import ContactUs from "../../components/ContactUs";
import Footer from "../../components/Footer";
import MockBlogData from "./data";

const MODE = {
  INITIAL_LIST: 1,
  SEARCH_RESULT: 2,
  READ_POST: 3,
};

const butter = Butter('24589b2a65ae685666baa0529dcf4fd4ffd2a7b5');

export default function Blog() {
  const [blogData, setBlogData] = useState(MockBlogData);
  const [post, setPost] = useState(MockBlogData.data[0]);

  const [keyWord, setKeyWord] = useState('');
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(MockBlogData.meta.count);
  const [prevPage, setPrevPage] = useState(null);
  const [nextPage, setNextPage] = useState(2);
  const [mode, setMode] = useState(MODE.INITIAL_LIST);

  const ref = createRef();

  const fetchPosts = async () => {
    if (keyWord !== '') {
      butter.post.search(keyWord, {page: page, page_size: PAGE_SIZE}).then((response) => {
        // console.log('search_resp', response);
        if (response.status === 200) {
          setBlogData(response.data);
          setMode(MODE.SEARCH_RESULT);
        }
      });
    } else {
      butter.post.list({page: page, page_size: PAGE_SIZE}).then((response) => {
        // console.log('list_resp', response);
        if (response.status === 200) {
          setBlogData(response.data);
          setMode(MODE.INITIAL_LIST);
        }
      });
    }
  };

  const handleKeyWordChange = (e) => {
    // console.log('KeyWordChange', e.target.value);
    setKeyWord(e.target.value);
  };

  const handleSearch = () => {
    fetchPosts();
  };

  const handlePageChange = (pageNum) => {
    if (!pageNum || pageNum < 1) {
      pageNum = 1;
    }
    if (pageNum > totalPage) {
      pageNum = totalPage;
    }
    setPage(pageNum);
  };

  const togglePost = (url) => {
    setMode(MODE.READ_POST);
    setPost(blogData.data.find(item => item.url === url))
  };

  const scrollToTop = () => {
    //console.log('ref', ref);
    ref.current.scrollIntoView({behavior: "smooth"});
  };

  useEffect(() => {
    const {next_page, previous_page, count} = blogData.meta;
    setNextPage(next_page);
    setPrevPage(previous_page);
    setTotalPage(Math.ceil(count / PAGE_SIZE));
  }, [blogData]);

  useEffect(() => {
    fetchPosts();
  }, [page]);

  useEffect(() => {
    // console.log('Mode', mode);
    scrollToTop();
  }, [mode, post, page]);

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <React.Fragment>
      <div id="BlogPage">
        <div data-spy="scroll" data-target=".nav-menu" data-offset={50}>
          <div ref={ref}></div>

          <div id="pageloader">
            <div className="loader-item">
              <img src="images/loading.gif" alt="loader"/>
            </div>
          </div>
          {/* Navigation Section */}
          <section id="navigation" className="shadow">
            <div className="inner navigation">
              {/* Logo Img */}

              <div className="logo">
                <a className="scroll" href="/"><img src="images/SVG/fmcv-logo-default.svg" alt="Logo" width={163}
                                                    height={94}/></a>
              </div>
              {/* Nav Menu */}
              <div className="nav-menu">
                <ul className="nav main-nav">
                  {/*<li className="active"><a className="scroll" href="#home">home</a></li>*/}
                  <li><a className="scroll" href="/">about</a></li>
                  {/*<li><a className="scroll" href="#areas">Areas</a></li>*/}
                  {/*<li><a className="scroll" href="#features">Decoder</a></li>*/}
                  <li><a href="/blog">news</a></li>
                  <li><a className="scroll" href="#contactus">contact</a></li>
                  <li><a href={"/application"}><span className={"teal-button"} style={{
                    margin: '10px 0',
                    padding: '15px 40px',
                    borderRadius: 10,
                  }}>Get Started</span></a></li>
                  <li>&nbsp;</li>
                  {/*<GetStartedNav/>*/}
                  {/*<li><a className="btn-bubble" href="tel:305.222.7784" style={{paddingRight: '10px'}}><span>Call: 305.222.7784</span></a></li>*/}

                </ul>
              </div>
              {/* Dropdown Menu For Mobile Devices*/}
              <div className="dropdown mobile-drop">
                <a data-toggle="dropdown" className="mobile-menu" href="#"><i
                  className="fa fa-bars"/></a>
                <ul className="nav dropdown-menu fullwidth" role="menu">
                  {/*<li><a className="scroll" href="#home">home</a></li>*/}
                  <li><a className="scroll" href="#about">about</a></li>
                  {/*<li><a className="scroll" href="#areas">Areas</a></li>*/}
                  {/*<li><a className="scroll" href="#features">Decoder</a></li>*/}
                  <li><a className="scroll" href="#news">News</a></li>
                  {/*<GetStartedNav/>*/}
                  <li><a className="scroll" href="#contactus">contact</a></li>
                  <li><a className="scroll" href="/application">Get Started</a></li>
                </ul>
              </div>
              <div className="clear"/>
            </div>
          </section>
          {/* End Navigation Section */}
          {/* News Section */}
          {mode !== MODE.READ_POST && <section id="news" className="contain" style={{backgroundColor: '#3eb5a0'}}>
            <div className="inner">
              {/* Iphone images */}
              <div className="w-iphone {/*animated*/} col-lg-5 col-md-5 col-sm-12 hidden-xs"
                   data-animation="fadeInLeft"
                   data-animation-delay={0}>
                <img src="images/SVG/newspaper.svg" alt="wisten-iphone"/>
              </div>
              <div className="page-desc col-lg-6 col-md-6 col-sm-12 col-xs-12"
                   style={{textAlign: 'left', padding: 20}}>
                <h5 className={"desktop-only"} style={{color: '#004042'}}>
                  Check <span className="checkSpan">out <br/> the</span> Latest Building<br/>
                  News<span style={{color: '#fff'}}>.</span>
                </h5>
                <h5 className={"mobile-only"} style={{color: '#004042', fontSize: 36}}>
                  <span style={{color: '#fff', fontStyle: 'italic', fontWeight: 400}}>Latest</span> Building<br/>
                  News.
                </h5>
                <div className="underscore" id="checkUnderScore"
                     style={{width: 140, height: 4, backgroundColor: '#004042'}}/>
                <br/>
                <p className={"mobile-only"} style={{
                  color: '#004042',
                  fontSize: 15,
                  fontWeight: 500
                }}>
                  FixMyCodeViolation.com also like to keep you informed. We do this by keeping you up-to-date on all the
                  latest news, code changes, explanations, and case studies around the building and construction across
                  the city of Miami.
                </p>
              </div>
              <div className="w-iphone animated col-xs-12 hidden-lg hidden-sm hidden-md hidden-xs"
                   data-animation="fadeInLeft"
                   data-animation-delay={0} style={{width: '100%', textAlign: 'center', marginLeft: '0'}}>
                <img src="images/SVG/newspaper.svg" alt="wisten-iphone"/>
              </div>
              <div className="clear"/>
            </div>
          </section>}
          {/* End News Section */}
          {/* Blog Section */}
          {mode === MODE.INITIAL_LIST &&
          <GridView blogData={blogData} onClickPost={togglePost} page={page} totalPage={totalPage}
                    nextPage={nextPage} prevPage={prevPage} onPageChange={handlePageChange}/>}
          {mode === MODE.SEARCH_RESULT &&
          <GridView blogData={blogData} searchResult={true} onClickPost={togglePost} page={page}
                    totalPage={totalPage} nextPage={nextPage} prevPage={prevPage} onPageChange={handlePageChange}/>}
          {mode === MODE.READ_POST &&
          <ReadView post={post} recentPosts={blogData.data} keyWord={keyWord} onKeyWordChange={handleKeyWordChange}
                    onSearch={handleSearch} onClickPost={togglePost}/>}
          {/* End Blog Section */}

          <div className="clear"/>
          {/* Contact Section */}
          <div id="contactus"/>
          {/*<ContactUs/>*/}
          {/* End contact Section */}

          {/* Footer Section */}
          <Footer/>
          {/*<button onClick={scrollToTop}>DDD</button>*/}

          {/* End Footer Section */}
          {/* Back To Top Button */}
          <section id="back-top">
            <a href="#navigation" className="scroll"/>
          </section>
        </div>
      </div>
      <Helmet>
        <script type="text/javascript" src="./js/plugins.js"></script>
        <script type="text/javascript" src="./js/main.js"></script>
        <script type="text/javascript" src="./js/custom.js"></script>
        <script src="https://www.google.com/recaptcha/api.js"></script>
      </Helmet>
    </React.Fragment>
  );
}
