"use client"

import { useEffect } from "react";
import { initializeGoogleTagManager } from "./googleTagManager";

const SimpleComponent = () => {
    useEffect(() => {
        initializeGoogleTagManager('GTM-W9KS29KB');
    },[]);
    return <div> This is a Google Tag Manager component </div>;
}

export default SimpleComponent;