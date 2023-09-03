import { NormalButtonTypes } from "../types/normal-button.types";
export default function NormalButton({
  btnName,
  type,
  cssClassName,
  ...inputProps
}: NormalButtonTypes) {
  return (
    <button className={`${cssClassName}`} type={type} {...inputProps}>
      {btnName}
    </button>
  );
}
