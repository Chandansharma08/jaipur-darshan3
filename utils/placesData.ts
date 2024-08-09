const placesPosts = [
    
  
    {
      slug: "car1",
      title:
        "Bali",
      desc: "Digital transformation has become a buzzword in today&rsquo;s business landscape, particularly in India where the confluence of a tech-savvy population, a growing economy, and government",
      mainImage: "https://placehold.co/600x300/png",
    },
    {
      slug: "car2",
      title:
        "Bali",
      desc: "Digital transformation has become a buzzword in today&rsquo;s business landscape, particularly in India where the confluence of a tech-savvy population, a growing economy, and government",
      mainImage: "https://placehold.co/600x300/png",
    },
    {
      slug: "car3",
      title:
        "Bali",
      desc: "Digital transformation has become a buzzword in today&rsquo;s business landscape, particularly in India where the confluence of a tech-savvy population, a growing economy, and government",
      mainImage: "https://placehold.co/600x300/png",
    },
    {
      slug: "car4",
      title:
        "Bali",
      desc: "Digital transformation has become a buzzword in today&rsquo;s business landscape, particularly in India where the confluence of a tech-savvy population, a growing economy, and government",
      mainImage: "https://placehold.co/600x300/png",
    },
    {
      slug: "car5",
      title:
        "Bali",
      desc: "Digital transformation has become a buzzword in today&rsquo;s business landscape, particularly in India where the confluence of a tech-savvy population, a growing economy, and government",
      mainImage: "https://placehold.co/600x300/png",
    },
    {
      slug: "car6",
      title:
        "Bali",
      desc: "Digital transformation has become a buzzword in today&rsquo;s business landscape, particularly in India where the confluence of a tech-savvy population, a growing economy, and government",
      mainImage: "https://placehold.co/600x300/png",
    },
    {
      slug: "car7",
      title:
        "Bali",
      desc: "Digital transformation has become a buzzword in today&rsquo;s business landscape, particularly in India where the confluence of a tech-savvy population, a growing economy, and government",
      mainImage: "https://placehold.co/600x300/png",
    },
    {
      slug: "car8",
      title:
        "Bali",
      desc: "Digital transformation has become a buzzword in today&rsquo;s business landscape, particularly in India where the confluence of a tech-savvy population, a growing economy, and government",
      mainImage: "https://placehold.co/600x300/png",
    },
    {
      slug: "car9",
      title:
        "Bali",
      desc: "Digital transformation has become a buzzword in today&rsquo;s business landscape, particularly in India where the confluence of a tech-savvy population, a growing economy, and government",
      mainImage: "https://placehold.co/600x300/png",
    },
    
  
  
  
  
  
    // Add more places posts as needed
  ];
  export const getAllPlacesData = () => {
    return placesPosts;
  }
  export const getPlacesData = (slug: string) => {
  
  
    return placesPosts.filter((post) => post.slug === slug);
  };
  