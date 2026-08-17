import{j as r,M as s}from"./iframe-b0a69-Kg.js";import{P as p}from"./pdf-viewer-D-RHo9hr.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-qOHxwEZK.js";import"./preload-helper-DummAPw7.js";import"./PdfViewer-Dlzqr-Kk.js";import"./index-D4Xkm7FC.js";import"./BasePdfViewer-xQgHWNSn.js";import"./BasePdfViewer.module.css-CsqimWZi.js";import"./PdfViewerAnnotationLayer-GjeILZQH.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Bl8fNyoi.js";import"./PdfViewerOutlineSidebar-kQG0HO0W.js";import"./PdfViewerSidebarHeader-CsQxFGwd.js";import"./useBaseUiId-BAHSPach.js";import"./useControlled-DazDyppM.js";import"./CompositeRoot-DLWNhD8d.js";import"./CompositeItem-DAv1Ed90.js";import"./ToolbarRootContext-_XDLJscO.js";import"./composite-C-1iZs8x.js";import"./svgIconContainer-DV9o6T8Y.js";import"./PdfViewerSearchBar-BJAQY5_Q.js";import"./chevron-up-BHv05G7p.js";import"./chevron-down-uIlArscK.js";import"./cross-CVVAhtIH.js";import"./PdfViewerSidebar-CDljMV2W.js";import"./index-mlw8NCjc.js";import"./index-Dq9LK0gI.js";import"./index-BCGssQuO.js";import"./PdfViewerToolbar-BBmYJvCX.js";import"./Button-C9SSgyc6.js";import"./chevron-right-AOsITsRM.js";import"./Input-BBJnalD-.js";import"./search-D_cjyHC2.js";import"./spin-Dxyz59Yh.js";import"./error-pyjmpYRO.js";import"./withOsdkMetrics-Dy8efZZr.js";import"./makeExternalStore-3K6ZodGD.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
