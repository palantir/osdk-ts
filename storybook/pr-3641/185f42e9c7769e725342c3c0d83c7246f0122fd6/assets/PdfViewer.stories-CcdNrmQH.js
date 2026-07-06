import{j as r,M as s}from"./iframe-BBD6bIkP.js";import{P as p}from"./pdf-viewer-LED_CnF4.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-6SzWMhtH.js";import"./preload-helper-DmRY_fIz.js";import"./PdfRenderer-DqsltCN5.js";import"./index-zvr3wSif.js";import"./PdfViewer-DfTCxIYh.js";import"./PdfViewer.module.css-B1BQ1caQ.js";import"./PdfViewerAnnotationLayer-BnorMKyk.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DtYG6z7N.js";import"./PdfViewerOutlineSidebar-DU35_cZ2.js";import"./PdfViewerSidebarHeader-CL4TdDfn.js";import"./useBaseUiId-CV9f4UcV.js";import"./useControlled-sz1tLZDG.js";import"./CompositeRoot-R7soo4Q_.js";import"./CompositeItem-BSBnrNws.js";import"./ToolbarRootContext-DYiYc1pI.js";import"./composite-C1CC07n3.js";import"./svgIconContainer-B0U1dhGr.js";import"./PdfViewerSearchBar-D6o6nP4Z.js";import"./chevron-up-BSVuWhPI.js";import"./chevron-down-COa_6JEf.js";import"./cross-CAbGq_ii.js";import"./PdfViewerSidebar-B-oPfmnA.js";import"./index-BKxxO53m.js";import"./index-D7MDcbvr.js";import"./index-CT9dnj7o.js";import"./PdfViewerToolbar-DWXTxIrf.js";import"./Button-CRkQd3Zo.js";import"./chevron-right-BuypMQKv.js";import"./Input-CDFTBGX_.js";import"./search-DrXL6KTp.js";import"./spin-4jgNJeg3.js";import"./error-D4sKUVrH.js";import"./withOsdkMetrics-BEG7gvuB.js";import"./makeExternalStore-G3EdfFZw.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
