import{j as r,M as s}from"./iframe-DmXP0LlD.js";import{P as p}from"./pdf-viewer-DC22XKox.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-GHfoN_oG.js";import"./preload-helper-Jf9pG1wK.js";import"./PdfViewer-6uqcdnIZ.js";import"./index-CZJiQUDL.js";import"./BasePdfViewer-DbLt90PO.js";import"./BasePdfViewer.module.css-BQ-ZlLKh.js";import"./PdfViewerAnnotationLayer-C699WGIj.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DEHEu4nQ.js";import"./PdfViewerOutlineSidebar-vO3YXyK9.js";import"./PdfViewerSidebarHeader-DD7_I646.js";import"./useBaseUiId-E5ZPLTjy.js";import"./useControlled-DVwcpHQh.js";import"./CompositeRoot-DAAmPhli.js";import"./CompositeItem-BpyDnYwk.js";import"./ToolbarRootContext-CexR2eUf.js";import"./composite-DJUOEQiI.js";import"./svgIconContainer-B-RvFu1q.js";import"./PdfViewerSearchBar-BHuh8JIS.js";import"./chevron-up-DZmDUjPI.js";import"./chevron-down-IhoHRVVT.js";import"./cross-BrUjdQ5Z.js";import"./PdfViewerSidebar-LBT96JZk.js";import"./index-kI9ab8J3.js";import"./index-DOc2Q07X.js";import"./index-CLUklD_q.js";import"./PdfViewerToolbar-BVj1lbIm.js";import"./Button-CsgASgcA.js";import"./chevron-right-D_GB0JO9.js";import"./Input-nRL7PDkG.js";import"./search-Cd_hr6P9.js";import"./spin-0nbqDca8.js";import"./error-BhRfzKmP.js";import"./withOsdkMetrics-ChE2bbpo.js";import"./makeExternalStore-SUGo_pfp.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
