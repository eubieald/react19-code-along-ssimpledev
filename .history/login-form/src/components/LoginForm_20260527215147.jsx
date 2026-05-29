import React from "react";

export const LoginForm = () => {
  const [toggleOnValue, setToggleOnValue] = React.useState(false);
  const toggleOn = React.useRef(null);
  const passwordInput = React.useRef(null);

  React.useEffect(() => {
    if (toggleOnValue) {
      toggleOn.current.innerHTML = "Hide";
      toggleOn.current.style.backgroundColor = "red";
      passwordInput.current.type = "text";
    } else {
      toggleOn.current.innerHTML = "Show";
      toggleOn.current.style.backgroundColor = "green";
      passwordInput.current.type = "password";
    }
  }, [toggleOnValue]);

  return (
    <form>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input style={{ width: "200px" }} type="text" placeholder="Username" />
        <div style={{ display: "flex", gap: "10px" }}>
          <input
            ref={passwordInput}
            style={{ width: "200px" }}
            type="password"
            placeholder="Password"
          />
          <button
            style={{
              width: "50px",
              backgroundColor: "green",
              color: "white",
              border: "none",
            }}
            type="button"
            onClick={() => setToggleOnValue(!toggleOnValue)}
            ref={toggleOn}
          >
            On
          </button>
        </div>
      </div>
      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        <button type="submit">Login</button>
        <button type="signup">Signup</button>
      </div>
    </form>
  );
};
