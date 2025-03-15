// Local storage keys
const STORAGE_KEYS = {
    RECENTLY_VIEWED: 'bikeworld-recently-viewed',
    FAVORITES: 'bikeworld-favorites',
    COMPARE: 'bikeworld-compare',
};

// Product interface
export interface StoredProduct {
    id: string;
    name: string;
    price: number;
    category: string;
    image: string;
    inStock: boolean;
}

// Recently viewed products
export const getRecentlyViewed = (): StoredProduct[] => {
    if (typeof window === 'undefined') return [];

    try {
        const items = localStorage.getItem(STORAGE_KEYS.RECENTLY_VIEWED);
        return items ? JSON.parse(items) : [];
    } catch (error) {
        console.error('Error getting recently viewed products:', error);
        return [];
    }
};

export const addToRecentlyViewed = (product: StoredProduct): void => {
    if (typeof window === 'undefined') return;

    try {
        const recentlyViewed = getRecentlyViewed();

        // Remove the product if it already exists
        const filteredItems = recentlyViewed.filter(item => item.id !== product.id);

        // Add the product to the beginning of the array
        const updatedItems = [product, ...filteredItems].slice(0, 10); // Keep only 10 most recent

        localStorage.setItem(STORAGE_KEYS.RECENTLY_VIEWED, JSON.stringify(updatedItems));
    } catch (error) {
        console.error('Error adding to recently viewed:', error);
    }
};

// Favorites
export const getFavorites = (): StoredProduct[] => {
    if (typeof window === 'undefined') return [];

    try {
        const items = localStorage.getItem(STORAGE_KEYS.FAVORITES);
        return items ? JSON.parse(items) : [];
    } catch (error) {
        console.error('Error getting favorites:', error);
        return [];
    }
};

export const addToFavorites = (product: StoredProduct): void => {
    if (typeof window === 'undefined') return;

    try {
        const favorites = getFavorites();

        // Check if product already exists in favorites
        if (!favorites.some(item => item.id === product.id)) {
            const updatedItems = [...favorites, product];
            localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(updatedItems));
        }
    } catch (error) {
        console.error('Error adding to favorites:', error);
    }
};

export const removeFromFavorites = (productId: string): void => {
    if (typeof window === 'undefined') return;

    try {
        const favorites = getFavorites();
        const updatedItems = favorites.filter(item => item.id !== productId);
        localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(updatedItems));
    } catch (error) {
        console.error('Error removing from favorites:', error);
    }
};

export const isInFavorites = (productId: string): boolean => {
    if (typeof window === 'undefined') return false;

    try {
        const favorites = getFavorites();
        return favorites.some(item => item.id === productId);
    } catch (error) {
        console.error('Error checking favorites:', error);
        return false;
    }
};

// Compare
export const getCompareList = (): StoredProduct[] => {
    if (typeof window === 'undefined') return [];

    try {
        const items = localStorage.getItem(STORAGE_KEYS.COMPARE);
        return items ? JSON.parse(items) : [];
    } catch (error) {
        console.error('Error getting compare list:', error);
        return [];
    }
};

export const addToCompare = (product: StoredProduct): void => {
    if (typeof window === 'undefined') return;

    try {
        const compareList = getCompareList();

        // Check if product already exists in compare list
        if (!compareList.some(item => item.id === product.id)) {
            // Limit to 4 products for comparison
            const updatedItems = [...compareList, product].slice(0, 4);
            localStorage.setItem(STORAGE_KEYS.COMPARE, JSON.stringify(updatedItems));
        }
    } catch (error) {
        console.error('Error adding to compare:', error);
    }
};

export const removeFromCompare = (productId: string): void => {
    if (typeof window === 'undefined') return;

    try {
        const compareList = getCompareList();
        const updatedItems = compareList.filter(item => item.id !== productId);
        localStorage.setItem(STORAGE_KEYS.COMPARE, JSON.stringify(updatedItems));
    } catch (error) {
        console.error('Error removing from compare:', error);
    }
};

export const isInCompare = (productId: string): boolean => {
    if (typeof window === 'undefined') return false;

    try {
        const compareList = getCompareList();
        return compareList.some(item => item.id === productId);
    } catch (error) {
        console.error('Error checking compare list:', error);
        return false;
    }
};
