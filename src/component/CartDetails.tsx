export interface CartDetailsType{
    discountedPrice:number,
    fullAmount:number,
    totalDiscount:number,
}
export default function CartDetails({cartDetails}:{cartDetails:CartDetailsType}) {
  return (
    <div className="cartDetails">
    <h4 className="summary">Summary</h4>
    <h5>Total Amount: ${cartDetails.fullAmount}</h5>
    <h5>Discount: ${cartDetails.totalDiscount}</h5>
    <h5>Final Amount: ${cartDetails.discountedPrice}</h5>
  </div>  )
}
