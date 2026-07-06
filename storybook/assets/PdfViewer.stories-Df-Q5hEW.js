import{j as r,M as s}from"./iframe-pqikbp1T.js";import{P as p}from"./pdf-viewer-B4RQ5097.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BDRZ2dLH.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfRenderer-aZWMxwr_.js";import"./index-DJV7MrxA.js";import"./PdfViewer-BPv_DXiG.js";import"./PdfViewer.module.css-DN1m4qYP.js";import"./PdfViewerAnnotationLayer-C8-jN8pi.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C1B_6viQ.js";import"./PdfViewerOutlineSidebar-d7_fnomQ.js";import"./PdfViewerSidebarHeader-B0ogjzSc.js";import"./useBaseUiId-DePnZrOw.js";import"./useControlled-CFPJHFiX.js";import"./CompositeRoot-DC5NwLi-.js";import"./CompositeItem-C1TBmO7C.js";import"./ToolbarRootContext-BMoftUML.js";import"./composite-D9kjIxpw.js";import"./svgIconContainer-fV5dpGZ7.js";import"./PdfViewerSearchBar-C6FYp5bF.js";import"./chevron-up-ClqO1LxK.js";import"./chevron-down-CK5zrnWf.js";import"./cross-B8qY8_DU.js";import"./PdfViewerSidebar-CcizP-6-.js";import"./index-Dkfsiw2Q.js";import"./index-Bdf0f9qr.js";import"./index-C4xwSSFJ.js";import"./PdfViewerToolbar-C6zal0g0.js";import"./Button-V_gbWJyj.js";import"./chevron-right-z_jtm4bc.js";import"./Input-BDoTBJAC.js";import"./search-BwR87sZg.js";import"./spin-zuoRf4al.js";import"./error-CURsrQzW.js";import"./withOsdkMetrics-NTh6_Y2c.js";import"./makeExternalStore-DbUJkcpl.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
