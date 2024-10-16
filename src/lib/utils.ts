import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const MAX_CALL_WEIGHT = 500_000_000_000;

export const PROOF_SIZE = 1_000_000;

export const STORAGE_DEPOSIT_LIMIT = null;