
export interface NormalButtonTypes{
  btnName:string, 
  type?:btnType,
  cssClassName:string,
  onClick?:()=> void | undefined
}


export enum btnType{
  submit='submit', 
  button='button', 
  reset="reset"
}
export default function NormalButton({btnName, type,cssClassName, ...inputProps}:NormalButtonTypes) {
  return (
    <button
      className={`${cssClassName}`}
      type={type}
      {...inputProps}
    >
      {btnName}
    </button>
  );
}