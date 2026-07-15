import{j as r,M as s}from"./iframe-CIOKnh8Y.js";import{P as p}from"./pdf-viewer-UYXxRd6w.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DkSe4WH9.js";import"./preload-helper-CxTGLae-.js";import"./PdfRenderer-D8DCErw3.js";import"./index-DviZ6p37.js";import"./PdfViewer-DZCLFoKy.js";import"./PdfViewer.module.css-B7OjuJM8.js";import"./PdfViewerAnnotationLayer-De4LpgCM.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BqI-drYJ.js";import"./PdfViewerOutlineSidebar-DdmloLKT.js";import"./PdfViewerSidebarHeader-DMky-d3h.js";import"./useBaseUiId-BwNnw9h8.js";import"./useControlled-8pQu5kKy.js";import"./CompositeRoot-BlUcKtGo.js";import"./CompositeItem-rwn7_Z3T.js";import"./ToolbarRootContext-SIyYjj0F.js";import"./composite-mfuAD7zc.js";import"./svgIconContainer-tgoUQrBB.js";import"./PdfViewerSearchBar-DsX7ap07.js";import"./chevron-up-BGyE1oWj.js";import"./chevron-down-BoAnXeYV.js";import"./cross-hPNuRJt1.js";import"./PdfViewerSidebar-CD0aCOcU.js";import"./index-CCsc-d1B.js";import"./index-aDrB57cO.js";import"./index-hV7zgoI_.js";import"./PdfViewerToolbar-DBYtv4o1.js";import"./Button-D3qKhovW.js";import"./chevron-right-CwT1P7fh.js";import"./Input-vo-yH0cr.js";import"./search-NPO9ZctR.js";import"./spin-BTpsdf7W.js";import"./error-CFVkJ0Jb.js";import"./withOsdkMetrics-C8Dkr2u3.js";import"./makeExternalStore-vt54oNBr.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
