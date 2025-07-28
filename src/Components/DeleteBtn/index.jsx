import { ReactComponent as TrashCan } from "../../assets/icons/trashCan.svg";
export default function DeleteBtn({ onClick }) {
  return (
    <button onClick={onClick} className="btn">
      <TrashCan fill="black" width={20} height={20} />
    </button>
  );
}
