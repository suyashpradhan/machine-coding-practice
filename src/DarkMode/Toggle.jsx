export function Toggle({ darkMode, handleToggle }) {
  return (
    <div
      style={
        darkMode
          ? {
              backgroundColor: "#464649",
            }
          : {
              backgroundColor: "#fff",
            }
      }
    >
      <h1>Toggle Dark Mode</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio et fugit
        explicabo beatae atque tempora necessitatibus obcaecati tempore ratione
        reiciendis numquam aut adipisci hic accusantium eaque labore
        consequuntur, ipsa rem?
      </p>
      <button onClick={handleToggle}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}
