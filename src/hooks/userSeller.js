import { useEffect, useState } from "react";

const useSeller = (email) => {
  const [isSeller, setSeller] = useState(false);
  const [sallerLoading, setSallerLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/roles/${email}`)
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setSeller(data.isSeller);
          setSallerLoading(false);
        });
    }
  }, [email]);
  return [isSeller, sallerLoading];
};
export default useSeller;
