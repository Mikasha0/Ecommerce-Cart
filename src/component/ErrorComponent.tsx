
export default function ErrorComponent({errorMessage}:{errorMessage:string}) {
  return (
    <div className="container">
    <div className="error-box">
      <h2 className="error-heading">Oops! Something went wrong.</h2>
      <p className="error-message">{errorMessage}</p>
    </div>
  </div>  )
}
