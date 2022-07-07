import React from "react";
import "./loading.scss";

export default function Loading({ open }) {
  if (!open) return;
  return (
    <div className="overlay">
      <div class="loader"></div>
    </div>
  );
}
