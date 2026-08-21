import{j as r,M as s}from"./iframe-BbGTTDAj.js";import{P as p}from"./pdf-viewer-D3rkLgQN.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D_0Jbe60.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfViewer-DPya7pNG.js";import"./index-IgulouNK.js";import"./BasePdfViewer-B2b8w6tB.js";import"./BasePdfViewer.module.css-CCP9TIjz.js";import"./PdfViewerAnnotationLayer-CddrqjmK.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DS0EjiJ7.js";import"./PdfViewerOutlineSidebar-C8YZFMob.js";import"./PdfViewerSidebarHeader-CE-cNlvW.js";import"./useBaseUiId-CQunNH1M.js";import"./useControlled-BHPRGL2o.js";import"./CompositeRoot-D9MSdqPp.js";import"./CompositeItem-DyOo-XaB.js";import"./ToolbarRootContext-YNljF2Js.js";import"./composite-CR123KzM.js";import"./svgIconContainer-CVfAB6vd.js";import"./PdfViewerSearchBar-CGk2P2Xx.js";import"./chevron-up-Cq3jB4Zj.js";import"./chevron-down-wz6-g0K-.js";import"./cross-DhMDfvf2.js";import"./PdfViewerSidebar-BjG5EBpI.js";import"./index-Bjc-9Q8Y.js";import"./index-C8Uf5ELJ.js";import"./index-Df7q0QUE.js";import"./PdfViewerToolbar-LRtGCgLn.js";import"./Button-CN3p9mDI.js";import"./chevron-right-8wJ3n1WH.js";import"./Input-DnyVFM7E.js";import"./search-CnT_vxoB.js";import"./spin-eMUl-NrZ.js";import"./error-BllpxWel.js";import"./withOsdkMetrics-CwndHWS3.js";import"./makeExternalStore-B_7bdAjg.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
