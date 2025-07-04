const FAVORITES_KEY = 'recetas_favoritas';

export function getFavorites(): string[] {
  const stored = localStorage.getItem(FAVORITES_KEY);
  return stored ? JSON.parse(stored) : [];
}

export function addFavorite(id: string): void {
  const favorites = getFavorites();
  if (!favorites.includes(id)) {
    favorites.push(id);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }
}

export function removeFavorite(id: string): void {
  const favorites = getFavorites().filter(favId => favId !== id);
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}
