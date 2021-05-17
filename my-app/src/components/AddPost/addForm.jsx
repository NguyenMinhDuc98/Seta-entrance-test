import { ErrorMessage, Field, Formik, Form } from 'formik';
// import { Form, Input, InputNumber, Checkbox } from 'formik-antd';
import PropTypes from 'prop-types';
import { Button, Spinner } from 'reactstrap';
import * as Yup from 'yup';

AddForm.propTypes = {
    onSubmit: PropTypes.func
}

AddForm.defaultProps = {
    onSubmit: null
}

function AddForm(props) {
    const initialValues = {
        title: '',
        body: ''
    }

    const validationSchema = Yup.object().shape({
        title: Yup.string().required('This field is required'),
        body: Yup.string().required('This field is required'),
    })

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={props.onSubmit}
            >
                {formikProps => {
                    const { values, errors, touched, isSubmitting } = formikProps;

                    return (
                        <Form>
                            <h2>Add post</h2>
                            <label>Title</label>
                            <Field
                                name="title"
                                placeholder="Enter your post's title"
                            />
                            <span className='error'>
                                <ErrorMessage name='title' />
                            </span>

                            <label>Body</label>
                            <Field name="body" placeholder="Enter your post's body" as='textarea' />
                            <span className='error'>
                                <ErrorMessage name='body' />
                            </span>

                            <Button type="submit">
                                {isSubmitting && <Spinner size='sm' />}
                                    Submit
                                </Button>
                        </Form>
                    )
                }}
            </Formik>
        </div>
    )
}

export default AddForm;