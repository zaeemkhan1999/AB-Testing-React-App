import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { setFormNumber } from "./redux/formSlice"
import Form1 from "./components/form1"
import Form2 from "./components/form2"

const FormPage = () => {
  const dispatch = useDispatch()
  //@ts-ignore
  const { formId } = useSelector(state => state.form)

  const getIp = async () => {
    try {
      const res = await fetch('https://api.ipify.org?format=json')
      const ip = await res.json()

      return ip
    } catch (error) {
      console.log(error)
      return { ip: null }
    }
  }

  const hashIPAddress = (ipAddress: string) => {
    let hash = 0;
    for (let i = 0; i < ipAddress.length; i++) {
      const char = ipAddress.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash;
    }

    return Math.abs(hash) % 2;
  }

  const assignForm = async () => {
    const { ip } = await getIp()
    if (!ip) return

    const formNumber = hashIPAddress(ip)
    dispatch(setFormNumber(formNumber))
  }

  useEffect(() => {
    if (formId === null) {
      assignForm()
    }
  }, [formId])

  return (
    <div className="w-screen flex justify-center">
      <div className="min-w-[50vw] min-h-screen">
      {formId === 0 && <Form1/>}
      {formId === 1 && <Form2/>}
      </div>
    </div>
  )
}

export default FormPage