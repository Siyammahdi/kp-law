import React from "react";
import { useFormikContext, Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./RadioButton.css";
import axios from 'axios';
import { LiaUserShieldSolid } from "react-icons/lia";

interface FormValues {
  cancerType: string;
  yearsOfUse: string;
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

const validationSchema = Yup.object({
  cancerType: Yup.string().required("Please select a cancer type"),
  yearsOfUse: Yup.string().required("Please select the duration of powder use"),
  firstname: Yup.string().required("First name is required"),
  lastname: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  address: Yup.string().required("Address or postcode is required"),
  country: Yup.string().required("Country is required"),
  dobDay: Yup.string().required("Day is required"),
  dobMonth: Yup.string().required("Month is required"),
  dobYear: Yup.string().required("Year is required"),
  capacity: Yup.string().required("Capacity is required"),
  diagnosisYear: Yup.string().required("Diagnosis year is required"),
  hearAboutUs: Yup.string().required("This field is required"),
  terms: Yup.boolean().oneOf([true], "You must accept the terms and conditions"),
});

const RadioButtonForm: React.FC = () => {
  const formik = useFormikContext<FormValues>();

  return (
    <div>
      <FormikForm onSubmit={formik.handleSubmit} className="space-y-4">
        <div>
          {/* Radio button input 1 */}
          <fieldset>
            <legend className="text-xl mb-6">
              Have you, a family member, or someone you represent ever been diagnosed with one of the following cancers? *
            </legend>
            <div className="toggle flex-none" style={{flexFlow: "wrap"}}>
              <Field type="radio" name="cancerType" value="Ovarian" id="Ovarian" />
              <label htmlFor="Ovarian">Ovarian</label>

              <Field type="radio" name="cancerType" value="Primary Peritonial" id="PrimaryPeritonial" />
              <label htmlFor="PrimaryPeritonial">Primary Peritonial</label>

              <Field type="radio" name="cancerType" value="Mesothelioma" id="Mesothelioma" />
              <label htmlFor="Mesothelioma">Mesothelioma</label>

              <Field type="radio" name="cancerType" value="Fallopian Tube" id="FallopianTube" />
              <label htmlFor="FallopianTube">Fallopian Tube</label>

              <Field type="radio" name="cancerType" value="Other" id="Other" />
              <label htmlFor="Other">Other</label>
            </div>
            <ErrorMessage name="cancerType" component="div" className="text-sm text-red-500" />
          </fieldset>

          {/* Radio button input 2 */}
          <fieldset>
            <legend className="text-xl">Number of years *</legend>
            <p className="mb-6">
              For how many years did you, or the person you represent, use Johnson & Johnson talcum powder or baby powder on a weekly basis?
            </p>
            <div className="toggle" style={{flexFlow: "wrap"}}>
              <Field type="radio" name="yearsOfUse" value="Never" id="Never" />
              <label htmlFor="Never">Never</label>

              <Field type="radio" name="yearsOfUse" value="Less than 5 years" id="LessThan5Years" />
              <label htmlFor="LessThan5Years">Less than 5 years</label>

              <Field type="radio" name="yearsOfUse" value="5 years" id="5years" />
              <label htmlFor="5years">5 years</label>

              <Field type="radio" name="yearsOfUse" value="6 years" id="6years" />
              <label htmlFor="6years">6 years</label>

              <Field type="radio" name="yearsOfUse" value="7 years" id="7years" />
              <label htmlFor="7years">7 years</label>
              
              <Field type="radio" name="yearsOfUse" value="8 years" id="8years" />
              <label htmlFor="8years">8 years</label>

              <Field type="radio" name="yearsOfUse" value="9 years" id="9years" />
              <label htmlFor="9years">9 years</label>

              <Field type="radio" name="yearsOfUse" value="10 years or more" id="10YearsOrMore" />
              <label htmlFor="10YearsOrMore">10 years or more</label>
            </div>
            <ErrorMessage name="yearsOfUse" component="div" className="text-sm text-red-500" />
          </fieldset>
        </div>

        {/* Rest of the form fields */}
        <div className="flex flex-col lg:flex-row lg:space-y-0 space-y-5 lg:space-x-4">
          <div className="lg:w-1/2">
            <div className="relative mt-8">
              <Field
                type="text"
                id="firstname"
                name="firstname"
                className="peer w-full h-10 text-white bg-transparent placeholder-transparent border-b-2 border-gray-300 focus:outline-none"
                placeholder="First name"
              />
              <label
                htmlFor="firstname"
                className={`absolute left-0 -top-4.5 text-white bg-transparent transition-all transform scale-75 origin-left peer-placeholder-shown:scale-100 ${
                  formik.values.firstname
                    ? "-translate-y-6 scale-75"
                    : "peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 peer-focus:scale-75"
                }`}
              >
                First name<span className="text-red-500">*</span>
              </label>
              <ErrorMessage
                name="firstname"
                component="div"
                className="text-sm text-red-500"
              />
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative mt-8">
              <Field
                type="text"
                id="lastname"
                name="lastname"
                className="peer w-full h-10 text-white bg-transparent placeholder-transparent border-b-2 border-gray-300 focus:outline-none"
                placeholder="Last name"
              />
              <label
                htmlFor="lastname"
                className={`absolute left-0 -top-4.5 text-white bg-transparent transition-all transform scale-75 origin-left peer-placeholder-shown:scale-100 ${
                  formik.values.lastname
                    ? "-translate-y-6 scale-75"
                    : "peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 peer-focus:scale-75"
                }`}
              >
                Last name<span className="text-red-500">*</span>
              </label>
              <ErrorMessage
                name="lastname"
                component="div"
                className="text-sm text-red-500"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:space-y-0 space-y-5 lg:space-x-4">
          <div className="lg:w-1/2">
            <div className="relative mt-8">
              <Field
                type="email"
                id="email"
                name="email"
                className="peer w-full h-10 text-white bg-transparent placeholder-transparent border-b-2 border-gray-300 focus:outline-none"
                placeholder="Email"
              />
              <label
                htmlFor="email"
                className={`absolute left-0 -top-4.5 text-white bg-transparent transition-all transform scale-75 origin-left peer-placeholder-shown:scale-100 ${
                  formik.values.email
                    ? "-translate-y-6 scale-75"
                    : "peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 peer-focus:scale-75"
                }`}
              >
                Email<span className="text-red-500">*</span>
              </label>
              <ErrorMessage
                name="email"
                component="div"
                className="text-sm text-red-500"
              />
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative mt-8">
              <Field
                type="text"
                id="phone"
                name="phone"
                className="peer w-full h-10 text-white bg-transparent placeholder-transparent border-b-2 border-gray-300 focus:outline-none"
                placeholder="Phone number"
              />
              <label
                htmlFor="phone"
                className={`absolute left-0 -top-4.5 text-white bg-transparent transition-all transform scale-75 origin-left peer-placeholder-shown:scale-100 ${
                  formik.values.phone
                    ? "-translate-y-6 scale-75"
                    : "peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 peer-focus:scale-75"
                }`}
              >
                Phone number<span className="text-red-500">*</span>
              </label>
              <ErrorMessage
                name="phone"
                component="div"
                className="text-sm text-red-500"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:space-y-0 space-y-5 lg:space-x-4">
          <div className="lg:w-1/2">
            <div className="relative mt-8">
              <Field
                type="text"
                id="address"
                name="address"
                className="peer w-full h-10 text-white bg-transparent placeholder-transparent border-b-2 border-gray-300 focus:outline-none"
                placeholder="Address or postcode"
              />
              <label
                htmlFor="address"
                className={`absolute left-0 -top-4.5 text-white bg-transparent transition-all transform scale-75 origin-left peer-placeholder-shown:scale-100 ${
                  formik.values.address
                    ? "-translate-y-6 scale-75"
                    : "peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 peer-focus:scale-75"
                }`}
              >
                Address or postcode<span className="text-red-500">*</span>
              </label>
              <ErrorMessage
                name="address"
                component="div"
                className="text-sm text-red-500"
              />
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative mt-8">
              <Field
                as="select"
                id="country"
                name="country"
                className="peer w-full h-10 text-black bg-transparent placeholder-transparent border-b-2 border-gray-300 focus:outline-none"
              >
                <option value=""></option>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
                <option value="Option 4">Option 4</option>
              </Field>
              <label
                htmlFor="country"
                className={`absolute pointer-events-none left-0 -top-4.5 text-[21px] text-white bg-transparent transition-all transform scale-75 origin-left peer-placeholder-shown:scale-100 ${
                  formik.values.country
                    ? "-translate-y-6 scale-75"
                    : "peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 peer-focus:scale-75"
                }`}
              >
                Select a Country<span className="text-red-500">*</span>
              </label>
              <ErrorMessage
                name="country"
                component="div"
                className="text-sm text-red-500"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:space-y-0 space-y-5 lg:space-x-4">
          <div className="lg:w-1/2 mt-2">
            <label className="block text-sm font-medium mb-1" htmlFor="dobDay">
              Date of Birth<span className="text-red-500">*</span>
            </label>
            <div className="flex space-x-2">
              <Field
                id="dobDay"
                name="dobDay"
                type="number"
                placeholder="Day"
                min="1"
                max="31"
                className="w-full py-2 bg-transparent border-b-2"
              />
              <Field
                id="dobMonth"
                name="dobMonth"
                type="number"
                placeholder="Month"
                min="1"
                max="12"
                className="w-full py-2 bg-transparent border-b-2"
              />
              <Field
                id="dobYear"
                name="dobYear"
                type="number"
                placeholder="Year"
                className="w-full py-2 bg-transparent border-b-2"
              />
            </div>
            <div className="text-sm text-red-500">
              <ErrorMessage name="dobDay" component="span" />
              <ErrorMessage name="dobMonth" component="span" />
              <ErrorMessage name="dobYear" component="span" />
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative mt-8">
              <Field
                as="select"
                id="capacity"
                name="capacity"
                className="peer w-full h-10 text-black bg-transparent placeholder-transparent border-b-2 border-gray-300 focus:outline-none"
              >
                <option value=""></option>
                <option value="Option 1">For Myself</option>
                <option value="Option 2">Personal Representative</option>
                <option value="Option 3">Power of attorney</option>
                <option value="Option 4">Other</option>
              </Field>
              <label
                htmlFor="capacity"
                className={`absolute pointer-events-none left-0 -top-4.5 text-[21px] text-white bg-transparent transition-all transform scale-75 origin-left peer-placeholder-shown:scale-100 ${
                  formik.values.capacity
                    ? "-translate-y-6 scale-75"
                    : "peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 peer-focus:scale-75"
                }`}
              >
                In what capacity are you acting?
                <span className="text-red-500">*</span>
              </label>
              <ErrorMessage
                name="capacity"
                component="div"
                className="text-sm text-red-500"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:space-y-0 space-y-5 lg:space-x-4">
          <div className="lg:w-1/2">
            <div className="relative mt-8">
              <Field
                as="select"
                id="diagnosisYear"
                name="diagnosisYear"
                className="peer w-full h-10 text-white bg-transparent placeholder-transparent border-b-2 border-gray-300 focus:outline-none"
              >
                <option value=""></option>
                <option value="Option 1">Radio ad</option>
                <option value="Option 2">TV ad</option>
                <option value="Option 3">Print ad</option>
                <option value="Option 4">Social Media</option>
                <option value="Option 4">Search Engine</option>
                <option value="Option 4">Word of mouth</option>
              </Field>
              <label
                htmlFor="diagnosisYear"
                className={`absolute pointer-events-none left-0 -top-4.5 text-[21px] text-white bg-transparent transition-all transform scale-75 origin-left peer-placeholder-shown:scale-100 ${
                  formik.values.diagnosisYear
                    ? "-translate-y-6 scale-75"
                    : "peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 peer-focus:scale-75"
                }`}
              >
                What was the year of diagnosis?
                <span className="text-red-500">*</span>
              </label>
              <ErrorMessage
                name="diagnosisYear"
                component="div"
                className="text-sm text-red-500"
              />
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative mt-8">
              <Field
                as="select"
                id="hearAboutUs"
                name="hearAboutUs"
                className="peer w-full h-10 text-black bg-transparent placeholder-transparent border-b-2 border-gray-300 focus:outline-none"
              >
                <option value=""></option>
                <option value="Option 1">Radio ad</option>
                <option value="Option 2">TV ad</option>
                <option value="Option 3">Print ad</option>
                <option value="Option 4">Social Media</option>
                <option value="Option 4">Search Engine</option>
                <option value="Option 4">Word of mouth</option>
              </Field>
              <label
                htmlFor="hearAboutUs"
                className={`absolute pointer-events-none left-0 -top-4.5 text-[21px] text-white bg-transparent transition-all transform scale-75 origin-left peer-placeholder-shown:scale-100 ${
                  formik.values.hearAboutUs
                    ? "-translate-y-6 scale-75"
                    : "peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 peer-focus:scale-75"
                }`}
              >
                How did you hear about us?
                <span className="text-red-500">*</span>
              </label>
              <ErrorMessage
                name="hearAboutUs"
                component="div"
                className="text-sm text-red-500"
              />
            </div>
          </div>
        </div>
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <Field
              id="terms"
              name="terms"
              type="checkbox"
              className="w-4 h-4 text-blue-600 border-gray-300 rounded bg-gray-700 focus:ring-blue-500 focus:ring-offset-gray-800"
            />
          </div>
          <div className="ml-2 text-sm">
            <label htmlFor="terms" className="font-medium text-gray-300 mb-10">
            I consent to my data being used by KP Law and for KP Law to contact me for the purpose of pursuing a potential claim
            </label>
            <ErrorMessage
              name="terms"
              component="div"
              className="text-sm text-red-500"
            />
          </div>
        </div>

        <div className="bg-button mt-20 bg-opacity-10 border border-button w-full text-button rounded-xl py-4 px-4">
              <p className="flex items-center">
                <span className="text-3xl mr-4">
                  <LiaUserShieldSolid />
                </span>
                Your information is kept secure and confidential at all times.
              </p>
            </div>

        <button
          type="submit"
          className="bg-button w-full text-white text-xl py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline mt-8"
          onSubmit={(values) => {
            console.log(values);
         
            axios({
              method: "POST",
              url: "https://cp-uks-apim-dev-01.azure-api.net/navigator/v1/lead",
              data: {
                "leadReference": "Appetite Reference 123",
                "leadType": "Claimant",
                  "firstName": "Daphney",
                  "lastName": "Daniel",
                "birthDate": "1984-11-08",
                  "email": "darryl.wehner@onmicrosoft.com",
                "phone": "7815040977",
                "source": "Appetite Creative",
                "retentionConfirmed": true,
                  "retentionDate": "2023-07-04",
                "address": {
                  "combinedLine1": "41 Hythe Road,Poole,Dorset,BH153NN",
                  "buildingName": "41 HYTHE ROAD",
                  "buildingNumber": "",
                  "flatSubBuilding": "",
                  "street1": "41 HYTHE ROAD",
                  "street2": "",
                  "street3": "",
                  "town": "Poole",
                  "county": "Dorset",
                  "country": "England",
                  "postcode": "BH153NN"
                },
                "representeeDetails": {
                    "firstName": "Hal",
                      "lastName": "Mante",
                      "dateOfBirth": "1970-01-01",
                      "email": "annamarie.douglas@casepilots.onmicrosoft.com",
                  "phone": "",
                  "address": {
                    "combinedLine1": "",
                    "buildingName": "",
                    "buildingNumber": "",
                    "flatSubBuilding": "",
                    "street1": "",
                    "street2": "",
                    "street3": "",
                    "town": "",
                    "county": "",
                    "country": "",
                    "postcode": ""
                  }
                },
              "customFields": [{
                  "key": "cancertype",
                  "value": "Primary Peritoneal Cancer"
                },
                {
                  "key": "regulartalcuse",
                  "value": "Yes"
                },
                {
                  "key": "talcusage",
                  "value": "10"
                },
                {
                  "key": "diagnosisyear",
                  "value": "2019"
                },
                {
                  "key": "cp_dataconsent",
                  "value": "true"
                },
                {
                  "key": "cp_talctype",
                  "value": "talc2"
                }
              ]
              },
              headers: {
                'Ocp-Apim-Subscription-Key': 'b30e2d59a567448aa868c6e293b37406',
                'instance-ref': 'LLHRDEV',
                'class-action-ref': 'AUR',
                'instance-access-code': 'mdEpAoL3mM',
                'Content-Type': 'application/json',
              }
            }).then(res => {
              console.log(res);
            }).catch(
              (error) => {
                console.log(error);
              }
            ).finally(
              () => {

              }
            )
          }}
        >
          Next
        </button>
      </FormikForm>
    </div>
  );
};

const FormWrapper: React.FC = () => (
  <Formik
    initialValues={{
      cancerType: "",
      yearsOfUse: "",
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
    }}
    validationSchema={validationSchema}
    onSubmit={(values) => {
      // console.log(values);
    }}
  >
    <RadioButtonForm />
  </Formik>
);

export default FormWrapper;
