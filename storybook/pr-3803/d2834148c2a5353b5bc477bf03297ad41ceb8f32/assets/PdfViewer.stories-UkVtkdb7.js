import{j as r,M as s}from"./iframe-DnZQIvTT.js";import{P as p}from"./pdf-viewer-Ctp4wI09.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BnsXWhJ0.js";import"./preload-helper-BkW8a5rl.js";import"./PdfRenderer-UeaK5Ck6.js";import"./index-9hlHlyou.js";import"./PdfViewer-RHBQTSDj.js";import"./PdfViewer.module.css-CbwvDaYo.js";import"./PdfViewerAnnotationLayer-CeDmFJcp.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Ba-pAUN1.js";import"./PdfViewerOutlineSidebar-DJbreQL1.js";import"./PdfViewerSidebarHeader-DV6ARNvL.js";import"./useBaseUiId-BiQqFJiH.js";import"./useControlled-lSDM3Zga.js";import"./CompositeRoot-DmmaeAnZ.js";import"./CompositeItem-5_WtziOg.js";import"./ToolbarRootContext-DeRNPR7X.js";import"./composite-B_yB_W3d.js";import"./svgIconContainer-yuQ64jxi.js";import"./PdfViewerSearchBar-gR2X3XOR.js";import"./chevron-up-Cunm1WRK.js";import"./chevron-down-VeqrXGGR.js";import"./cross-C0DMMgZH.js";import"./PdfViewerSidebar-DYO9l0m9.js";import"./index-D6YwWFy-.js";import"./index-Co5VwW1q.js";import"./index-CCOub406.js";import"./PdfViewerToolbar-BrplhKo4.js";import"./Button-nmd_W8Kk.js";import"./chevron-right-C8AigoYo.js";import"./Input-B-XWsA0h.js";import"./search-DkG_mcgd.js";import"./spin-Ccs_h70H.js";import"./error-BLztiVY7.js";import"./withOsdkMetrics-fofNv3K2.js";import"./makeExternalStore-CouSw7Ae.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
