import React from "react";

export default function MainWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="wrapper">
      <div className="wrapper__inner">{children}</div>
    </main>
  );
}
