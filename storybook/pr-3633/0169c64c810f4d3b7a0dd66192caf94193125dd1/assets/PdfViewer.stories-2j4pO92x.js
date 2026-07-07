import{j as r,M as s}from"./iframe-C2AJFBo2.js";import{P as p}from"./pdf-viewer-Dfiq3MLH.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BdwgBa0e.js";import"./preload-helper-CkUZE9vK.js";import"./PdfRenderer-DSHnFJgz.js";import"./index-CPsgarJX.js";import"./PdfViewer-Bu0JbOkI.js";import"./PdfViewer.module.css-BIM7mAIV.js";import"./PdfViewerAnnotationLayer-B2Fg4Tm-.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DN7c_2Mc.js";import"./PdfViewerOutlineSidebar-Dik3sQ7a.js";import"./PdfViewerSidebarHeader-8qwChCpe.js";import"./useBaseUiId-Bmlvzb22.js";import"./useControlled-CmJBDZr3.js";import"./CompositeRoot-DoWBXIsJ.js";import"./CompositeItem-DOF0WKCw.js";import"./ToolbarRootContext-fahny_0S.js";import"./composite-Cl6RsgmQ.js";import"./svgIconContainer-DFIs2Voo.js";import"./PdfViewerSearchBar-B3RMfh5-.js";import"./chevron-up--ai6TliN.js";import"./chevron-down-Qwuzhzrm.js";import"./cross-B9FhxkxH.js";import"./PdfViewerSidebar-C6CIUrf3.js";import"./index-CTmfxuFD.js";import"./index-Bdl9M0YN.js";import"./index-ddE8E_A0.js";import"./PdfViewerToolbar-Os8J5Nx6.js";import"./Button-C_QuoIqW.js";import"./chevron-right-DtjmNc63.js";import"./Input-C8La3VvL.js";import"./search-QLAZUXpO.js";import"./spin-DtaDy7bx.js";import"./error-1eRd1AgG.js";import"./withOsdkMetrics-C-U8kpML.js";import"./makeExternalStore-D3WVl0jq.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
