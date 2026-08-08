function Portfolios() {
    const risingArtistPortfolios = [
        {
            title: "Rising Artist Portfolios",
            copy: "For independent and up-and-coming artists, unpredictable income is the norm — a viral single one month, a slow stretch the next. We build portfolios that smooth out that volatility, helping you save from royalties, streaming income, and show payouts so you can reinvest in your career, cover studio time, and build stability while you build your name."
        },
        {
            title: "Touring & Live Income Portfolios",
            copy: "Touring income arrives in bursts and disappears fast if it isn't managed right. We help artists structure tour earnings into portfolios that fund the next leg, cover the band and crew, and still leave something behind for long-term growth once the lights go down."
        },
        {
            title: "Catalog & Royalty Portfolios",
            copy: "Your masters, publishing, and royalty streams are assets — we treat them that way. We build portfolios around your existing catalog, helping you understand its value, reinvest royalty income intelligently, and make informed decisions if publishing or catalog sale opportunities come your way."
        }
    ];

    const topTierPortfolios = [
        {
            title: "Top-Tier Wealth Portfolios",
            copy: "For established, high-earning artists, we build diversified portfolios that go beyond the music — spanning investments, real estate, and business ventures. These portfolios are designed to protect and grow major wealth while giving you the flexibility to fund creative projects, tours, or new ventures without disrupting your financial foundation."
        },
        {
            title: "Brand & Business Portfolios",
            copy: "Many artists are running a business empire — labels, merch lines, fashion deals, and ventures beyond music. We help structure capital and cash flow across these businesses, so your empire grows as fast as your fanbase."
        },
        {
            title: "Legacy & Estate Portfolios",
            copy: "For artists thinking beyond the current chart run, we build portfolios focused on long-term legacy planning — protecting your catalog, your brand, and your wealth for the next generation, including estate and succession planning tailored to the music industry."
        }
    ];

    return (
        <>
            <h1>Financial Portfolios</h1>
            <div className="tab-copy">
                <p>
                    Your money should hit as hard as your music. Prestige Worldwide builds financial portfolios exclusively for artists — from independent talent on the rise to top-tier musicians managing serious wealth. We understand that income in this industry doesn't come in steady paychecks; it comes in waves, drops, and deals. Our portfolios are built to handle that reality.
                </p>

                <div className="tab-grid">
                    {risingArtistPortfolios.map((item) => (
                        <div className="tab-copy__item" key={item.title}>
                            <h4>{item.title}</h4>
                            <p>{item.copy}</p>
                        </div>
                    ))}
                </div>

                <div className="tab-grid">
                    {topTierPortfolios.map((item) => (
                        <div className="portfolio-copy__item" key={item.title}>
                            <h4>{item.title}</h4>
                            <p>{item.copy}</p>
                        </div>
                    ))}
                </div>

                <p className="tab-copy__closing">
                    No matter where you are in your career, you'll have a dedicated advisor who understands the music business, clear and transparent reporting, and a team that shows up early and stays late to help you win.
                </p>
            </div>
        </>
    );
}

export default Portfolios;