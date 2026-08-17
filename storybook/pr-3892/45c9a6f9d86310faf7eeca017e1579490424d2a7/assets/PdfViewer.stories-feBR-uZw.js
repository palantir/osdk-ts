import{j as r,M as s}from"./iframe-BrG6cQfS.js";import{P as p}from"./pdf-viewer-COVNxR7D.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DQAHdkGw.js";import"./preload-helper-Bixkw_YY.js";import"./PdfViewer-CUyT01Bm.js";import"./index-BEzPF5rE.js";import"./BasePdfViewer-6TvL4-vx.js";import"./BasePdfViewer.module.css-BBik8Uxj.js";import"./PdfViewerAnnotationLayer-DEUmIfDf.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CClxVy51.js";import"./PdfViewerOutlineSidebar-C10cbCvO.js";import"./PdfViewerSidebarHeader-Ddj7yPoo.js";import"./useBaseUiId-DamEe__I.js";import"./useControlled-CblOQAp9.js";import"./CompositeRoot-D2qhxV3T.js";import"./CompositeItem-Dezopk9M.js";import"./ToolbarRootContext-C-eO9sv2.js";import"./composite-DHs3_um3.js";import"./svgIconContainer-c7VzC2a1.js";import"./PdfViewerSearchBar-BYBCY2Iu.js";import"./chevron-up-B0HIw93t.js";import"./chevron-down-B0I-pL1F.js";import"./cross-DGQ_41Ww.js";import"./PdfViewerSidebar-CwSdMWPg.js";import"./index-B-kArG0q.js";import"./index-R1lV5gJE.js";import"./index-GtEOCerY.js";import"./PdfViewerToolbar-rm2X-nMV.js";import"./Button-DICz1J-P.js";import"./chevron-right-DAFWGF6g.js";import"./Input-Dpso9xg2.js";import"./search-jgXrXlZs.js";import"./spin-egny2WGL.js";import"./error-DOpFGD8C.js";import"./withOsdkMetrics-Dsha6ge2.js";import"./makeExternalStore-DqEFEqtD.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
