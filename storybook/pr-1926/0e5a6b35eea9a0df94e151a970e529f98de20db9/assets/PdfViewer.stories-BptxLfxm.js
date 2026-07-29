import{j as r,M as s}from"./iframe-DfMJukgY.js";import{P as p}from"./pdf-viewer-DP9K9en1.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CXErIlhz.js";import"./preload-helper-VM-F0jx2.js";import"./PdfRenderer-C8TTYbel.js";import"./index-CPmt2jve.js";import"./PdfViewer-Jv8pHAYt.js";import"./PdfViewer.module.css-CJNaI_aZ.js";import"./PdfViewerAnnotationLayer-UyRbOSF6.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CbvhzHh_.js";import"./PdfViewerOutlineSidebar-BgMLx_xW.js";import"./PdfViewerSidebarHeader-D6SfMXJz.js";import"./useBaseUiId-DEFBImN0.js";import"./useControlled-BaQpmrJ7.js";import"./CompositeRoot-CPGsNQsz.js";import"./CompositeItem-UgjKpAcn.js";import"./ToolbarRootContext-DxF5vhJk.js";import"./composite-CO4J4kUw.js";import"./svgIconContainer-DOEgYA3V.js";import"./PdfViewerSearchBar-C-QfTa7z.js";import"./chevron-up-Bs3UrYgA.js";import"./chevron-down-aEfEfwVB.js";import"./cross-DYuJCEl9.js";import"./PdfViewerSidebar-Be6mZtHo.js";import"./index-CDG-_gWn.js";import"./index-D0ss7BNT.js";import"./index-CW41f0V0.js";import"./PdfViewerToolbar-Dz6pbPTc.js";import"./Button-BYYvi8LO.js";import"./chevron-right-DtSmqgTF.js";import"./Input-C8qN6Kyh.js";import"./search-sPR_XQ25.js";import"./spin-BS3zXDVW.js";import"./error-D29g4pKw.js";import"./withOsdkMetrics-D3FygStw.js";import"./makeExternalStore-BxrSdo9F.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
