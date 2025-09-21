import "./HeaderSearchBar.css";

export default function HeaderSearchBar() {
    return (
        <div className="search">
            <form action="/category" method="get">
                <input type="text" placeholder="Search books…" name="q" />
                <a className="search-icon" href="/category" aria-label="Search">
                    <img
                        src="https://www.svgrepo.com/show/532555/search.svg"
                        alt="search"
                    />
                </a>
            </form>
        </div>
    );
}
