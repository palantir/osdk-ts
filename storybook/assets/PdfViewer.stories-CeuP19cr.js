import{j as r,M as s}from"./iframe-DytbHhki.js";import{P as p}from"./pdf-viewer-D6JgeKw8.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CJRmHPDV.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfRenderer-UMJPJ5aZ.js";import"./index-D_gO6T8d.js";import"./PdfViewer-CYTiiy4q.js";import"./PdfViewer.module.css-XTL9IALk.js";import"./PdfViewerAnnotationLayer-BBcMCoZc.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CPak7u38.js";import"./PdfViewerOutlineSidebar-pbyHGWwY.js";import"./PdfViewerSidebarHeader-D70V7A0Q.js";import"./useBaseUiId-BXp8gPAV.js";import"./useControlled-DqobAIw0.js";import"./CompositeRoot-Cy96BYge.js";import"./CompositeItem-BplIbDpd.js";import"./ToolbarRootContext-DzqS5waG.js";import"./composite-CALz1dJo.js";import"./svgIconContainer-CuByUzhw.js";import"./PdfViewerSearchBar-qOPoZ-0M.js";import"./chevron-up-Btl0YWlD.js";import"./chevron-down-CYf23tnh.js";import"./cross-i6RcU6jV.js";import"./PdfViewerSidebar-DoixYwuY.js";import"./index-DnqlLGeC.js";import"./index-BJ7QtMHN.js";import"./index-CqMxAMOx.js";import"./PdfViewerToolbar-Bfkaoojp.js";import"./Button-B2vIayxf.js";import"./chevron-right-5ltYwdAi.js";import"./Input-Cje8oXaD.js";import"./search-B3ds4xzI.js";import"./spin-8Zz1sg6A.js";import"./error-BXAWhyme.js";import"./withOsdkMetrics-BUpd5crj.js";import"./makeExternalStore-CRhUhF3-.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
