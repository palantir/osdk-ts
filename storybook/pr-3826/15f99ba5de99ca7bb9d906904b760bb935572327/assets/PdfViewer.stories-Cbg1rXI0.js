import{j as r,M as s}from"./iframe-BWI0v7bU.js";import{P as p}from"./pdf-viewer-0w_eLrYv.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DTJ_8rIe.js";import"./preload-helper-BKzGVzbV.js";import"./PdfRenderer-CXqYxlyh.js";import"./index-CKp8zefp.js";import"./PdfViewer-DkubbZLo.js";import"./PdfViewer.module.css-DP3SL-ab.js";import"./PdfViewerAnnotationLayer-BD7n_eVi.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-QMPw6s-n.js";import"./PdfViewerOutlineSidebar-2ox9xIVH.js";import"./PdfViewerSidebarHeader-B1-LCodo.js";import"./useBaseUiId-CbtuVGLX.js";import"./useControlled-C6y9E1N5.js";import"./CompositeRoot-BpaMcnlg.js";import"./CompositeItem-yLYz58Jp.js";import"./ToolbarRootContext-raUjAPMX.js";import"./composite-ZOXtixD3.js";import"./svgIconContainer-BKP6lsya.js";import"./PdfViewerSearchBar-Dk2bMukw.js";import"./chevron-up-DRw5Tz1J.js";import"./chevron-down-D6XjoOpy.js";import"./cross-CQNQC0A7.js";import"./PdfViewerSidebar-0ZCLTAaM.js";import"./index-CU_s30uq.js";import"./index-CR1j9JlH.js";import"./index-D5lI-f2a.js";import"./PdfViewerToolbar-CWjSltEr.js";import"./Button-BwmiKCl4.js";import"./chevron-right-DaaMx1Hi.js";import"./Input-27_mh9Q3.js";import"./search-YfthYXya.js";import"./spin-2WCgR3_9.js";import"./error-YPxJU-tx.js";import"./withOsdkMetrics-CnoY1REH.js";import"./makeExternalStore-CmPHT6zT.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
