import{j as r,M as s}from"./iframe-B8ibQjKF.js";import{P as p}from"./pdf-viewer-CFfi2Mcc.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CIggWr0p.js";import"./preload-helper-CMD4l3O3.js";import"./PdfViewer-BpDRBS2V.js";import"./index-B--aNSCd.js";import"./BasePdfViewer-RTURhz6W.js";import"./BasePdfViewer.module.css-DamfAyDd.js";import"./PdfViewerAnnotationLayer-2R0VQL0M.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DscfX3OA.js";import"./PdfViewerOutlineSidebar--chDGmo5.js";import"./PdfViewerSidebarHeader-B9tnzlnJ.js";import"./useBaseUiId-BxWBC6a-.js";import"./useControlled-Cii-y7gH.js";import"./CompositeRoot-DFZ6cFLu.js";import"./CompositeItem-BRMst1Om.js";import"./ToolbarRootContext-CK_0JlCI.js";import"./composite-CAyfL59E.js";import"./svgIconContainer-DuFhrdn4.js";import"./PdfViewerSearchBar-B7nfZIzM.js";import"./chevron-up-Bvke5Nct.js";import"./chevron-down-DnT6V3B_.js";import"./cross-uGZs9fgx.js";import"./PdfViewerSidebar-DMfCIssK.js";import"./index-CS7J2oP3.js";import"./index-BCjJY3yP.js";import"./index-DBfTlL85.js";import"./PdfViewerToolbar-qn3_yF-A.js";import"./Button-A4muZh2M.js";import"./chevron-right-D5VLnjdt.js";import"./Input-B1tchOJx.js";import"./search-Cf8PmQT0.js";import"./spin-7vH7YP9S.js";import"./error-B5tJ6HNC.js";import"./withOsdkMetrics-DLhXO-aP.js";import"./makeExternalStore-PzBycvZ3.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
