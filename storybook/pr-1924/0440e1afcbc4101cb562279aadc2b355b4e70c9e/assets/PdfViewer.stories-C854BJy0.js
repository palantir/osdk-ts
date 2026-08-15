import{j as r,M as s}from"./iframe-DHWh16X0.js";import{P as p}from"./pdf-viewer-hghxphZK.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D2eLSgNt.js";import"./preload-helper-CsMbAkrZ.js";import"./PdfViewer-C7UWrKR9.js";import"./index-EFIkBK0s.js";import"./BasePdfViewer-Btrd_TxU.js";import"./BasePdfViewer.module.css-BTme0QyG.js";import"./PdfViewerAnnotationLayer-DE0QCTte.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BdTjbiIn.js";import"./PdfViewerOutlineSidebar-BIp-FV3j.js";import"./PdfViewerSidebarHeader-DU-zXpD4.js";import"./useBaseUiId-CXEibAEQ.js";import"./useControlled-Do1VjKsf.js";import"./CompositeRoot-RIfcT602.js";import"./CompositeItem-DpZ7DPTP.js";import"./ToolbarRootContext-BomQbyQ9.js";import"./composite-tY4yE9Ik.js";import"./svgIconContainer-QMaziiJ4.js";import"./PdfViewerSearchBar-ETEHjoE5.js";import"./chevron-up-BOL5-owG.js";import"./chevron-down-Co2wTi8S.js";import"./cross-BclIt3wI.js";import"./PdfViewerSidebar-BXtsLq0m.js";import"./index-BrQ95iqV.js";import"./index-DZ3wCjjT.js";import"./index-BzT39WQ1.js";import"./PdfViewerToolbar-Cd2xJNw_.js";import"./Button-kRRLhT0h.js";import"./chevron-right-BR4b8ATf.js";import"./Input-CErdghMM.js";import"./search-CVsDG0lr.js";import"./spin-B0qm9rUj.js";import"./error-06ET36ME.js";import"./withOsdkMetrics-C4DH-JGk.js";import"./makeExternalStore-CRShQ3yp.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
