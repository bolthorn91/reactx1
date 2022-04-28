import { useParams, useLocation, useNavigate } from "react-router-dom";

export const Example = () => {
    const { id } = useParams();
    const numbers = [1, 2, 3, 4, 5];
    const users = [
        {
            name: 's1',
            lastName: 'lastNameUser1'
        },
        {
            name: 'user2',
            lastName: 'lastNameUser2'
        },
        {
            name: 'user3',
            lastName: 'lastNameUser3'
        },
        {
            name: 'user4',
            lastName: 'lastNameUser4'
        },
    ]
    const dataLoaded = true;
    const listItems = numbers.map((number, index) => <li key={index}>{number}</li>)

    const condition1 = numbers.length === 5;
    
    return (
        <>
            {!dataLoaded && <p>Spinner</p>}
            {dataLoaded && (
                <>
                    {listItems}
                    {users.map((user, index) => {
                        return (
                            <div key={index}>
                                <p>{user.name}</p>
                                <p>{user.lastName}</p>
                            </div>
                        )
                    })}
                    {true && <div>ha evaluado a true</div>}
                    {!condition1 && <div>la condicion 1 se ha cumplido</div>}
                </>
            )}
        </>
    )
}