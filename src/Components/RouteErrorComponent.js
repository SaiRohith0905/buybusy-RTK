const { useNavigate } = require("react-router-dom");

export const RouteErrorComponent = () => {
  const navigate = useNavigate();

  function back() {
    navigate("/");
  }
  return (
    <div>
      <div>OOPS !! Something went wrong</div>
      <button
        onClick={() => {
          back();
        }}
      >
        Back to Home Page
      </button>
    </div>
  );
};
