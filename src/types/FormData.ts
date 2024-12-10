export type FormData = {
  title: string;
  assignedPokemon: string;
  priority?: "low" | "medium" | "high";
  deadline?: string;
};
