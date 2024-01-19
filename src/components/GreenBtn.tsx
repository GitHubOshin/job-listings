import { FC } from "react"

interface GreenBtnProps {
  text: string
  onClickTag: (tagBtn: string) => void
}

const GreenBtn: FC<GreenBtnProps> = ({ text, onClickTag }) => {
  return (
    <button
      onClick={() => onClickTag(text)}
      className="text-desaturatedDarkCyan bg-bgLightGrayishCyan
         hover:bg-desaturatedDarkCyan hover:text-white px-[10px] py-[6px] rounded"
    >
      <b>{text}</b>
    </button>
  )
}

export default GreenBtn
