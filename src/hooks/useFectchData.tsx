import { useState, useEffect } from "react";

interface Props {
    url: string,
    totalItems: number
}

export default function useFetchData({ url, totalItems }: Props) {
    const [items, setItems] = useState<{ id: string, title: string, body: string }[]>([]);
    const [prev, setPrev] = useState<number>(1);
    const [next, setNext] = useState<number>(1);
    const [currentPage] = useState<number>(0);
    const [pagnatedData, setPaginatedData] = useState<{ id: string, title: string, body: string }[]>([]);

    const fetchData = async () => {
        const res = await fetch(url);
        const result = await res.json();
        setItems(result)
        setPaginatedData(result?.slice(currentPage, totalItems))
    }
    useEffect(() => {
        fetchData()
    }, [])
    const onClickPrev = () => {
        if (prev >= 0) {
          setPaginatedData(items?.slice(prev * 10, prev * 10 + 10))
          setNext(prev + 1)
          setPrev(prev - 1)
        }
      }
      const onClickNext = () => {
        const lastPage = items.length / totalItems
        if (lastPage !== next) {
            console.log(next)
          setPaginatedData(items?.slice(next * 10, next * 10 + 10))
          setPrev(next - 1)
          setNext(next + 1)
        }
      }
    return {
        items,
        pagnatedData,
        onClickNext,
        onClickPrev
    }
}