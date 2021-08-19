import React from 'react';
import datetime from 'node-datetime';
import SearchButton from '../components/SearchButton';

const mockPost = {
    "status": "published",
    "created": "2020-12-08T19:31:17.870745Z",
    "updated": "2020-12-08T19:31:23.005609Z",
    "published": "2020-01-10T05:00:00Z",
    "title": "Miami: Pillar of Construction and Hospitality",
    "slug": "miami-pillar-of-construction-and-hospitality",
    "body": "<p>Miami has been ranked as the leading city in business development and among the top in terms of population growth. In 2018 the travel industry records &mdash; 16.5 million medium-term guests and 6.8 multi day-trippers came through. The trend continued in 2019 and 2020 is probably going to top those. The entirety of this looks good for the city&rsquo;s hospitality industry.&nbsp;</p>\r\n<p>Miami a more secure spot than most to work together in light of low duties and the various guest set it draws in: South Americans, Europeans and seasonal residents. With a quickly changing downtown area, downtown is at last thick enough to support day in and day out caf&eacute;s. The environment is at long last prepared.&nbsp;</p>\r\n<p>Miami&rsquo;s midtown populace has expanded by 40% since 2000, as per the Downtown Development Authority. The $2.7B blended use Miami Worldcenter is in progress on just about 30 sections of land.&nbsp;</p>\r\n<p>Glancing back at history, Miami and its neighboring markets (Broward and Palm Beach over to Naples and down to the Keys) rose up out of the Great Recession on the main edge of the best 25 U.S. inn markets and have commonly been an innovator in development and forward sign of the more extensive national market this cycle. Miami has developed as the No. 1 U.S. market for RevPAR development so far in 2018, when STR information is balanced for Super Bowl sway.&nbsp;</p>\r\n<p>In 2016 and 2017, new lodgings that were coming on the web needed to promptly limit their costs to attempt to discover whatever waning interest they could. Existing properties needed to pick whether to hold the line and lose inhabitance or capitulate to the solid ADR pressure displayed by this new stockpile and further undercut by forceful OTAs and AirBnB.&nbsp;</p>\r\n<p>The downturn was felt similarly in the exchange and capital markets. Purchasers looked somewhere else. Without precedent for over 10 years, Miami was redlined in numerous speculation councils. Money Street examiners who a brief time back chastised REITs from not having enough Miami nearness were currently advised similar organizations for their &ldquo;overwhelming Miami presentation.&rdquo; Transaction action plunged, and merchants pulled back from the market, selecting to either hold resources longer term or renegotiate in lieu of stripping.&nbsp;</p>\r\n<p>Miami hospitality industry is encountering a solid rebound because of the headwinds of 2016 and 2017. A rebound that started in July and has displayed a resurgence since Hurricane Irma. Miami has been one of the best five RevPAR development showcases in the nation since July, except for the period of September because of Hurricane Irma, and posting twofold digit RevPAR development rates. Numerous inns on Miami Beach are revealing a record-high season so far in 2020.</p>",
    "summary": "Miami has been ranked as the leading city in business development and among the top in terms of population growth. In 2018 the travel industry records — 16.5 million medium-term guests and 6.8 multi day-trippers came through. The trend continued in 2019 and 2020 is probably going to top those. ...",
    "seo_title": "Miami: Pillar of Construction and Hospitality",
    "meta_description": "Miami has been ranked as the leading city in business development and among the top in terms of population growth. In 2018 the travel indust",
    "featured_image_alt": "",
    "url": "miami-pillar-of-construction-and-hospitality",
    "featured_image": "https://cdn.buttercms.com/Q5E9tRQ0cHrcgj9HwGQM",
    "author": {
      "bio": "",
      "slug": "default-author",
      "email": "jonathan@thinksglassfull.com",
      "title": "",
      "last_name": "",
      "first_name": "",
      "facebook_url": "",
      "linkedin_url": "",
      "instagram_url": "",
      "pinterest_url": "",
      "profile_image": "https://avatars3.githubusercontent.com/u/71606450?v=4",
      "twitter_handle": ""
    },
    "tags": [],
    "categories": [
      {
        "name": "",
        "slug": ""
      }
    ]
  };

export default function (props) {
  let {post, keyWord, onKeyWordChange, onSearch, recentPosts, onClickPost} = props;
  if (!post) {
    post = mockPost;
  }
  const {title, published, author, body, url, meta_description, featured_image, summary, categories} = post;
  const date = post && post.published ? datetime.create(new Date(published)) : new Date();
  let categoryArray = [];
  if (categories) {
    for (let item of categories) {
      if (item.name) { // name, slug
        categoryArray.push(item.name);
      }
    }
  }
  if (categoryArray.length < 1) {
    categoryArray.push('Uncategorized')
  }

  let recentPostsArray = [];
  for (let item of recentPosts) {
    if (item.url !== post.url) {
      recentPostsArray.push(
        {
          title: item.title,
          url: item.url,
        }
      )
    }
  }

  // console.log('categories', categoryArray);

  return (
    <section id="features" className="contain" style={{padding: '0 0 600px 0', backgroundImage: 'url(\'/images/SVG/clouds-blog.svg\')', backgroundSize: 'cover'}}>
      <div className="inner" style={{paddingBottom: '100px'}}>
        {/* Second Header */}
        <div className="row">
          <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12 text-left">
            <br />
            <div style={{color: '#004042', fontWeight: 800, fontSize: 24, lineHeight: '32px'}}>
              {title}
            </div>
            <div className={"row blog-body"}>
              <div className={"col-lg-5 col-md-5 col-sm-12 col-xs-12"}>
                <div className={"blog-info"}>{date.format('n d, Y')}, by <span>{`${author.first_name} ${author.last_name}`}</span></div>
              </div>
              <div className={"col-lg-7 col-md-7 col-sm-12 col-xs-12"}>
                <div className={"blog-info"} style={{color: '#172937', fontSize: 12, fontWeight: 400, lineHeight: '16px'}}>Categories: <span style={{color: '#666666'}}>{categoryArray.join(', ')}</span></div>
              </div>
              <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12"}>
                <img src={featured_image || '/images/i4.jpg'} alt={"post-image"} style={{width: '100%'}}/>
              </div>
              <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12"} dangerouslySetInnerHTML={{__html: body}}  style={{padding: 10, color: '#2D526B', fontHeight: '30px', fontSize: '14px', fontFamily: "'Montserrat', sans-serif"}}>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12" style={{paddingTop: '0px'}}>
            <div style={{color: '#2d526b', textAlign: 'justify'}}>
              Search
              <SearchButton value={keyWord} onChange={onKeyWordChange} onSearch={onSearch}/>
              <br />
              <br />
              Recent Posts
              {recentPostsArray.map((item, index) => {
                return (
                  <div key={index} onClick={() => onClickPost(item.url)} style={{color: '#34BCAF', fontSize: 14, fontWeight: 400, lineHeight: '23.8px', fontFamily: "Montserrat, sans-serif", margin: 10, cursor: 'pointer'}}>
                    {item.title}
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="clear"/>
      </div>
      {/* End Inner div */}
    </section>
  );
}
