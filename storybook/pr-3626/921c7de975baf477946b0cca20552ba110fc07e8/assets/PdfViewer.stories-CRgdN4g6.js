import{j as r,M as s}from"./iframe-B8vqzFe3.js";import{P as p}from"./pdf-viewer-C6gpP-Uq.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BpeNXrD4.js";import"./preload-helper-C5X3SMHc.js";import"./PdfRenderer-Dxj1JGh6.js";import"./index-DHjIuCHt.js";import"./PdfViewer--IsIpFEn.js";import"./PdfViewer.module.css-KCrp0cCx.js";import"./PdfViewerAnnotationLayer-B0PiL3sB.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DEwxkiOF.js";import"./PdfViewerOutlineSidebar-CF6ClWss.js";import"./PdfViewerSidebarHeader-BssMIxPs.js";import"./useBaseUiId-JigyG1hd.js";import"./useControlled-CMBNMJSH.js";import"./CompositeRoot-DuoAQE0K.js";import"./CompositeItem-Dx3tXM3q.js";import"./ToolbarRootContext-GlsRnXN1.js";import"./composite-Be24EvrE.js";import"./svgIconContainer-Bxaaw6x9.js";import"./PdfViewerSearchBar-DD-HQo_z.js";import"./chevron-up-Bj4YYh5t.js";import"./chevron-down-CD75IzLu.js";import"./cross-BOWYnPPb.js";import"./PdfViewerSidebar-CApuM-Tu.js";import"./index-CWJt-pi1.js";import"./index-BGQwUmYq.js";import"./index-BTjydR7y.js";import"./PdfViewerToolbar-rXrLwGS0.js";import"./Button-D6b8X_gy.js";import"./chevron-right-GOFxu0ep.js";import"./Input-CzhCo-O4.js";import"./search-BMkHwDPb.js";import"./spin-B66qKO79.js";import"./error-CQ76ig0F.js";import"./withOsdkMetrics-BQw1oUhi.js";import"./makeExternalStore-qqTlBNVF.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
