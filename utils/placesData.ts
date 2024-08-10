const placesPosts = [
    
  
    {
      slug: "rajmandir",
      title:
        "Rajmandir",
      desc: "Digital transformation has become a buzzword in today&rsquo;s business landscape, particularly in India where the confluence of a tech-savvy population, a growing economy, and government",
      mainImage: "https://placehold.co/600x300/png",
    },
    {
      slug: "statue circle",
      title:
        "Statue circle",
      desc: "Digital transformation has become a buzzword in today&rsquo;s business landscape, particularly in India where the confluence of a tech-savvy population, a growing economy, and government",
      mainImage: "https://placehold.co/600x300/png",
    },
    {
      slug: "birla-mandir",
      title:
        "Birla Mandir",
      desc: "Digital transformation has become a buzzword in today&rsquo;s business landscape, particularly in India where the confluence of a tech-savvy population, a growing economy, and government",
      mainImage: "https://placehold.co/600x300/png",
    },
    {
      slug: "albert-hall",
      title:
        "Albert Hall",
      desc: "Digital transformation has become a buzzword in today&rsquo;s business landscape, particularly in India where the confluence of a tech-savvy population, a growing economy, and government",
      mainImage: "https://placehold.co/600x300/png",
    },
    {
      slug: "ramniwas-bagh",
      title:
        "Ramniwas Bagh",
      desc: "Digital transformation has become a buzzword in today&rsquo;s business landscape, particularly in India where the confluence of a tech-savvy population, a growing economy, and government",
      mainImage: "https://placehold.co/600x300/png",
    },
    {
      slug: "pink-city",
      title:
        "Pink City",
      desc: "Digital transformation has become a buzzword in today&rsquo;s business landscape, particularly in India where the confluence of a tech-savvy population, a growing economy, and government",
      mainImage: "https://placehold.co/600x300/png",
    },
    {
      slug: "hawa-mahal",
      title:
        "Hawa Mahal",
      desc: "Digital transformation has become a buzzword in today&rsquo;s business landscape, particularly in India where the confluence of a tech-savvy population, a growing economy, and government",
      mainImage: "https://placehold.co/600x300/png",
    },
    {
      slug: "jantar-mantar",
      title:
        "Jantar Mantar",
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
  