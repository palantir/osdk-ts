import{j as r,M as s}from"./iframe-Cc07Bjnw.js";import{P as p}from"./pdf-viewer-Dijaqm2C.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CSaI1aIQ.js";import"./preload-helper-BZQmHc-4.js";import"./PdfRenderer-g7Xmh5nO.js";import"./index-DZvQ_Jrq.js";import"./PdfViewer-CVSdqDR5.js";import"./PdfViewer.module.css-CcvwL-XX.js";import"./PdfViewerAnnotationLayer-DK_p_Y-a.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-tTuLJ8iC.js";import"./PdfViewerOutlineSidebar-Be5xKpur.js";import"./PdfViewerSidebarHeader-CFA64YyX.js";import"./useBaseUiId-BR18Ojap.js";import"./useControlled-CVe0Wn-E.js";import"./CompositeRoot-CVMOpR6t.js";import"./CompositeItem-BxvAq6Sc.js";import"./ToolbarRootContext-BDV8ojGj.js";import"./composite-COFnfRRQ.js";import"./svgIconContainer-CbLY47mb.js";import"./PdfViewerSearchBar-CmdPvlkJ.js";import"./chevron-up-BRdkgWqm.js";import"./chevron-down-DB7BwQt8.js";import"./cross-DA_hofl4.js";import"./PdfViewerSidebar-cPLJ2fyh.js";import"./index-DC5x3408.js";import"./index-DApNf0Yd.js";import"./index-CfAZ234r.js";import"./PdfViewerToolbar-Dw3SKTgp.js";import"./Button-DZ_IvYpL.js";import"./chevron-right-Cj2aOf9-.js";import"./Input-Csl4g1fd.js";import"./search-Qxa58yqX.js";import"./spin-T1JMEwsN.js";import"./error-B-dp0ddC.js";import"./withOsdkMetrics-CiZgMogi.js";import"./makeExternalStore-BOX2v8-h.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
