
export const showSpinner = () => {
    document.getElementById('loadingSpinner').style.display = 'block';
};


export const hideSpinner = () => {
    document.getElementById('loadingSpinner').style.display = 'none';
};

export const fetchCompanyData = async () => {
    try {
        showSpinner();
        const response = await fetch('https://jsonplaceholder.typicode.com/users'); // Example API
        if (!response.ok) {
            throw new Error('Failed to fetch company data');
        }
        const data = await response.json();
        return data[0]; 
    } catch (error) {
        console.error('Error:', error);
        return null;
    }finally {
        hideSpinner(); 
    }
};





