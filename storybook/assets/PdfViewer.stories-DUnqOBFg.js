import{j as r,M as s}from"./iframe-BrGo9N9-.js";import{P as p}from"./pdf-viewer-B3AEmdKT.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BTQZ09X2.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfViewer-BtvkNhV_.js";import"./index-jSRXXJ9w.js";import"./BasePdfViewer-Buavm5Qs.js";import"./BasePdfViewer.module.css-COfaEWy8.js";import"./PdfViewerAnnotationLayer-CXQ8VQf4.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DTbCnxgL.js";import"./PdfViewerOutlineSidebar-YQdyK2p3.js";import"./PdfViewerSidebarHeader-DFeVa7jx.js";import"./useBaseUiId-DRzpYMsL.js";import"./useControlled-BYX3tO_t.js";import"./CompositeRoot-BTLRWS4V.js";import"./CompositeItem-CK4axcp7.js";import"./ToolbarRootContext-DalYOUw7.js";import"./composite-BaZ5NPlu.js";import"./svgIconContainer-C2wfJlD0.js";import"./PdfViewerSearchBar-Dy8aIUmi.js";import"./chevron-up-DekI24XH.js";import"./chevron-down-oLGHrpyq.js";import"./cross-CqGcj1UP.js";import"./PdfViewerSidebar-GXIx2q3I.js";import"./index-DtdHIG9x.js";import"./index-DDVUHOhP.js";import"./index-0jm5AiV8.js";import"./PdfViewerToolbar-CPgAUQWv.js";import"./Button-lkehQ9sU.js";import"./chevron-right-B_zAFGxR.js";import"./Input-DwliOy2I.js";import"./search-BU8Oy9oR.js";import"./spin-DNroVb23.js";import"./error-DfpVQDIj.js";import"./withOsdkMetrics-CWKbU0FT.js";import"./makeExternalStore-CajjYTod.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
