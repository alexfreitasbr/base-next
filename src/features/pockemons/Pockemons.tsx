"use client";

import { useEffect } from "react";
import { selectPockemons } from "../../stores/pockemons/slice/pockemonsSelector";
import { useAppDispatch, useAppSelector } from "@/stores/pockemons/hooks";
import { getAllPockemons } from "@/stores/pockemons/slice/thunk";
import { Pockemon } from "@/interfaces/pockemon.interface";

export function Pockemons() {
  const dispatch = useAppDispatch();

  const { data, loading, error } =
    useAppSelector(selectPockemons);

  useEffect(() => {
    dispatch(getAllPockemons());
  }, [dispatch]);

  return (
    <div className="flex flex-col gap-4">
      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {data?.results.map((pockemon:Pockemon) => (
        <li
          key={pockemon.name}
          className="capitalize"
        >
          <p>{pockemon.name}</p>
          <p>{pockemon.url}</p>
        </li>
      ))}
    </div>
  );
}