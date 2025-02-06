document.getElementById('newsletter-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const companyInfo = document.getElementById('company-info').value;
    const mediaFiles = document.getElementById('media-upload').files;

    const formData = new FormData();
    formData.append('companyInfo', companyInfo);
    for (let i = 0; i < mediaFiles.length; i++) {
        formData.append('media', mediaFiles[i]);
    }

    try {
        const response = await fetch('YOUR_API_ENDPOINT', {
            method: 'POST',
            body: formData
        });
        const newsletter = await response.json();
        document.getElementById('newsletter-output').innerHTML = newsletter.content;
    } catch (error) {
        console.error('Error generating newsletter:', error);
    }
});
