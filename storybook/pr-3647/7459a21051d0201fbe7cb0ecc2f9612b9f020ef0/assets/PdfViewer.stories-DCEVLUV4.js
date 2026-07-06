import{j as r,M as s}from"./iframe-CNV_mt9P.js";import{P as p}from"./pdf-viewer-CWLLTKeq.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BW1tO7QF.js";import"./preload-helper-DPBWnJ9k.js";import"./PdfRenderer-DdYx1c0J.js";import"./index-DzriBWGJ.js";import"./PdfViewer-B7Rjf0Ev.js";import"./PdfViewer.module.css-BAsl3gHb.js";import"./PdfViewerAnnotationLayer-COCrKt7f.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-y-FaknDa.js";import"./PdfViewerOutlineSidebar-D3Ge5h6r.js";import"./PdfViewerSidebarHeader-Ufxt-ze4.js";import"./useBaseUiId-B507lKEX.js";import"./useControlled-BA63sYCw.js";import"./CompositeRoot-DTGamc0l.js";import"./CompositeItem-DepW6j4m.js";import"./ToolbarRootContext-Bsc3Vu1l.js";import"./composite-B4NSNRpR.js";import"./svgIconContainer-n40nNhhk.js";import"./PdfViewerSearchBar-Bdk1aWD2.js";import"./chevron-up-DkJhGohk.js";import"./chevron-down-B2dQJpMF.js";import"./cross-CGS8iaCg.js";import"./PdfViewerSidebar-CZeFZxki.js";import"./index-BNr1IhPY.js";import"./index-B9VnD0S9.js";import"./index-ZYGXogZ6.js";import"./PdfViewerToolbar-CE1sPt9D.js";import"./Button-DORSk1qY.js";import"./chevron-right-DqGKde8g.js";import"./Input-CcPOuoOy.js";import"./search-5x3fK1oz.js";import"./spin-CzCnw-mR.js";import"./error-DFQlG2-a.js";import"./withOsdkMetrics-DX_ODbXs.js";import"./makeExternalStore-DZlboohS.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
