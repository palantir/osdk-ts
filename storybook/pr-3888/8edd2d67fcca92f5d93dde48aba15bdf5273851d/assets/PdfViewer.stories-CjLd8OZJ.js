import{j as r,M as s}from"./iframe-DQJqbOkg.js";import{P as p}from"./pdf-viewer-CulOxVlu.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-9eHxtw8V.js";import"./preload-helper-Bx382jd8.js";import"./PdfViewer-CGTzqFZG.js";import"./index-DDju5qND.js";import"./BasePdfViewer-mOzGiT2S.js";import"./BasePdfViewer.module.css-DD2QVa72.js";import"./PdfViewerAnnotationLayer-C2YYsvhA.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BrKRHS-V.js";import"./PdfViewerOutlineSidebar-xJtvs3V4.js";import"./PdfViewerSidebarHeader-D1tRLh_F.js";import"./useBaseUiId-Cd3DALKZ.js";import"./useControlled-B7roseIi.js";import"./CompositeRoot-BY71r-HG.js";import"./CompositeItem-DiI8zPAV.js";import"./ToolbarRootContext-QT_ZGINr.js";import"./composite-DJx5EpfC.js";import"./svgIconContainer-Dh-If8bk.js";import"./PdfViewerSearchBar-CM6rOo8j.js";import"./chevron-up-ea-uN3q_.js";import"./chevron-down-B4870N35.js";import"./cross-CBKiDiFM.js";import"./PdfViewerSidebar-z3UclpcZ.js";import"./index-BRXV0LIo.js";import"./index-DcZTfGla.js";import"./index-BykRpjW_.js";import"./PdfViewerToolbar-5mKKcVUD.js";import"./Button-BsBGFSm4.js";import"./chevron-right-CD4lk5xa.js";import"./Input-DfLnd1PA.js";import"./search-BNWaEN5a.js";import"./spin-CDXpgNeR.js";import"./error-BPF4Md4s.js";import"./withOsdkMetrics-q_Jd76KJ.js";import"./makeExternalStore-mpHw7kxu.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
