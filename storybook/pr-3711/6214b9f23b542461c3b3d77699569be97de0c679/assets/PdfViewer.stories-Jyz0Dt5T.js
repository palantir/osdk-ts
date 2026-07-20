import{j as r,M as s}from"./iframe-_wCc84hx.js";import{P as p}from"./pdf-viewer-BYI_nBjs.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Es7gpnRW.js";import"./preload-helper-Dm5WLx_b.js";import"./PdfRenderer-4Y7_TN4z.js";import"./index-DKGQe5X-.js";import"./PdfViewer-BzYZaAvX.js";import"./PdfViewer.module.css-e-TC4WXY.js";import"./PdfViewerAnnotationLayer-CjSeRNNy.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-7JyZEpVO.js";import"./PdfViewerOutlineSidebar-geYg2oiN.js";import"./PdfViewerSidebarHeader-BQ4oO6b0.js";import"./useBaseUiId-B9evOHrm.js";import"./useControlled-CJeKOPI7.js";import"./CompositeRoot-wbfmSxt9.js";import"./CompositeItem-BQxw9byX.js";import"./ToolbarRootContext-C3MJIkPW.js";import"./composite-DMhUlR38.js";import"./svgIconContainer-B_16lQ24.js";import"./PdfViewerSearchBar-DJg976mX.js";import"./chevron-up-k8BxRCKx.js";import"./chevron-down-diHGh1BL.js";import"./cross-C35-7HOl.js";import"./PdfViewerSidebar-CFYjDIrc.js";import"./index-CpLBa3i0.js";import"./index-F8Pq7Dsa.js";import"./index-CCKK8zB9.js";import"./PdfViewerToolbar-Byih2ni7.js";import"./Button-DwFfVQT6.js";import"./chevron-right-BFszCWtd.js";import"./Input-GI5hTKCN.js";import"./search-JAM6YWr2.js";import"./spin-BERB2LCR.js";import"./error-BTPve98s.js";import"./withOsdkMetrics-CHeDrLzK.js";import"./makeExternalStore-DW-4lsmm.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
