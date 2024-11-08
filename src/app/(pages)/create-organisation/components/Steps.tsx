import { StepItem } from './StepItem'

const stepData = [
  { num: 1, title: 'Step 1', description: 'create Organisation' },
  { num: 2, title: 'Step 2', description: 'Create/Link MultiSig' },
  { num: 3, title: 'Step 3', description: 'Reviews' },

]
export function Steps() {
  return (
    <header className="flex h-[200px] items-start justify-center bg-sidebarMobile bg-cover bg-no-repeat p-6 lg:row-span-3 lg:row-start-2 lg:h-[540px] lg:justify-start lg:rounded-md lg:bg-sidebarDesktop lg:bg-cover lg:bg-center lg:pt-10">
      <ul className="flex gap-4 text-white lg:flex-col lg:gap-8">
        {stepData.map((info, index) => {
          return <StepItem key={index} infos={info} />
        })}
      </ul>
    </header>
  )
}
