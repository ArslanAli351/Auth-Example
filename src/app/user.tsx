type userNameType = {
    userName?: string,
    fatherName?: string,
    hobbie?: string,
    email?: string;
}
export default function User({ userName, fatherName, email, hobbie, }: userNameType) {

    return (<>
        <table style={{ border: '1px solid black', width: '100%', height: '90px' }}>
            <thead>
                <tr >
                    <th style={{ border: '1px solid black', fontWeight: 'bold' }}>User name</th>
                    <th style={{ border: '1px solid black' }}>Father name</th>
                    <th style={{ border: '1px solid black' }}>Email</th>
                    <th style={{ border: '1px solid black' }}>Hobbie</th>
                </tr></thead>
            <tbody>
                <tr>
                    <td style={{ border: '1px solid black' }}>{userName}</td>
                    <td style={{ border: '1px solid black' }}>{fatherName}</td>
                    <td style={{ border: '1px solid black' }}>{email}</td>
                    <td style={{ border: '1px solid black' }}>{hobbie}</td>

                </tr>
            </tbody>

        </table>

    </>)

}