import React from 'react';
import {useTranslation} from "react-i18next";
import HallWrapper from "./modules/HallWrapper";
import './modules/screen.css'
import ContentLayout from "../../../components/content-layout";

function HallsSection() {
    const {t} = useTranslation();

    return (
        <ContentLayout title={t('events')}>
            <div>
                <HallWrapper/>
            </div>
        </ContentLayout>
    );
}

export default HallsSection;
