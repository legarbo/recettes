const Menu = ({title, recipes}) => (
  <article>
    <header>
      <h1>{title}</h1>
    </header>
    <div className="recipes">
      {recipes.map((recipe, i) =>
        <Recipe key={i} {...recipe} />
      )}
    </div>
  </article>
)

ReactDOM.render(
  <Menu recipes={data} title="Delicious Recipes" />,
  document.getElementById("react-container")
)
