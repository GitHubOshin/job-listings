import { useEffect, useState, FC } from "react"
// import data from "../data/data.json"
import GreenBtn from "./GreenBtn"
import { IJob } from "../interfaces/types"
import Tag from "./Tag"
import axios from "axios"
import JobCard from "./JobCard"

const JobCardList: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [jobs, setJobs] = useState<IJob[]>([])
  const [tags, setTags] = useState<string[]>([])
  // const [Jobs, setJobs] = useState<IJob[]>([])
  const [filteredJobs, setFilteredJobs] = useState<IJob[]>([])

  useEffect(() => {
    fetchJobs()
  }, [])

  async function fetchJobs() {
    // set isLoading = true before fetching
    setIsLoading(true)
    try {
      // const { data } = await axios.get<IJob[]>('/mocks/jobs.json')
      const { data } = await axios.get<IJob[]>('http://localhost:5173/mocks/jobs.json')

      setJobs(data)
      setFilteredJobs(data)
    } catch (error) {
      console.error("ERROR::Fetch Jobs:", error)
    } finally {
      // set isLoading = true after finish fetching
      setIsLoading(false)
    }
  }

  function filterJobsByTags(targetTags: string[]): void {
    const filteredJobs = jobs.filter(job => {
      const { languages, level, tools, role } = job
      const jobSpecifications: string[] = [...languages, level, ...tools, role]
      return jobSpecifications.every(spec => targetTags.includes(spec))
    })
    setFilteredJobs(filteredJobs)
  }

  function handleClickTag(targetTag: string): void {
    // if (filteredJobs.includes(targetTag) !== true) {
    if (!tags.includes(targetTag)) {
      const updatedTags = [...tags, targetTag]
      filterJobsByTags(updatedTags)
      return setTags(updatedTags)
    }
  }

  function handleClearTags(): void {
    filterJobsByTags([])
    setTags([])
  }

  function handleRemoveTag(targetTag: string): void {
    const updatedTags = tags.filter((tag) => tag !== targetTag)
    filterJobsByTags(updatedTags)
    setTags([...updatedTags])
  }

  if (isLoading) return <p className="text-red-500">Loading โว้ยยยยยย.......</p>

  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex flex-col items-center mobile:px-6 desktop:px-[165px]">
        {tags.length > 0 ? (
          <div className=" relative top-[-35px]  flex items-center justify-between shadow-2xl shadow-greenShadow bg-white w-full  mobile:max-w-[1110px] desktop:max-w-[1440px] mx-[156px] min-h-[72px] py-5 mobile:px-5 desktop:px-10 rounded mobile:mb-4 desktop:mb-0">
            <div className="flex flex-wrap gap-4">
              {tags.map((tag) => {
                return <Tag tag={tag} onAddTag={handleClickTag} onRemoveTag={handleRemoveTag} />
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
          {/* Use filteredJobs, because of it will display only the jobs which are already filtered */}
          {(filteredJobs.length === 0 ? jobs : filteredJobs).map((job) => {
            return <JobCard job={job} onClickTag={handleClickTag} />
          })}
        </div>
      </div>
    </div>
  )
}

export default JobCardList
