import{j as r,M as s}from"./iframe-BsQgWFmA.js";import{P as p}from"./pdf-viewer-BbT8Iw5J.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Rqq3hnAP.js";import"./preload-helper-ox8sc0DE.js";import"./PdfRenderer-ng_oBjMB.js";import"./index-Cz06TiHR.js";import"./PdfViewer-CHTzQyMI.js";import"./PdfViewer.module.css-DbQMktiC.js";import"./PdfViewerAnnotationLayer-DNBxfIPg.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Pxj2bA0p.js";import"./PdfViewerOutlineSidebar-BYbWh2Zc.js";import"./PdfViewerSidebarHeader-De7PRFIL.js";import"./useBaseUiId-Rf-IjtIz.js";import"./useControlled-BrKYBCok.js";import"./CompositeRoot-a7IYshou.js";import"./CompositeItem-CgQckNl-.js";import"./ToolbarRootContext-DCuLKsCk.js";import"./composite-BRcAP26W.js";import"./svgIconContainer-BFXX1WcO.js";import"./PdfViewerSearchBar-D0r_8MiF.js";import"./chevron-up-BfYzRX6a.js";import"./chevron-down-Dr4jf91F.js";import"./cross-dIYqR0im.js";import"./PdfViewerSidebar-D3jCKJqp.js";import"./index-C3Do-XCw.js";import"./index-Bc2NOt8d.js";import"./index-CK1uJrEi.js";import"./PdfViewerToolbar-_Y3tNbWT.js";import"./Button-CnDPVMED.js";import"./chevron-right-BAZHZ_M4.js";import"./Input-BffJw4Yo.js";import"./search-Bf_HBchW.js";import"./spin-CrVyNy-7.js";import"./error-kykHtLGD.js";import"./withOsdkMetrics-CxjcE0Us.js";import"./makeExternalStore-DEES9k4f.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
