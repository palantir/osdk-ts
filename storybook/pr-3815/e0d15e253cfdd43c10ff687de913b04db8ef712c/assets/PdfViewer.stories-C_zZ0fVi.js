import{j as r,M as s}from"./iframe-DUMMG66q.js";import{P as p}from"./pdf-viewer-dN5hjN4w.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BxczPHqe.js";import"./preload-helper-BFk0oZbE.js";import"./PdfRenderer-D4MQFQ7y.js";import"./index-Cs1y_uJV.js";import"./PdfViewer-BFlv7Fbc.js";import"./PdfViewer.module.css-bql2XNG_.js";import"./PdfViewerAnnotationLayer-CvyyN4_d.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CxEH-D4y.js";import"./PdfViewerOutlineSidebar-DxR6gXmT.js";import"./PdfViewerSidebarHeader-CvO9AL3h.js";import"./useBaseUiId-5XWzXM4h.js";import"./useControlled-Dai2soRW.js";import"./CompositeRoot-DOi3tJYT.js";import"./CompositeItem-B_iG35wZ.js";import"./ToolbarRootContext-Ct53oQXX.js";import"./composite-DIXGEIwe.js";import"./svgIconContainer-4zJcw9JU.js";import"./PdfViewerSearchBar-uS8TgiS2.js";import"./chevron-up-Csu1aMRS.js";import"./chevron-down-B8MX778T.js";import"./cross-elCH4-ly.js";import"./PdfViewerSidebar-C1em6S_q.js";import"./index-DwYNByYI.js";import"./index-CWiUghgz.js";import"./index-P2xopAr5.js";import"./PdfViewerToolbar-C6xWFHFA.js";import"./Button--52y3PBE.js";import"./chevron-right-DA_D91nd.js";import"./Input-BfayLVf4.js";import"./search-DFdLmLH_.js";import"./spin-DSUetIGF.js";import"./error-FWwnFt00.js";import"./withOsdkMetrics-CoOA1jkj.js";import"./makeExternalStore-BhIGJmu2.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
