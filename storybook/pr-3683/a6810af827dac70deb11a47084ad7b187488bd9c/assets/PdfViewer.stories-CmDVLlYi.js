import{j as r,M as s}from"./iframe-COW6NcsI.js";import{P as p}from"./pdf-viewer-C32tCQWm.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BeazlmDm.js";import"./preload-helper-G8EPqEJh.js";import"./PdfRenderer-Batfd0MQ.js";import"./index-CW-e6r9a.js";import"./PdfViewer-7-_RRqaI.js";import"./PdfViewer.module.css-BIT_Mw2t.js";import"./PdfViewerAnnotationLayer-0iVTksc2.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BXFlHYpr.js";import"./PdfViewerOutlineSidebar-CK50Q3Bl.js";import"./PdfViewerSidebarHeader-xCk7Nj7U.js";import"./useBaseUiId-CPuvuul4.js";import"./useControlled-C4fThFcC.js";import"./CompositeRoot-DmunV1cm.js";import"./CompositeItem-ClwhSYZE.js";import"./ToolbarRootContext-e7slT4RT.js";import"./composite-IDuh3utY.js";import"./svgIconContainer-CVdrdWap.js";import"./PdfViewerSearchBar-CeH6_iaW.js";import"./chevron-up-3vmXGWzP.js";import"./chevron-down-BjwdaKHx.js";import"./cross-Bqug0Vp6.js";import"./PdfViewerSidebar-MY_A6W6u.js";import"./index-CujUeAc2.js";import"./index-C1kQCTH3.js";import"./index-BsKm97c0.js";import"./PdfViewerToolbar-DTMum5tk.js";import"./Button-DApRJW5A.js";import"./chevron-right-CEDUdEtF.js";import"./Input-BbbO03ue.js";import"./search-a4gMSdv_.js";import"./spin-BfBkjQRv.js";import"./error-CnMxWdUA.js";import"./withOsdkMetrics-oXBpH5el.js";import"./makeExternalStore-VD_YYeJk.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />`}}}};var t,m,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => {
    const {
      object: employee,
      isLoading
    } = useOsdkObject(Employee, MEDIA_EMPLOYEE_PK);
    if (isLoading || !employee?.employeeDocuments) {
      return <div style={{
        height: "600px"
      }}>Loading OSDK media…</div>;
    }
    return <div style={{
      height: "600px"
    }}>
        <PdfViewer media={employee.employeeDocuments} />
      </div>;
  },
  parameters: {
    docs: {
      source: {
        code: \`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
