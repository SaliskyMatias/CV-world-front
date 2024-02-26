import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { tokens } from "./theme";
import { useTheme } from "@mui/material";

import postSubscription from "../../redux/actions/subscriptions/postSubscription"

const CreateSubscription = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  
    const nameRegex = /^[a-zA-Z\s-]+$/;
  
    const checkoutSchema = yup.object().shape({
      name: yup.string().matches(nameRegex, "Phone number is not valid").required("required"),
      price: yup.number().required("required"),
      included: yup.array().of(yup.string()).required("required"),
      notIncluded: yup.array().of(yup.string()).required("required"),
    });
  
    const initialValues = {
      name: "",
      price: "",
      included: [""],
      notIncluded: [""],
    };
  
    const handleFormSubmit = (values) => {
      postSubscription(values);
    };
  
    return (
      <Box m="20px">
        <Typography variant="h1" color={colors.black[500]} fontWeight="600">
          Crear suscripción
        </Typography>
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={checkoutSchema}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <Box
                display="grid"
                gap="30px"
                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                sx={{
                  "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                }}
              >
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Nombre"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.name}
                  name="name"
                  error={!!touched.name && !!errors.name}
                  helperText={touched.name && errors.name}
                  sx={{ gridColumn: "span 4" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="number"
                  label="Precio"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.price}
                  name="price"
                  error={!!touched.price && !!errors.price}
                  helperText={touched.price && errors.price}
                  sx={{ gridColumn: "span 4" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Incluye"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.included[0]}
                  name="included[0]"
                  error={!!touched.included && !!errors.included}
                  helperText={touched.included && errors.included}
                  sx={{ gridColumn: "span 3" }}
                />
                <Button
                  type="button"
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    values.included.push("");
                    handleChange({
                      target: {
                        name: "included",
                        value: [...values.included],
                      },
                    });
                  }}
                >
                  Agregar
                </Button>
                {values.included.slice(1).map((value, index) => (
                  <TextField
                    key={index + 1}
                    fullWidth
                    variant="filled"
                    type="text"
                    label={`Incluye ${index + 1}`}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={value}
                    name={`included[${index + 1}]`}
                    error={!!touched.included && !!errors.included}
                    helperText={touched.included && errors.included}
                    sx={{ gridColumn: "span 3" }}
                  />
                ))}
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="No incluye"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.notIncluded[0]}
                  name="notIncluded[0]"
                  error={!!touched.notIncluded && !!errors.notIncluded}
                  helperText={touched.notIncluded && errors.notIncluded}
                  sx={{ gridColumn: "span 3" }}
                />
                <Button
                  type="button"
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    values.notIncluded.push("");
                    handleChange({
                      target: {
                        name: "notIncluded",
                        value: [...values.notIncluded],
                      },
                    });
                  }}
                >
                  Agregar
                </Button>
                {values.notIncluded.slice(1).map((value, index) => (
                  <TextField
                    key={index + 1}
                    fullWidth
                    variant="filled"
                    type="text"
                    label={`No incluye ${index + 1}`}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={value}
                    name={`notIncluded[${index + 1}]`}
                    error={!!touched.notIncluded && !!errors.notIncluded}
                    helperText={touched.notIncluded && errors.notIncluded}
                    sx={{ gridColumn: "span 3" }}
                  />
                ))}
              </Box>
              <Box display="flex" justifyContent="end" mt="20px">
                <Button
                  type="submit"
                  color="secondary"
                  variant="contained"
                  sx={{
                    backgroundColor: "#098D85",
                    "&:hover": {
                      backgroundColor: "#098D85",
                    },
                  }}
                  disabled={isSubmitting}
                >
                  Crear suscripción
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    );
  };
  
  export default CreateSubscription;