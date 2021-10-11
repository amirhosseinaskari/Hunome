import { ICheck } from '~types/check-lists'

export const checkLists: ICheck[] = [
  {
    id: 'check-1',
    priority: 1,
    answer: false,
    description: 'Images not submitted from a device screen',
  },
  {
    id: 'check-2',
    priority: 2,
    answer: false,
    description: 'Images not submitted from a printout',
  },
  {
    id: 'check-3',
    priority: 3,
    answer: false,
    description:
      'Submitted document appearance matches that of official specimen',
  },
  {
    id: 'check-4',
    priority: 4,
    answer: false,
    description: 'Document data cross-reference successful',
  },
]
