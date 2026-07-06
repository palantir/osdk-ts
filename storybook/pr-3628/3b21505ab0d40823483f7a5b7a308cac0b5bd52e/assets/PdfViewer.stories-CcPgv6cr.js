import{j as r,M as s}from"./iframe-BljDq4wR.js";import{P as p}from"./pdf-viewer-CVN8ocd3.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DvPQt5xY.js";import"./preload-helper-B_iYACo7.js";import"./PdfRenderer-Ca2ZgPjS.js";import"./index-DO-1ysPN.js";import"./PdfViewer-eYtVEES3.js";import"./PdfViewer.module.css-Besl488o.js";import"./PdfViewerAnnotationLayer-DdddDWpg.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Bf9W2AsJ.js";import"./PdfViewerOutlineSidebar-DKo9RpF9.js";import"./PdfViewerSidebarHeader-D_bwrR9E.js";import"./useBaseUiId-BMSny1Su.js";import"./useControlled-CPi6U7Vb.js";import"./CompositeRoot-DCU6TpMx.js";import"./CompositeItem-D_nptJWW.js";import"./ToolbarRootContext-C2oiM4f3.js";import"./composite-D0yY90_T.js";import"./svgIconContainer-CX8tMQQJ.js";import"./PdfViewerSearchBar-Xf91YeUa.js";import"./chevron-up-W_aquI64.js";import"./chevron-down-DyUKO2D2.js";import"./cross-Be1AVT1F.js";import"./PdfViewerSidebar-PDXjwu8i.js";import"./index-Dtm72hel.js";import"./index-B7vgxTAj.js";import"./index-zpcgYgtG.js";import"./PdfViewerToolbar-CSwh0YFT.js";import"./Button-CP-k4xCy.js";import"./chevron-right-BSI2PKtF.js";import"./Input-BWn9wT_i.js";import"./search-C4Ru-Hyi.js";import"./spin-CEpwP432.js";import"./error-BLpAp9wE.js";import"./withOsdkMetrics-DCDCh1dh.js";import"./makeExternalStore-yIneejl0.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
