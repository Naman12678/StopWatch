export const getFromStorage = (key) => JSON.parse(localStorage.getItem(key)) || [];
export const saveToStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value));