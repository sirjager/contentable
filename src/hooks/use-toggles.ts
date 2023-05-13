// @ts-ignore
import { useState } from "react";

export default function useToggle<T>(items: T[]): [T, () => void, (_: number) => void] {
  const [currentIndex, setCurrentIndex] = useState(0);

  const toggle = () => {
    if (currentIndex === items.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const setIndex = (index: number) => {
    if (index < 0 || index > items.length - 1) {
      throw new Error(`Index ${index} out of range for items of length ${items.length}`);
    } else {
      setCurrentIndex(index);
    }
  };

  return [items[currentIndex], toggle, setIndex];
}
