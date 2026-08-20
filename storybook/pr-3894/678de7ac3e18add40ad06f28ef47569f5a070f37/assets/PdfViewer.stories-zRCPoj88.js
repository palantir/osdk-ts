import{j as r,M as s}from"./iframe-D5rHaRYI.js";import{P as p}from"./pdf-viewer-Bw-yk2Ho.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DcyMHs-0.js";import"./preload-helper-gGgdcVSI.js";import"./PdfViewer-CFJEWILb.js";import"./index-ue2T5dve.js";import"./BasePdfViewer-KizVzknY.js";import"./BasePdfViewer.module.css-CmUz4503.js";import"./PdfViewerAnnotationLayer-CsZfvrdt.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cs2o6n44.js";import"./PdfViewerOutlineSidebar-CYIWMmJI.js";import"./PdfViewerSidebarHeader-B0BPdOz0.js";import"./useBaseUiId-BazUPCkp.js";import"./useControlled-B8vB9SF0.js";import"./CompositeRoot-BM45_GyR.js";import"./CompositeItem-RLNz4WVT.js";import"./ToolbarRootContext-D4BSaJiN.js";import"./composite-D7Nu2T_E.js";import"./svgIconContainer-BdHsWNaY.js";import"./PdfViewerSearchBar-BS-1HNCa.js";import"./chevron-up-CNifci4R.js";import"./chevron-down-k1GVYLCT.js";import"./cross-tQgaE3wF.js";import"./PdfViewerSidebar-CJdMhoeR.js";import"./index-CvK2Swrc.js";import"./index-AIpwznod.js";import"./index-DfxgWUtW.js";import"./PdfViewerToolbar-HTT7eDuC.js";import"./Button-CIrXEDiW.js";import"./chevron-right-BqlAo4Cz.js";import"./Input-Dlx4X-uM.js";import"./search-BwM1R0ZS.js";import"./spin-Cf9G18Es.js";import"./error-CSPAQ9Pw.js";import"./withOsdkMetrics-Dw564kRS.js";import"./makeExternalStore-D6mpUf8a.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
