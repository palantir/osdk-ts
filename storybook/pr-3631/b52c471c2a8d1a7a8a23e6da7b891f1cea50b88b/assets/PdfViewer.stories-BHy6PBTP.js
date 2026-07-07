import{j as r,M as s}from"./iframe-awsZ7j26.js";import{P as p}from"./pdf-viewer-BsMRFU6D.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-lpCL9TMy.js";import"./preload-helper-C31Oofbf.js";import"./PdfRenderer-hkW3qg1y.js";import"./index-BDgD4bs2.js";import"./PdfViewer-Ccpig0De.js";import"./PdfViewer.module.css-CNoWA2_8.js";import"./PdfViewerAnnotationLayer-D1_sD5HI.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-ECU1TbA7.js";import"./PdfViewerOutlineSidebar-BEqLnbVc.js";import"./PdfViewerSidebarHeader-BCOmdFOY.js";import"./useBaseUiId-CgonoKnK.js";import"./useControlled-BI5xpB4b.js";import"./CompositeRoot-lUZ5mEMK.js";import"./CompositeItem-BGM-5pfK.js";import"./ToolbarRootContext-CZvk9_-f.js";import"./composite-CSiPE20u.js";import"./svgIconContainer-BAAbCsQC.js";import"./PdfViewerSearchBar-B2YC4iUg.js";import"./chevron-up-D-EsHbHx.js";import"./chevron-down-Bh11S4NC.js";import"./cross-EBBS3MG8.js";import"./PdfViewerSidebar-bhBumeoy.js";import"./index-C6uB2sma.js";import"./index-DEu9X8Hu.js";import"./index-ZCe7kmTE.js";import"./PdfViewerToolbar-Cnbv2jx3.js";import"./Button-UFiaVGXl.js";import"./chevron-right-gmelEFh1.js";import"./Input-_ntxGUu6.js";import"./search-DChalUEi.js";import"./spin-BMVAsikx.js";import"./error-jay4KjIn.js";import"./withOsdkMetrics-EoQkqQF-.js";import"./makeExternalStore-CkHWFA6D.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
