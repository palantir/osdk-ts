import{j as r,M as s}from"./iframe-BIOsg0yg.js";import{P as p}from"./pdf-viewer-x4_4uOk6.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-HzILFmM_.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfRenderer-BG8cHCYo.js";import"./index-CXxxffKM.js";import"./PdfViewer-CCRdFg_d.js";import"./PdfViewer.module.css-LITSIGsu.js";import"./PdfViewerAnnotationLayer-Dmitv6s8.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B3fcJFJi.js";import"./PdfViewerOutlineSidebar-CtqJlONU.js";import"./PdfViewerSidebarHeader-Bz6ZrdEJ.js";import"./useBaseUiId-CI5brcwC.js";import"./useControlled-Ceujs-Sz.js";import"./CompositeRoot-CAbwSBc9.js";import"./CompositeItem-Bmfg2MMt.js";import"./ToolbarRootContext-flI5qLGO.js";import"./composite-Bzv73STo.js";import"./svgIconContainer-BkHCNiNP.js";import"./PdfViewerSearchBar-Bda-x-O9.js";import"./chevron-up-BFS8Rlg1.js";import"./chevron-down-CW-QNXU8.js";import"./cross-DXVZ1txE.js";import"./PdfViewerSidebar-Br3khfro.js";import"./index-CH801GQX.js";import"./index-CTJttYim.js";import"./index-CicBu4pP.js";import"./PdfViewerToolbar-CRnktrgi.js";import"./Button-CFF0wQHv.js";import"./chevron-right-BfA1gbN4.js";import"./Input-C75g0i0Z.js";import"./search-S6CNfqFw.js";import"./spin-JLQua26g.js";import"./error-D8basjnA.js";import"./withOsdkMetrics-l02yUZn_.js";import"./makeExternalStore-2uOet4Ks.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
