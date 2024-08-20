import { useCallback, useEffect } from "react";
import useRazorpay from "react-razorpay";
import BasicButtons from "./Button";

export default function App() {

  const [Razorpay, isLoaded] = useRazorpay();
  const handlePayment = useCallback(async () => {
    // const order = await createOrder(params);

    const options = {
      key: "rzp_test_fnQ39Gq5JwRXX4",
      amount: "3000",
      currency: "INR",
      name: "Acme Corp",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: "2324234325345346",
      handler: (res) => {
        console.log(res);
      },
      prefill: {
        name: "Piyush Garg",
        email: "shanawazumarkhan@gmail.com",
        contact: "8268405887",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzpay = new Razorpay(options);
    rzpay.open();
  }, [Razorpay]);

  // useEffect(() => {
  //   if (isLoaded) {
  //     handlePayment();
  //   }
  // }, [isLoaded, handlePayment])

  return (
    <div className="App" >
      <BasicButtons text="Checkout" onClick={handlePayment} class="cta-btn" variant="contained" />
      {/* &nbsp;&nbsp;&nbsp;&nbsp;
      <BasicButtons text="Our Quality Promises" class="cta-btn" outline={true} />
      <button onClick={handlePayment}> Click </button> */}
    </div>
  );
}