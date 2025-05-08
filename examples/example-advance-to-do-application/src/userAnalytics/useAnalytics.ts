import { useCallback, useState } from "react";
import { EventType } from "./userAnalyticsTypes";
import client from "../client";
import { createOsdkLog } from "@tutorial-advance-to-do-application/sdk";

function useAnalytics() {
    const [browserInfo] = useState<{ browserName: string, browserVersion: string, deviceType: string }>(getBrowserInfo());
    const reactVersion = "Unknown";

    const logEvent = useCallback(async (eventType: EventType, eventDetails: string) => {
        const host = window.location.hostname;
        const pagePath = window.location.pathname;
        client(createOsdkLog).applyAction(
            {
                "browser": `${browserInfo.browserName} ${browserInfo.browserVersion}`,
                "device_type": browserInfo.deviceType,
                "event_details": eventDetails,
                "event_type": eventType,
                "application_version": reactVersion,
                "host": host,
                "page_visited": pagePath
            }
        ).then(() => {
            console.log(`Event ${eventType} successfully logged.`);
        }).catch((error) => {
            console.error(`Failed to log event ${eventType}:`, error);
        });
    }, [browserInfo, reactVersion]);

    return {
        logEvent,
        eventType: EventType
    };
}

export default useAnalytics;

const getBrowserInfo = () => {
    const userAgent = navigator.userAgent;
    let browserName = "Unknown";
    let browserVersion = "Unknown";
    let deviceType = "Unknown";

    if (/Mobi|Android/i.test(userAgent)) {
        deviceType = "Mobile";
    } else if (/Tablet|iPad/i.test(userAgent)) {
        deviceType = "Tablet";
    } else {
        deviceType = "Desktop";
    }

    if (userAgent.indexOf("Firefox") > -1) {
        browserName = "Firefox";
        const match = userAgent.match(/Firefox\/([0-9]+(?:\.[0-9]+)*)/);
        browserVersion = match ? match[1] : "Unknown";
    } else if (userAgent.indexOf("Chrome") > -1) {
        browserName = "Chrome";
        const match = userAgent.match(/Chrome\/([0-9]+(?:\.[0-9]+)*)/);
        browserVersion = match ? match[1] : "Unknown";
    } else if (userAgent.indexOf("Safari") > -1) {
        browserName = "Safari";
        const match = userAgent.match(/Version\/([0-9]+(?:\.[0-9]+)*)/);
        browserVersion = match ? match[1] : "Unknown";
    } else if (userAgent.indexOf("MSIE") > -1 || userAgent.indexOf("Trident") > -1) {
        browserName = "Internet Explorer";
        const match = userAgent.match(/(?:MSIE |rv:)([0-9]+(?:\.[0-9]+)*)/);
        browserVersion = match ? match[1] : "Unknown";
    }

    return { browserName, browserVersion, deviceType };
};