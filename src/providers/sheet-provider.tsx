"use client";
import { NewTicketsSheet } from "@/features/tickets/_components/new-tickets-sheet";
import { useMountedState } from 'react-use';

export const SheetProvider = () => {
  const isMounted = useMountedState();

  if(!isMounted) return null;
  return (
    <>
    <NewTicketsSheet />
    </>
  )
}