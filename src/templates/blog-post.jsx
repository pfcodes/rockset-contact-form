import React from 'react';
import styled from 'styled-components';
import cx from 'classnames';
import get from 'lodash/get';
import SEO from '../components/seo';
import Helmet from 'react-helmet';
import Header from '../components/header';
import Image from '../components/image';
import FormAccess from '../components/form-access';
import $ from 'jquery';
import hljs from 'highlightjs';
import FormSubscribe from '../components/form-subscribe';

const STYLES = require('../pages/resources.module.css');

export const GetStartedBanner = styled.div`
  height: 300px;

  /* for the white header text that appears in this banner */
  text-align: center;
  color: white;

  background: #f3f3f3;

  /* tablet and full screen */
  @media (min-width: 768px) {
    font-size: 28px;
    height: 250px;
  }
`;

const GetStartedModalWrapper = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${props => (props.visible ? '' : 'display: none;')}

  background: rgba(255, 255, 255, 0.8);
  z-index: 10000;
`;

const GetStartedModal = styled.div`
  position: relative;
  width: 90%;
  max-width: 562px;
  height: 250px;
  margin-top: 20vh;

  background: #f3f3f3;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const GetStartedTitle = styled.h2`
  padding-top: 55px;
  margin-bottom: -20px;

  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 110%;
  /* or 18px */

  text-align: center;

  color: #2a323f;

  /* tablet and full screen */
  @media (min-width: 768px) {
    font-size: 28px;
  }
`;

const Category = styled.div`
  height: 20px;

  background: #3d9dbc;
  border-radius: 3px;

  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 18px;

  color: #ffffff;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 5px 5px;
  margin-left: 10px;
`;

const CategoryHolder = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  margin-left: 30px;

  @media (min-width: 991px) {
    margin-left: 120px;
  }
`;

const CategoryDate = styled.div`
  height: 23px;
  font-size: 16px;
  line-height: 23px;
  color: white;

  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
`;

export const MarginAdjuster = styled.div`
  position: relative;
  top: -195px;
  margin-bottom: -195px;

  @media (max-width: 991px) {
    top: -140px;
    margin-bottom: -140px;
  }

  @media (max-width: 767px) {
    top: -75px;
    margin-bottom: -75px;
  }

  @media (max-width: 479px) {
    top: -55px;
    margin-bottom: -55px;
  }

  @media (max-width: 478px) {
    top: -16px;
    margin-bottom: -16px;
  }
`;

const BlogCTA = styled.div`
  width: 100%;
  height: 91px;
  background: #f3f3f3;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 800px) {
    flex-direction: column;
    height: 160px;
  }

  h3 {
    padding: 15px;
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 25px;

    color: #2a323f;
    margin-top: 0px;
    margin-bottom: 20px;
    text-align: center;

    @media (max-width: 800px) {
      margin-bottom: 10px;
    }
  }
`;

const SocialMedia = styled.div`
  position: sticky;
  top: 96px;
  width: 50px;
  height: 0;
  z-index: 10;

  @media (max-width: 768px) {
    display: none;
  }
`;

export default class BlogPostTemplate extends React.Component {
  state = {
    modalOpen: false,
    timeout: [],
  };

  updateLocalStorage() {
    const slug = get(this.props, 'data.contentfulBlogPost.slug');

    const obj = JSON.parse(localStorage.getItem('blogMap')) || {};
    const shownModal = localStorage.getItem('shownModal');

    obj[slug] = true;

    if (Object.keys(obj).length > 1 && !shownModal) {
      const timeoutId = setTimeout(() => this.setState({ modalOpen: true }), 10 * 1000);
      this.setState({ timeout: [...this.state.timeout, timeoutId] });
      localStorage.setItem('shownModal', true);
    }
    localStorage.setItem('blogMap', JSON.stringify(obj));
  }

  componentDidMount() {
    var d = document,
      s = d.createElement('script');
    s.src = 'https://rockset.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);

    var anchors = document.querySelectorAll('.blog-text a');
    for (var i = 0; i < anchors.length; i++) {
      anchors[i].setAttribute('target', '_blank');
    }
    this.componentDidUpdate();
  }

  componentDidUpdate() {
    $('pre code').each(function(i, block) {
      hljs.highlightBlock(block);
    });

    this.updateLocalStorage();
  }

  componentWillUnmount() {
    this.state.timeout.map(elem => clearTimeout(elem));
  }

  renderRelatedPost(link, image, title, description) {
    return (
      <div
        onClick={() => {
          window.open(link, '_blank');
        }}
        style={{ textAlign: 'left' }}
        className={cx(STYLES.resourceTile, 'resource-tile')}
      >
        <div style={{ width: '100%', textAlign: 'center' }}>
          <img src={image} alt className="resource-image" />
        </div>
        <h2 data-ix="fade-in-on-scroll" className="heading-3">
          {title}
        </h2>
        <div data-ix="fade-in-on-scroll" className={STYLES.sectionDescription}>
          {description}
        </div>
      </div>
    );
  }

  render() {
    const post = get(this.props, 'data.contentfulBlogPost');
    const relatedPosts = get(this.props, 'data.allContentfulBlogPost.edges')
      .filter(item => item.node.tags.filter(tag => post.tags.indexOf(tag) >= 0).length > 0)
      .filter(item => item.node.slug !== post.slug)
      .map(item => {
        return this.renderRelatedPost(
          `https://rockset.com/blog/${item.node.slug}`,
          `/images/${item.node.imageName}`,
          item.node.title,
          item.node.shortDescription,
        );
      })
      .slice(0, 3);

    return (
      <div>
        <GetStartedModalWrapper visible={this.state.modalOpen}>
          <GetStartedModal>
            <img
              style={{ position: 'absolute', top: '20px', right: '20px' }}
              src="/images/cross.svg"
              onClick={() => this.setState({ modalOpen: false })}
            />
            <BlogCTA>
              <h3>Sign up to receive blog updates in your inbox.</h3>
              <FormSubscribe style={{ marginLeft: '20px' }} />
            </BlogCTA>
          </GetStartedModal>
        </GetStartedModalWrapper>
        <Helmet>
          <script
            type="text/javascript"
            src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5c5e2397e58bd289"
          ></script>
        </Helmet>
        <SEO
          image={`https://rockset.com/images/${post.imageName}`}
          title={post.title}
          description={post.shortDescription}
        />
        <Header activePage="blog" />
        <div
          className="blog-post-header"
          style={{
            backgroundPosition: 'top',
          }}
        >
          <div
            className={`blog-post-header-overlay ${STYLES.blogPostHeader}`}
            style={{
              background:
                'linear-gradient(301.91deg, rgba(52, 50, 124, 0.9) 0.65%, #6B3596 54.6%, #9737AB 98.37%)',
            }}
          >
            <div className="container w-container">
              <CategoryHolder>
                <CategoryDate>{post.publishDate}</CategoryDate>
                {post.tags.map(tag => (
                  <Category>{tag}</Category>
                ))}
              </CategoryHolder>
              <h1
                data-ix="fade-in-on-load"
                className="subpage-title blog-post-title"
                style={{ textAlign: 'left' }}
              >
                {post.title}
              </h1>
            </div>
          </div>
        </div>
        <div className="section blog-page-section" style={{ background: 'white' }}>
          <div className={`container w-container ${STYLES.blogPostContainer}`}>
            <SocialMedia>
              <div
                style={{ position: 'relative' }}
                className="addthis_inline_share_toolbox_9bp8"
              ></div>
            </SocialMedia>
            <div
              className="blog-post-page-content"
              style={{ boxShadow: 'none', paddingLeft: '30px' }}
            >
              <div className="rich-text-block w-richtext">
                <div className="single-post-author-block w-clearfix">
                  <div className="post-author-photo">
                    <Image path={post.author.imageName} />
                  </div>
                  <div className="post-author-name">{post.author.name}</div>
                  <div className="post-author-name description">{post.author.title}</div>
                </div>
                <div>
                  <div className="post-author-line"></div>
                </div>
                <div
                  className="blog-text"
                  dangerouslySetInnerHTML={{
                    __html: post.body.childMarkdownRemark.html,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <MarginAdjuster>
          <GetStartedBanner>
            <GetStartedTitle>Real-time SQL on NoSQL. Start today.</GetStartedTitle>
            <FormAccess code="home-bottom" />
          </GetStartedBanner>
        </MarginAdjuster>
        <div className={`container w-container ${STYLES.blogPostContainer}`}>
          <div style={{ textAlign: 'center', padding: 20 }}>
            <h2>Related Posts</h2>
            <div className="container-3 w-container" style={{ marginBottom: '16px' }}>
              {relatedPosts}
            </div>
          </div>
          <div style={{ padding: 20 }} id="disqus_thread"></div>
        </div>
      </div>
    );
  }
}
