import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';
import { getApp } from '@/service/app/AppService';
import Header from '@/components/header/Header';
import { AppState } from '@/redux/types/AppState';
import { useSelector } from 'react-redux';
import { AppModel } from '@/models/app/AppModel';

const WindowAlt: React.FC = () => {

    const { appList } = useSelector((state: AppState) => state.app);
    const [apps, setApps] = useState<AppModel[]>([]);

    React.useEffect(() => {
        let params = {
            tag: "windows"
        }
        getApp(params);
    }, []);

    React.useEffect(() => {
        setApps(appList);
    }, [appList]);

    const renderApp = () => {
        if (!apps || apps.length === 0) {
            return (<div></div>);
        }
        const appElementList: JSX.Element[] = [];
        apps.forEach((item: AppModel) => {
            appElementList.push(<Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                        {item.description}
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>);
        });
        return appElementList;
    }

    return (
        <div>
            <Header></Header>
            {renderApp()}
        </div>
    );
}

export default WindowAlt;
