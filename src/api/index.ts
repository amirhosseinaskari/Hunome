import { ICheckResult } from '~types/check-lists'
import { checkLists } from './mock-data'

export const fetchChecks = () => {
  // do something to fetch data
  return { data: { result: checkLists } }
}

export const sumitCheckResults = ({ list }: { list: ICheckResult[] }) => {
  // do something to submit list....
  return { data: { status: true } }
}
