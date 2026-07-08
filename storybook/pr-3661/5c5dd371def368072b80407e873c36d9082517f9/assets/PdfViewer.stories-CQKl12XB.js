import{j as r,M as s}from"./iframe-B8pB1bJY.js";import{P as p}from"./pdf-viewer-DcAtOn0m.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Cn-ztICm.js";import"./preload-helper-DXZ8dl6a.js";import"./PdfRenderer-Byb2DCio.js";import"./index-Cct9Hzyk.js";import"./PdfViewer-Dnk8PAME.js";import"./PdfViewer.module.css-l-OorVV6.js";import"./PdfViewerAnnotationLayer-C0o03h-k.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-b9vfWuwu.js";import"./PdfViewerOutlineSidebar-Bjd_jkfK.js";import"./PdfViewerSidebarHeader-BLshTjgh.js";import"./useBaseUiId-hbqorb2C.js";import"./useControlled-DrYY3vU9.js";import"./CompositeRoot-CUBpsLPS.js";import"./CompositeItem-BYF7NSQK.js";import"./ToolbarRootContext-BRiMAfYn.js";import"./composite-B3ZXUS7R.js";import"./svgIconContainer-CoYMcxhp.js";import"./PdfViewerSearchBar-D_kD0Ln5.js";import"./chevron-up-D7UP1diI.js";import"./chevron-down-BBglpfYU.js";import"./cross-DT9_3V5M.js";import"./PdfViewerSidebar-CSPeAKyJ.js";import"./index-CTRDrVhu.js";import"./index-BWu2MeTs.js";import"./index-Dr9KdU4I.js";import"./PdfViewerToolbar-CUYTAzir.js";import"./Button-GtjGt5F3.js";import"./chevron-right-C84LJkF4.js";import"./Input-mD30rmJY.js";import"./search-BSMZLluX.js";import"./spin-D1S6LRKe.js";import"./error-DhkniUj3.js";import"./withOsdkMetrics-CnndoLRa.js";import"./makeExternalStore-DL_nt-sT.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
