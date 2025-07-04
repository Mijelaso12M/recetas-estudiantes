import React from 'react';
import { useRecipes } from '../hooks/useRecipes';

const StatsPage: React.FC = () => {
  const { recetas } = useRecipes();

  const totalRecetas = recetas.length;

  const recetasPorCategoria: Record<string, number> = recetas.reduce((acc, receta) => {
    acc[receta.categoria] = (acc[receta.categoria] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const recetaPopular = recetas.reduce((max, receta) =>
    receta.valoracion > max.valoracion ? receta : max,
    recetas[0]
  );

  return (
    <div style={{ padding: '2rem', color: '#000' }}>
      <h1>Estadísticas de Recetas</h1>

      <p><strong>N° Total de recetas:</strong> {totalRecetas}</p>

      <h2> Recetas por categorias </h2>
      <ul>
        {Object.entries(recetasPorCategoria).map(([categoria, count]) => (
          <li key={categoria}>
            <strong>{categoria}:</strong> {count}
          </li>
        ))}
      </ul>

      <h2>Receta popular</h2>
      {recetaPopular && (
        <div>
          <p><strong>Nombre:</strong> {recetaPopular.nombre}</p>
          <p><strong>Valoración:</strong> {recetaPopular.valoracion}</p>
          <p><strong>Dificultad:</strong> {recetaPopular.dificultad}</p>
        </div>
      )}
    </div>
  );
};

export default StatsPage;


