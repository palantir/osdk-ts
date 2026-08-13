import{j as r,M as s}from"./iframe-DqNwpodn.js";import{P as p}from"./pdf-viewer-Bxr04RK-.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-I1OWKaqG.js";import"./preload-helper-Cozt92uG.js";import"./PdfRenderer-Ify7HnKL.js";import"./index-CQGcEopW.js";import"./PdfViewer-lGGiGnaz.js";import"./PdfViewer.module.css-s3TVGSFt.js";import"./PdfViewerAnnotationLayer-DWQuV1fO.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-0GoUxPNL.js";import"./PdfViewerOutlineSidebar-BhZ5atkJ.js";import"./PdfViewerSidebarHeader-Dsz0IDdR.js";import"./useBaseUiId-D0IRY_xq.js";import"./useControlled-5kZb40iP.js";import"./CompositeRoot-CUxVXGgt.js";import"./CompositeItem-DRCpZxZT.js";import"./ToolbarRootContext-DNu-sflf.js";import"./composite-CSLCI2p4.js";import"./svgIconContainer-C0i7IGlc.js";import"./PdfViewerSearchBar-_i8imDzh.js";import"./chevron-up-BJm3pwjp.js";import"./chevron-down-CkHwZ2js.js";import"./cross-ZDjiMYg9.js";import"./PdfViewerSidebar-IGqtrp-z.js";import"./index-Bd8jGuQf.js";import"./index-Bhsl5-6I.js";import"./index-Bhb5doz-.js";import"./PdfViewerToolbar-BeEuU5-H.js";import"./Button-yW5WqrcK.js";import"./chevron-right-Vzo34KKZ.js";import"./Input-dxlaYnFR.js";import"./search-iXI7_iDk.js";import"./spin-DgK4jNW3.js";import"./error-QvLeIger.js";import"./withOsdkMetrics-DueETg7y.js";import"./makeExternalStore-Bbu0t-Pj.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
