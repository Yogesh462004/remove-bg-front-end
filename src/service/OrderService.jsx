import axios from "axios";
import toast from "react-hot-toast";

export const PlaceOrder = async ({ planId, getToken, onSuccess, backendurl }) => {
  try {
    // Always get a fresh valid token before creating order
    const token = await getToken({ skipCache: true });

    const response = await axios.post(
      `${backendurl}/orders?planId=${planId}`,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );

    if (response.status === 200) {
      initializePayment({ order: response.data.data, getToken, onSuccess, backendurl });
    }
  } catch (e) {
    toast.error(e.message);
  }
};

const initializePayment = ({ order, getToken, onSuccess, backendurl }) => {
  const options = {
    key: import.meta.env.VITE_RAZORPAY_KEY_ID,
    amount: order.amount * 100, // Razorpay expects paise
    currency: order.currency,
    name: "Credit Payment",
    description: "Credit Purchase",
    order_id: order.id,
    receipt: order.receipt,
    handler: async (paymentDetails) => {
      try {
        // Also get fresh token before verifying payment
        const token = await getToken({ skipCache: true });

        const response = await axios.post(
          `${backendurl}/orders/verifying`,
          paymentDetails,
          { headers: { Authorization: `Bearer ${token}` } }
        );

        if (response.status === 200) {
          toast.success("Credits added successfully.");
          onSuccess?.();
        }
      } catch (e) {
        toast.error(e.message);
      }
    },
  };

  const rzp = new window.Razorpay(options);
  rzp.open();
};
