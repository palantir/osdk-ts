import{j as r,M as s}from"./iframe-BYRqOhSr.js";import{P as p}from"./pdf-viewer-BkEgf5VY.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B5OJq6DP.js";import"./preload-helper-DLGTrBKR.js";import"./PdfRenderer-C5Yf6olq.js";import"./index-CSSebMeO.js";import"./PdfViewer-DzLeXwqH.js";import"./PdfViewer.module.css-Dm4tAXUm.js";import"./PdfViewerAnnotationLayer-BdH8yFrv.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BM9940SV.js";import"./PdfViewerOutlineSidebar-9XQCxqXm.js";import"./PdfViewerSidebarHeader-BU8Dx5Cr.js";import"./useBaseUiId-BFjTC6ra.js";import"./useControlled-BLCq1h60.js";import"./CompositeRoot-cgP0wQ3s.js";import"./CompositeItem-mcJO_U5b.js";import"./ToolbarRootContext-D6_V_hS-.js";import"./composite-0rukfXMW.js";import"./svgIconContainer-wW0CqYPP.js";import"./PdfViewerSearchBar-Bi52H3AE.js";import"./chevron-up-CZPYBC0K.js";import"./chevron-down-DUmlt8XR.js";import"./cross-Cdpkq547.js";import"./PdfViewerSidebar-Biy_dLXV.js";import"./index-CKEL1RmN.js";import"./index--Qkxp9Ch.js";import"./index-Crj6XLuG.js";import"./PdfViewerToolbar-CDdjzYo2.js";import"./Button-cKG_17Qb.js";import"./chevron-right-BU4Qc3d4.js";import"./Input-DR73XI4T.js";import"./search-DIpxBZ8i.js";import"./spin-CynLx3py.js";import"./error-DF1K1fTv.js";import"./withOsdkMetrics-BiRr5uSt.js";import"./makeExternalStore-RjmvQ4XE.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
