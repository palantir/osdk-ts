import{j as r,M as s}from"./iframe-C4S3DlTX.js";import{P as p}from"./pdf-viewer-B4ACZ5Ay.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BQkdGEam.js";import"./preload-helper-C12oki_1.js";import"./PdfRenderer-CYoNT2Du.js";import"./index-CGdxS39A.js";import"./PdfViewer-Cu9wL5cd.js";import"./PdfViewer.module.css-jwSey3zG.js";import"./PdfViewerAnnotationLayer-Bb6M8uzU.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DtELJm4d.js";import"./PdfViewerOutlineSidebar-CtbkuTZP.js";import"./PdfViewerSidebarHeader-HRJqudrd.js";import"./useBaseUiId-KxDZNND0.js";import"./useControlled-rJmEjAwF.js";import"./CompositeRoot-CdcSjsQK.js";import"./CompositeItem-CNDemvXj.js";import"./ToolbarRootContext-B1GabsZj.js";import"./composite-zkHIXe_o.js";import"./svgIconContainer-C5n87xB5.js";import"./PdfViewerSearchBar-CNmeaioE.js";import"./chevron-up-F0JPoqUC.js";import"./chevron-down-PnC8kvGF.js";import"./cross-CVWhTfAa.js";import"./PdfViewerSidebar-BkSQsZcb.js";import"./index-DvqKfLtn.js";import"./index-CpasDDuw.js";import"./index-B810S7QY.js";import"./PdfViewerToolbar-DULkupI9.js";import"./Button-CQDmEc2D.js";import"./chevron-right-CznYfmrV.js";import"./Input-dMIGhA3_.js";import"./search-Cq9i3S8m.js";import"./spin-CchdcFpH.js";import"./error-BHFCx4XG.js";import"./withOsdkMetrics-_iEXrOrE.js";import"./makeExternalStore-DkUbRBpR.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
