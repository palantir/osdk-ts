import{j as r,M as s}from"./iframe-0eC9Hb1Q.js";import{P as p}from"./pdf-viewer-D29Oj-lZ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C6mnl-x6.js";import"./preload-helper-CyETt7By.js";import"./PdfViewer-BJHGF-Dl.js";import"./index-CRE2XHsU.js";import"./BasePdfViewer-BjBMtHMS.js";import"./BasePdfViewer.module.css-CwsKeEd8.js";import"./PdfViewerAnnotationLayer-DJw8oX99.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BeVcLijs.js";import"./PdfViewerOutlineSidebar-DOpcZbSP.js";import"./PdfViewerSidebarHeader-Ev9PuT42.js";import"./useBaseUiId-B_2ELJP8.js";import"./useControlled-D5GxZ6C-.js";import"./CompositeRoot-BbZGrNqb.js";import"./CompositeItem-CV7hu4fC.js";import"./ToolbarRootContext-afkGU23n.js";import"./composite-Cd_XCN96.js";import"./svgIconContainer-C7W98r5m.js";import"./PdfViewerSearchBar-C79Mq2TP.js";import"./chevron-up-DwvR9hKJ.js";import"./chevron-down-BTFePERp.js";import"./cross-D9zq7TFg.js";import"./PdfViewerSidebar-DYoXRvQO.js";import"./index-BiegP6go.js";import"./index-CvdbH2x8.js";import"./index-D9GA0kdv.js";import"./PdfViewerToolbar-CTLMAh5n.js";import"./Button-C1ygc_il.js";import"./chevron-right-DZhCeuXg.js";import"./Input-CIgrvflx.js";import"./search-F24JokU_.js";import"./spin-DiRqYx_u.js";import"./error-lpXmTpCf.js";import"./withOsdkMetrics-COXmoufD.js";import"./makeExternalStore-CP3jPB6B.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
