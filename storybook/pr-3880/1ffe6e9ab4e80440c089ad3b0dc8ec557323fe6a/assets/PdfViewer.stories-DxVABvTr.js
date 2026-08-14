import{j as r,M as s}from"./iframe-BHS5QR3O.js";import{P as p}from"./pdf-viewer-Y4nCghX9.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D522jcEI.js";import"./preload-helper-B6H2Wl85.js";import"./PdfViewer-2Uy_wbl-.js";import"./index-CH7AKy7m.js";import"./BasePdfViewer-Dd0Gu0Wq.js";import"./BasePdfViewer.module.css-CXDbNawE.js";import"./PdfViewerAnnotationLayer-DhXNQ1Qz.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CZ71zfm3.js";import"./PdfViewerOutlineSidebar-BppbJh1k.js";import"./PdfViewerSidebarHeader-Cq8gPQaT.js";import"./useBaseUiId-CEIcjkwP.js";import"./useControlled-C-rES6CU.js";import"./CompositeRoot-VNFup2cd.js";import"./CompositeItem-Bo2SIyrT.js";import"./ToolbarRootContext-lCFihwdU.js";import"./composite-BnqLBLhy.js";import"./svgIconContainer-ByRaFEc-.js";import"./PdfViewerSearchBar-DFjvZMtC.js";import"./chevron-up-CSfSjfCt.js";import"./chevron-down-pY5pxMvg.js";import"./cross-Mi6Tu3Er.js";import"./PdfViewerSidebar-Bm0w77l3.js";import"./index-AnCCDamT.js";import"./index-BdTUVSMf.js";import"./index-DBgZeADq.js";import"./PdfViewerToolbar-DYQoP-x8.js";import"./Button-B_4Pa7GX.js";import"./chevron-right-CSDio-7U.js";import"./Input-Bi2WpDJH.js";import"./search-Cocmm-uk.js";import"./spin-DE8W_m4w.js";import"./error-BGQaSzzV.js";import"./withOsdkMetrics-BuisztQB.js";import"./makeExternalStore-ByWm5-Ku.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
