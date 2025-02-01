import React from 'react';

interface ProjectBoxProps {
  image: string;
  name: string;
  country: string;
  supplier: string;
  allocatedTons: number;
  description: string;
  pricePerTon: number;
}

const ProjectBox: React.FC<ProjectBoxProps> = ({
                                                 image,
                                                 pricePerTon,
                                                 name,
                                                 country,
                                                 description,
                                                 supplier,
                                                 allocatedTons
                                               }) => {
  return (
    <div style={styles.container}>
      <p style={styles.allocatedTons}>Allocated Tons: {allocatedTons}</p>

      <div style={styles.detailsContainer}>
        <img src={image} alt={name} style={styles.image} />
        <div style={styles.details}>
          <h3 style={styles.name}>{name}, {country}</h3>
          <p style={styles.description}> {description}</p>
          <p style={styles.supplier}>Supplier: {supplier}</p>
        </div>
      </div>
      <p style={styles.pricePerTon}>Price: {pricePerTon}/ton</p>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '10px',
    margin: '10px',
    backgroundColor: '#fff'
  },
  image: {
    width: '25%',
    height: '25%',
    borderRadius: '8px',
    marginRight: '15px',
  },
  details: {
    textAlign: 'left',
    flex: 1,
  },
  name: {
    margin: '8 px 0',
    fontSize: '1em',
    color: '#555',
    fontWeight: 'bold'
  },
  supplier: {
    margin: '0',
    fontSize: '0.9em',
    color: '#555',
  },
  description: {
    margin: '0',
    fontSize: '0.9em',
    color: '#555',
  },
  allocatedTons: {
    margin: '0 0 10px 0',
    fontSize: '1.2em',
    fontWeight: 'bold',
    color: '#555',
  },
  pricePerTon: {
    margin: '0 0 10px 0',
    fontSize: '1.2em',
    fontWeight: 'bold',
    color: '#555',
    textAlign: 'right',

  },
  detailsContainer: {
    display: 'flex',
    alignItems: 'center',
  },
};

export default ProjectBox;