import{j as r,M as s}from"./iframe-DMptrxa9.js";import{P as p}from"./pdf-viewer-iamOB9CH.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BcnFNz25.js";import"./preload-helper-BECJHbCs.js";import"./PdfRenderer-rjG3ggpm.js";import"./index-CiAHDYkd.js";import"./PdfViewer-DVwmJBdX.js";import"./PdfViewer.module.css-BUsFJIYY.js";import"./PdfViewerAnnotationLayer-piPEQlx0.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-MXC_LDQu.js";import"./PdfViewerOutlineSidebar-BfOwmY6H.js";import"./PdfViewerSidebarHeader-Csl4cPBk.js";import"./useBaseUiId-BW9Wjo5d.js";import"./useControlled-Bj3k7i7A.js";import"./CompositeRoot-B4pUDcK1.js";import"./CompositeItem-DlSnK-c0.js";import"./ToolbarRootContext-OVu30J-T.js";import"./composite-DxN_csnM.js";import"./svgIconContainer-w_wSwNRF.js";import"./PdfViewerSearchBar-Cr2IMK8p.js";import"./chevron-up-CCMn3mvT.js";import"./chevron-down-BZDyhjQs.js";import"./cross-DrL9tyUF.js";import"./PdfViewerSidebar-CTVtZq-z.js";import"./index-eeCx8pJO.js";import"./index-C903pG23.js";import"./index-BJouSfXg.js";import"./PdfViewerToolbar-wljL46WL.js";import"./Button-D3Z34MXJ.js";import"./chevron-right-D7jvoD3B.js";import"./Input-CHoo27YZ.js";import"./search-DBBNrD_U.js";import"./spin-D8cPGKe7.js";import"./error-DappMFNy.js";import"./withOsdkMetrics-BiS01aqI.js";import"./makeExternalStore-C8ohaOxV.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
