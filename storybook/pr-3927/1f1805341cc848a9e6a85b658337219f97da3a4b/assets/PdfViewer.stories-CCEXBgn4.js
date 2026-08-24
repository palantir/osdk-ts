import{j as r,M as s}from"./iframe-BIgcXSDZ.js";import{P as p}from"./pdf-viewer-UyY4hgHz.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-09P1qMkZ.js";import"./preload-helper-I7b_Ch73.js";import"./PdfViewer-_QMDaitH.js";import"./index-DM8zfWsc.js";import"./BasePdfViewer-B0MFhITC.js";import"./BasePdfViewer.module.css-D0hnfccN.js";import"./PdfViewerAnnotationLayer-DEdEq6Vh.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CZ8HEVYK.js";import"./PdfViewerOutlineSidebar-DHbLjRrX.js";import"./PdfViewerSidebarHeader-CObz9KQP.js";import"./useBaseUiId-DcQenqe4.js";import"./useControlled-BZIw4uYt.js";import"./CompositeRoot-Bj0iKcLp.js";import"./CompositeItem-AZoCKB1T.js";import"./ToolbarRootContext-DU0Y7qe6.js";import"./composite-3NX-rf4m.js";import"./svgIconContainer-CenQjbw3.js";import"./PdfViewerSearchBar-ylqPxHUA.js";import"./chevron-up-tnCm_ZWM.js";import"./chevron-down-DaVoXduB.js";import"./cross-2eC_maeE.js";import"./PdfViewerSidebar-B8c1YIXy.js";import"./index-Co6Wvvdj.js";import"./index-CQ7oQ3AC.js";import"./index-CiZKwyh5.js";import"./PdfViewerToolbar-B3U-S6O3.js";import"./Button-DFsV6Wzt.js";import"./chevron-right-CJmLykjl.js";import"./Input-eEwOcgZF.js";import"./search-BW9tAKbE.js";import"./spin-D33SR-rP.js";import"./error-DVtZos_5.js";import"./withOsdkMetrics-CSD8F9fY.js";import"./makeExternalStore-DIX60yxh.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
