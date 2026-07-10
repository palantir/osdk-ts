import{j as r,M as s}from"./iframe-Dlc4Y7l2.js";import{P as p}from"./pdf-viewer-iAz2RuFb.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CDG7Putt.js";import"./preload-helper-uHTpd2SN.js";import"./PdfRenderer-Bc8asuQ2.js";import"./index-CZb7s7DJ.js";import"./PdfViewer-CZo9mpz7.js";import"./PdfViewer.module.css-BJfoZUHQ.js";import"./PdfViewerAnnotationLayer-Blf_SCOR.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BmQOGJlw.js";import"./PdfViewerOutlineSidebar-DrivwB1F.js";import"./PdfViewerSidebarHeader-q3MJBKYk.js";import"./useBaseUiId-Bqq2iQuH.js";import"./useControlled-DmSTmLMx.js";import"./CompositeRoot-DBpxDFr7.js";import"./CompositeItem-CcQUowfR.js";import"./ToolbarRootContext-BSN7TU8_.js";import"./composite-D-qbH-OC.js";import"./svgIconContainer-MMCfVynN.js";import"./PdfViewerSearchBar-CCBwkiDr.js";import"./chevron-up-DCxSyOQU.js";import"./chevron-down-O5ou2q9f.js";import"./cross-Y257G4Zz.js";import"./PdfViewerSidebar-BAPGT6Go.js";import"./index-Djal1eO8.js";import"./index-BlukRXQK.js";import"./index-CgbPnQ_X.js";import"./PdfViewerToolbar-BwHX9uaX.js";import"./Button-DygHWmXM.js";import"./chevron-right-fnCmtpIm.js";import"./Input-S_id-E4x.js";import"./search-QE3CE0Tz.js";import"./spin-LDiITOBt.js";import"./error-BKw89Z36.js";import"./withOsdkMetrics-C_AJad1o.js";import"./makeExternalStore-C8atPSYy.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
