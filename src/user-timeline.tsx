import User from "./app/user";


type UserType = {
    user: userDataType | null;
}

export default function UserTimeline({ user }: UserType) {
    return (
        <>

            <User
                userName={user?.name}
                fatherName={user?.fathername}
                email={user?.email}
                hobbie={user?.hobbie}



            />
        </>
    )
}