"use client";
import React, { useState } from "react";
import { LiaUserShieldSolid } from "react-icons/lia";
import { Formik, FormikHelpers } from "formik";
import Step1 from "@/Components/Steps/Step1";
import Step2 from "@/Components/Steps/Step2";

interface FormValues {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  address: string;
  country: string;
  dobDay: string;
  dobMonth: string;
  dobYear: string;
  capacity: string;
  diagnosisYear: string;
  hearAboutUs: string;
  terms: boolean;
}

const initialValues: FormValues = {
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  address: "",
  country: "",
  dobDay: "",
  dobMonth: "",
  dobYear: "",
  capacity: "",
  diagnosisYear: "",
  hearAboutUs: "",
  terms: false,
};

const Page: React.FC = () => {
  const [step, setStep] = useState(0);

  const handleSubmit = (values: FormValues, actions: FormikHelpers<FormValues>) => {
    console.log("Form data:", values);
    actions.setSubmitting(false);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ handleSubmit }) => (
        <div className="px-5">
          {step === 0 ? <Step1 /> : <Step2 />}
        </div>
      )}
    </Formik>
  );
};

export default Page;
