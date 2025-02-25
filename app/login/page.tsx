import { login } from "@/action/user"
import Form from "@/components/Form"

const page = () => {
    return (
        <Form type="Sign In" action={login} />
    )
}

export default page
