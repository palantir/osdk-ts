import{j as r,M as s}from"./iframe-DAPf5R79.js";import{P as p}from"./pdf-viewer-C1gRr6wW.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BE93iTiW.js";import"./preload-helper--c_tbeOe.js";import"./PdfRenderer-BbGIX8Db.js";import"./index-xCoa8aGB.js";import"./PdfViewer-wygfV5Z0.js";import"./PdfViewer.module.css-DLcJciHH.js";import"./PdfViewerAnnotationLayer-B2A8La1D.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BUeIpfJo.js";import"./PdfViewerOutlineSidebar-wP8wf9P4.js";import"./PdfViewerSidebarHeader-Dlqzueb6.js";import"./useBaseUiId-fYZwvqln.js";import"./useControlled-DargH3t1.js";import"./CompositeRoot-CelOtLNT.js";import"./CompositeItem-BYrTCyd7.js";import"./ToolbarRootContext-Clg4QEmw.js";import"./composite-D8yTLZWE.js";import"./svgIconContainer-BYkztrbc.js";import"./PdfViewerSearchBar-CsvDl65a.js";import"./chevron-up-Clxg_B0s.js";import"./chevron-down-I9ELS6qu.js";import"./cross-ClhQ1rpF.js";import"./PdfViewerSidebar-B39dp86q.js";import"./index-Dby3YX0k.js";import"./index-AFTh5nTl.js";import"./index-CnB3s9IP.js";import"./PdfViewerToolbar-DfSZxCt_.js";import"./Button-BjZAy2ji.js";import"./chevron-right-DEXui7XN.js";import"./Input-ZkOVrlYt.js";import"./search-BnbwIFnT.js";import"./spin-maB-em3R.js";import"./error-B7xwVXIY.js";import"./withOsdkMetrics-4QHDEE-T.js";import"./makeExternalStore-ZfRGx0zA.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
