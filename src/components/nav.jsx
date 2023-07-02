import logo from "../assets/react.svg";

export default function Nav() {
  return (
    <>
      <nav className="navBar">
        <a href="">
          <span>
            <img src={logo} alt="" />
            <h1>ReactFacts</h1>
          </span>
        </a>
        <h4>React course - projsct 1</h4>
      </nav>
    </>
  );
}
