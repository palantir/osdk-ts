import{j as r,M as s}from"./iframe-Li1-lWs7.js";import{P as p}from"./pdf-viewer-GCZb3tNx.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-0-fyhidz.js";import"./preload-helper-CGmo2FMo.js";import"./PdfViewer-CZ5tvSJT.js";import"./index-DoD8b1_q.js";import"./BasePdfViewer-B9kKqZCe.js";import"./BasePdfViewer.module.css-tH_x7hYp.js";import"./PdfViewerAnnotationLayer-sXEd5cTM.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DWN_GNWV.js";import"./PdfViewerOutlineSidebar-BSvAo4Kl.js";import"./PdfViewerSidebarHeader-CqwO2Wd4.js";import"./useBaseUiId-Br9Ryls1.js";import"./useControlled-CCuESsXx.js";import"./CompositeRoot-DqHEZTkU.js";import"./CompositeItem-BwUkyu_e.js";import"./ToolbarRootContext-DsnXZPtT.js";import"./composite-JV6W8eaJ.js";import"./svgIconContainer-CVRufNNl.js";import"./PdfViewerSearchBar-i-1365Xl.js";import"./chevron-up-qptoibBH.js";import"./chevron-down-BDBeFFgf.js";import"./cross-DMmA-RfG.js";import"./PdfViewerSidebar-DA_r8z60.js";import"./index-BjEz7scL.js";import"./index-B_W4EPm5.js";import"./index-7QzYiAri.js";import"./PdfViewerToolbar-VzJWlEcg.js";import"./Button-8SX-EUR0.js";import"./chevron-right-7_An89lG.js";import"./Input-DM_Alj7t.js";import"./search-DMt9s_ci.js";import"./spin-BTb1QA4p.js";import"./error-BiqjEWby.js";import"./withOsdkMetrics-_pRQ_AuF.js";import"./makeExternalStore-CWQvlKnh.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
