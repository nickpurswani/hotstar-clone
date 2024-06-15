const getImagePath = (imagePath?: string, fullSize?: boolean) => {
    return imagePath
      ? `http://image.tmdb.org/t/p/${fullSize ? "original" : "w500"}/${imagePath}`
      : "https://knetic.org.uk/wp-content/uploads/2020/07/Pcture-Placeholder.png";
  };
  
  export default getImagePath;