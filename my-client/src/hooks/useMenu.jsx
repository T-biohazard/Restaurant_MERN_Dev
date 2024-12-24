import { useEffect, useState } from "react";

export default function useMenu() {

      const [menu, setMenu] = useState([]);
      const [loading, setLoading] =useState(true);
      useEffect(() => {
        fetch("menu.json") // Fetch the menu data
          .then((res) => res.json())
          .then((data) =>{ 
            setMenu(data);
        setLoading(false);
        });
      }, []);
    
     
  return [menu, loading]
}
