import{j as r,M as s}from"./iframe-C8mLpNUa.js";import{P as p}from"./pdf-viewer-vZlrjXqh.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-ClIfwsbF.js";import"./preload-helper-DcXm066Y.js";import"./PdfViewer-CLlXmw0a.js";import"./index-lplF09tk.js";import"./BasePdfViewer-CAZ9lnjh.js";import"./BasePdfViewer.module.css-poWAEeIf.js";import"./PdfViewerAnnotationLayer-D4gBmTtx.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Duqj1EGF.js";import"./PdfViewerOutlineSidebar-DSeCY2kQ.js";import"./PdfViewerSidebarHeader-CMK_gx4V.js";import"./useBaseUiId-D95gWc2p.js";import"./useControlled-Bc3_JC4e.js";import"./CompositeRoot-Bgs3Conl.js";import"./CompositeItem-CcQJlkPk.js";import"./ToolbarRootContext-iYdW5kZP.js";import"./composite-CWkYjCVm.js";import"./svgIconContainer-FbWIWLG7.js";import"./PdfViewerSearchBar-Cpqr4nlX.js";import"./chevron-up-C-IckLlo.js";import"./chevron-down-Dd1Lw4ZT.js";import"./cross-D4wCc5t9.js";import"./PdfViewerSidebar-DiCgHLlN.js";import"./index-C4XmNQrj.js";import"./index-Dg7wmbR-.js";import"./index-Cq9Q8vBH.js";import"./PdfViewerToolbar-WyCc5Dqr.js";import"./Button-FnUnITX8.js";import"./chevron-right-39mB-m1U.js";import"./Input-DiXIdJjT.js";import"./search-DYeQ-hhD.js";import"./spin-CKmCrfVJ.js";import"./error-Bi3sflIe.js";import"./withOsdkMetrics-Dqf6ufdb.js";import"./makeExternalStore-BYvHqUPv.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
