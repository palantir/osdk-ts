import{j as r,M as s}from"./iframe-CT8qFPUV.js";import{P as p}from"./pdf-viewer-D8DNMnN-.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-S7hKiKnq.js";import"./preload-helper-BHyrK0we.js";import"./PdfRenderer-MqNAFeiG.js";import"./index-IIFqr_Jh.js";import"./PdfViewer-Du4hqNhj.js";import"./PdfViewer.module.css-BN-A7Gat.js";import"./PdfViewerAnnotationLayer-qjMyWSlF.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-5VqF9Xwa.js";import"./PdfViewerOutlineSidebar-CIC82cE5.js";import"./PdfViewerSidebarHeader-BNu83uIw.js";import"./useBaseUiId-CAvMPjp1.js";import"./useControlled-BSUn0zkZ.js";import"./CompositeRoot-4_bIkot2.js";import"./CompositeItem-CS9_X5Cg.js";import"./ToolbarRootContext-DTfoBz1Z.js";import"./composite-Cvq6s1zD.js";import"./svgIconContainer-9rSG-q0q.js";import"./PdfViewerSearchBar-CIS9zJxE.js";import"./chevron-up-_mBtxNxT.js";import"./chevron-down-D594BBPu.js";import"./cross-CMW1v6Nr.js";import"./PdfViewerSidebar-BbxgIHQG.js";import"./index-C85Q-p1W.js";import"./index-CnAG97BE.js";import"./index-G14nPyHu.js";import"./PdfViewerToolbar-B9CTo3e5.js";import"./Button-CIZ3jWX3.js";import"./chevron-right-f4ojd6dg.js";import"./Input-Hz6uGvXQ.js";import"./search-B7W0NEyo.js";import"./spin-CmJbL68-.js";import"./error-CaKFwUNR.js";import"./withOsdkMetrics-C55IRa3U.js";import"./makeExternalStore-HyEzRDXC.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
