import{j as r,M as s}from"./iframe-CdVdrk-Z.js";import{P as p}from"./pdf-viewer-CwSxx6dP.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BO4TJtEd.js";import"./preload-helper-D3Uuy_qs.js";import"./PdfRenderer-Dg-vSWTv.js";import"./index-DZVQNLYI.js";import"./PdfViewer-ChHonYIk.js";import"./PdfViewer.module.css-DzCekkWU.js";import"./PdfViewerAnnotationLayer-C-OZ-9UZ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CJEEyaBt.js";import"./PdfViewerOutlineSidebar-B1TdkmM8.js";import"./PdfViewerSidebarHeader-DUcLp48U.js";import"./useBaseUiId-BoQp8WF9.js";import"./useControlled-pK0m6WTM.js";import"./CompositeRoot-DsUvb6di.js";import"./CompositeItem-DmMvdKXl.js";import"./ToolbarRootContext-MShXegNP.js";import"./composite-MFKJqOry.js";import"./svgIconContainer-DLJMdQAX.js";import"./PdfViewerSearchBar-DL5m3SSr.js";import"./chevron-up-CTH_rQF2.js";import"./chevron-down-D-32cGr0.js";import"./cross-CuXvHsqi.js";import"./PdfViewerSidebar-DZlQfAje.js";import"./index-Bw3b3OYv.js";import"./index-CbzjtGzh.js";import"./index-CfFbwio0.js";import"./PdfViewerToolbar-BjIDX741.js";import"./Button-BHlEgtys.js";import"./chevron-right-CGVnHQBY.js";import"./Input-DfDhmSz8.js";import"./search-D2WuN_XZ.js";import"./spin-CkctRTRp.js";import"./error-BYGeo1CS.js";import"./withOsdkMetrics-CiTByfY3.js";import"./makeExternalStore-BwijJ5Bd.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
