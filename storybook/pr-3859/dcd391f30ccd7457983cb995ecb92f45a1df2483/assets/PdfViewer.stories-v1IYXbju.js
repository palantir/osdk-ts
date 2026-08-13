import{j as r,M as s}from"./iframe-Brg_cLQb.js";import{P as p}from"./pdf-viewer-DNLz8LB2.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BJwZyvnA.js";import"./preload-helper-Y5XS6iK1.js";import"./PdfRenderer-Cv4Aq3Pc.js";import"./index-CrF7Hfnz.js";import"./PdfViewer-C2g6rkyK.js";import"./PdfViewer.module.css-BRYIOCBm.js";import"./PdfViewerAnnotationLayer-Dr_7mZTt.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CyNsvRR5.js";import"./PdfViewerOutlineSidebar-jN3P95N5.js";import"./PdfViewerSidebarHeader-C_bZm-R1.js";import"./useBaseUiId-DK5umTF8.js";import"./useControlled-CT2yj4iv.js";import"./CompositeRoot-Bf2d_3AL.js";import"./CompositeItem-0SA-C97C.js";import"./ToolbarRootContext-DJMC0sxm.js";import"./composite-DXwrVJ8Z.js";import"./svgIconContainer-BRGYtCeZ.js";import"./PdfViewerSearchBar-CUW2cZ66.js";import"./chevron-up-DTb8mpKA.js";import"./chevron-down-BdWX5g2Q.js";import"./cross-BM6OYU6g.js";import"./PdfViewerSidebar-BrTRyu3G.js";import"./index-BAbnckoF.js";import"./index-C82d9Hjp.js";import"./index-DAYKTTDO.js";import"./PdfViewerToolbar-BwKyIoI6.js";import"./Button-c0xcWgk4.js";import"./chevron-right-Bs3Ug_rm.js";import"./Input-an-oiaSC.js";import"./search-C4E6Jgg1.js";import"./spin-D7ovp-Jr.js";import"./error-DhNgpSfu.js";import"./withOsdkMetrics-p9hMVxev.js";import"./makeExternalStore-BTtAbm94.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
