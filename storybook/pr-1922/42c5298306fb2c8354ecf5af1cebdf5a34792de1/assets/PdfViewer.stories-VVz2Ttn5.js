import{j as r,M as s}from"./iframe-D1BrYSgn.js";import{P as p}from"./pdf-viewer-1F-zex7I.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DknpmAw6.js";import"./preload-helper-x1jfnViK.js";import"./PdfRenderer-CLXmWhr3.js";import"./index-H1o4gMgc.js";import"./PdfViewer-DlpwjPSB.js";import"./PdfViewer.module.css-TfUA9vnl.js";import"./PdfViewerAnnotationLayer-BfgXRU-x.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DqrbuUo3.js";import"./PdfViewerOutlineSidebar-CrfhO0sM.js";import"./PdfViewerSidebarHeader-yd3Gs8N4.js";import"./useBaseUiId-Dvap0bP_.js";import"./useControlled-CefdKsdA.js";import"./CompositeRoot-BSHyVBWa.js";import"./CompositeItem-Bb6lkocQ.js";import"./ToolbarRootContext-B-YNIawA.js";import"./composite-D3X73IFC.js";import"./svgIconContainer-CQqlv9TI.js";import"./PdfViewerSearchBar-B3dgp5GU.js";import"./chevron-up-D2CXuLb2.js";import"./chevron-down-YMA5FLRc.js";import"./cross-DKNlp0UL.js";import"./PdfViewerSidebar-Da0HWKy8.js";import"./index-nPGdI-1b.js";import"./index-BZ-ZbQxZ.js";import"./index-i3VUUG_u.js";import"./PdfViewerToolbar-B33VnwAF.js";import"./Button-BqE3w5dA.js";import"./chevron-right-ClAMkU2J.js";import"./Input-C7rXISug.js";import"./search-CwESW8sH.js";import"./spin-BX3fMyVU.js";import"./error-Ccjv0zYu.js";import"./withOsdkMetrics-cOiQ1jpU.js";import"./makeExternalStore-COZpMJn9.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
