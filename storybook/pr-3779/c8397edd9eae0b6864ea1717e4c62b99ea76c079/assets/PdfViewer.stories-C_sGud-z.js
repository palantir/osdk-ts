import{j as r,M as s}from"./iframe-7HWn_vJ6.js";import{P as p}from"./pdf-viewer-PvL195-5.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BOP3ePwd.js";import"./preload-helper-CpsRumFb.js";import"./PdfRenderer-Z23fK-9V.js";import"./index-5DesS_Rq.js";import"./PdfViewer-C1s1mted.js";import"./PdfViewer.module.css-DOZYqE4L.js";import"./PdfViewerAnnotationLayer-xw-oe7I8.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BNk2Qlz5.js";import"./PdfViewerOutlineSidebar-CBCemNJr.js";import"./PdfViewerSidebarHeader-C7RYhuYC.js";import"./useBaseUiId-D5qCaBNi.js";import"./useControlled-xbXmF4gL.js";import"./CompositeRoot-DFOBJ0VX.js";import"./CompositeItem-D-vYIAXB.js";import"./ToolbarRootContext-DEobcuEs.js";import"./composite-ChQikCZ2.js";import"./svgIconContainer-BUuMEAEF.js";import"./PdfViewerSearchBar-DaAC-Qgc.js";import"./chevron-up-J3hyCbtc.js";import"./chevron-down-CjvcWCP0.js";import"./cross-C8-Xg2zC.js";import"./PdfViewerSidebar-BcPy5BE0.js";import"./index-DUwSofpg.js";import"./index-DLnS53Ac.js";import"./index-BAmY44lm.js";import"./PdfViewerToolbar-D4ew11aO.js";import"./Button-C0yxmCxc.js";import"./chevron-right-9y_-KCkd.js";import"./Input-BXvi8BCl.js";import"./search-Dz3e9e6H.js";import"./spin-BbQM5IO4.js";import"./error-OJDEKHve.js";import"./withOsdkMetrics-CygL5eUE.js";import"./makeExternalStore-D7BGvXpe.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
