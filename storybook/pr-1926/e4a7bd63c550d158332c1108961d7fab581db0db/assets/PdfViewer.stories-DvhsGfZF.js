import{j as r,M as s}from"./iframe-sCg-x-0e.js";import{P as p}from"./pdf-viewer-lWPHMAXv.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BwIaOSjw.js";import"./preload-helper-CrHR8OZb.js";import"./PdfRenderer-D-tssx_o.js";import"./index-BOZGu8jc.js";import"./PdfViewer-BoYbv-lw.js";import"./PdfViewer.module.css-QcQvZpSt.js";import"./PdfViewerAnnotationLayer-Dd-m3z4c.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-q6WRDGq9.js";import"./PdfViewerOutlineSidebar-fI9ciZBd.js";import"./PdfViewerSidebarHeader-IZlXbsDm.js";import"./useBaseUiId-4dAni9Iz.js";import"./useControlled-B79JWrmu.js";import"./CompositeRoot-BqIM3unF.js";import"./CompositeItem-Cf49LIHZ.js";import"./ToolbarRootContext-DaKAs0Iq.js";import"./composite-BVDa5-ly.js";import"./svgIconContainer-Bz9LWwHW.js";import"./PdfViewerSearchBar-iqbvS4cU.js";import"./chevron-up-DW-bEmcW.js";import"./chevron-down-BkzKMfVC.js";import"./cross-BJXO8uQi.js";import"./PdfViewerSidebar-QK-d9NGC.js";import"./index-CvyMTgef.js";import"./index-LiLFEgZ-.js";import"./index-CrWYFlhm.js";import"./PdfViewerToolbar-Dn9RbpPP.js";import"./Button-fnOjxPjt.js";import"./chevron-right-CPYjj4aO.js";import"./Input-tPBEPRbS.js";import"./search-BPEAhxRZ.js";import"./spin-m3OJfbCO.js";import"./error-CMgoEmBB.js";import"./withOsdkMetrics-CJrtQZxu.js";import"./makeExternalStore-BNXnsqiG.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
