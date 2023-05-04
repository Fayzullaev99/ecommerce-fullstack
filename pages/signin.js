import { BiLeftArrowAlt } from "react-icons/bi"
import Footer from "@/components/footer"
import Header from "@/components/header"
import styles from '../styles/signin.module.scss'
import Link from "next/link"
import { Form, Formik } from "formik"
import LoginInput from "@/components/inputs/loginInput"
import { useState } from "react"
import * as Yup from "yup"
import CircledIconBtn from "@/components/buttons/circledIconBtn"
import { getProviders, signIn } from "next-auth/react"


const country = { name: "Uzbekistan", flag: "https://media.istockphoto.com/id/1401168860/vector/round-icon-with-flag-of-uzbekistan-glass-light-ball-sticker-sphere-uzbek-national-symbol.jpg?s=612x612&w=0&k=20&c=FSuTzkfA4wNyfwrNvd9XoBkHg29ObuqYcJT74axAWto=" }
const initialValues = {
  login_email: "",
  login_password: "",
  name: "",
  email: "",
  password: "",
  conf_password: "",
}
function signin({ providers }) {
  console.log(providers);
  const [user, setUser] = useState(initialValues)
  const { login_email, login_password, name, email, password, conf_password, } = user
  const handleChange = (e) => {
    // const {name,value} = e.target
    setUser({ ...user, [e.target.name]: e.target.value })
    console.log(user);
  }
  const loginValidation = Yup.object({
    login_email: Yup.string().required("Email address is required").email("Please enter a valid email address"),
    login_password: Yup.string().required("Please enter a valid password"),
  })
  const registerValidation = Yup.object({
    name: Yup.string()
          .required("What's your name ?")
          .min(2,"First name must be between 2 and 16 characters")
          .max(16,"First name must be between 2 and 16 characters")
          .matches(/^[aA-zZ]/,'Numbers and special characters are not allowed'),
    email: Yup.string()
          .required("Email address is required")
          .email("Please enter a valid email address"),
    password: Yup.string()
          .required("Enter a combination of at least six numbers, letters and marks(such as ! and &)")
          .min(6,"Password must be at least 6 characters")
          .max(36,"Password cann't be more than 36 characters"),
    conf_password: Yup.string()
          .required("Confirm your password")
          .oneOf([Yup.ref("password")],"Passwords must match")
  })
  return (
    <>
      <Header country={country} />
      <div className={styles.login}>
        <div className={styles.login__container}>
          <div className={styles.login__header}>
            <div className={styles.back__svg}>
              <BiLeftArrowAlt />
            </div>
            <span>
              We'd be happy to join us ! <Link href={'/'}>Go Store</Link>
            </span>
          </div>
          <div className={styles.login__form}>
            <h1>Sign in</h1>
            <p>Get acces to one of the best Eshopping services in the world.</p>
            <Formik
              enableReinitialize
              initialValues={{
                login_email,
                login_password
              }}
              validationSchema={loginValidation}
            >
              {
                (form) => (
                  <Form>
                    <LoginInput
                      type={"text"}
                      name={"login_email"}
                      placeholder={"Email Address"}
                      icon={"email"}
                      onChange={handleChange}
                    />
                    <LoginInput
                      type={"password"}
                      name={"login_password"}
                      placeholder={"Enter Password"}
                      icon={"password"}
                      onChange={handleChange}
                    />
                    <CircledIconBtn type={'submit'} text={'Sign in'} />
                    <div className={styles.forgot}>
                      <Link href={'/forget'}>Forgot password</Link>
                    </div>
                  </Form>
                )
              }
            </Formik>
            <div className={styles.login__socials}>
              <span className={styles.or}>Or continue with</span>
              <div className={styles.login__socials_wrap}>
                {providers.map((provider) => (
                  <div key={provider.name}>
                    <button className={styles.social__btn} onClick={() => signIn(provider.id)}>
                      <img src={`./icons/${provider.name}.png`} alt="" />
                      Sign in with {provider.name}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.login__container}>
          <div className={styles.login__form}>
            <h1>Sign up</h1>
            <p>Get acces to one of the best Eshopping services in the world.</p>
            <Formik
              enableReinitialize
              initialValues={{
                name,
                email,
                password,
                conf_password,
              }}
              validationSchema={registerValidation}
            >
              {
                (form) => (
                  <Form>
                    <LoginInput
                      type={"text"}
                      name={"name"}
                      placeholder={"Full Name"}
                      icon={"user"}
                      onChange={handleChange}
                    />
                    <LoginInput
                      type={"text"}
                      name={"email"}
                      placeholder={"Email Address"}
                      icon={"email"}
                      onChange={handleChange}
                    />
                    <LoginInput
                      type={"password"}
                      name={"password"}
                      placeholder={"Enter Password"}
                      icon={"password"}
                      onChange={handleChange}
                    />
                    <LoginInput
                      type={"password"}
                      name={"conf_password"}
                      placeholder={"Confirm Password"}
                      icon={"password"}
                      onChange={handleChange}
                    />
                    <CircledIconBtn type={'submit'} text={'Sign up'} />
                  </Form>
                )
              }
            </Formik>
          </div>
        </div>
      </div>
      <Footer country={country} />
    </>
  )
}

export default signin

export async function getServerSideProps() {
  let providers = Object.values(await getProviders())
  return {
    props: {
      providers
    }
  }
}
