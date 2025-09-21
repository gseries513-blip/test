import HomeCategoryList from "../components/HomeCategoryList";
export default function WelcomePage() {
  return (
    <div className="home-page">
      <section className="welcome-text flow-content container dark-background">
        <h2>Welcome to Another Bookstore</h2>
        <p>
          Another Bookstore is a client-side application written using React
          components. It includes a welcome page and a category page. Both pages
          have the same header and footer. You can navigate to the category page
          by choosing any category from the dropdown menu in the header. You can
          navigate to the home page by clicking on the logo in the header. Take
          some time and explore the code.
        </p>
      </section>
      <section className="category-images container">
        <HomeCategoryList />
      </section>
    </div>
  );
}
