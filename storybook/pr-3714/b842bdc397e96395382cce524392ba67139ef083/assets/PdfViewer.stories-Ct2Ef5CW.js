import{j as r,M as s}from"./iframe-D6VcCUkM.js";import{P as p}from"./pdf-viewer-z_KRS1Uo.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C-dWqQqP.js";import"./preload-helper-DPNqCLTc.js";import"./PdfRenderer-C9_MXkMF.js";import"./index-tJZvQMDj.js";import"./PdfViewer-BoSII-FR.js";import"./PdfViewer.module.css-B3Aa6EBH.js";import"./PdfViewerAnnotationLayer-BL5u757r.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cm2G6LwN.js";import"./PdfViewerOutlineSidebar-DCRooTqV.js";import"./PdfViewerSidebarHeader-BqKd5qEO.js";import"./useBaseUiId-5mprEBeV.js";import"./useControlled-DQBuB6EM.js";import"./CompositeRoot-C7xMTCDd.js";import"./CompositeItem-VefHJTsp.js";import"./ToolbarRootContext-DZRChbjT.js";import"./composite-BdWLsdKX.js";import"./svgIconContainer-DlL44_U7.js";import"./PdfViewerSearchBar-uMRqHu4g.js";import"./chevron-up-Dg1ZFf0g.js";import"./chevron-down-CNJWZYus.js";import"./cross-BNpZkKts.js";import"./PdfViewerSidebar-CusuPyR9.js";import"./index-C8WTV4y0.js";import"./index-CoZQDdm3.js";import"./index-cLzaewGO.js";import"./PdfViewerToolbar-C8j7O1gg.js";import"./Button-DDYPGD3Q.js";import"./chevron-right-NGVoSaH-.js";import"./Input-AV8HZopO.js";import"./search-CiMZ6MzG.js";import"./spin-6CYA2ZWz.js";import"./error-Ca_Te0vf.js";import"./withOsdkMetrics-DQJ2B3zq.js";import"./makeExternalStore-BFmKn4t3.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
