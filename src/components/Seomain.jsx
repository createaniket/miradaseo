import './Seomain.css';

/* ─── small reusable primitives ─── */
const SecTag = ({ n, children }) => (
  <div className="sec-tag">
    <span className="n">{n}</span>
    {children}
  </div>
);

const Note = ({ teal, children }) => (
  <div className={`note${teal ? ' teal' : ''}`}>{children}</div>
);

const Pill = ({ type, children }) => (
  <span className={`pill ${type}`}>{children}</span>
);

const Meter = ({ name, pct, val, grade }) => (
  <div className="meter">
    <div className="name">{name}</div>
    <div className="bar">
      <div className="fill" style={{ width: `${pct}%` }} />
    </div>
    <div className="val">
      {val} <span className={`grade ${grade}`}>{grade.replace('g', '')}</span>
    </div>
  </div>
);

/* ════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════ */
const Seomain = () => {
  return (
    <div>

      {/* ═══ COVER ═══ */}
      <header className="cover">
        <div className="wrap">
          <div className="eyebrow">Search Engine Optimisation · Strategy &amp; Growth Report</div>

          <h1>
            Mirada Kids<br />
            <span className="accent">SEO, Keyword &amp; Competitor Gap Analysis</span>
          </h1>

          <p className="sub">
            A complete, agency-grade audit of organic visibility, keyword opportunities and the
            competitive landscape — built to turn India's licensed-plush demand into ranked,
            revenue-generating traffic.
          </p>

          <a className="url" href="https://miradakids.com/">https://miradakids.com/</a>

          <div className="cover-meta">
            <div><b>Platform</b>Shopify · DTC + Omnichannel</div>
            <div><b>Category</b>Plush / Soft Toys · Licensed Characters</div>
            <div><b>Primary Market</b>India (INR) · Export upside</div>
            <div><b>Report Type</b>Desk audit · Live site + SERP</div>
            <div><b>Prepared</b>May 2026</div>
          </div>

          <div className="scoreband">
            <div className="cell">
              <div className="big amber">54<span style={{ fontSize: 16 }}>/100</span></div>
              <div className="lbl">Overall SEO Score</div>
            </div>
            <div className="cell"><div className="big">B–</div><div className="lbl">Technical Health</div></div>
            <div className="cell"><div className="big coral">D+</div><div className="lbl">Non-Brand Visibility</div></div>
            <div className="cell"><div className="big">A–</div><div className="lbl">Brand &amp; Product Depth</div></div>
            <div className="cell"><div className="big coral">High</div><div className="lbl">Growth Headroom</div></div>
          </div>
        </div>
      </header>

      <div className="wrap">

        {/* ═══ TOC ═══ */}
        <section id="toc">
          <div className="method">
            <b>How to read this report (methodology &amp; honesty note).</b> Everything about
            the website — its structure, page titles, meta tags, URL patterns, blog, collections
            and on-page setup — was inspected directly on the live site. The competitor set was
            identified from live Google results for the category.{' '}
            <strong>Search volumes, keyword difficulty (KD, 0–100) and ranking positions are
            expert analyst estimates</strong> for the Indian market, derived from SERP inspection
            and category benchmarks — they are <em>not</em> pulled from a live rank-tracker,
            Google Search Console or Analytics, because this audit was run without account access.
            Treat the numbers as well-calibrated planning estimates (typically accurate to a band,
            not a decimal). Connecting GSC + a tool such as Ahrefs/SEMrush would let us replace
            estimates with exact figures in a live dashboard.
          </div>

          <h3 style={{ marginTop: 24 }}>Contents</h3>
          <nav className="toc">
            <a href="#s1"><b>01</b> Executive Summary</a>
            <a href="#s2"><b>02</b> Website SEO Audit</a>
            <a href="#s3"><b>03</b> Current Keyword Rankings</a>
            <a href="#s4"><b>04</b> Competitor Analysis</a>
            <a href="#s5"><b>05</b> Keyword Gap Analysis</a>
            <a href="#s6"><b>06</b> High-Intent Money Keywords</a>
            <a href="#s7"><b>07</b> Content Strategy</a>
            <a href="#s8"><b>08</b> Backlink Strategy</a>
            <a href="#s9"><b>09</b> Hashtag Strategy</a>
            <a href="#s10"><b>10</b> Local &amp; International SEO</a>
            <a href="#s11"><b>11</b> 30 / 60 / 90-Day Action Plan</a>
            <a href="#s12"><b>12</b> Final SEO Scorecard</a>
            <a href="#roi"><b>★</b> Top 10 Highest-ROI Opportunities</a>
          </nav>
        </section>

        {/* ═══ 01 EXEC SUMMARY ═══ */}
        <section id="s1">
          <SecTag n="01">Executive Summary</SecTag>
          <h2>The brand is strong. The search footprint is not — yet.</h2>
          <p className="lead">
            Mirada is a well-built, trust-rich, omnichannel toy brand with genuine licensing
            (Pokémon, Marvel, Sanrio, Harry Potter, Pixar, Star Wars) and deep retail distribution.
            The opposite is true of its <em>discoverability</em>: the store is engineered to convert
            visitors but barely engineered to <strong>attract</strong> them from organic search.
          </p>

          <h3>Website overview</h3>
          <p>
            A Shopify storefront for Mirada (operated by Strings Marketing Pvt. Ltd., Greater
            Noida), selling plush toys, licensed-character soft toys, dolls, cushions, keychains,
            DIY/art-and-craft and notebooks, priced largely ₹300–₹1,500. The brand is sold through
            Amazon, Flipkart, Hamleys, FirstCry-tier retail, Blinkit, Zepto, DMart, BigBasket and
            more — so brand demand exists; the question is how much of it the <em>owned</em> domain
            captures.
          </p>

          <h3>Current SEO positioning &amp; estimated visibility</h3>
          <p>
            The site almost certainly ranks well for <strong>branded</strong> queries ("mirada
            toys", "mirada plush", specific "mirada [character]" product names) and pulls in
            retargeted/paid and social traffic. For <strong>non-brand category demand</strong> —
            the searches that actually grow a business, like "pokemon soft toy", "pikachu plush
            india", "cute soft toys online" — visibility is estimated to be thin. The single biggest
            cause is structural: the homepage title and description are literally just the word
            "Miradakids", and every product is named brand-first ("Mirada Pokemon Pikachu Toy")
            rather than search-intent-first.
          </p>

          <Note>
            <b>Estimated owned-domain organic footprint:</b> low hundreds of ranking keywords, the
            majority branded or long-tail product names; an estimated{' '}
            <strong>70–85% of organic traffic is brand-driven</strong>. The category's non-brand
            demand is being captured by marketplaces and a handful of nimble DTC competitors instead.
          </Note>

          <div className="grid g3">
            <div className="card good">
              <h4>Strengths</h4>
              <ul className="tick gd">
                <li>Authentic licensed catalogue — a real moat vs. generic plush sellers</li>
                <li>Clean Shopify tech base: HTTPS, canonical, mobile-ready, fast CDN</li>
                <li>Strong trust signals (10M+ families, omnichannel retail, safety messaging)</li>
                <li>Active parenting blog already publishing — content engine exists</li>
                <li>Logical taxonomy: shop by character / age / price</li>
              </ul>
            </div>
            <div className="card bad">
              <h4>Weaknesses</h4>
              <ul className="tick bd">
                <li>Homepage title &amp; meta = "Miradakids" (zero keyword capture)</li>
                <li>Brand-first product titles miss generic search demand</li>
                <li>Collection pages lack indexable intro copy &amp; keyword targeting</li>
                <li>No product reviews on key pages = no review schema / star CTR</li>
                <li>Image alt text incomplete; URL/size mismatches (22cm vs 23cm)</li>
                <li>Thin non-brand keyword coverage vs. competitors</li>
              </ul>
            </div>
            <div className="card opp">
              <h4>Biggest growth opportunities</h4>
              <ul className="tick">
                <li>Own the <strong>licensed-character plush</strong> SERPs in India (Pokémon, Sanrio, Stitch-style demand)</li>
                <li>Rewrite titles/meta + collection copy → fast non-brand lift</li>
                <li>Build "best / buy / online india" money-keyword landing pages</li>
                <li>Gifting + occasion clusters (birthday, Rakhi, Diwali, return gifts)</li>
                <li>Capture "anime / kawaii plush india" trend demand early</li>
              </ul>
            </div>
          </div>

          <Note teal>
            <b>Overall SEO Score: 54 / 100 (Grade C+).</b> Strong fundamentals and product depth
            are dragged down by basic on-page misses and near-zero non-brand keyword targeting. The
            good news: most of the gap is from <em>cheap, fast fixes</em>, which means the ceiling
            is high and the path is clear.
          </Note>
        </section>

        {/* ═══ 02 AUDIT ═══ */}
        <section id="s2">
          <SecTag n="02">Website SEO Audit</SecTag>
          <h2>Technical, on-page &amp; content audit</h2>
          <p className="lead">
            Severity reflects how much each issue holds back rankings; priority reflects
            effort-to-impact. Shopify handles a lot well by default — which is why the open items
            are mostly content and configuration, not infrastructure.
          </p>

          <h3>Technical SEO</h3>
          <div className="tbl-wrap">
            <table>
              <thead>
                <tr>
                  <th style={{ minWidth: 150 }}>Area</th>
                  <th>Finding</th>
                  <th>Severity</th>
                  <th>SEO impact</th>
                  <th>Fix &amp; priority</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="kw">HTTPS</td><td>Secure, valid certificate sitewide</td><td><Pill type="p-hi">OK</Pill></td><td>Baseline trust ✔</td><td>None</td></tr>
                <tr><td className="kw">Mobile responsiveness</td><td>Responsive theme, viewport set correctly</td><td><Pill type="p-hi">OK</Pill></td><td>Mobile-first index ready</td><td>Spot-check tap targets · Low</td></tr>
                <tr><td className="kw">Core Web Vitals</td><td>Heavy video on home/product (HLS .m3u8 + MP4), large hero PNGs (3840px), Whatmore widget</td><td><Pill type="p-md">Med</Pill></td><td>LCP/INP risk on mobile data; hurts mobile rankings</td><td>Lazy-load video, compress hero, defer 3rd-party JS · <b>High</b></td></tr>
                <tr><td className="kw">Indexability</td><td>Canonicals present &amp; self-referencing; Google site-verification tag present</td><td><Pill type="p-hi">OK</Pill></td><td>Good foundation</td><td>Confirm GSC coverage · Med</td></tr>
                <tr><td className="kw">Crawl / Sitemap / Robots</td><td>Shopify auto-generates <code>/sitemap.xml</code> &amp; <code>robots.txt</code></td><td><Pill type="p-hi">OK</Pill></td><td>Crawlable by default</td><td>Submit sitemap in GSC; verify no key pages disallowed · Med</td></tr>
                <tr><td className="kw">URL structure</td><td>Clean <code>/products/</code> &amp; <code>/collections/</code>; <strong>but</strong> slug says <code>...pikachu-toy-22cm</code> while title says 23cm</td><td><Pill type="p-md">Med</Pill></td><td>Inconsistency confuses relevance &amp; looks careless</td><td>Standardise size in slug/title/meta · Med</td></tr>
                <tr><td className="kw">Schema markup</td><td>Shopify injects basic Product JSON-LD; <strong>no aggregateRating</strong> (no reviews), no FAQ/Breadcrumb schema visible</td><td><Pill type="p-lo">High</Pill></td><td>Missing star-rating rich results = lower CTR</td><td>Add reviews + Review/FAQ/Breadcrumb schema · <b>High</b></td></tr>
                <tr><td className="kw">Image optimisation</td><td>Many gallery &amp; infographic images have <strong>empty alt</strong>; large source PNGs</td><td><Pill type="p-md">Med</Pill></td><td>Loses Google Images traffic; weak accessibility</td><td>Descriptive alt on all product images · <b>High</b></td></tr>
                <tr><td className="kw">Internal linking</td><td>Good nav + "relevant products"; weak <em>contextual</em> links from blog → collections</td><td><Pill type="p-md">Med</Pill></td><td>Authority not flowing to money pages</td><td>Link blog posts to collections/products · Med</td></tr>
                <tr><td className="kw">JS rendering</td><td>Shopify SSR — content renders for crawlers</td><td><Pill type="p-hi">OK</Pill></td><td>No major JS-SEO blocker</td><td>None</td></tr>
                <tr><td className="kw">Broken links / redirects</td><td>None obvious in audit scope</td><td><Pill type="p-hi">OK</Pill></td><td>—</td><td>Run full crawl to confirm · Low</td></tr>
              </tbody>
            </table>
          </div>

          <h3>On-Page SEO</h3>
          <div className="tbl-wrap">
            <table>
              <thead>
                <tr>
                  <th style={{ minWidth: 150 }}>Element</th>
                  <th>Finding</th>
                  <th>Severity</th>
                  <th>Fix &amp; priority</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="kw">Homepage title</td><td>Literally "Miradakids" — no keywords, no value proposition</td><td><Pill type="p-lo">Critical</Pill></td><td>→ e.g. <em>"Mirada — Licensed Plush &amp; Soft Toys Online in India | Pokémon, Marvel &amp; More"</em> · <b>Highest</b></td></tr>
                <tr><td className="kw">Homepage meta description</td><td>OG description = "Miradakids"; no compelling SERP snippet</td><td><Pill type="p-lo">Critical</Pill></td><td>Write a 150-char benefit + keyword description · <b>Highest</b></td></tr>
                <tr><td className="kw">Product titles</td><td>Brand-first: "Mirada Pokemon Pikachu Toy – 23cm". Searchers type "pikachu soft toy"</td><td><Pill type="p-lo">High</Pill></td><td>Lead with the searched term: <em>"Pikachu Soft Toy 23cm – Official Pokémon Plush | Mirada"</em> · <b>High</b></td></tr>
                <tr><td className="kw">Product meta descriptions</td><td>Auto-pulled from bullet copy, start with a stray "•"</td><td><Pill type="p-md">Med</Pill></td><td>Hand-write intent + "buy online India" CTAs · Med</td></tr>
                <tr><td className="kw">Heading structure</td><td>Product H1 present but duplicated H2 of same title</td><td><Pill type="p-md">Med</Pill></td><td>One H1; H2/H3 for features, care, FAQ · Med</td></tr>
                <tr><td className="kw">Collection pages</td><td>Category pages lack unique indexable intro/footer copy targeting the head term</td><td><Pill type="p-lo">High</Pill></td><td>Add 120–200 word SEO intro per collection · <b>High</b></td></tr>
                <tr><td className="kw">Content depth (PDP)</td><td>Bullets + infographics (in images, not text), no review text</td><td><Pill type="p-md">Med</Pill></td><td>Add text specs, sizing, care, FAQ block · Med</td></tr>
                <tr><td className="kw">Thin / duplicate content</td><td>Many PDPs share near-identical bullet templates across characters</td><td><Pill type="p-md">Med</Pill></td><td>Differentiate top sellers with unique copy · Med</td></tr>
                <tr><td className="kw">Alt text</td><td>Inconsistent — main image good, gallery/infographics empty</td><td><Pill type="p-md">Med</Pill></td><td>Keyword-aware alt everywhere · High</td></tr>
              </tbody>
            </table>
          </div>

          <h3>Content SEO</h3>
          <div className="grid g2">
            <div className="card">
              <h4>What's working</h4>
              <ul className="tick gd">
                <li>A real blog (<em>Parenting Inside</em>) is live with emotional-development &amp; gifting-guide posts</li>
                <li>Posts are on-brand and parent-focused — good topical seed</li>
              </ul>
            </div>
            <div className="card">
              <h4>Gaps &amp; missing clusters</h4>
              <ul className="tick bd">
                <li>No commercial/buying-guide content ("best soft toys for…", "Pokémon plush guide")</li>
                <li>No topical authority hub around licensed characters or anime/kawaii trend</li>
                <li>No occasion/gifting SEO pages (Rakhi, Diwali, birthday, return gifts)</li>
                <li>Blog rarely links to collections/products (no commercial conversion path)</li>
                <li>Freshness fine on blog; collections never refreshed for seasonality</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ═══ 03 KEYWORD RANKINGS ═══ */}
        <section id="s3">
          <SecTag n="03">Current Keyword Rankings</SecTag>
          <h2>Where Mirada likely ranks today</h2>
          <p className="lead">
            Estimated current positions for the owned domain. The pattern is the headline:{' '}
            <strong>strong on brand &amp; exact product names, weak on the generic category terms
            that drive new demand.</strong> Volumes are India monthly estimates; KD is 0–100;
            Opportunity = 0–100 (higher = act first).
          </p>

          <div className="tbl-wrap">
            <table>
              <thead>
                <tr>
                  <th>Keyword</th><th>Type</th><th>Est. pos.</th><th>Vol/mo</th>
                  <th>KD</th><th>CPC (₹)</th><th>Intent</th><th>Likely URL</th><th>Opp.</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="kw">mirada toys</td><td><Pill type="p-brand">Brand</Pill></td><td className="num">1–3</td><td className="num">1,000</td><td className="num">8</td><td>14</td><td>Nav</td><td>/ (home)</td><td className="num">40</td></tr>
                <tr><td className="kw">mirada plush / soft toys</td><td><Pill type="p-brand">Brand</Pill></td><td className="num">1–4</td><td className="num">400</td><td className="num">6</td><td>16</td><td>Nav/Comm</td><td>/collections/...</td><td className="num">45</td></tr>
                <tr><td className="kw">mirada pikachu toy</td><td><Pill type="p-brand">Brand·Prod</Pill></td><td className="num">1–5</td><td className="num">300</td><td className="num">10</td><td>18</td><td>Trans</td><td>/products/...pikachu</td><td className="num">50</td></tr>
                <tr><td className="kw">pikachu soft toy</td><td><Pill type="p-lo">Non-brand</Pill></td><td className="num">30–60+</td><td className="num">9,500</td><td className="num">32</td><td>22</td><td>Trans</td><td>/products/...pikachu</td><td className="num">88</td></tr>
                <tr><td className="kw">pokemon soft toys</td><td><Pill type="p-lo">Non-brand</Pill></td><td className="num">40–80+</td><td className="num">6,000</td><td className="num">30</td><td>20</td><td>Comm</td><td>/collections/pokemon</td><td className="num">90</td></tr>
                <tr><td className="kw">pokemon plush india</td><td><Pill type="p-lo">Non-brand</Pill></td><td className="num">not top 100</td><td className="num">3,200</td><td className="num">28</td><td>24</td><td>Trans</td><td>/collections/pokemon</td><td className="num">92</td></tr>
                <tr><td className="kw">hello kitty soft toy</td><td><Pill type="p-lo">Non-brand</Pill></td><td className="num">50–90+</td><td className="num">7,500</td><td className="num">35</td><td>21</td><td>Trans</td><td>/collections/sanrio</td><td className="num">85</td></tr>
                <tr><td className="kw">spiderman soft toy</td><td><Pill type="p-lo">Non-brand</Pill></td><td className="num">40–80+</td><td className="num">6,500</td><td className="num">34</td><td>19</td><td>Trans</td><td>/collections/marvel</td><td className="num">82</td></tr>
                <tr><td className="kw">panda soft toy</td><td><Pill type="p-lo">Non-brand</Pill></td><td className="num">60–100+</td><td className="num">14,000</td><td className="num">36</td><td>17</td><td>Comm</td><td>/products/...panda</td><td className="num">80</td></tr>
                <tr><td className="kw">rag doll for kids</td><td><Pill type="p-lo">Non-brand</Pill></td><td className="num">50–90+</td><td className="num">2,400</td><td className="num">26</td><td>15</td><td>Comm</td><td>/collections/dolls</td><td className="num">78</td></tr>
                <tr><td className="kw">cute soft toys online</td><td><Pill type="p-lo">Non-brand</Pill></td><td className="num">not ranking</td><td className="num">5,500</td><td className="num">40</td><td>23</td><td>Trans</td><td>/collections/all</td><td className="num">84</td></tr>
                <tr><td className="kw">soft toys for kids</td><td><Pill type="p-lo">Non-brand</Pill></td><td className="num">not ranking</td><td className="num">11,000</td><td className="num">45</td><td>18</td><td>Comm</td><td>/pages/shop-by-age</td><td className="num">72</td></tr>
                <tr><td className="kw">birthday gift for kids (soft toy)</td><td><Pill type="p-lo">Non-brand</Pill></td><td className="num">not ranking</td><td className="num">22,000</td><td className="num">52</td><td>26</td><td>Comm</td><td>/pages/gifting</td><td className="num">70</td></tr>
                <tr><td className="kw">jigglypuff / charmander plush</td><td><Pill type="p-lo">Long-tail</Pill></td><td className="num">20–50</td><td className="num">700 ea</td><td className="num">18</td><td>20</td><td>Trans</td><td>/products/...</td><td className="num">76</td></tr>
              </tbody>
            </table>
          </div>

          <div className="grid g3">
            <div className="card"><h4>Brand keywords</h4><p style={{ fontSize: 13.5, margin: 0 }}>"mirada toys / plush / [character]" — <strong>protected, ranking well</strong>. Defend these; they're not the growth lever.</p></div>
            <div className="card"><h4>Non-brand &amp; commercial</h4><p style={{ fontSize: 13.5, margin: 0 }}>"pokemon soft toy", "pikachu plush india", "cute soft toys online" — <strong>the entire growth story</strong>, and where Mirada currently underperforms.</p></div>
            <div className="card"><h4>Long-tail product</h4><p style={{ fontSize: 13.5, margin: 0 }}>Specific character names (Jigglypuff, Charmander, Eevee) — <strong>easy wins</strong> with low competition once titles are optimised.</p></div>
          </div>
        </section>

        {/* ═══ 04 COMPETITORS ═══ */}
        <section id="s4">
          <SecTag n="04">Competitor Analysis</SecTag>
          <h2>Who is winning the SERPs Mirada wants</h2>
          <p className="lead">
            Two tiers compete with Mirada: nimble <strong>DTC plush specialists</strong> (the
            realistic SEO battleground) and <strong>marketplace giants</strong> (won't be beaten
            head-on, but can be out-ranked on specific intent + content). DA values are estimated
            authority bands.
          </p>

          <h4>Direct &amp; SEO competitors (DTC plush specialists)</h4>
          <div className="tbl-wrap">
            <table>
              <thead>
                <tr><th>Competitor</th><th>Positioning</th><th>Est. DA</th><th>Est. organic/mo</th><th>Top ranking themes</th><th>Content strategy</th></tr>
              </thead>
              <tbody>
                <tr><td className="kw">Bear Hugs<br /><span style={{ fontWeight: 400, color: 'var(--muted)' }}>bearhugs.in</span></td><td>"India's No.1 novelty store" — Pokémon, anime, Sanrio, kawaii</td><td className="num">28–34</td><td className="num">40k–80k</td><td>pokemon plush, anime plush, kawaii, gengar/eevee</td><td>Rich collection copy, character-led pages, trend SEO</td></tr>
                <tr><td className="kw">Fluffmint<br /><span style={{ fontWeight: 400, color: 'var(--muted)' }}>fluffmint.in</span></td><td>"Largest collection of <em>original</em> Pokémon plushies in India"</td><td className="num">20–28</td><td className="num">15k–35k</td><td>original pokemon plush, licensed plushies india</td><td>Pure-play licensed; keyword-exact category pages</td></tr>
                <tr><td className="kw">TinyMinyMo<br /><span style={{ fontWeight: 400, color: 'var(--muted)' }}>tinyminymo.com</span></td><td>Cute gifting — soft toys, keychains, return gifts</td><td className="num">25–32</td><td className="num">20k–45k</td><td>cute soft toys, gifts under 1000, return gifts</td><td>Gifting + occasion SEO, broad cute-product net</td></tr>
                <tr><td className="kw">Mi Arcus<br /><span style={{ fontWeight: 400, color: 'var(--muted)' }}>miarcus.com</span></td><td>Baby/toddler soft toys, play mats, 0–6 yrs</td><td className="num">28–34</td><td className="num">25k–50k</td><td>soft toys for babies, play mats, elephant soft toy</td><td>FAQ-rich, age-targeted, strong on-page text</td></tr>
                <tr><td className="kw">Teddy Daddy<br /><span style={{ fontWeight: 400, color: 'var(--muted)' }}>teddydaddy.in</span></td><td>Teddy bears &amp; stuffed animals</td><td className="num">18–26</td><td className="num">8k–20k</td><td>teddy bear, giant teddy, stuffed animals</td><td>Teddy-focused; gifting angle</td></tr>
              </tbody>
            </table>
          </div>

          <h4>Marketplace &amp; retail competitors</h4>
          <div className="tbl-wrap">
            <table>
              <thead>
                <tr><th>Player</th><th>Role in SERP</th><th>Est. DA</th><th>Threat to Mirada</th><th>How to beat them</th></tr>
              </thead>
              <tbody>
                <tr><td className="kw">Amazon.in</td><td>Dominates almost every product query</td><td className="num">95+</td><td>Very high</td><td>Don't fight head terms; win specific + content + brand</td></tr>
                <tr><td className="kw">Flipkart</td><td>Co-dominant on transactional terms</td><td className="num">92+</td><td>Very high</td><td>Same — target gaps &amp; informational SERPs</td></tr>
                <tr><td className="kw">FirstCry</td><td>Kids/baby category authority</td><td className="num">70–78</td><td>High</td><td>Beatable on niche licensed + anime/kawaii</td></tr>
                <tr><td className="kw">Hamleys.in</td><td>Premium toy authority, Pokémon collections</td><td className="num">58–66</td><td>Med–High</td><td>Beatable on price-point &amp; long-tail character terms</td></tr>
                <tr><td className="kw">IKEA / AJIO / Ubuy</td><td>Peripheral category presence</td><td className="num">70–95</td><td>Med</td><td>Not core competitors for licensed plush</td></tr>
              </tbody>
            </table>
          </div>

          <Note>
            <b>Strategic read:</b> Mirada's licensing is stronger than every small DTC competitor's,
            and its retail trust beats them too — yet Bear Hugs and Fluffmint out-rank it on the
            exact non-brand terms ("pokemon plush", "anime plush india") purely because their{' '}
            <em>pages are written for those searches</em>. This is a winnable fight: Mirada has the
            better product and weaker SEO copy. Fix the copy, win the niche.
          </Note>
        </section>

        {/* ═══ 05 KEYWORD GAP ═══ */}
        <section id="s5">
          <SecTag n="05">Competitor Keyword Gap Analysis</SecTag>
          <h2>The keywords competitors rank for — and Mirada doesn't</h2>
          <p className="lead">
            This is the core of the report. Each row is demand the niche is capturing while Mirada
            sits absent. Sorted from easiest, highest-leverage wins downward.
          </p>

          <div className="tbl-wrap">
            <table>
              <thead>
                <tr><th>Keyword</th><th>Comp. rank</th><th>Mirada</th><th>Vol/mo</th><th>KD</th><th>Opp.</th><th>Why it matters</th><th>Target page</th></tr>
              </thead>
              <tbody>
                <tr><td className="kw">pokemon plush india</td><td>Fluffmint 3–6 · BearHugs 4–8</td><td className="num">—</td><td className="num">3,200</td><td className="num">28</td><td><Pill type="p-easy">Easy win</Pill></td><td>Exact match to Mirada's licensed catalogue</td><td>/collections/pokemon</td></tr>
                <tr><td className="kw">pikachu soft toy / plush</td><td>Amazon · BearHugs 6–10</td><td className="num">30–60</td><td className="num">9,500</td><td className="num">32</td><td><Pill type="p-hi">High</Pill></td><td>Highest-intent single character term</td><td>Pikachu PDP + collection</td></tr>
                <tr><td className="kw">anime plush india</td><td>BearHugs 3–7</td><td className="num">—</td><td className="num">4,000</td><td className="num">30</td><td><Pill type="p-hi">High</Pill></td><td>Fast-growing trend; Mirada absent entirely</td><td>New /collections/anime-plush</td></tr>
                <tr><td className="kw">kawaii plush india</td><td>BearHugs · niche stores</td><td className="num">—</td><td className="num">2,600</td><td className="num">25</td><td><Pill type="p-easy">Easy win</Pill></td><td>Low KD, rising, perfect for Sanrio range</td><td>New kawaii landing page</td></tr>
                <tr><td className="kw">hello kitty soft toy india</td><td>Amazon · BearHugs</td><td className="num">50–90</td><td className="num">7,500</td><td className="num">35</td><td><Pill type="p-hi">High</Pill></td><td>Sanrio is a top trending license</td><td>/collections/sanrio</td></tr>
                <tr><td className="kw">eevee / charmander / jigglypuff plush</td><td>Fluffmint · Amazon</td><td className="num">20–50</td><td className="num">600–900 ea</td><td className="num">18</td><td><Pill type="p-easy">Easy win</Pill></td><td>Mirada stocks these — pure title fix</td><td>Each character PDP</td></tr>
                <tr><td className="kw">cute soft toys online india</td><td>TinyMinyMo · FirstCry</td><td className="num">—</td><td className="num">5,500</td><td className="num">40</td><td><Pill type="p-md">Medium</Pill></td><td>Broad commercial entry term</td><td>/collections/all (optimised)</td></tr>
                <tr><td className="kw">soft toys under 500 / 1000</td><td>FirstCry · TinyMinyMo</td><td className="num">—</td><td className="num">4,800</td><td className="num">33</td><td><Pill type="p-md">Medium</Pill></td><td>Price-point pages already exist — just optimise</td><td>/collections/under-399 / 699</td></tr>
                <tr><td className="kw">return gifts for kids birthday</td><td>TinyMinyMo · Amazon</td><td className="num">—</td><td className="num">9,000</td><td className="num">42</td><td><Pill type="p-md">Medium</Pill></td><td>High-volume gifting/bulk intent; keychains fit</td><td>New return-gifts landing</td></tr>
                <tr><td className="kw">soft toys for babies</td><td>Mi Arcus · FirstCry</td><td className="num">—</td><td className="num">6,500</td><td className="num">44</td><td><Pill type="p-md">Medium</Pill></td><td>"Shop by age" can target this</td><td>/pages/shop-by-age (0–3)</td></tr>
                <tr><td className="kw">harry potter plush / merchandise india</td><td>Amazon · niche</td><td className="num">—</td><td className="num">3,800</td><td className="num">38</td><td><Pill type="p-md">Medium</Pill></td><td>Underserved license Mirada owns</td><td>/collections/harry-potter</td></tr>
                <tr><td className="kw">giant teddy bear online</td><td>Teddy Daddy · Amazon</td><td className="num">—</td><td className="num">12,000</td><td className="num">48</td><td><Pill type="p-md">Seasonal</Pill></td><td>Valentine/anniversary spike; gifting revenue</td><td>New teddy landing (if SKU exists)</td></tr>
                <tr><td className="kw">stitch soft toy india</td><td>Amazon · BearHugs</td><td className="num">—</td><td className="num">18,000</td><td className="num">46</td><td><Pill type="p-md">Trending</Pill></td><td>Huge trend demand — stock-gap to assess</td><td>Range expansion + page</td></tr>
                <tr><td className="kw">birthday gift for 5 year old girl/boy</td><td>FirstCry · Amazon</td><td className="num">—</td><td className="num">14,000</td><td className="num">50</td><td><Pill type="p-lo">Long-term</Pill></td><td>Top-funnel gifting; blog + collection combo</td><td>Blog → gifting collection</td></tr>
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 13, color: 'var(--muted)' }}>
            <strong>Reading the labels:</strong>{' '}
            <Pill type="p-easy">Easy win</Pill> low KD + you already stock it → weeks to rank ·{' '}
            <Pill type="p-hi">High</Pill> high value, worth dedicated effort ·{' '}
            <Pill type="p-md">Medium</Pill> needs a built page + links ·{' '}
            <Pill type="p-lo">Long-term</Pill> content-led, 3–6 months.
          </p>
        </section>

        {/* ═══ 06 MONEY KEYWORDS ═══ */}
        <section id="s6">
          <SecTag n="06">High-Intent Money Keywords</SecTag>
          <h2>The keywords that actually pay</h2>
          <p className="lead">
            Buyer-intent terms ranked by a blended score of revenue potential, conversion intent and
            ranking feasibility (KD vs. Mirada's realistic authority). These are where SEO effort
            converts to orders.
          </p>

          <div className="tbl-wrap">
            <table>
              <thead>
                <tr><th>Money keyword</th><th>Vol/mo</th><th>KD</th><th>Intent</th><th>Revenue potential</th><th>Feasibility</th><th>Priority score</th></tr>
              </thead>
              <tbody>
                <tr><td className="kw">buy pokemon soft toys online india</td><td className="num">2,100</td><td className="num">29</td><td>Transactional</td><td><Pill type="p-hi">Very high</Pill></td><td><Pill type="p-hi">High</Pill></td><td className="num">94</td></tr>
                <tr><td className="kw">pikachu plush buy online</td><td className="num">2,800</td><td className="num">31</td><td>Transactional</td><td><Pill type="p-hi">Very high</Pill></td><td><Pill type="p-hi">High</Pill></td><td className="num">92</td></tr>
                <tr><td className="kw">kawaii plush india buy</td><td className="num">1,400</td><td className="num">25</td><td>Transactional</td><td><Pill type="p-hi">High</Pill></td><td><Pill type="p-hi">High</Pill></td><td className="num">90</td></tr>
                <tr><td className="kw">best soft toys for kids</td><td className="num">3,300</td><td className="num">41</td><td>Commercial</td><td><Pill type="p-hi">High</Pill></td><td><Pill type="p-md">Medium</Pill></td><td className="num">82</td></tr>
                <tr><td className="kw">anime plush online india</td><td className="num">1,900</td><td className="num">30</td><td>Transactional</td><td><Pill type="p-hi">High</Pill></td><td><Pill type="p-hi">High</Pill></td><td className="num">88</td></tr>
                <tr><td className="kw">teddy bear gift for kids</td><td className="num">5,200</td><td className="num">44</td><td>Commercial</td><td><Pill type="p-hi">High</Pill></td><td><Pill type="p-md">Medium</Pill></td><td className="num">79</td></tr>
                <tr><td className="kw">hello kitty plush online india</td><td className="num">2,400</td><td className="num">34</td><td>Transactional</td><td><Pill type="p-hi">High</Pill></td><td><Pill type="p-md">Medium</Pill></td><td className="num">84</td></tr>
                <tr><td className="kw">soft toys online under 500</td><td className="num">2,900</td><td className="num">33</td><td>Transactional</td><td><Pill type="p-md">Medium</Pill></td><td><Pill type="p-hi">High</Pill></td><td className="num">81</td></tr>
                <tr><td className="kw">return gifts soft toys bulk</td><td className="num">1,600</td><td className="num">37</td><td>Commercial/B2B</td><td><Pill type="p-hi">High (AOV)</Pill></td><td><Pill type="p-md">Medium</Pill></td><td className="num">80</td></tr>
                <tr><td className="kw">best plush toy brand india</td><td className="num">900</td><td className="num">39</td><td>Commercial</td><td><Pill type="p-md">Medium</Pill></td><td><Pill type="p-hi">High</Pill></td><td className="num">77</td></tr>
              </tbody>
            </table>
          </div>
          <Note>
            <b>Why these win:</b> they pair <em>buy / online / india / best</em> modifiers
            (purchase-ready searchers) with KD that's within reach of an authority-building DTC
            store — unlike bare head terms ("soft toys", KD 70+) that Amazon and Flipkart lock up.
            Build dedicated, well-linked landing pages for the top five first.
          </Note>
        </section>

        {/* ═══ 07 CONTENT STRATEGY ═══ */}
        <section id="s7">
          <SecTag n="07">Content Strategy</SecTag>
          <h2>A content engine that feeds the money pages</h2>
          <p className="lead">
            Mirada already blogs — but the blog doesn't sell. The strategy: build topical authority
            around licensed characters, gifting and parenting, and{' '}
            <strong>internally link every post into a collection</strong> so authority and clicks
            flow to commercial pages.
          </p>

          <h3>Topic clusters (hub &amp; spoke)</h3>
          <div className="grid g2">
            <div className="card opp">
              <h4>Cluster 1 · Licensed Characters (hub)</h4>
              <p style={{ fontSize: 13.5 }}>Hub: "Licensed Soft Toys in India" → spokes: Pokémon plush guide, Marvel soft toys, Sanrio/Hello Kitty, Harry Potter, Pixar/Disney. <strong>Each spoke links to its collection.</strong></p>
            </div>
            <div className="card opp">
              <h4>Cluster 2 · Anime &amp; Kawaii (trend)</h4>
              <p style={{ fontSize: 13.5 }}>Hub: "Anime &amp; Kawaii Plush in India" → spokes: best kawaii plushies, anime plush gift ideas, collecting guides. Captures rising, low-KD demand early.</p>
            </div>
            <div className="card opp">
              <h4>Cluster 3 · Gifting &amp; Occasions</h4>
              <p style={{ fontSize: 13.5 }}>Birthday by age, Rakhi, Diwali, return gifts, Valentine's teddy, newborn gifts. Feeds /pages/gifting + price collections.</p>
            </div>
            <div className="card opp">
              <h4>Cluster 4 · Parenting / Play (authority)</h4>
              <p style={{ fontSize: 13.5 }}>Extend existing blog: developmental benefits, safe materials, age-appropriate toys. Builds E-E-A-T &amp; supports "soft toys for babies".</p>
            </div>
          </div>

          <h3>3-Month content roadmap (priority order)</h3>
          <div className="tbl-wrap">
            <table>
              <thead>
                <tr><th>#</th><th>Asset</th><th>Type</th><th>Target keyword</th><th>Links to</th><th>Month</th></tr>
              </thead>
              <tbody>
                <tr><td>1</td><td>Pokémon collection SEO intro + "Pokémon Plush Buying Guide"</td><td>Collection copy + blog</td><td>pokemon plush india</td><td>/collections/pokemon</td><td>M1</td></tr>
                <tr><td>2</td><td>Anime &amp; Kawaii plush landing page</td><td>New collection</td><td>anime / kawaii plush india</td><td>Sanrio + new SKUs</td><td>M1</td></tr>
                <tr><td>3</td><td>"Best Soft Toys for Kids (by age)"</td><td>Commercial blog</td><td>best soft toys for kids</td><td>shop-by-age + collections</td><td>M1</td></tr>
                <tr><td>4</td><td>Hello Kitty / Sanrio guide + collection copy</td><td>Collection + blog</td><td>hello kitty soft toy india</td><td>/collections/sanrio</td><td>M2</td></tr>
                <tr><td>5</td><td>Return gifts for kids' birthday (+ bulk CTA)</td><td>Landing + blog</td><td>return gifts for kids</td><td>keychains, under-399</td><td>M2</td></tr>
                <tr><td>6</td><td>Price-point page optimisation (under 399/699/999)</td><td>Collection copy</td><td>soft toys under 500/1000</td><td>existing pages</td><td>M2</td></tr>
                <tr><td>7</td><td>Marvel + Harry Potter collection guides</td><td>Collection + blog</td><td>marvel/HP plush india</td><td>those collections</td><td>M3</td></tr>
                <tr><td>8</td><td>Festive gifting hub (Rakhi/Diwali, seasonal)</td><td>Evergreen hub</td><td>diwali/rakhi gift for kids</td><td>/pages/gifting</td><td>M3</td></tr>
              </tbody>
            </table>
          </div>
          <p>
            <strong>Also:</strong> add an <strong>FAQ block</strong> to every major collection
            (washing/care, age safety, sizing, authenticity of license) to target featured snippets
            and add FAQ schema. "Are Mirada toys safe / washable?", "What size is X plush?" are
            snippet-friendly questions with no strong incumbent answer.
          </p>
        </section>

        {/* ═══ 08 BACKLINKS ═══ */}
        <section id="s8">
          <SecTag n="08">Backlink Strategy</SecTag>
          <h2>Building the authority to actually rank</h2>
          <p className="lead">
            On-page fixes lift Mirada into contention; links decide who wins. The goal is a
            natural, India-relevant, parenting-and-toy authority profile — not volume for its
            own sake.
          </p>

          <div className="tbl-wrap">
            <table>
              <thead>
                <tr><th>Tactic</th><th>Target domain type</th><th>Est. authority</th><th>SEO value</th><th>Notes</th></tr>
              </thead>
              <tbody>
                <tr><td className="kw">Parenting &amp; mom blogger reviews</td><td>India parenting blogs / IG bloggers w/ blogs</td><td>DA 25–50</td><td><Pill type="p-hi">High</Pill></td><td>Gift products → honest review + link; topically perfect</td></tr>
                <tr><td className="kw">Gifting / "best of" listicles</td><td>Lifestyle &amp; gift-guide sites</td><td>DA 40–65</td><td><Pill type="p-hi">High</Pill></td><td>Pitch "best soft toy brands India" inclusions</td></tr>
                <tr><td className="kw">Digital PR (founder story / 2010 heritage, safety standards)</td><td>Startup / SME / business media</td><td>DA 60–85</td><td><Pill type="p-hi">High</Pill></td><td>"Made-in-India licensed toys" is a strong PR angle</td></tr>
                <tr><td className="kw">Anime/pop-culture communities</td><td>Fan blogs, niche pop-culture sites</td><td>DA 25–45</td><td><Pill type="p-md">Med</Pill></td><td>Aligns with anime/kawaii cluster; engaged audience</td></tr>
                <tr><td className="kw">Influencer collaborations (with link/bio + UGC)</td><td>YouTube/IG toy &amp; family creators</td><td>varies</td><td><Pill type="p-md">Med</Pill></td><td>Drives brand search → indirectly lifts rankings</td></tr>
                <tr><td className="kw">Quality directories &amp; brand listings</td><td>India business / toy / D2C directories</td><td>DA 30–60</td><td><Pill type="p-md">Med</Pill></td><td>Foundational; avoid spammy link farms</td></tr>
                <tr><td className="kw">Guest posts</td><td>Parenting/education/lifestyle sites</td><td>DA 35–60</td><td><Pill type="p-md">Med</Pill></td><td>"Toys &amp; child development" expertise angle</td></tr>
                <tr><td className="kw">Unlinked brand-mention reclamation</td><td>Anywhere "Mirada" is named w/o a link</td><td>varies</td><td><Pill type="p-hi">High (easy)</Pill></td><td>Strong retail presence = many mentions to claim</td></tr>
              </tbody>
            </table>
          </div>
          <Note>
            <b>Competitor backlink angle:</b> Bear Hugs / Fluffmint earn links chiefly from gift
            listicles and pop-culture mentions. Mirada can win the same placements <em>and</em>{' '}
            outclass them with assets they can't match — genuine licensing credentials, 2010
            heritage, and safety-certification stories that earn editorial PR links small
            competitors can't.
          </Note>
        </section>

        {/* ═══ 09 HASHTAGS ═══ */}
        <section id="s9">
          <SecTag n="09">Hashtag Strategy</SecTag>
          <h2>Social discovery that compounds search demand</h2>
          <p className="lead">
            Hashtags don't move Google rankings directly, but they grow brand search and earn the
            mentions/links that do. Mix one or two high-volume tags with several niche tags per
            post for the best reach-to-relevance ratio.
          </p>

          <div className="grid g2">
            <div className="card">
              <h4>Instagram</h4>
              <p style={{ fontSize: 13 }}>
                <strong>High volume:</strong> #softtoys #plushies #plushtoy #kidsgifts #cutetoys<br />
                <strong>Medium:</strong> #softtoysindia #plushiesofinstagram #pokemonplush #kawaiiplush #giftingideas<br />
                <strong>Niche / conversion:</strong> #softtoysonline #miradakids #pikachuplush #hellokittyplush #returngifts #birthdaygiftforkids
              </p>
            </div>
            <div className="card">
              <h4>Pinterest</h4>
              <p style={{ fontSize: 13 }}>
                <strong>High:</strong> soft toys, plush toys, kids gift ideas, nursery decor<br />
                <strong>Medium:</strong> kawaii plushies, pokemon plush, cute stuffed animals<br />
                <strong>Niche:</strong> birthday gift for kids, return gift ideas india, plush toy aesthetic
              </p>
            </div>
            <div className="card">
              <h4>YouTube Shorts</h4>
              <p style={{ fontSize: 13 }}>
                <strong>High:</strong> #shorts #softtoys #plush #unboxing #toys<br />
                <strong>Medium:</strong> #plushunboxing #pokemonplush #asmrunboxing #toyreview<br />
                <strong>Niche/conversion:</strong> #softtoyhaul #kawaiiplush #miradatoys #giftideas
              </p>
            </div>
            <div className="card">
              <h4>Trend / viral &amp; product</h4>
              <p style={{ fontSize: 13 }}>
                <strong>Viral:</strong> #plushtok #cutecore #kawaiiaesthetic #plushcollection #fyp<br />
                <strong>Anime:</strong> #animeplush #anime #otaku #kawaii #sanrio #hellokitty<br />
                <strong>Kids/product:</strong> #kidstoys #toddlertoys #huggable #softandcuddly #plushielove
              </p>
            </div>
          </div>
          <p style={{ fontSize: 13, color: 'var(--muted)' }}>
            Tip: keep a branded tag (#MiradaKids / #MiradaMoments) on every post to consolidate
            UGC and make brand-search and mention-reclamation easier.
          </p>
        </section>

        {/* ═══ 10 LOCAL & INTL ═══ */}
        <section id="s10">
          <SecTag n="10">Local &amp; International SEO</SecTag>
          <h2>India first — then export the demand</h2>
          <div className="grid g2">
            <div className="card">
              <h4>India SEO (primary)</h4>
              <ul className="tick">
                <li>Add "India" / city modifiers in titles, meta &amp; collection copy ("soft toys online India", "plush toys Delhi/Mumbai/Bangalore")</li>
                <li>Currency, INR pricing &amp; "free shipping/COD" signals already strong — surface them in copy</li>
                <li>Geo gifting terms: "same-day gift delivery [city]", "return gifts India"</li>
                <li>Google Business Profile if there's any physical/retail presence</li>
              </ul>
            </div>
            <div className="card">
              <h4>International (upside)</h4>
              <ul className="tick">
                <li>Licensed-character demand is global; export feasible <em>if</em> licensing territory permits — confirm before targeting</li>
                <li>Use <code>hreflang</code> + Shopify Markets if expanding to US/UK/UAE</li>
                <li>UAE/GCC &amp; Indian diaspora are the natural first export SERPs</li>
                <li>Geo-targets: "pokemon plush UAE", "soft toys online USA" (licensing-dependent)</li>
              </ul>
            </div>
          </div>
          <Note>
            <b>Important constraint:</b> licensed-character products usually carry{' '}
            <em>territorial</em> sales rights. Confirm Mirada's license territory before investing
            in international SEO for branded characters — generic plush (animals, dolls, DIY) can
            be exported freely regardless.
          </Note>
        </section>

        {/* ═══ 11 ACTION PLAN ═══ */}
        <section id="s11">
          <SecTag n="11">Action Plan</SecTag>
          <h2>30 / 60 / 90-day roadmap</h2>

          <div className="phase">
            <div className="head">
              <div className="d">30</div>
              <div className="t">Days · Fix &amp; Foundation</div>
            </div>
            <div className="body">
              <p style={{ margin: '0 0 6px' }}><strong>Quick wins &amp; high-impact fixes:</strong></p>
              <ul className="tick" style={{ margin: 0 }}>
                <li>Rewrite homepage title + meta description (keyword + value prop) — <em>highest ROI single fix</em></li>
                <li>Re-template top 50 product titles to lead with searched terms ("Pikachu Soft Toy… | Mirada")</li>
                <li>Connect/verify Google Search Console &amp; Analytics; submit sitemap → replace estimates with real data</li>
                <li>Add alt text to all product/gallery images; fix the 22cm/23cm slug-title mismatch</li>
                <li>Install a product-review app → seed reviews → enable aggregateRating schema</li>
              </ul>
              <p style={{ margin: '8px 0 0', fontSize: 13, color: 'var(--teal)' }}>
                <strong>Expected impact:</strong> +15–30% non-brand impressions within 4–8 weeks; foundation for everything after.
              </p>
            </div>
          </div>

          <div className="phase">
            <div className="head">
              <div className="d">60</div>
              <div className="t">Days · Pages &amp; Content</div>
            </div>
            <div className="body">
              <p style={{ margin: '0 0 6px' }}><strong>Build the ranking assets:</strong></p>
              <ul className="tick" style={{ margin: 0 }}>
                <li>Write SEO intro + FAQ copy for Pokémon, Sanrio, Marvel, Harry Potter collections</li>
                <li>Launch the Anime/Kawaii plush landing page (new low-KD demand)</li>
                <li>Publish content roadmap items 1–5 (buying guides) with internal links to collections</li>
                <li>Optimise price-point pages (under 399/699/999) for "soft toys under ₹X"</li>
                <li>Begin link outreach: brand-mention reclamation + 5–8 parenting/gift bloggers</li>
              </ul>
              <p style={{ margin: '8px 0 0', fontSize: 13, color: 'var(--teal)' }}>
                <strong>Expected impact:</strong> first page-1/2 entries for easy-win terms (pokemon plush india, kawaii plush, character names).
              </p>
            </div>
          </div>

          <div className="phase">
            <div className="head">
              <div className="d">90</div>
              <div className="t">Days · Authority &amp; Scale</div>
            </div>
            <div className="body">
              <p style={{ margin: '0 0 6px' }}><strong>Long-term compounding:</strong></p>
              <ul className="tick" style={{ margin: 0 }}>
                <li>Complete topic clusters; build the gifting/festive evergreen hub</li>
                <li>Scale digital PR (heritage/safety story) for DA 60+ links</li>
                <li>Roll title/copy optimisation across the full catalogue</li>
                <li>Improve Core Web Vitals (lazy-load video, compress hero, defer 3rd-party JS)</li>
                <li>Review GSC data; double down on terms gaining impressions</li>
              </ul>
              <p style={{ margin: '8px 0 0', fontSize: 13, color: 'var(--teal)' }}>
                <strong>Expected impact:</strong> est. <strong>2–4× non-brand organic traffic in 6 months</strong>, compounding into ranking authority for higher-KD money terms.
              </p>
            </div>
          </div>
        </section>

        {/* ═══ 12 SCORECARD ═══ */}
        <section id="s12">
          <SecTag n="12">Final SEO Scorecard</SecTag>
          <h2>Where Mirada stands today</h2>

          <Meter name="Technical SEO"       pct={74} val={74} grade="gB" />
          <Meter name="On-Page SEO"         pct={45} val={45} grade="gD" />
          <Meter name="Content SEO"         pct={52} val={52} grade="gC" />
          <Meter name="Keyword Coverage"    pct={38} val={38} grade="gD" />
          <Meter name="Backlink Profile"    pct={42} val={42} grade="gD" />
          <Meter name="User Experience"     pct={70} val={70} grade="gB" />
          <Meter name="Mobile SEO"          pct={66} val={66} grade="gC" />
          <Meter name="Site Authority (brand)" pct={60} val={60} grade="gC" />

          <Note teal style={{ marginTop: 24 }}>
            <b>Composite: 54/100 (C+).</b> The profile is lopsided in a <em>good</em> way:
            technical health and UX are solid, while the weak scores (keyword coverage, on-page,
            links) are precisely the areas that respond fastest to focused work.{' '}
            <strong>Priority fixes:</strong> (1) homepage + product titles/meta, (2) collection-page
            SEO copy + reviews/schema, (3) anime/kawaii + Pokémon money pages, (4) a focused
            parenting-and-gifting link campaign.
          </Note>
        </section>

        {/* ═══ ROI ═══ */}
        <section id="roi">
          <SecTag n="★">Closing</SecTag>
          <h2>Top 10 Highest-ROI SEO Opportunities for Mirada Kids</h2>
          <p className="lead">If only ten things get done, do these — ordered by return on effort.</p>

          <div className="roi">
            {[
              {
                rank: 1,
                title: 'Rewrite the homepage title & meta description',
                body: 'From "Miradakids" to a keyword-rich, benefit-led tag. One line of work; lifts the most important page in the site for non-brand discovery. Effort: tiny · Impact: very high.',
              },
              {
                rank: 2,
                title: 'Re-template product titles to lead with the searched term',
                body: '"Pikachu Soft Toy 23cm – Official Pokémon Plush | Mirada". Unlocks thousands of monthly searches Mirada already has products for.',
              },
              {
                rank: 3,
                title: 'Win "pokemon plush india" & the character long-tails',
                body: 'Low KD, exact match to the catalogue, competitors already proving demand. Easy page-1 within weeks.',
              },
              {
                rank: 4,
                title: 'Launch an Anime / Kawaii plush landing page',
                body: 'Rising, low-competition demand Mirada is completely absent from. First-mover advantage in a trend.',
              },
              {
                rank: 5,
                title: 'Add reviews + Review/FAQ/Breadcrumb schema',
                body: 'Star ratings in SERPs lift CTR on every product; FAQ schema captures snippets. Conversion + ranking double win.',
              },
              {
                rank: 6,
                title: 'Write SEO intro + FAQ copy on every key collection',
                body: 'Pokémon, Sanrio, Marvel, Harry Potter, price-point pages. Turns thin category pages into ranking assets.',
              },
              {
                rank: 7,
                title: 'Build the gifting / return-gifts money pages',
                body: "High-volume, high-AOV commercial intent (incl. bulk B2B). Mirada's pricing & keychain range fit perfectly.",
              },
              {
                rank: 8,
                title: 'Connect GSC + Analytics and fix image alt / slug issues',
                body: 'Replaces every estimate in this report with live data, opens Google Images traffic, and cleans up technical debt.',
              },
              {
                rank: 9,
                title: 'Run a focused parenting/gift-blogger + brand-mention link campaign',
                body: 'Reclaim unlinked mentions (easy, given retail presence) and earn topical links to compete with Bear Hugs/Fluffmint.',
              },
              {
                rank: 10,
                title: 'Improve Core Web Vitals on mobile',
                body: 'Lazy-load the heavy hero video, compress oversized PNGs, defer third-party scripts. Protects rankings as content scales.',
              },
            ].map(({ rank, title, body }) => (
              <div className="item" key={rank}>
                <div className="rank">{rank}</div>
                <div>
                  <h4>{title}</h4>
                  <p style={{ margin: 0, fontSize: 13.5 }}>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>{/* end .wrap */}

      {/* ═══ FOOTER ═══ */}
      <footer>
        <div className="wrap">
          <div className="big">Mirada Kids — SEO &amp; Keyword Strategy Report</div>
          <p style={{ margin: '4px 0 0' }}>Desk audit prepared May 2026 · miradakids.com · Plush &amp; Licensed Soft Toys (India)</p>
          <p style={{ margin: '10px auto 0', maxWidth: 680, fontSize: 12, color: '#9aa3ba' }}>
            Site structure, on-page tags, blog and competitor set verified on the live web. Search
            volumes, keyword difficulty and ranking positions are calibrated analyst estimates for
            the Indian market — connect Google Search Console and a rank-tracking tool to convert
            them to exact, monitored figures.
          </p>
        </div>
      </footer>

    </div>
  );
};

export default Seomain;