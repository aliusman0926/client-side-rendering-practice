'use client';

import { useParams } from 'next/navigation';
import useSWR from 'swr';

const fetcher = url => fetch(url).then(res => {
  if (!res.ok) throw new Error('Failed to fetch product');
  return res.json();
});

export default function ProductPage() {
  const params = useParams();
  const id = params?.id;

  if (!id) return <div style={loadingErrorStyle}>Loading ID...</div>;

  const { data: product, error } = useSWR(
    `https://dummyjson.com/products/${id}`,
    fetcher
  );

  if (error) return <div style={loadingErrorStyle}>Error: {error.message}</div>;
  if (!product) return <div style={loadingErrorStyle}>Loading...</div>;

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={{ color: '#222' }}>{product.title}</h1>
        <p style={{ color: '#555' }}>{product.description}</p>
      </div>
    </div>
  );
}

const containerStyle = {
  maxWidth: '600px',
  margin: '0 auto',
  padding: '40px 20px',
};

const cardStyle = {
  backgroundColor: '#fff',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  padding: '20px',
  textAlign: 'center',
};

const loadingErrorStyle = {
  maxWidth: '600px',
  margin: '0 auto',
  padding: '40px 20px',
  textAlign: 'center',
  color: '#888',
  fontStyle: 'italic',
};