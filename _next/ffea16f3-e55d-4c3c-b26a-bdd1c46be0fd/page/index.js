module.exports=__NEXT_REGISTER_PAGE("/",function(){var s=webpackJsonp([3],{222:function(s,e,n){s.exports=n(223)},223:function(s,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:true});var t=n(3);var a=m(t);var o=n(93);var l=m(o);var i=n(101);var r=m(i);var c=n(66);var p=m(c);var h=n(224);var d=m(h);function m(s){return s&&s.__esModule?s:{default:s}}var u=function s(e){return a.default.createElement(l.default,{title:p.default.title,subtitle:p.default.subtitle,description:p.default.description,stylesheets:p.default.stylesheets,topLinks:p.default.topLinks,bodyHtml:d.default.bodyHtml,repo:p.default.repo,user:p.default.user,siteId:p.default.siteId,extraElements:a.default.createElement(r.default,null)})};e.default=u},224:function(s,e){s.exports={bodyContent:"<h1 class=\"dn\">\n<a href=\"http://tscanlin.github.io/tocbot\">Tocbot</a>\n</h1>\n\n<a class=\"no-decoration\" href=\"https://travis-ci.org/tscanlin/tocbot\" target=\"_blank\"><img src=\"https://travis-ci.org/tscanlin/tocbot.svg?branch=master\" alt=\"travis-ci\" /></a>\n\nTocbot builds a [table of contents](https://en.wikipedia.org/wiki/Table_of_contents) (TOC) from headings in an HTML document. This is useful for documentation websites or long markdown pages because it makes them easier to navigate. This library was inspired by [Tocify](http://gregfranko.com/jquery.tocify.js/), the main difference is that Tocbot uses native DOM methods and avoids the jQuery & jQuery UI dependencies.\n\n\n## Get Started\n\nYou can use npm to install it or include the script on the page with HTML.\n\n[**Download it here**](https://github.com/tscanlin/tocbot/releases/)\n\n\n### Include JS\n\nInstall it with npm.\n\n```sh\nnpm install --save tocbot\n```\n\nOR\n\nInclude the script at the bottom of the page before the closing body tag.\n\n```html\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/tocbot/4.1.1/tocbot.min.js\"><\/script>\n```\n\n\n### Include CSS\n\nCSS is used for expanding & collapsing groupings and some basic styling.\n\n```html\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/tocbot/4.1.1/tocbot.css\">\n```\n\nOR\n\nIf you installed it with npm and use sass / postcss you might try importing the styles from 'node_modules', [see the includePath option documentation for more info](https://github.com/sass/node-sass#includepaths)\n\n```scss\n@import 'tocbot/src/scss/tocbot-core';\n@import 'tocbot/src/scss/tocbot-default-theme';\n```\n\n\n### Usage\n\nInitialize the script\n\n```js\ntocbot.init({\n  // Where to render the table of contents.\n  tocSelector: '.js-toc',\n  // Where to grab the headings to build the table of contents.\n  contentSelector: '.js-toc-content',\n  // Which headings to grab inside of the contentSelector element.\n  headingSelector: 'h1, h2, h3',\n});\n```\n\n**NOTE:** Make sure headings have id attributes, tocbot and your browser needs these to make hashes jump to the proper heading, some markdown libraries (like [marked](https://github.com/chjj/marked)) already do this for you.\n\nIf content in the div has changed then trigger a refresh (optionally with new options).\n\n```javascript\ntocbot.refresh();\n```\n\n\n## Examples\n\n- [Tocbot Homepage](http://tscanlin.github.io/tocbot/)\n- [Pagekit TOC](https://spqr.wtf/projects/toc)\n- [Optimizely's Developer Documentation](https://developers.optimizely.com/x/solutions/javascript/reference/index.html)\n\nIf you'd like to add your page to this list open a pull request.\n\n\n## Requirements\n\nThis library uses **vanilla JavaScript**. It is less than 350 bytes of CSS and about 3.6Kb of JavaScript (minified and gzipped) it also has no dependencies.\n\nThis script works in **all modern browsers and IE 9+**.\n\n**NOTE:** to exclude anchor elements from smooth scrolling, add the class `no-smooth-scroll`.\n\nMake sure rendered headings have id attributes, some markdown libraries (like [marked](https://github.com/chjj/marked)) already do this.\n\n### Fixed headers\n\nTo handle anchor links properly when you have a fixed header, I recommend using CSS similar to the following:\n\n```css\nh1::before, h2::before, h3::before, h4::before, h5::before, h6::before {\n    display: block;\n    content: \" \";\n    height: 60px;\n    margin-top: -60px;\n    visibility: hidden;\n}\n```\n\nThis is better than javascript solutions since it will work when javascript is disabled.\n\n\n## API\n\n### Options\n\n```javascript\n// Where to render the table of contents.\ntocSelector: '.js-toc',\n// Where to grab the headings to build the table of contents.\ncontentSelector: '.js-toc-content',\n// Which headings to grab inside of the contentSelector element.\nheadingSelector: 'h1, h2, h3',\n// Headings that match the ignoreSelector will be skipped.\nignoreSelector: '.js-toc-ignore',\n// Main class to add to links.\nlinkClass: 'toc-link',\n// Extra classes to add to links.\nextraLinkClasses: '',\n// Class to add to active links,\n// the link corresponding to the top most heading on the page.\nactiveLinkClass: 'is-active-link',\n// Main class to add to lists.\nlistClass: 'toc-list',\n// Extra classes to add to lists.\nextraListClasses: '',\n// Class that gets added when a list should be collapsed.\nisCollapsedClass: 'is-collapsed',\n// Class that gets added when a list should be able\n// to be collapsed but isn't necessarily collpased.\ncollapsibleClass: 'is-collapsible',\n// Class to add to list items.\nlistItemClass: 'toc-list-item',\n// How many heading levels should not be collpased.\n// For example, number 6 will show everything since\n// there are only 6 heading levels and number 0 will collpase them all.\n// The sections that are hidden will open\n// and close as you scroll to headings within them.\ncollapseDepth: 0,\n// Smooth scrolling enabled.\nscrollSmooth: true,\n// Smooth scroll duration.\nscrollSmoothDuration: 420,\n// Callback for scroll end.\nscrollEndCallback: function (e) { },\n// Headings offset between the headings and the top of the document (this is meant for minor adjustments).\nheadingsOffset: 1,\n// Timeout between events firing to make sure it's\n// not too rapid (for performance reasons).\nthrottleTimeout: 50,\n// Element to add the positionFixedClass to.\npositionFixedSelector: null,\n// Fixed position class to add to make sidebar fixed after scrolling\n// down past the fixedSidebarOffset.\npositionFixedClass: 'is-position-fixed',\n// fixedSidebarOffset can be any number but by default is set\n// to auto which sets the fixedSidebarOffset to the sidebar\n// element's offsetTop from the top of the document on init.\nfixedSidebarOffset: 'auto',\n// includeHtml can be set to true to include the HTML markup from the\n// heading node instead of just including the textContent.\nincludeHtml: false,\n// onclick function to apply to all links in toc. will be called with\n// the event as the first parameter, and this can be used to stop,\n// propagation, prevent default or perform action\nonClick: false\n```\n\n\n### Methods\n\n#### .init\n\nInitialize tocbot with an options object.\n\n```javascript\ntocbot.init(options)\n```\n\n#### .destroy\n\nDestroy tocbot and remove event listeners.\n\n```javascript\ntocbot.destroy()\n```\n\n#### .refresh\n\nRefresh tocbot if the document changes and it needs to be rebuilt.\n\n```javascript\ntocbot.refresh()\n```\n\n\n## Roadmap\n\n- More tests\n- React.js support (make react support native without direct dom manipulation)\n\n\n## Contributing\n\nContributions and suggestions are welcome! Please feel free to open an issue if you run into a problem or have a feature request. I'll do my best to respond in a timely fashion.\n\nIf you want to open a pull request just fork the repo but please make sure all tests and lint pass.\n\n\n### Running Tests\n\n#### All tests\n```bash\nnpm run test\n```\n\n#### With debugger\nYou can run tests through [node-inspector](https://github.com/node-inspector/node-inspector).\n\n[For now, you may need to use node v6 or lower](https://github.com/node-inspector/node-inspector/issues/950#issuecomment-264289415)...\n```bash\nnvm use 6\n```\n\nOnce you're on node v6 or lower:\n```bash\nnpm install node-inspector\n```\n\nNow that node-inspector is installed, you can run the tests!\n```bash\nnpm run test:debug\n```\n\n## Steps to publish\n\n- Push a branch and open a pull request\n- run `npm version <patch|minor|major>`\n- Update readme.md with notes\n- Merge the pull request\n- commit dist/\n- run `npm publish`\n- make release on github\n\n\n## License\n\n[MIT]('http://opensource.org/licenses/MIT')",bodyHtml:'<h1 class="dn">\n<a href="http://tscanlin.github.io/tocbot">Tocbot</a>\n</h1>\n<p><a class="no-decoration" href="https://travis-ci.org/tscanlin/tocbot" target="_blank"><img src="https://travis-ci.org/tscanlin/tocbot.svg?branch=master" alt="travis-ci" /></a></p>\n<p>Tocbot builds a <a href="https://en.wikipedia.org/wiki/Table_of_contents">table of contents</a> (TOC) from headings in an HTML document. This is useful for documentation websites or long markdown pages because it makes them easier to navigate. This library was inspired by <a href="http://gregfranko.com/jquery.tocify.js/">Tocify</a>, the main difference is that Tocbot uses native DOM methods and avoids the jQuery &amp; jQuery UI dependencies.</p>\n<h2 id="get-started">Get Started</h2>\n<p>You can use npm to install it or include the script on the page with HTML.</p>\n<p><a href="https://github.com/tscanlin/tocbot/releases/"><strong>Download it here</strong></a></p>\n<h3 id="include-js">Include JS</h3>\n<p>Install it with npm.</p>\n<pre><code class="hljs">npm install --save tocbot</code></pre><p>OR</p>\n<p>Include the script at the bottom of the page before the closing body tag.</p>\n<pre><code class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"https://cdnjs.cloudflare.com/ajax/libs/tocbot/4.1.1/tocbot.min.js"</span>&gt;</span><span class="undefined"></span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></code></pre><h3 id="include-css">Include CSS</h3>\n<p>CSS is used for expanding &amp; collapsing groupings and some basic styling.</p>\n<pre><code class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">link</span> <span class="hljs-attr">rel</span>=<span class="hljs-string">"stylesheet"</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"https://cdnjs.cloudflare.com/ajax/libs/tocbot/4.1.1/tocbot.css"</span>&gt;</span></code></pre><p>OR</p>\n<p>If you installed it with npm and use sass / postcss you might try importing the styles from \'node_modules\', <a href="https://github.com/sass/node-sass#includepaths">see the includePath option documentation for more info</a></p>\n<pre><code class="hljs">@<span class="hljs-keyword">import</span> <span class="hljs-string">\'tocbot/src/scss/tocbot-core\'</span>;\n@<span class="hljs-keyword">import</span> <span class="hljs-string">\'tocbot/src/scss/tocbot-default-theme\'</span>;</code></pre><h3 id="usage">Usage</h3>\n<p>Initialize the script</p>\n<pre><code class="hljs">tocbot.init({\n  <span class="hljs-comment">// Where to render the table of contents.</span>\n  tocSelector: <span class="hljs-string">\'.js-toc\'</span>,\n  <span class="hljs-comment">// Where to grab the headings to build the table of contents.</span>\n  contentSelector: <span class="hljs-string">\'.js-toc-content\'</span>,\n  <span class="hljs-comment">// Which headings to grab inside of the contentSelector element.</span>\n  headingSelector: <span class="hljs-string">\'h1, h2, h3\'</span>,\n});</code></pre><p><strong>NOTE:</strong> Make sure headings have id attributes, tocbot and your browser needs these to make hashes jump to the proper heading, some markdown libraries (like <a href="https://github.com/chjj/marked">marked</a>) already do this for you.</p>\n<p>If content in the div has changed then trigger a refresh (optionally with new options).</p>\n<pre><code class="hljs">tocbot.refresh();</code></pre><h2 id="examples">Examples</h2>\n<ul>\n<li><a href="http://tscanlin.github.io/tocbot/">Tocbot Homepage</a></li>\n<li><a href="https://spqr.wtf/projects/toc">Pagekit TOC</a></li>\n<li><a href="https://developers.optimizely.com/x/solutions/javascript/reference/index.html">Optimizely\'s Developer Documentation</a></li>\n</ul>\n<p>If you\'d like to add your page to this list open a pull request.</p>\n<h2 id="requirements">Requirements</h2>\n<p>This library uses <strong>vanilla JavaScript</strong>. It is less than 350 bytes of CSS and about 3.6Kb of JavaScript (minified and gzipped) it also has no dependencies.</p>\n<p>This script works in <strong>all modern browsers and IE 9+</strong>.</p>\n<p><strong>NOTE:</strong> to exclude anchor elements from smooth scrolling, add the class <code>no-smooth-scroll</code>.</p>\n<p>Make sure rendered headings have id attributes, some markdown libraries (like <a href="https://github.com/chjj/marked">marked</a>) already do this.</p>\n<h3 id="fixed-headers">Fixed headers</h3>\n<p>To handle anchor links properly when you have a fixed header, I recommend using CSS similar to the following:</p>\n<pre><code class="hljs"><span class="hljs-selector-tag">h1</span><span class="hljs-selector-pseudo">::before</span>, <span class="hljs-selector-tag">h2</span><span class="hljs-selector-pseudo">::before</span>, <span class="hljs-selector-tag">h3</span><span class="hljs-selector-pseudo">::before</span>, <span class="hljs-selector-tag">h4</span><span class="hljs-selector-pseudo">::before</span>, <span class="hljs-selector-tag">h5</span><span class="hljs-selector-pseudo">::before</span>, <span class="hljs-selector-tag">h6</span><span class="hljs-selector-pseudo">::before</span> {\n    <span class="hljs-attribute">display</span>: block;\n    <span class="hljs-attribute">content</span>: <span class="hljs-string">" "</span>;\n    <span class="hljs-attribute">height</span>: <span class="hljs-number">60px</span>;\n    <span class="hljs-attribute">margin-top</span>: -<span class="hljs-number">60px</span>;\n    <span class="hljs-attribute">visibility</span>: hidden;\n}</code></pre><p>This is better than javascript solutions since it will work when javascript is disabled.</p>\n<h2 id="api">API</h2>\n<h3 id="options">Options</h3>\n<pre><code class="hljs"><span class="hljs-comment">// Where to render the table of contents.</span>\ntocSelector: <span class="hljs-string">\'.js-toc\'</span>,\n<span class="hljs-comment">// Where to grab the headings to build the table of contents.</span>\ncontentSelector: <span class="hljs-string">\'.js-toc-content\'</span>,\n<span class="hljs-comment">// Which headings to grab inside of the contentSelector element.</span>\nheadingSelector: <span class="hljs-string">\'h1, h2, h3\'</span>,\n<span class="hljs-comment">// Headings that match the ignoreSelector will be skipped.</span>\nignoreSelector: <span class="hljs-string">\'.js-toc-ignore\'</span>,\n<span class="hljs-comment">// Main class to add to links.</span>\nlinkClass: <span class="hljs-string">\'toc-link\'</span>,\n<span class="hljs-comment">// Extra classes to add to links.</span>\nextraLinkClasses: <span class="hljs-string">\'\'</span>,\n<span class="hljs-comment">// Class to add to active links,</span>\n<span class="hljs-comment">// the link corresponding to the top most heading on the page.</span>\nactiveLinkClass: <span class="hljs-string">\'is-active-link\'</span>,\n<span class="hljs-comment">// Main class to add to lists.</span>\nlistClass: <span class="hljs-string">\'toc-list\'</span>,\n<span class="hljs-comment">// Extra classes to add to lists.</span>\nextraListClasses: <span class="hljs-string">\'\'</span>,\n<span class="hljs-comment">// Class that gets added when a list should be collapsed.</span>\nisCollapsedClass: <span class="hljs-string">\'is-collapsed\'</span>,\n<span class="hljs-comment">// Class that gets added when a list should be able</span>\n<span class="hljs-comment">// to be collapsed but isn\'t necessarily collpased.</span>\ncollapsibleClass: <span class="hljs-string">\'is-collapsible\'</span>,\n<span class="hljs-comment">// Class to add to list items.</span>\nlistItemClass: <span class="hljs-string">\'toc-list-item\'</span>,\n<span class="hljs-comment">// How many heading levels should not be collpased.</span>\n<span class="hljs-comment">// For example, number 6 will show everything since</span>\n<span class="hljs-comment">// there are only 6 heading levels and number 0 will collpase them all.</span>\n<span class="hljs-comment">// The sections that are hidden will open</span>\n<span class="hljs-comment">// and close as you scroll to headings within them.</span>\ncollapseDepth: <span class="hljs-number">0</span>,\n<span class="hljs-comment">// Smooth scrolling enabled.</span>\nscrollSmooth: <span class="hljs-literal">true</span>,\n<span class="hljs-comment">// Smooth scroll duration.</span>\nscrollSmoothDuration: <span class="hljs-number">420</span>,\n<span class="hljs-comment">// Callback for scroll end.</span>\nscrollEndCallback: <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">e</span>) </span>{ },\n<span class="hljs-comment">// Headings offset between the headings and the top of the document (this is meant for minor adjustments).</span>\nheadingsOffset: <span class="hljs-number">1</span>,\n<span class="hljs-comment">// Timeout between events firing to make sure it\'s</span>\n<span class="hljs-comment">// not too rapid (for performance reasons).</span>\nthrottleTimeout: <span class="hljs-number">50</span>,\n<span class="hljs-comment">// Element to add the positionFixedClass to.</span>\npositionFixedSelector: <span class="hljs-literal">null</span>,\n<span class="hljs-comment">// Fixed position class to add to make sidebar fixed after scrolling</span>\n<span class="hljs-comment">// down past the fixedSidebarOffset.</span>\npositionFixedClass: <span class="hljs-string">\'is-position-fixed\'</span>,\n<span class="hljs-comment">// fixedSidebarOffset can be any number but by default is set</span>\n<span class="hljs-comment">// to auto which sets the fixedSidebarOffset to the sidebar</span>\n<span class="hljs-comment">// element\'s offsetTop from the top of the document on init.</span>\nfixedSidebarOffset: <span class="hljs-string">\'auto\'</span>,\n<span class="hljs-comment">// includeHtml can be set to true to include the HTML markup from the</span>\n<span class="hljs-comment">// heading node instead of just including the textContent.</span>\nincludeHtml: <span class="hljs-literal">false</span>,\n<span class="hljs-comment">// onclick function to apply to all links in toc. will be called with</span>\n<span class="hljs-comment">// the event as the first parameter, and this can be used to stop,</span>\n<span class="hljs-comment">// propagation, prevent default or perform action</span>\nonClick: <span class="hljs-literal">false</span></code></pre><h3 id="methods">Methods</h3>\n<h4 id="init">.init</h4>\n<p>Initialize tocbot with an options object.</p>\n<pre><code class="hljs">tocbot.init(options)</code></pre><h4 id="destroy">.destroy</h4>\n<p>Destroy tocbot and remove event listeners.</p>\n<pre><code class="hljs">tocbot.destroy()</code></pre><h4 id="refresh">.refresh</h4>\n<p>Refresh tocbot if the document changes and it needs to be rebuilt.</p>\n<pre><code class="hljs">tocbot.refresh()</code></pre><h2 id="roadmap">Roadmap</h2>\n<ul>\n<li>More tests</li>\n<li>React.js support (make react support native without direct dom manipulation)</li>\n</ul>\n<h2 id="contributing">Contributing</h2>\n<p>Contributions and suggestions are welcome! Please feel free to open an issue if you run into a problem or have a feature request. I\'ll do my best to respond in a timely fashion.</p>\n<p>If you want to open a pull request just fork the repo but please make sure all tests and lint pass.</p>\n<h3 id="running-tests">Running Tests</h3>\n<h4 id="all-tests">All tests</h4>\n<pre><code class="hljs">npm run <span class="hljs-built_in">test</span></code></pre><h4 id="with-debugger">With debugger</h4>\n<p>You can run tests through <a href="https://github.com/node-inspector/node-inspector">node-inspector</a>.</p>\n<p><a href="https://github.com/node-inspector/node-inspector/issues/950#issuecomment-264289415">For now, you may need to use node v6 or lower</a>...</p>\n<pre><code class="hljs">nvm use 6</code></pre><p>Once you\'re on node v6 or lower:</p>\n<pre><code class="hljs">npm install node-inspector</code></pre><p>Now that node-inspector is installed, you can run the tests!</p>\n<pre><code class="hljs">npm run <span class="hljs-built_in">test</span>:debug</code></pre><h2 id="steps-to-publish">Steps to publish</h2>\n<ul>\n<li>Push a branch and open a pull request</li>\n<li>run <code>npm version &lt;patch|minor|major&gt;</code></li>\n<li>Update readme.md with notes</li>\n<li>Merge the pull request</li>\n<li>commit dist/</li>\n<li>run <code>npm publish</code></li>\n<li>make release on github</li>\n</ul>\n<h2 id="license">License</h2>\n<p><a href="\'http://opensource.org/licenses/MIT\'">MIT</a></p>\n',title:"Tocbot",dir:"pages",base:"_README.json",ext:".json",sourceBase:"README.md",sourceExt:".md"}}},[222]);return{page:s.default}});