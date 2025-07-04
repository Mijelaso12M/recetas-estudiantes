import { useContext, useState } from 'react';
import { RecipeContext } from '../context/RecipeContext';

export const useRecipes = () => {
  const context = useContext(RecipeContext);
  if (context === undefined) {
    throw new Error('useRecipes debe ser usado dentro de un RecipeProvider');
  }

  const [difficultyFilter, setDifficultyFilter] = useState<string | null>(null);

  const filterByDifficulty = (difficulty: string) => {
    setDifficultyFilter(difficulty);
  };

  const filteredRecipes = difficultyFilter
    ? context.recetas.filter((recipe) => recipe.dificultad === difficultyFilter)
    : context.recetas;

  return {
    ...context,
    filterByDifficulty,
    filteredRecipes,
    difficultyFilter,
  };
};
