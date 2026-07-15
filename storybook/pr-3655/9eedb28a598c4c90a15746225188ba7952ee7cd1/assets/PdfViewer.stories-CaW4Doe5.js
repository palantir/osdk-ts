import{j as r,M as s}from"./iframe-pWexxLT7.js";import{P as p}from"./pdf-viewer-CRA0yOkD.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Cw4LngjJ.js";import"./preload-helper-DAxCna9u.js";import"./PdfRenderer-CF7udCCo.js";import"./index-Cn2FWRSV.js";import"./PdfViewer-Cjh1_k8O.js";import"./PdfViewer.module.css-D--Zh31X.js";import"./PdfViewerAnnotationLayer-BpRSjMsF.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B7PBSOfv.js";import"./PdfViewerOutlineSidebar-BtF8-38V.js";import"./PdfViewerSidebarHeader-C_2Hcovf.js";import"./useBaseUiId-CWLPLs_V.js";import"./useControlled-BLLqDxFL.js";import"./CompositeRoot-BR_qbQWl.js";import"./CompositeItem-5ildQ8TW.js";import"./ToolbarRootContext-DgmlBkd_.js";import"./composite-Bebos5Dw.js";import"./svgIconContainer-C7ZN1XkX.js";import"./PdfViewerSearchBar-DpPnD6Nl.js";import"./chevron-up-p-mVS9hy.js";import"./chevron-down-DiwVAatE.js";import"./cross-En_bKMfi.js";import"./PdfViewerSidebar-De9Vz1dK.js";import"./index-DwGcf4YC.js";import"./index-BPJH_7Cs.js";import"./index-BEDzz0C9.js";import"./PdfViewerToolbar-Z8qqgx7F.js";import"./Button-DTgwHHdU.js";import"./chevron-right-B8Vjw8WO.js";import"./Input-Doi-pqeP.js";import"./search-JsUI98Vl.js";import"./spin-D-3ljrG1.js";import"./error-DGoDyeTd.js";import"./withOsdkMetrics-uY2Z1dO5.js";import"./makeExternalStore-C-I5-WDr.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
