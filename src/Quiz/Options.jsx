export const Options = ({ options }) => {
  return (
    <>
      {options.map((option) => {
        return (
          <>
            <div className="option">
              <h1 className="text-secondary">{option.option}</h1>
            </div>
          </>
        );
      })}
    </>
  );
};
