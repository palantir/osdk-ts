import{j as r,M as s}from"./iframe-Bbl8xWS4.js";import{P as p}from"./pdf-viewer-DhcJ2RAY.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Bm3SbtnC.js";import"./preload-helper-BUAbRzmt.js";import"./PdfViewer-B-f29PqL.js";import"./index-BrhvBMro.js";import"./BasePdfViewer-DIfefPrN.js";import"./BasePdfViewer.module.css-CjKcF-_m.js";import"./PdfViewerAnnotationLayer-D6OnW2wQ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-c1Gu4Q90.js";import"./PdfViewerOutlineSidebar-C7pi4ZtU.js";import"./PdfViewerSidebarHeader-CL0bFgCf.js";import"./useBaseUiId-Cmt5VEHx.js";import"./useControlled-DGf-N-MW.js";import"./CompositeRoot-BV_6M09p.js";import"./CompositeItem-UpHYLeRj.js";import"./ToolbarRootContext-mlwQOMjb.js";import"./composite-BZ5wkolO.js";import"./svgIconContainer-C49n10_C.js";import"./PdfViewerSearchBar-BwE2ZBiT.js";import"./chevron-up-e2-zMua8.js";import"./chevron-down-CguzkHKU.js";import"./cross-D1K3qdEd.js";import"./PdfViewerSidebar-CqElXMb5.js";import"./index-Cg7IxkTK.js";import"./index-Dg_zHENz.js";import"./index-CHJ1j1l2.js";import"./PdfViewerToolbar-CpOeMo5I.js";import"./Button-vDgXwn6I.js";import"./chevron-right-BVE8DTUx.js";import"./Input-C7X_QVu0.js";import"./search-BoObENrO.js";import"./spin-Bui7sIYj.js";import"./error-BL4iX6t3.js";import"./withOsdkMetrics-D-pE8QrY.js";import"./makeExternalStore-k_EKqWBg.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
