const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'listings');
let extractedData = [];

fs.readdirSync(directoryPath).forEach(dir => {
    const metadataPath = path.join(directoryPath, dir, 'metadata.json');
    if (fs.existsSync(metadataPath)) {
        const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
        const { name, token, logo, banner, shortDesc, saleType, contractId, owner, whitelist } = metadata;
        extractedData.push({ directory: dir, name, token, logo, banner, shortDesc, saleType, contractId, owner, whitelist });
    }
});

fs.writeFileSync('listings.json', JSON.stringify(extractedData, null, 2));
