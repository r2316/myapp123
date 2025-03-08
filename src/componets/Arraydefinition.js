import React from "react";

export default function Arraydefinition() {
    let users = [
        {
            userid: '1',
            id: '1',
            title: 'qui est esse',
            body: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        },
        {
            userid: '1',
            id: '2',
            title: 'qui est esse',
            body: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        },
        {
            userid: '1',
            id: '3',
            title: 'qui est esse',
            body: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        },
        {
            userid: '1',
            id: '4',
            title: 'qui est esse',
            body: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        },
        {
            userid: '1',
            id: '5',
            title: 'qui est esse',
            body: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        }
    ];

    let userUI = users.map((u) => {
        return (
            <div key={u.id} style={{ }}>
                <div style={{ display: 'flex',}}>
                </div>
               
                <dl>
                    <dt><h3>{u.id}.</h3></dt>
                    <dt><h3>{u.title}</h3></dt>
                    <dd>{u.body}</dd>
                </dl>
            </div>
        );
    });

    return <>{userUI}</>;
}
