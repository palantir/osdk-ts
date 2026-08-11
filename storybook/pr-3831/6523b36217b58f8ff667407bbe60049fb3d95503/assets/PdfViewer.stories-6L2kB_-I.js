import{j as r,M as s}from"./iframe-B34J-v6h.js";import{P as p}from"./pdf-viewer-CXPRz4HB.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C0A7j5Y1.js";import"./preload-helper-DktNXW3g.js";import"./PdfRenderer-CD_mlTWG.js";import"./index-BszbKXdM.js";import"./PdfViewer-tVv7pw6p.js";import"./PdfViewer.module.css-CtZS26MZ.js";import"./PdfViewerAnnotationLayer-DWhe9LS8.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-tk1g2QQy.js";import"./PdfViewerOutlineSidebar-CA-Mw0h1.js";import"./PdfViewerSidebarHeader-DuqBNyeM.js";import"./useBaseUiId-Do4jndxX.js";import"./useControlled-Bg6sLlzu.js";import"./CompositeRoot-C4RhiuAq.js";import"./CompositeItem-ILlt-DFI.js";import"./ToolbarRootContext-CsJNA5yH.js";import"./composite-DxIIqapU.js";import"./svgIconContainer-DmCHV_gw.js";import"./PdfViewerSearchBar-nprGfOJE.js";import"./chevron-up-DnlFeqGY.js";import"./chevron-down-ChHe2eij.js";import"./cross-pUUxARqk.js";import"./PdfViewerSidebar-DdZGSqFA.js";import"./index-DFEBs7x6.js";import"./index-DAodypt3.js";import"./index-BqaRlPNX.js";import"./PdfViewerToolbar-CA5cX-k1.js";import"./Button-D_70nOKH.js";import"./chevron-right-Dkts5-JN.js";import"./Input-C4Ex_DFO.js";import"./search-CeKblNnA.js";import"./spin-Bcbh38ft.js";import"./error-DhuwnDiJ.js";import"./withOsdkMetrics-CIjnlwhJ.js";import"./makeExternalStore-DU96TFYm.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
