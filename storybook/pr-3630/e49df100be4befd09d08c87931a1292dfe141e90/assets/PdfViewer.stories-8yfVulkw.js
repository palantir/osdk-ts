import{j as r,M as s}from"./iframe-DYNK02I_.js";import{P as p}from"./pdf-viewer-CCczkNMw.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Bw8NWlPT.js";import"./preload-helper-CVQqxqqG.js";import"./PdfRenderer-Cnk6vcic.js";import"./index-DgcQGZHo.js";import"./PdfViewer-W3Y_YvRo.js";import"./PdfViewer.module.css-BT4X_3CW.js";import"./PdfViewerAnnotationLayer-C2zZ8EPT.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BzBDVd0e.js";import"./PdfViewerOutlineSidebar-C0A-80zk.js";import"./PdfViewerSidebarHeader-BjTU_dyQ.js";import"./useBaseUiId-DBmz8GTO.js";import"./useControlled-C1nCVAdK.js";import"./CompositeRoot-C-_QMCjF.js";import"./CompositeItem-DJcjaUR4.js";import"./ToolbarRootContext-dyjJ_3hL.js";import"./composite-BN0hmDQN.js";import"./svgIconContainer-BIw5d8Z1.js";import"./PdfViewerSearchBar-DDV0Wblq.js";import"./chevron-up-BCounYkK.js";import"./chevron-down-CGyUnEQ9.js";import"./cross-BtSz2CJ7.js";import"./PdfViewerSidebar-Ag9-19PX.js";import"./index-DO8TnFyt.js";import"./index-BSXskgoy.js";import"./index-BFATeBzZ.js";import"./PdfViewerToolbar-DipNNl-I.js";import"./Button-BIYMuHEo.js";import"./chevron-right--DGBzzQs.js";import"./Input-Hl3VDz84.js";import"./search-BrgJCdJ1.js";import"./spin-D-2ZlMgm.js";import"./error-DVUpGhgE.js";import"./withOsdkMetrics-hkEMtyUb.js";import"./makeExternalStore-atX7fbPr.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
