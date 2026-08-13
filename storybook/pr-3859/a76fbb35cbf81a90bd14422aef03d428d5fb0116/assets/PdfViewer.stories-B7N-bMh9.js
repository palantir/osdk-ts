import{j as r,M as s}from"./iframe-DOCnG8_R.js";import{P as p}from"./pdf-viewer-6Krn30eI.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C96GNUFp.js";import"./preload-helper-CHeAXlhd.js";import"./PdfRenderer-CQBV-mtO.js";import"./index-B9FSm492.js";import"./PdfViewer-eJbv_JvB.js";import"./PdfViewer.module.css-DYPXKQ8t.js";import"./PdfViewerAnnotationLayer-BWN8Y0Sz.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C7l7U3IS.js";import"./PdfViewerOutlineSidebar-CdUsHmPa.js";import"./PdfViewerSidebarHeader-BWGI36pN.js";import"./useBaseUiId-BIuK8Cls.js";import"./useControlled-XIrZJlZr.js";import"./CompositeRoot-BDQmxxFh.js";import"./CompositeItem-B1uodXbS.js";import"./ToolbarRootContext-CTPtaqaC.js";import"./composite-1CbyJRr9.js";import"./svgIconContainer-C_xgL_so.js";import"./PdfViewerSearchBar-0j47lBYJ.js";import"./chevron-up-b1NRx_2a.js";import"./chevron-down-BZCx1w1J.js";import"./cross-DD4lLZUH.js";import"./PdfViewerSidebar-CqiCdAwx.js";import"./index-CTc_ufVR.js";import"./index-BVlFCpMD.js";import"./index-BPb9hoVr.js";import"./PdfViewerToolbar-Bw-6m15d.js";import"./Button-DdV0L53R.js";import"./chevron-right-CSDrDUyW.js";import"./Input-mExbb7nh.js";import"./search-CAkVi9HF.js";import"./spin-B-0L5oTb.js";import"./error-DySJTj9B.js";import"./withOsdkMetrics-D69gnpAo.js";import"./makeExternalStore-DIwWA4d5.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
