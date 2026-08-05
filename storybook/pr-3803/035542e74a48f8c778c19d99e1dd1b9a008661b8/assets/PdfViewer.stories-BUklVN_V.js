import{j as r,M as s}from"./iframe-BuWAiJqq.js";import{P as p}from"./pdf-viewer-S6ecBbju.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C7SZzDmb.js";import"./preload-helper-GKB8uXJQ.js";import"./PdfRenderer-BntQGRmQ.js";import"./index-DKQN3MGn.js";import"./PdfViewer-C7bIQ3iF.js";import"./PdfViewer.module.css-aoUMP-98.js";import"./PdfViewerAnnotationLayer-I1T2ZZjg.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CgCrzFfH.js";import"./PdfViewerOutlineSidebar-z3FX-Gom.js";import"./PdfViewerSidebarHeader-LM05-Hfe.js";import"./useBaseUiId-GGObT-JF.js";import"./useControlled-Cctdi5Pw.js";import"./CompositeRoot-KsAVxgxV.js";import"./CompositeItem-BJOfR8On.js";import"./ToolbarRootContext-b_fKtK1X.js";import"./composite-C1SnCG4A.js";import"./svgIconContainer-DByURt-f.js";import"./PdfViewerSearchBar-B3ETg57r.js";import"./chevron-up-D5Jt5HAc.js";import"./chevron-down-BLDZnR1d.js";import"./cross-DjEkx8hG.js";import"./PdfViewerSidebar-DSE4g228.js";import"./index-BZfI53UY.js";import"./index-DFAgF64G.js";import"./index-B9dzMRkW.js";import"./PdfViewerToolbar-DCn62369.js";import"./Button-vtvLXbiy.js";import"./chevron-right-DEoTQz4h.js";import"./Input-CcDq3pYP.js";import"./search-BdQ2EhWX.js";import"./spin-BLjq4dX1.js";import"./error-Cox_k5eE.js";import"./withOsdkMetrics-3JkArczg.js";import"./makeExternalStore-cqUtgK5L.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
