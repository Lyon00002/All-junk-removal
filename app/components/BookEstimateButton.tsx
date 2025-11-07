"use client";

import React from "react";
import GetQuoteButton, { GetQuoteButtonProps } from "./GetQuoteButton";

export type BookEstimateButtonProps = Omit<
  GetQuoteButtonProps,
  "variant" | "withHoverIcon" | "label"
> & {
  label?: string;
};

export default function BookEstimateButton({
  label = "Book a free Estimate",
  ...rest
}: BookEstimateButtonProps) {
  return (
    <GetQuoteButton
      label={label}
      variant="outline"
      // withHoverIcon
      {...rest}
    />
  );
}
