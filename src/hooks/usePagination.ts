import { useState, useMemo } from "react";
export function usePagination<T>(items: T[], itemsPerPage: number = 10) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = useMemo(() => Math.ceil(items.length / itemsPerPage), [items, itemsPerPage]);

  const startIndex = useMemo(() => (currentPage - 1) * itemsPerPage, [currentPage, itemsPerPage]);
  const currentItems = useMemo(() => items.slice(startIndex, startIndex + itemsPerPage), [items, startIndex, itemsPerPage]);

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const nextPage = () => goToPage(currentPage + 1);
  const prevPage = () => goToPage(currentPage - 1);

  return {
    currentPage,
    totalPages,
    currentItems,
    startIndex,
    setCurrentPage: goToPage,
    nextPage,
    prevPage,
  };
}
