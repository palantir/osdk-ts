import{j as r,M as s}from"./iframe-Dsqo2Te7.js";import{P as p}from"./pdf-viewer-CrYwVXMn.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Cz8crXWV.js";import"./preload-helper-C00VWsW9.js";import"./PdfRenderer-DCzjMVMC.js";import"./index-CJIEMWbJ.js";import"./PdfViewer-FkHAHZxv.js";import"./PdfViewer.module.css-UjRr7TV8.js";import"./PdfViewerAnnotationLayer-DsIyGBeg.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BJts4_4q.js";import"./PdfViewerOutlineSidebar-DKJjSSQM.js";import"./PdfViewerSidebarHeader-BJuQPJbt.js";import"./useBaseUiId-ByGgpH05.js";import"./useControlled-D0ueKSiO.js";import"./CompositeRoot-BU_TXpm4.js";import"./CompositeItem-mCNVQvhZ.js";import"./ToolbarRootContext-BqymNalt.js";import"./composite-dCCZG-QB.js";import"./svgIconContainer-BiCW5V8l.js";import"./PdfViewerSearchBar-D83uEVfy.js";import"./chevron-up-D8X1_fXC.js";import"./chevron-down-C3JFAOUv.js";import"./cross-BBE-eoHs.js";import"./PdfViewerSidebar-DWVFXfdq.js";import"./index-C_DVuBu-.js";import"./index-d7L08DFU.js";import"./index-BUiXT7C6.js";import"./PdfViewerToolbar-jQPztMgN.js";import"./Button-CLJwxOKS.js";import"./chevron-right-BFd3sRq4.js";import"./Input-D052xPpl.js";import"./search-DrXmUYNB.js";import"./spin-CSQmIB6w.js";import"./error-Cm_26CfQ.js";import"./withOsdkMetrics-l-RgHE7X.js";import"./makeExternalStore-DjsQKVpV.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
