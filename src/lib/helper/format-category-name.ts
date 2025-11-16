export function formatCategoryName(category: string) {
    const formatted = category.replace(/_/g, " ").replace(/\s+/g, " ");
  
    let hasInserted = false;
  
    return formatted
      .split(" ")
      .map((word) => {
        const w = word.charAt(0).toUpperCase() + word.slice(1);
        if (!hasInserted && ["trip"].includes(w.toLowerCase())) {
          hasInserted = true;
          return w + " –";
        }
        return w;
      })
      .join(" ");
  }
  