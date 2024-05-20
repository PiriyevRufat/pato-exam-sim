import React, { useContext } from 'react';
import { Formik } from "formik";
import axios from "axios";
import MainContext from '../../../context/context';
import Table from "../../../components/admin/Table/Table";

const AddPage = () => {
  const { data, setData } = useContext(MainContext);

  return (
    <div className="add-page-sect">
      <Formik
        initialValues={{ image: "", subtitle: "", name: "", price: "" }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
            axios.post("http://localhost:8080/", values)
            .then(response => {
              const newItem = response.data;
              setData(prevData => {
                const updatedData = [...prevData, newItem];
                console.log("Updated Data: ", updatedData);
                return updatedData;
              });
              resetForm();
            })
            .catch(error => {
              console.error("There was an error submitting the form!", error);
            })
            .finally(() => {
              setSubmitting(false);
            });
  
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="image..."
              name="image"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.image}
            />
            {errors.image && touched.image && errors.image}
            <input
              type="text"
              placeholder="subtitle..."
              name="subtitle"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.subtitle}
            />
            {errors.subtitle && touched.subtitle && errors.subtitle}
            <input
              type="text"
              placeholder="price..."
              name="price"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.price}
            />
            {errors.price && touched.price && errors.price}
            <input
              type="text"
              placeholder="name..."
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            {errors.name && touched.name && errors.name}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
      <Table items={data} />
    </div>
  );
}

export default AddPage;
