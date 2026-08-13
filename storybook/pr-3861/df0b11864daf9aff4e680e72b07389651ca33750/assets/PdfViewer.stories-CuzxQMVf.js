import{j as r,M as s}from"./iframe-CF1mFmNd.js";import{P as p}from"./pdf-viewer-CrrqkyjJ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-oNfN940m.js";import"./preload-helper-Dyo3vXi1.js";import"./PdfViewer-BuSw0FEH.js";import"./index-ZkVEQI0k.js";import"./BasePdfViewer-CDBD5AVX.js";import"./BasePdfViewer.module.css-C-ck4cD_.js";import"./PdfViewerAnnotationLayer-RZarNzNC.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B1OTer9E.js";import"./PdfViewerOutlineSidebar-CA01RQAj.js";import"./PdfViewerSidebarHeader-CxasoDmI.js";import"./useBaseUiId-CctkM0s6.js";import"./useControlled-BUwxHsDX.js";import"./CompositeRoot-DJE7lSBS.js";import"./CompositeItem-DTJQQn4D.js";import"./ToolbarRootContext-CGiG5EWj.js";import"./composite-BjvuVKLa.js";import"./svgIconContainer-qtuz32ZC.js";import"./PdfViewerSearchBar-CGP7yuYS.js";import"./chevron-up-CaBn9vwN.js";import"./chevron-down-D2V5biuP.js";import"./cross-CtBf6gU9.js";import"./PdfViewerSidebar-BGADNRg6.js";import"./index-AerYtyxb.js";import"./index-C_wuWB2u.js";import"./index-D8AsGQtU.js";import"./PdfViewerToolbar-DD3Z9KMQ.js";import"./Button-CioK_zkV.js";import"./chevron-right-CQdJTEfc.js";import"./Input-CLK5rEjn.js";import"./search-CvhfRkSX.js";import"./spin-CfRjjRaf.js";import"./error-CPPAckvZ.js";import"./withOsdkMetrics-C8Y8iavr.js";import"./makeExternalStore-1VKcLwLW.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
