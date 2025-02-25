import Form from "@/components/Form"
import { register } from "@/action/user"

const Register = async () => {
    return (
        <Form type="Sign Up" action={register} />
    )
}

export default Register
