import { FC } from "react"
import JobCardList from "./JobCardList"

const Container: FC = () => {
  return (
    <div className="bg-bgLightGrayishCyan max-w-full min-w-[375px] ">
      <header>
        <img
          alt="background header1"
          src="images/bg-header-desktop.svg"
          className="desktop:block mobile:hidden max-w-full w-full h-auto bg-desaturatedDarkCyan"
        />
        <img
          alt="background header"
          src="images/bg-header-mobile.svg"
          className="desktop:hidden mobile:block max-w-full w-full h-auto max-h-[156px] bg-desaturatedDarkCyan"
        />
      </header>
      <JobCardList />
      <footer className=" text-black flex flex-col gap-2 items-center justify-center h-[156px]">
        <span className="text-2xl font-bold">JOB LISTINGS</span>
        <span>OSHIN GANJANAPAS PHOTHONG</span>
      </footer>
    </div>
  )
}

export default Container
