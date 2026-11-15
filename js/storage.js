const STORAGE_KEY = "shopping-list-items"

export function loadItems() {
    const savedItems = localStorage.getItem(STORAGE_KEY)
    if (savedItems === null) {
        return []
    }

    return JSON.parse(savedItems)
}

export function saveItems(items) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}
