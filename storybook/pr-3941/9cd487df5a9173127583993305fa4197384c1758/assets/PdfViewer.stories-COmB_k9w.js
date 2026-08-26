import{j as r,M as s}from"./iframe-6qR11Bx0.js";import{P as p}from"./pdf-viewer-CP2UWFRI.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-2As1ykJd.js";import"./preload-helper-B_Yy5CIH.js";import"./PdfViewer-BsN0t0X-.js";import"./index-i2tOtYR_.js";import"./BasePdfViewer-CGKjaQ6h.js";import"./BasePdfViewer.module.css-C2fp68N7.js";import"./PdfViewerAnnotationLayer-BRN5iFrb.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-w239PEk8.js";import"./PdfViewerOutlineSidebar-BeUo5szq.js";import"./PdfViewerSidebarHeader-BvXIAyoj.js";import"./useBaseUiId-DlgiHfEc.js";import"./useControlled-Da-RuFP2.js";import"./CompositeRoot-BVfFnFS-.js";import"./CompositeItem-BVVIYYWe.js";import"./ToolbarRootContext-BFseEUjE.js";import"./composite-D16UZS_I.js";import"./svgIconContainer-XlgOHF0q.js";import"./PdfViewerSearchBar-DeMKMA14.js";import"./chevron-up-CgNfTuVm.js";import"./chevron-down-C16wVk20.js";import"./cross-D7PjcS8z.js";import"./PdfViewerSidebar-Dvk0bTvM.js";import"./index-DPYKBcvA.js";import"./index-B2X8PE9_.js";import"./index-DsOGlaAg.js";import"./PdfViewerToolbar-CMi7vwnC.js";import"./Button-D5kP-zjx.js";import"./chevron-right-BkeQsDU1.js";import"./Input-5sdYtdOv.js";import"./search-ByKRFVJz.js";import"./spin-CROo9fdh.js";import"./error-CXAefsdr.js";import"./withOsdkMetrics-5m6-j_Ap.js";import"./makeExternalStore-UJLHcmUF.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
