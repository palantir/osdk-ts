import{j as r,M as s}from"./iframe-ZAeU3zkK.js";import{P as p}from"./pdf-viewer-BevEWRLK.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DD4IJii2.js";import"./preload-helper-DFsW7uwK.js";import"./PdfRenderer-DClna5lP.js";import"./index-C9bCg_D0.js";import"./PdfViewer-DdtCyS1O.js";import"./PdfViewer.module.css-C-DIOZqi.js";import"./PdfViewerAnnotationLayer-B-QszfiI.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DHvvCo47.js";import"./PdfViewerOutlineSidebar-CPx7VAau.js";import"./PdfViewerSidebarHeader-BeGODADK.js";import"./useBaseUiId-Cr86WIIa.js";import"./useControlled-CsDf-xSS.js";import"./CompositeRoot-BUohKX1-.js";import"./CompositeItem-B-J0xggi.js";import"./ToolbarRootContext-6UgAqfrb.js";import"./composite-DFfGy7b5.js";import"./svgIconContainer-kZIk52CD.js";import"./PdfViewerSearchBar-Cb9B-8_W.js";import"./chevron-up-BSjb2Fp3.js";import"./chevron-down-D_k3Y51h.js";import"./cross-ItoF_QFP.js";import"./PdfViewerSidebar-Do27iORv.js";import"./index-CjDYZjtC.js";import"./index-BrY0sG19.js";import"./index-BSgExDm2.js";import"./PdfViewerToolbar-BcAVi8V-.js";import"./Button-btiulsx-.js";import"./chevron-right-zo2VJ_Va.js";import"./Input-DZJFdIf0.js";import"./search-DGJLlzUF.js";import"./spin-BAxt5TWO.js";import"./error-MpDB7OgY.js";import"./withOsdkMetrics-D_HYVVwC.js";import"./makeExternalStore-CLF-6_HY.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
