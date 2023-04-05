import * as React from "react";
import { Link } from "gatsby";

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};

const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>Баракча табылган жок</h1>
      <p style={paragraphStyles}>
        Кечиресиз 😔, сиз издеген баракча табылган жок.
        <br />
        <br />
        <Link to="/">Башкы бетке кайтуу</Link>.
      </p>
    </main>
  );
};

export default NotFoundPage;

export const Head = () => <title>Табылган жок</title>;
