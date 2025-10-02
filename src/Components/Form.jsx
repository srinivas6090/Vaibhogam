import React from "react";

export default function Form() {
  return (
    <section style={{ padding: "4rem 1rem", maxWidth: "480px", margin: "auto" }}>
      <h1 style={{ color: "#6c1336", fontSize: "2.5rem", fontWeight: "700", marginBottom: "2rem", textAlign: "center" }}>
        Inquiry Form
      </h1>
      <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }} onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Full Name" required style={{ padding: "0.75rem", fontSize: "1rem" }} />
        <input type="email" placeholder="Email Address" required style={{ padding: "0.75rem", fontSize: "1rem" }} />
        <input type="tel" placeholder="Phone Number" required style={{ padding: "0.75rem", fontSize: "1rem" }} />
        <textarea placeholder="Your Message" rows="5" style={{ padding: "0.75rem", fontSize: "1rem" }}></textarea>
        <button
          type="submit"
          style={{
            backgroundColor: "#6c1336",
            color: "#e6b87e",
            padding: "1rem",
            fontWeight: "700",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </section>
  );
}
