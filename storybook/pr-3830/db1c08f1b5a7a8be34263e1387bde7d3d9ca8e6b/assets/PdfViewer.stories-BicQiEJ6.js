import{j as r,M as s}from"./iframe-BRm4vCFN.js";import{P as p}from"./pdf-viewer-CsGKc6Sp.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D5LkU8k6.js";import"./preload-helper-B8qSzsyn.js";import"./PdfRenderer-BMdBt185.js";import"./index-B7ENbfBC.js";import"./PdfViewer-Bo0tgRbf.js";import"./PdfViewer.module.css-TOzrVe-P.js";import"./PdfViewerAnnotationLayer-6MNKCBQw.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CVfLAtfC.js";import"./PdfViewerOutlineSidebar-CPFJ-4Fo.js";import"./PdfViewerSidebarHeader-BLk3sI6F.js";import"./useBaseUiId-B7fRGxsO.js";import"./useControlled-CEOSMcVQ.js";import"./CompositeRoot-yOuiCGnN.js";import"./CompositeItem-BNvDCPgA.js";import"./ToolbarRootContext-D1wgTrKR.js";import"./composite-wKCobVJO.js";import"./svgIconContainer-OFMjb_Rs.js";import"./PdfViewerSearchBar-4YwchLL7.js";import"./chevron-up-BTcp4Rsr.js";import"./chevron-down-Cm7ysla1.js";import"./cross-DPDrF0U4.js";import"./PdfViewerSidebar-BV-fnDET.js";import"./index-rovaKXjR.js";import"./index-CnpvZLeY.js";import"./index-CpqlfQCh.js";import"./PdfViewerToolbar-Cx5c-Xm6.js";import"./Button-Bb-87jsh.js";import"./chevron-right-CjtRLwyk.js";import"./Input-BpwNJM-I.js";import"./search-ntbcNAhn.js";import"./spin-CtsZw8QS.js";import"./error-BSqFGqFy.js";import"./withOsdkMetrics-B9Su6DFN.js";import"./makeExternalStore-BzfExdb1.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
