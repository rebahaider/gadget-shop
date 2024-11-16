import { CircleLoader } from "react-spinners"

const Loading = () => {
    return (
        <div className="min-h-screen min-w-screen flex justify-center items-center">
            <CircleLoader
                color={'yellow'}
                loading={true}
                cssOverride={''}
                size={150}
            />
        </div>
    )
}

export default Loading
