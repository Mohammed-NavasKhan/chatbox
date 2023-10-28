"use client";
import React from "react";

interface Props {
  error: Error;
  reset: () => void;
}

const ErorPage = ({ error, reset }: Props) => {
  return (
    <>
      <div className="text-lg text-red-600">{error.stack}</div>
    </>
  );
};

export default ErorPage;
