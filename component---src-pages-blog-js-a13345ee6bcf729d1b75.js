(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"84bF":function(e,t,a){"use strict";a("OGtf")("small",(function(e){return function(){return e(this,"small","","")}}))},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("INYr"),a("0mN4");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),s=r(a("VbXa")),o=r(a("8OQS")),d=r(a("pVnL")),l=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,d.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},g=function(e){var t=e.fluid,a=e.fixed;return m(t||a).src},m=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},p=Object.create({}),h=function(e){var t=u(e),a=g(t);return p[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,v=y&&window.IntersectionObserver,S=new WeakMap;function w(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},r&&l.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),l.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function E(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function I(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function x(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var O=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),S.set(e,t)),function(){a.unobserve(e),S.delete(e)}},z=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?x(e,!0):"")+x(e)})).join("")+"<img "+l+s+o+a+r+t+n+i+d+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},C=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=e.ariaHidden,s=l.default.createElement(V,(0,d.default)({src:t},i,{ariaHidden:n}));return a.length>1?l.default.createElement("picture",null,r(a),s):s},V=l.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,g=e.ariaHidden,m=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,d.default)({"aria-hidden":g,sizes:a,srcSet:r,src:i},m,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));V.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var R=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=y&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&v&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||y&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=O(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=g(t),p[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,g=e.placeholderClassName,p=e.fluid,h=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,v=e.Tag,S=e.itemProp,E=e.loading,x=e.draggable,O=!1===this.state.fadeIn||this.state.imgLoaded,R=!0===this.state.fadeIn&&!this.state.imgCached,N=(0,d.default)({opacity:O?1:0,transition:R?"opacity "+y+"ms":"none"},o),_="boolean"==typeof b?"lightgray":b,k={transitionDelay:y+"ms"},T=(0,d.default)({opacity:this.state.imgLoaded?0:1},R&&k,{},o,{},f),P={title:t,alt:this.state.isVisible?"":a,style:T,className:g,itemProp:S};if(p){var H=p,j=m(p);return l.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(j.srcSet)},l.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/j.aspectRatio+"%"}}),_&&l.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:_,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},R&&k)}),j.base64&&l.default.createElement(C,{ariaHidden:!0,src:j.base64,spreadProps:P,imageVariants:H,generateSources:L}),j.tracedSVG&&l.default.createElement(C,{ariaHidden:!0,src:j.tracedSVG,spreadProps:P,imageVariants:H,generateSources:I}),this.state.isVisible&&l.default.createElement("picture",null,w(H),l.default.createElement(V,{alt:a,title:t,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:E,draggable:x})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,d.default)({alt:a,title:t,loading:E},j,{imageVariants:H}))}}))}if(h){var q=h,F=m(h),G=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:F.width,height:F.height},n);return"inherit"===n.display&&delete G.display,l.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:G,ref:this.handleRef,key:"fixed-"+JSON.stringify(F.srcSet)},_&&l.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:_,width:F.width,opacity:this.state.imgLoaded?0:1,height:F.height},R&&k)}),F.base64&&l.default.createElement(C,{ariaHidden:!0,src:F.base64,spreadProps:P,imageVariants:q,generateSources:L}),F.tracedSVG&&l.default.createElement(C,{ariaHidden:!0,src:F.tracedSVG,spreadProps:P,imageVariants:q,generateSources:I}),this.state.isVisible&&l.default.createElement("picture",null,w(q),l.default.createElement(V,{alt:a,title:t,width:F.width,height:F.height,sizes:F.sizes,src:F.src,crossOrigin:this.props.crossOrigin,srcSet:F.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:E,draggable:x})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,d.default)({alt:a,title:t,loading:E},F,{imageVariants:q}))}}))}return null},t}(l.default.Component);R.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var N=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),_=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});R.propTypes={resolutions:N,sizes:_,fixed:c.default.oneOfType([N,c.default.arrayOf(N)]),fluid:c.default.oneOfType([_,c.default.arrayOf(_)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var k=R;t.default=k},INYr:function(e,t,a){"use strict";var r=a("XKFU"),i=a("CkkT")(6),n="findIndex",s=!0;n in[]&&Array(1)[n]((function(){s=!1})),r(r.P+r.F*s,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a("nGyu")(n)},vx99:function(e,t,a){"use strict";a.r(t),a.d(t,"blogPageQuery",(function(){return v}));a("84bF");var r=a("q1tI"),i=a.n(r),n=a("vOnD"),s=a("9eSz"),o=a.n(s),d=a("Wbzz"),l=a("89ka"),c=a("vrFN");function u(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n    margin-top: 2rem;\n  "]);return u=function(){return e},e}var f=n.e.div.withConfig({displayName:"blog__Container",componentId:"sc-15xlt4x-0"})(["margin:0 auto;max-width:42rem;padding:0 2rem;",""],l.d.sm(u())),g=n.e.h2.withConfig({displayName:"blog__Heading",componentId:"sc-15xlt4x-1"})(["text-align:center;font-size:3rem;margin-bottom:4rem;"]),m=n.e.article.withConfig({displayName:"blog__BlogCard",componentId:"sc-15xlt4x-2"})(["margin-bottom:8rem;"]),p=n.e.h3.withConfig({displayName:"blog__Title",componentId:"sc-15xlt4x-3"})(["font-size:2rem;margin-bottom:0;> a{color:",";text-decoration:none;}"],(function(e){return e.theme.colors.text})),h=n.e.small.withConfig({displayName:"blog__Date",componentId:"sc-15xlt4x-4"})([""]),b=n.e.header.withConfig({displayName:"blog__Header",componentId:"sc-15xlt4x-5"})(["margin-bottom:0.5rem;"]),y=Object(n.e)(o.a).withConfig({displayName:"blog__Image",componentId:"sc-15xlt4x-6"})(["border-radius:5px;margin-bottom:0.2em;"]);t.default=function(e){var t=e.data,a=e.location,r=t.allMdx.nodes;return i.a.createElement(f,null,i.a.createElement(c.a,{title:"Blog",slug:a.pathname}),i.a.createElement(g,null,"Blog"),r.map((function(e){return i.a.createElement(m,{key:e.id},i.a.createElement(b,null,!!e.frontmatter.cover&&i.a.createElement(d.Link,{to:e.fields.slug,"aria-label":"View "+e.frontmatter.title+" page"},i.a.createElement(y,{sizes:e.frontmatter.cover.childImageSharp.sizes})),i.a.createElement(p,null,i.a.createElement(d.Link,{to:e.fields.slug,"aria-label":"View "+e.frontmatter.title+" page"},e.frontmatter.title)),i.a.createElement(h,null,e.frontmatter.date)),i.a.createElement("section",null,e.excerpt))})))};var v="1917009418"}}]);
//# sourceMappingURL=component---src-pages-blog-js-a13345ee6bcf729d1b75.js.map