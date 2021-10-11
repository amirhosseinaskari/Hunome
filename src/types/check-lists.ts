export interface ICheck {
  id: string
  priority: number
  answer?: boolean
  isAnswered?: boolean
  isDisabled?: boolean
  description: string
}

export interface ICheckResult {
  checkId: string
  value: string
}
