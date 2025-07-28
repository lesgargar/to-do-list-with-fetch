import "./taskStyle.css";
export default function Task({ text, children }) {
  return (
    <div className=" col-9 p-2 task d-flex row align-items-center">
      <h2 className="col-10 d-flex justify-content-start">{text}</h2>
      <div className="col-2">{children}</div>
    </div>
  );
}
