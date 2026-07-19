import{j as r,M as s}from"./iframe-BWi3HNRH.js";import{P as p}from"./pdf-viewer-DpC0cJKu.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DF831l7i.js";import"./preload-helper-D2GZnDpI.js";import"./PdfRenderer-D_Nw86qE.js";import"./index--rMqNL7Q.js";import"./PdfViewer-ezEuTQe9.js";import"./PdfViewer.module.css-QywFuUhC.js";import"./PdfViewerAnnotationLayer-DSb157Rv.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-UMCQvc8E.js";import"./PdfViewerOutlineSidebar-BpKnKyJT.js";import"./PdfViewerSidebarHeader-WECyQYzw.js";import"./useBaseUiId-P9QQG2vk.js";import"./useControlled-D21_3aQd.js";import"./CompositeRoot-D1h6ER_a.js";import"./CompositeItem-BjtBCjU9.js";import"./ToolbarRootContext-2-ULyK5I.js";import"./composite-Wj_n_5Bo.js";import"./svgIconContainer-cZVqqZMn.js";import"./PdfViewerSearchBar-ntk6CnM-.js";import"./chevron-up-DbhoRweZ.js";import"./chevron-down-Bu9pl3xo.js";import"./cross-DwoGy8LB.js";import"./PdfViewerSidebar-DBEynsoO.js";import"./index-BzoN-LXM.js";import"./index-3TFDWhUn.js";import"./index-DcadtDvp.js";import"./PdfViewerToolbar-D98ZTxGQ.js";import"./Button-C8BF6svu.js";import"./chevron-right-iC_m_vbS.js";import"./Input-BUoU7JC-.js";import"./search-AzEaYAcY.js";import"./spin-Bw7Tm35a.js";import"./error-DojtEV0y.js";import"./withOsdkMetrics-Cux2wN2Y.js";import"./makeExternalStore-DyZMgppU.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
