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