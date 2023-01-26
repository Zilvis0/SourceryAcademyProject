import React, { useContext, useEffect, useRef, useState } from 'react';
import styles from './ApplyForm.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import { useLocation } from 'react-router-dom';
import InputsGroup from '@components/InputsGroup';
import TextInput from '@components/TextInput';
import FileInput from '@components/FileInput';
import Button from '@components/Button';
import CheckBox from '@components/Checkbox';
import Select from '@components/Select';
import useFetch from '@hooks/useFetch';
import { ACADEMIES } from '@shared/constants';
import { ThemeContext } from '@context/ThemeContext';
import { validationSchema } from './validation/validationSchema';
import { ACADEMIES_DATA, VALID_FILE_TYPES, END_POINT } from './constants';
import withValidation from './withValidation';

const cn = classNames.bind(styles);

const FieldTextInput = withValidation(TextInput);
const FieldCheckboxInput = withValidation(CheckBox);
const FieldGroupInput = withValidation(InputsGroup);
const FieldFileInput = withValidation(FileInput);
const FieldSelect = withValidation(Select);

export default function ApplyForm({ onSubmit, texts }) {
  const { error, fetchData } = useFetch(END_POINT, onSubmit);
  const { currentAcademy, setCurrentAcademy } = useContext(ThemeContext);
  const [availableCities, setAvailableCities] = useState([]);
  const { state: academy } = useLocation();
  const formikInnerRef = useRef();

  const initialValues = {
    academy: academy?.value || ACADEMIES.DEVELOPERS.value,
    city: '',
    firstName: '',
    lastName: '',
    email: '',
    resume: '',
    privacy: false,
  };

  const {
    headingText,
    privacyText,
    buttonText,
    typesLegendText,
    citiesText,
    firstNameText,
    lastNameText,
    emailText,
    resumeText,
  } = texts;

  const handleOnSubmit = (values) => {
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) =>
      formData.append(key, value)
    );

    const config = { method: 'POST', data: formData };
    fetchData(config);
  };

  const handleOnChange = (event) => {
    setCurrentAcademy(event.target.id);
  };

  useEffect(() => {
    const { values, setFieldValue } = formikInnerRef.current;
    setFieldValue('city', '');

    const currentAcademy = ACADEMIES_DATA.find(({ value }) =>
      value.includes(values.academy)
    );

    setAvailableCities(currentAcademy.cities);
  }, [currentAcademy]);

  return (
    <Formik
      innerRef={formikInnerRef}
      initialValues={initialValues}
      onSubmit={handleOnSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, setFieldValue, isSubmitting }) => (
        <Form className={cn('academy-form')}>
          <h2 className={cn('academy-form__heading')}>{headingText}</h2>

          <FieldGroupInput
            name="academy"
            legend={typesLegendText}
            inputs={ACADEMIES_DATA}
            onChange={handleOnChange}
            secondary
            required
          />

          <FieldSelect
            name="city"
            options={availableCities}
            label={citiesText.label}
            placeholder={citiesText.placeholder}
            required
          />

          <div className={cn('academy-form__inputs-wrapper')}>
            <FieldTextInput
              name="firstName"
              autoComplete="given-name"
              label={firstNameText.label}
              placeholder={firstNameText.placeholder}
              required
            />

            <FieldTextInput
              name="lastName"
              autoComplete="family-name"
              label={lastNameText.label}
              placeholder={lastNameText.placeholder}
              required
            />

            <FieldTextInput
              name="email"
              autoComplete="email"
              label={emailText.label}
              placeholder={emailText.placeholder}
              required
            />

            <FieldFileInput
              name="resume"
              label={resumeText.label}
              placeholder={resumeText.placeholder}
              inputAccept={VALID_FILE_TYPES.join(', ')}
              onUpload={setFieldValue}
              required
            />
          </div>

          <FieldCheckboxInput label={privacyText} name="privacy" />

          <div className={cn('academy-form__button-wrapper')}>
            <Button onClick={handleSubmit} disabled={isSubmitting && !error}>
              {buttonText}
            </Button>
            {error && (
              <span className={cn('academy-form__error')}>{error}</span>
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
}

ApplyForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  texts: PropTypes.object.isRequired,
};
