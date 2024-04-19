import BirthCertificate from '@/components/forms/BirthCertificate'
import EmployeeAgreement from '@/components/forms/EmployeeAgreement'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

const Form = () => {
  const searchParams = ''
  if (typeof window !== 'undefined') {
    searchParams = new URLSearchParams(window.location.search)
    // browser code
  }
  const router = useRouter()
  const { file } = router.query
  console.log(file)
  const [data, setData] = React.useState({})

  useEffect(() => {
    if (file) setData(JSON.parse(file))
  }, [router.query])
  {
    for (const param of searchParams) {
      console.log(param)
    }
  }
  const Component = data.component
  {
    console.log(data)
  }

  return <BirthCertificate />
}

export default Form
