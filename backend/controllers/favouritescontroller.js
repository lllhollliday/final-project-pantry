export const getAllFavouriteRecipes = async (req, res, next) => {
    res.send("favourites get req")
};

export const getSingleFavouriteRecipe = async (req, res, next) => {
    res.send("favourites/:id get req")
}

export const addFavouriteRecipe = async (req, res, next) => {
    res.send("favourites post req")
}

export const updateFavouriteRecipe = async (req, res, next) => {
    res.send("favourites patch req on /:id")
}

export const deleteFavouriteRecipe = async (req, res, next) => {
    res.send("favourites delete req")
}