import { type GetServerSideProps } from "next";
import { type AppProps } from "next/app";
import { getProviders, signIn } from "next-auth/react";

const SignIn = ({providers}: {providers: AppProps}) => {
    return (
        <>
            <h1>Signin</h1>
            <div>
                {Object.values(providers).map((provider) => (
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-misused-promises, @typescript-eslint/no-unsafe-member-access
                    <button key={provider.id} onClick={() => signIn(provider.id, {
                        callbackUrl: `${window.location.origin}`
                    })}>
                        Sign in with Google
                    </button>
                ))}
            </div>
        </>
    )
}

export default SignIn;


export const getServerSideProps: GetServerSideProps = async () => {
    const providers = await getProviders();

    return {
        props: { providers }
    };
}