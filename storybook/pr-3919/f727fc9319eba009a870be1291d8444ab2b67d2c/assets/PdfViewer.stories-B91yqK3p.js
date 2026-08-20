import{j as r,M as s}from"./iframe-h16HHsM3.js";import{P as p}from"./pdf-viewer-BgxjU7Zq.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DLmi0rth.js";import"./preload-helper-DaEiocuo.js";import"./PdfViewer-C62Q-d5x.js";import"./index-CrB-SZ6W.js";import"./BasePdfViewer-qKRDgnzX.js";import"./BasePdfViewer.module.css-DPiYS9k9.js";import"./PdfViewerAnnotationLayer-CS1gEWgE.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BQn5CDrA.js";import"./PdfViewerOutlineSidebar-BYnU3_Sp.js";import"./PdfViewerSidebarHeader-UrK5lXzk.js";import"./useBaseUiId-DtIpLIKv.js";import"./useControlled-D3_Mgr2o.js";import"./CompositeRoot-D2fY8s2i.js";import"./CompositeItem-CVw8v154.js";import"./ToolbarRootContext-C6_QoO8-.js";import"./composite-BwI4rJIn.js";import"./svgIconContainer-2LoSh7EW.js";import"./PdfViewerSearchBar-C_rmNRPR.js";import"./chevron-up-BqKTjkoG.js";import"./chevron-down-DBNf4w5W.js";import"./cross-C6l_8oJj.js";import"./PdfViewerSidebar-D3yajeET.js";import"./index-B6f5OL8k.js";import"./index-CipRFOUY.js";import"./index-nhGpddHL.js";import"./PdfViewerToolbar-scR-yIKi.js";import"./Button-CjFV-Dce.js";import"./chevron-right-U5C584TA.js";import"./Input-ChQNdq7z.js";import"./search-CZeSsUn4.js";import"./spin-LBiSGyue.js";import"./error-BNk7qWdS.js";import"./withOsdkMetrics-CxgNfRWd.js";import"./makeExternalStore-CTbMnN4W.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
