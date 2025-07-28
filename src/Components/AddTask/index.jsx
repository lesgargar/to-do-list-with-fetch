import "./addTaskStyle.css";

export default function AddTask({ value, onChange, onClick }) {
  return (
    <div className="form-group p-2">
      <input
        type="text"
        placeholder="Add a task"
        className="mx-3"
        value={value}
        onChange={onChange}
      />
      <button onClick={onClick} className="btn add-btn-style">
        Add
      </button>
    </div>
  );
}
