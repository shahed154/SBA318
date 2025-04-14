let listings = [
    { 
      id: 1, 
      title: '2024 BMW 530i', 
      description: 'BEEMERRRRRR',  
      price: 150000, 
      userId: 1, 
      categoryId: 1 
    },
    { 
      id: 2, 
      title: 'Diamond Necklace', 
      description: 'ICED OUT', 
      price: 2500000, 
      userId: 2, 
      categoryId: 2 
    },
    { 
      id: 3, 
      title: 'SQUARE PANTS', 
      description: 'SPONGE BOB', 
      price: 15000000000, 
      userId: 1, 
      categoryId: 3 
    }
  ];


  const getListingById = (id) => {
    return listings.find(listing => listing.id === parseInt(id));
  }

module.exports = {

  getListingById
}