import "./not-found.css";

export default function NotFoundPage() {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="error-code">404</h1>
        <h2 className="error-title">Page Not Found</h2>
        <p className="error-message">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>

        <a href="/" className="home-button">
          Back to Home
        </a>
      </div>
    </div>
  );
}
