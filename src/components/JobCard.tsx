import { FC } from "react"
import GreenBtn from "./GreenBtn"
import { IJob } from "../interfaces/types"

type JobCardProps = {
  job: IJob
  onClickTag: (targetTag: string) => void
}

const JobCard: FC<JobCardProps> = ({ job, onClickTag }) => {
  return <div
    key={job.id}
    className={`shadow-2xl shadow-greenShadow  mobile:relative desktop:static flex mobile:flex-col desktop:flex-row mobile:items-start desktop:items-center justify-between bg-white rounded min-w-[327px] mobile:max-w-[1110px] w-full desktop:max-w-[1440px] h-auto py-8 desktop:px-[40px] mobile:px-6 ${job.new ? "border-desaturatedDarkCyan border-l-[5px]" : null}`}
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
      <GreenBtn text={job.role} onClickTag={() => onClickTag(job.role)} />
      <GreenBtn text={job.level} onClickTag={() => onClickTag(job.level)} />
      {job.languages.map((lang, idx) => (
        <div key={idx}>
          <GreenBtn text={lang} onClickTag={() => onClickTag(lang)} />
        </div>
      ))}
    </div>
  </div>
}

export default JobCard