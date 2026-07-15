import{j as r,M as s}from"./iframe-BRAN6mwJ.js";import{P as p}from"./pdf-viewer-s2rKKjF5.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-xmf2FIGg.js";import"./preload-helper-X-_euM3S.js";import"./PdfRenderer-BP3yQzpB.js";import"./index-BtPJ513K.js";import"./PdfViewer-1Y0wmwz7.js";import"./PdfViewer.module.css-CqnlXmc5.js";import"./PdfViewerAnnotationLayer-BmdXPxn_.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CIc-KJwP.js";import"./PdfViewerOutlineSidebar-CrpJd-WE.js";import"./PdfViewerSidebarHeader-BWOBR5C-.js";import"./useBaseUiId-As0o-zvu.js";import"./useControlled-Bl0Kxrtm.js";import"./CompositeRoot-CxyOsnGJ.js";import"./CompositeItem-C1kNAstD.js";import"./ToolbarRootContext-CGMWo3-1.js";import"./composite-JH2uFn8O.js";import"./svgIconContainer-VG5m1OWT.js";import"./PdfViewerSearchBar-DqrsIWTq.js";import"./chevron-up-ofP1GyS9.js";import"./chevron-down-BIA4jTfU.js";import"./cross-fVcbgOgO.js";import"./PdfViewerSidebar-SG_JmDEj.js";import"./index-DmVpTzvr.js";import"./index-CWFn4kDt.js";import"./index-Bjm1W2Qh.js";import"./PdfViewerToolbar-CYuJ1ruu.js";import"./Button-DvBPGTcG.js";import"./chevron-right-vk8nzCZ5.js";import"./Input-D4S4zska.js";import"./search-BZSvBuOj.js";import"./spin-BX5sdA84.js";import"./error-CudqN4ed.js";import"./withOsdkMetrics-DkYyIFw2.js";import"./makeExternalStore-BHZHOET0.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
