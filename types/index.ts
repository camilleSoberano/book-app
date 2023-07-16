import { MouseEventHandler } from 'react'

export interface CustomButtonProps {
  title: string
  containerStyles?: string
  handleClick?: MouseEventHandler<HTMLButtonElement>
  btnType?: 'button' | 'submit'
}

export interface SearchGenreProps {
  genre:string;
  setGenre:(genre:string) => void;
}