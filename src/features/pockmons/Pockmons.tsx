'use client'

import { selectCounterValue } from '../../stores/pockmons/slice/pockmonsSelector'
import {
  decrement,
  increment
} from '../../stores/pockmons/slice/pockmonsSlice'

import { useAppDispatch, useAppSelector } from '@/stores/pockmons/hooks'


export function Pockmons() {
  const dispatch = useAppDispatch()

  const count = useAppSelector(
    selectCounterValue
  )

  return (
    <div className="flex flex-col gap-4">
      <h1>{count}</h1>

      <div className="flex gap-2">
        <button onClick={() => dispatch(increment())}>
          Increment
        </button>

        <button onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </div>
  )
}