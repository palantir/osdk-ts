import{j as r,M as s}from"./iframe-B6-_QUtU.js";import{P as p}from"./pdf-viewer-C-F80F-A.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BdEu9H7C.js";import"./preload-helper-BDRjb6OB.js";import"./PdfRenderer-CJyF7pTD.js";import"./index-CAZGJab0.js";import"./PdfViewer-f8lkhlIU.js";import"./PdfViewer.module.css-CHxLpcA-.js";import"./PdfViewerAnnotationLayer-BMEBAObk.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DRJgfI_g.js";import"./PdfViewerOutlineSidebar-4yMvTIhr.js";import"./PdfViewerSidebarHeader-YxQBvUUt.js";import"./useBaseUiId-DZx6O2JG.js";import"./useControlled-CPgNZq1w.js";import"./CompositeRoot-XrPayxZS.js";import"./CompositeItem-B1nT4QUA.js";import"./ToolbarRootContext-qv2Bumaf.js";import"./composite-DjQ2yLAq.js";import"./svgIconContainer-DlKcWleM.js";import"./PdfViewerSearchBar-Cl2BcnH0.js";import"./chevron-up-esGLW5Gh.js";import"./chevron-down-BW0wYSCd.js";import"./cross-D0oGkNoB.js";import"./PdfViewerSidebar-CUfcKueU.js";import"./index-CVf23Dlc.js";import"./index-DvgWcRwX.js";import"./index-BmjgV4Nn.js";import"./PdfViewerToolbar-Bdvs9T6B.js";import"./Button-15Cyb3e-.js";import"./chevron-right-CSkgD7uD.js";import"./Input-CN4vw-S9.js";import"./search-B9pHM3fF.js";import"./spin-CvUWRofE.js";import"./error-BmoFbwJM.js";import"./withOsdkMetrics-BRfC8hFs.js";import"./makeExternalStore-JvLL6ZRj.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
