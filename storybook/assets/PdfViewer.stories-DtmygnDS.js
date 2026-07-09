import{j as r,M as s}from"./iframe-CWUGZUf-.js";import{P as p}from"./pdf-viewer-Dsy35gqR.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CJvpm6H-.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfRenderer-Bu6Vy0TG.js";import"./index-C_lPUxQk.js";import"./PdfViewer-DP7smPVp.js";import"./PdfViewer.module.css-CTMDzywG.js";import"./PdfViewerAnnotationLayer-B9FIBxMI.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-46Qs-eKK.js";import"./PdfViewerOutlineSidebar-5WZDj9IE.js";import"./PdfViewerSidebarHeader-CfZ8HqXY.js";import"./useBaseUiId-rQsTKa8n.js";import"./useControlled-BK_JVOej.js";import"./CompositeRoot-yxPtWrnZ.js";import"./CompositeItem-BJx-fZxp.js";import"./ToolbarRootContext-BpsY1BVI.js";import"./composite-DcPHzi1h.js";import"./svgIconContainer-BVl7iIFx.js";import"./PdfViewerSearchBar-CipaEYUI.js";import"./chevron-up-DXrV38S-.js";import"./chevron-down-KWweqKS6.js";import"./cross-D3cic8ur.js";import"./PdfViewerSidebar-6CnkYfDQ.js";import"./index-Fa5PUE1e.js";import"./index-CtVEBM7t.js";import"./index-B-UXWbow.js";import"./PdfViewerToolbar-CYTK4zTT.js";import"./Button-CfMcT41P.js";import"./chevron-right-ClocjVb4.js";import"./Input-DYPJq1YJ.js";import"./search-C9SH_QQG.js";import"./spin-wNG7JiD5.js";import"./error-CQ2hgZnJ.js";import"./withOsdkMetrics-CdfjuVxc.js";import"./makeExternalStore-wd6o7Thy.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
