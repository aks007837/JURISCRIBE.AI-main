import React, { useState } from 'react'
import styles from './styles/form.module.css'
import { saveAs } from 'file-saver'

const BirthCertificate = () => {
  const [formData, setFormData] = useState({
    name: '',
    sex: '',
    dob: '',
    placeOfBirth: '',
    motherName: '',
    fatherName: '',
    parentAddress: '',
    permanentAddress: '',
  })
  const [showPreview, setShowPreview] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowPreview(true) // Show the preview after submitting the form
  }

  const handleSavePDF = () => {
    // Generate PDF
    generatePDF(formData)
  }

  const generatePDF = (data) => {
    // Code to generate PDF using the entered data
    // This example uses a library like jsPDF to generate PDF
    // Here is a basic example:
    const {
      name,
      sex,
      dob,
      placeOfBirth,
      motherName,
      fatherName,
      parentAddress,
      permanentAddress,
    } = data
    const { jsPDF } = require('jspdf')
    const doc = new jsPDF()
    doc.text(`Name: ${name}`, 10, 10)
    doc.text(`Sex: ${sex}`, 10, 20)
    doc.text(`Date of Birth: ${dob}`, 10, 30)
    doc.text(`Place of Birth: ${placeOfBirth}`, 10, 40)
    doc.text(`Name of Mother: ${motherName}`, 10, 50)
    doc.text(`Name of Father: ${fatherName}`, 10, 60)
    doc.text(
      `Address of the Parent at the Time of Birth: ${parentAddress}`,
      10,
      70
    )
    doc.text(`Permanent Address of Parents: ${permanentAddress}`, 10, 80)
    doc.save('birth_certificate.pdf')
  }

  return (
    <>
      <div className={styles.main}>
        <h1 id={styles.main_head}>Birth Certificate Information</h1>
        {!showPreview ? ( // Render input fields if showPreview is false
          <form onSubmit={handleSubmit}>
            <div className={styles.page}>
              <h2 className={styles.center}>जन्म प्रमाण - पत्र</h2>
              <h2 className={styles.center}>BIRTH CERTIFICATE</h2>
              <div>
                {/* Input fields */}
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="sex"
                  placeholder="Sex"
                  value={formData.sex}
                  onChange={handleChange}
                />
                {/* Add more input fields for other information */}
              </div>
            </div>
            <button type="submit">Generate Preview</button>
          </form>
        ) : (
          // Render preview if showPreview is true
          <div className={styles.page}>
            <h2 className={styles.center}>जन्म प्रमाण - पत्र</h2>
            <h2 className={styles.center}>BIRTH CERTIFICATE</h2>
            <div>
              <p>
                This is to certify that the following information has been taken
                from the original record of birth which is the register for
                (local area / local body):
                <br />
                <strong>Name:</strong> {formData.name}
                <br />
                <strong>Sex:</strong> {formData.sex}
                <br />
                {/* Display other entered values */}
              </p>
            </div>
          </div>
        )}
        {showPreview && <button onClick={handleSavePDF}>Save as PDF</button>}
        <div className={styles.signatureBox}></div>{' '}
        {/* Signature box at right */}
      </div>
    </>
  )
}

export default BirthCertificate
