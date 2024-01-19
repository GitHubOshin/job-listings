import { FC } from "react";

type TagProps = {
  tag: string;
  onAddTag: (targetTag: string) => void;
  onRemoveTag: (targetTag: string) => void;
}

const Tag: FC<TagProps> = ({ onAddTag, onRemoveTag, tag }) => {
  return <div className="flex items-center bg-bgLightGrayishCyan rounded-[4px]">
    <b className="px-2 text-desaturatedDarkCyan">{tag}</b>
    <button
      className="bg-desaturatedDarkCyan hover:bg-slate800 rounded-r-[4px] flex justify-center items-center h-8 w-8"
      onClick={() => onAddTag(tag)}
    >
      <div className="flex items-center bg-bgLightGrayishCyan rounded-[4px]">
        <b className="px-2 text-desaturatedDarkCyan">{tag}</b>
        <button
          className="bg-desaturatedDarkCyan hover:bg-slate800 rounded-r-[4px] flex justify-center items-center h-8 w-8"
          onClick={() => onRemoveTag(tag)}
        >
          <img src="images/icon-remove.svg" />
        </button>
      </div>


      <img src="images/icon-remove.svg" alt="" />
    </button>
  </div >
}

export default Tag