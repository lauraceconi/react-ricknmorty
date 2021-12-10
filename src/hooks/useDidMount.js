/*
** This custom hook is used to verify
** if the component did mount,
** in order to avoid useEffect initial call
*/
import { useEffect, useRef } from "react"

export default function useDidMount() {
  const mountRef = useRef(false)

  useEffect(() => {
    mountRef.current = true
  }, [])

  return mountRef.current
}