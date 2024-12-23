import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const validation = yup.object().shape({
  title: yup.string().required("タイトルは必須です"),
  assignedPokemon: yup.string().required("担当ポケモンは必須です"),
});

export const resolver = yupResolver(validation);
