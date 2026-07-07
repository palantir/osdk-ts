import{j as r,M as s}from"./iframe-B0MCwmkW.js";import{P as p}from"./pdf-viewer-CaY1HjqX.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-ihv3uFDy.js";import"./preload-helper-Cq3bN7Vx.js";import"./PdfRenderer-C-_1vnW3.js";import"./index-Bi7FIWd1.js";import"./PdfViewer-SEKfYslL.js";import"./PdfViewer.module.css-DqcOObkH.js";import"./PdfViewerAnnotationLayer-DmoO_NCk.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BaOE2-Hf.js";import"./PdfViewerOutlineSidebar-wum51gkR.js";import"./PdfViewerSidebarHeader-Bl8Hfctn.js";import"./useBaseUiId-D6ID_Yju.js";import"./useControlled-CskE57yI.js";import"./CompositeRoot-Dc-caAer.js";import"./CompositeItem-Dy9OicaG.js";import"./ToolbarRootContext-D44CVp_Y.js";import"./composite-CLS45Qq-.js";import"./svgIconContainer-DQ53WJpu.js";import"./PdfViewerSearchBar-CLJaYSkl.js";import"./chevron-up-DyNScpcZ.js";import"./chevron-down-DkUIIRzX.js";import"./cross-CIy4OWl3.js";import"./PdfViewerSidebar-VFuXcu51.js";import"./index-C5zwgdgr.js";import"./index-Cq4S4XWY.js";import"./index-CqeuUbxy.js";import"./PdfViewerToolbar-KZj4KcAp.js";import"./Button-CmUOI2AK.js";import"./chevron-right-B4DvalVx.js";import"./Input-YBOzLXXQ.js";import"./search-1JoZga8z.js";import"./spin-DfqJ4d_z.js";import"./error-CyZzEFi-.js";import"./withOsdkMetrics-CUc4JKDk.js";import"./makeExternalStore-xZ05yvsb.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
