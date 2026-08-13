import{j as r,M as s}from"./iframe-O0prbF-O.js";import{P as p}from"./pdf-viewer-BYkpGBM3.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CxcvHkJ3.js";import"./preload-helper-BqjLgX7i.js";import"./PdfViewer-DIdvW5-S.js";import"./index-D3_kNOcu.js";import"./BasePdfViewer-C-DdJ0Aa.js";import"./BasePdfViewer.module.css-C5i_CTJ7.js";import"./PdfViewerAnnotationLayer-BC_wxyMK.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CWIRWm1P.js";import"./PdfViewerOutlineSidebar-Dx15I9d6.js";import"./PdfViewerSidebarHeader-B9AybGTY.js";import"./useBaseUiId-CF66BVsU.js";import"./useControlled-DTs4YsMd.js";import"./CompositeRoot-DL-hpy52.js";import"./CompositeItem-Cx6Y5iRt.js";import"./ToolbarRootContext-B9PiDCp_.js";import"./composite-CBSaDCOL.js";import"./svgIconContainer-D708LBZG.js";import"./PdfViewerSearchBar-qknj1g2z.js";import"./chevron-up-zTdjsSRQ.js";import"./chevron-down-NYKhWxp5.js";import"./cross-EqH9AD7w.js";import"./PdfViewerSidebar-CtJxvXWG.js";import"./index-JUBariVe.js";import"./index-DlLn8lVY.js";import"./index-CO7cUuHh.js";import"./PdfViewerToolbar-CAirQkFA.js";import"./Button-B2dXrYMV.js";import"./chevron-right-0oYfV-bM.js";import"./Input-DALr2Z65.js";import"./search-BZRyw4sv.js";import"./spin-DnnTf2qU.js";import"./error-CBnxuMvh.js";import"./withOsdkMetrics-h2oIPj-a.js";import"./makeExternalStore-DO75Ws4H.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
