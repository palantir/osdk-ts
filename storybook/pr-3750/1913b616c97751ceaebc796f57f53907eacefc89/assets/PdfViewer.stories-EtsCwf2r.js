import{j as r,M as s}from"./iframe-B-bk2LeB.js";import{P as p}from"./pdf-viewer-BmSZL1n4.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D9TnUtRE.js";import"./preload-helper-C5FV7gVn.js";import"./PdfRenderer-DvwL2m8x.js";import"./index-DM05yPFc.js";import"./PdfViewer-6qXAo_9J.js";import"./PdfViewer.module.css-DPXGpQc0.js";import"./PdfViewerAnnotationLayer-BrsrpN6r.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CbaDcUuo.js";import"./PdfViewerOutlineSidebar-BsbE8lsA.js";import"./PdfViewerSidebarHeader-TnApFsji.js";import"./useBaseUiId-BqQwfV5F.js";import"./useControlled-B1_v0SLc.js";import"./CompositeRoot-BawE7zkX.js";import"./CompositeItem-Bdc6unAH.js";import"./ToolbarRootContext-CAqP7Cj2.js";import"./composite-KF47FU0W.js";import"./svgIconContainer-DtjTERAf.js";import"./PdfViewerSearchBar-DdKYrc34.js";import"./chevron-up-BxjMRlO7.js";import"./chevron-down-BXFs_ff_.js";import"./cross-Dz9kcW5U.js";import"./PdfViewerSidebar-DEFlxRRF.js";import"./index-BBA5_LrS.js";import"./index-CFVQhoyp.js";import"./index-BAxgKpjF.js";import"./PdfViewerToolbar-C95K7isS.js";import"./Button-9uVrFS16.js";import"./chevron-right-Dc698Ylj.js";import"./Input-ICkfGpEo.js";import"./search-DOZ8pXMB.js";import"./spin-C5F57If7.js";import"./error-ufSJKQSy.js";import"./withOsdkMetrics-D6eXjUPL.js";import"./makeExternalStore-y8FAd1tx.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
