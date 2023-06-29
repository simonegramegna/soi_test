import React from "react"
import { useSelector } from "react-redux"
import { getResult } from "../../features/soiSlice"

export const SoiTestResult = () => {

    const result = useSelector(getResult)

    return (
        <h1>Result is: {result}</h1>
    )
}