'use client';
import { useState } from 'react';
import axios from 'axios';
import { Project } from '@/models/Project';
import ProjectBox from '@/Container/ProjectBox';
import Header from '@/Container/Header';
import { Button } from '@mui/material';

export default function Home() {
  const [tons, setTons] = useState<number>(0);
  const [portfolio, setPortfolio] = useState<Project[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleGeneratePortfolio = async () => {
    event.preventDefault();
    try {
      setPortfolio([]);
      setTons(tons);
      const response = await axios.get(`http://localhost:3010/portfolio/generate?tons=${tons}`);
      console.log(response.data);
      setPortfolio(response.data);
    } catch (err) {
      setError('Failed to generate portfolio. Please try again.');
      console.error(err);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <Header />
      <div style={{ marginBottom: '20px' }}>

        <form onSubmit={handleGeneratePortfolio} style={{
          marginTop: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          border: '1px solid black',
          padding: '20px',
          borderRadius: '8px',
        }}>
          <input
            id="tons"
            type="number"
            value={tons === 0 ? '' : tons}
            placeholder="Enter desired tons"
            onChange={(e) => setTons(Number(e.target.value))}
            style={{ padding: '5px', width: '250px', color: 'black' }}
            min="0"
            required={true}
          />
          <button
            type="submit"
            style={{
              marginTop: '25px',
              padding: '5px 10px',
              borderRadius: '8px',
              backgroundColor: '#c1d9d0',
              cursor: 'pointer',
              color: 'black',
              outline: 'white',
            }}
          >
            Generate Portfolio
          </button>
        </form>
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {portfolio.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {portfolio.map((project) => (
            <ProjectBox
              key={project.id}
              image={project.image}
              name={project.name}
              country={project.country}
              supplier={project.supplier_name}
              allocatedTons={project.allocatedTons}
              description={project.description}
              pricePerTon={project.price_per_ton}
              earliestDelivery={project.earliest_delivery}
            />
          ))}
        </div>
      )}
    </div>
  );
}
