import{j as r,M as s}from"./iframe-Ds6ci5f_.js";import{P as p}from"./pdf-viewer-BT9wdpsF.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-COYcDsxQ.js";import"./preload-helper-BmgiVgXk.js";import"./PdfRenderer-CcFJXoaR.js";import"./index-BF2buGCB.js";import"./PdfViewer-DN4MowuZ.js";import"./PdfViewer.module.css-DZj4aaSx.js";import"./PdfViewerAnnotationLayer-NlXZ_Atn.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CHPc_cEe.js";import"./PdfViewerOutlineSidebar-DLclIHzx.js";import"./PdfViewerSidebarHeader-C8HMGADw.js";import"./useBaseUiId-D5z5kVld.js";import"./useControlled-aWNAMtDj.js";import"./CompositeRoot-BbPLzXdS.js";import"./CompositeItem-CPz6r1FZ.js";import"./ToolbarRootContext-DxXa8C9m.js";import"./composite-CfTm1kpt.js";import"./svgIconContainer-Dc9SJ_SV.js";import"./PdfViewerSearchBar-14Haz7Iy.js";import"./chevron-up-qw5A3HNw.js";import"./chevron-down-CpZWm6E5.js";import"./cross-T2wtcCzG.js";import"./PdfViewerSidebar-bKMXIBpI.js";import"./index-DZ4gcSou.js";import"./index-C7rj8PmX.js";import"./index-BF1y1McZ.js";import"./PdfViewerToolbar-D-bYRCFO.js";import"./Button-BBlEXWMP.js";import"./chevron-right-DzreYiKy.js";import"./Input-C_GkCnWt.js";import"./search-VNnWqJuM.js";import"./spin-cIYf4OZ0.js";import"./error-B-cgWIQQ.js";import"./withOsdkMetrics-DRsF52NJ.js";import"./makeExternalStore-nT7iX2bb.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
