export default function Home() {
  return (
    <div
      style={{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '40px 20px',
        textAlign: 'center',
      }}
    >
      <h1 style={{ fontSize: '28px', color: '#222' }}>
        Welcome to the Product Page App
      </h1>
      <p style={{ marginBottom: '20px', color: '#555' }}>
        Visit a product page:
        <span style={{ margin: '0 10px' }}>
          <a href="/product/1" style={{ fontWeight: 'bold' }}>
            Product 1
          </a>
        </span>
        <span style={{ margin: '0 10px' }}>
          <a href="/product/2" style={{ fontWeight: 'bold' }}>
            Product 2
          </a>
        </span>
      </p>
    </div>
  );
}