let request = undefined;

const createIndexedDB = () => {
    request = indexedDB.open('apiDatabase', 1)

    request.onerror = (event: any) => {
        console.log('Error opening database:', event.target.error.name);
    }

    request.onsuccess = (event: any) => {
        console.log('Database opened successfully');
        const db = event.target.result
    }
}

const getIndexedDB = () => {
    
}

export { createIndexedDB, getIndexedDB };