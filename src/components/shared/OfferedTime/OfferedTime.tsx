"use client";

import { useEffect, useState } from "react";

const OfferedTime = () => {
  const [remainingTime, setRemainingTime] = useState("");

  useEffect(() => {
    const currentDate = new Date();

    let futureDate = new Date();

    futureDate.setDate(currentDate.getDate() + 15);

    const totalRemainingTime = futureDate.getTime() - currentDate.getTime();

    const updateRemainingTime = () => {
      const newRemainingTime =
        totalRemainingTime - (Date.now() - currentDate.getTime());

      if (newRemainingTime <= 0) {
        setRemainingTime("00:00:00:00");
        return;
      }

      const days = Math.floor(newRemainingTime / (1000 * 60 * 60 * 24));

      const hours = Math.floor(
        (newRemainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );

      const minutes = Math.floor(
        (newRemainingTime % (1000 * 60 * 60)) / (1000 * 60)
      );

      const seconds = Math.floor((newRemainingTime % (1000 * 60)) / 1000);

      const formattedRemainingTime = `${days}:${hours}:${minutes}:${seconds}`;

      setRemainingTime(formattedRemainingTime);
    };

    const intervalId = setInterval(updateRemainingTime, 1000);

    updateRemainingTime();

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-red-500 text-white py-1 rounded-md font-medium text-center">
      Offer Remains: {remainingTime}{" "}
    </div>
  );
};

export default OfferedTime;
