import { useEffect, useState, FC } from "react"
import data from "../data/data.json"
import GreenBtn from "./GreenBtn"
import { IJob } from "../interfaces/types"

interface Itags {}

const JobCard: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [filteredJobs, setFilteredJobs] = useState<string[]>([]) // const [Jobs, setJobs] = useState<IJob[]>([])
  const [displayJobs, setDisplayJobs] = useState<IJob[]>([])

  useEffect(() => {
    setDisplayJobs(data)
  }, [])

  function handleClickTag(tagBtn: string): void {
    // if (filteredJobs.includes(tagBtn) !== true) {
    if (!filteredJobs.includes(tagBtn)) {
      return setFilteredJobs([...filteredJobs, tagBtn])
    }
  }

  function handleClearTags(): void {
    setFilteredJobs([])
  }

  function handleRemoveTag(tag: string): void {
    const filteredAfterRemove = filteredJobs.filter((filter) => tag !== filter)
    setFilteredJobs([...filteredAfterRemove])
  }

  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex flex-col items-center mobile:px-6 desktop:px-[165px]">
        {filteredJobs.length > 0 ? (
          <div className=" relative top-[-35px]  flex items-center justify-between shadow-2xl shadow-greenShadow bg-white w-full  mobile:max-w-[1110px] desktop:max-w-[1440px] mx-[156px] min-h-[72px] py-5 mobile:px-5 desktop:px-10 rounded mobile:mb-4 desktop:mb-0">
            <div className="flex flex-wrap gap-4">
              {filteredJobs.map((filter) => {
                return (
                  <div className="flex items-center bg-bgLightGrayishCyan rounded-[4px]">
                    <b className="px-2 text-desaturatedDarkCyan">{filter}</b>
                    <button
                      className="bg-desaturatedDarkCyan hover:bg-slate800 rounded-r-[4px] flex justify-center items-center h-8 w-8"
                      onClick={() => handleRemoveTag(filter)}
                    >
                      <img src="images/icon-remove.svg" />
                    </button>
                  </div>
                )
              })}
            </div>
            <button
              className="font-bold text-slate300 hover:underline hover:text-desaturatedDarkCyan ml-2"
              onClick={() => handleClearTags()}
            >
              Clear
            </button>
          </div>
        ) : (
          <div className="mobile:min-h-[88px] desktop:min-h-[72px]"></div>
        )}
        <div className="flex flex-col items-center w-full  mobile:gap-10  desktop:gap-6">
          {data.map((job) => {
            return (
              <div
                key={job.id}
                className={`shadow-2xl shadow-greenShadow  mobile:relative desktop:static flex mobile:flex-col desktop:flex-row mobile:items-start desktop:items-center justify-between bg-white rounded min-w-[327px] mobile:max-w-[1110px] w-full desktop:max-w-[1440px] h-auto py-8 desktop:px-[40px] mobile:px-6 ${
                  job.new ? "border-desaturatedDarkCyan border-l-[5px]" : null
                }`}
              >
                <div className="flex gap-x-6">
                  <img
                    className="mobile:absolute desktop:static mobile:w-12 desktop:w-auto top-[-20px]"
                    alt=""
                    src={job.logo}
                  />
                  <div className="flex flex-col mobile:gap-y-3 desktop:gap-y-1 mt-1">
                    <div className="flex gap-2">
                      <h1 className="mr-2 font-bold text-desaturatedDarkCyan">{job.company}</h1>
                      {job.new ? (
                        <h1 className="text-white bg-desaturatedDarkCyan px-2 py-[2px] rounded-3xl font-bold uppercase">
                          New!
                        </h1>
                      ) : null}
                      {job.featured ? (
                        <h1 className="text-white bg-veryDarkGrayishCyan px-2 py-[2px] rounded-3xl font-bold uppercase">
                          featured
                        </h1>
                      ) : null}
                    </div>
                    <h1 className="cursor-pointer font-bold text-veryDarkGrayishCyan hover:text-desaturatedDarkCyan">
                      {job.position}
                    </h1>
                    <h1 className="text-darkGrayishCyan">
                      {[job.postedAt, job.contract, job.location].join(" • ")}
                    </h1>
                  </div>
                </div>
                <hr className="border-1 border-darkGrayishCyan w-full desktop:hidden my-5" />
                <div className="flex gap-4 flex-wrap">
                  <GreenBtn text={job.role} onClickTag={() => handleClickTag(job.role)} />
                  <GreenBtn text={job.level} onClickTag={() => handleClickTag(job.level)} />
                  {job.languages.map((lang, idx) => (
                    <div key={idx}>
                      <GreenBtn text={lang} onClickTag={() => handleClickTag(lang)} />
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default JobCard
