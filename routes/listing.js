// main utilities stuff for listings 


const express = require('express');
const router = express.Router()

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


  const getAllListings = () =>
     {
    return [...listings]
};

  const getListingById = (id) => 
  {
    return listings.find(listing => listing.id === parseInt(id))
};

  const getListingsByUserId = (userId) => 
    {
    return listings.filter(listing => listing.userId === userId);
};

//  editing listings 


const createListing = (listing) => 
  {
  //
  const newListing = {
    //
      id: listings.length + 1,
      title: listing.title,
      description: listing.description,
      price: parseInt(listing.price),
      userId: parseInt(listing.userId),
      categoryId: parseInt(listing.categoryId)
  };
  listings.push(newListing);
  return newListing
};

const updateListing = (id, updates) => 
  {
  const index = listings.findIndex(listing => listing.id === parseInt(id));


  if (updates.price) 
    {
    updates.price = parseInt(updates.price);
  }
  
  if (updates.userId) 
    {
    updates.userId = parseInt(updates.userId);
  }
  
  if (updates.categoryId) 
    {
    updates.categoryId = parseInt(updates.categoryId)
  }
      
      listings[index] = { ...listings[index], ...updates };

      return listings[index];
  
 
};


const deleteListing = (id) => 
  {

  const index = listings.findIndex(listing => 
    listing.id === parseInt(id));

   {
      const deletedListing = listings[index];
      listings = listings.filter(listing => 
        listing.id !== parseInt(id));

      return deletedListing

  }

};


router.get('/:id', (req, res) => {
  const listing = getListingById(req.params.id);
  res.json(listing);
});