import{j as r,M as s}from"./iframe-T8-5O5a7.js";import{P as p}from"./pdf-viewer-Xo5UvIV7.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DHnH3DkE.js";import"./preload-helper-BmpZImld.js";import"./PdfViewer-wGMZtPIu.js";import"./index-Bm1P3JuR.js";import"./BasePdfViewer-DxAWKg10.js";import"./BasePdfViewer.module.css-soGsxB5v.js";import"./PdfViewerAnnotationLayer-Di_AjGoR.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-iu3HMSbC.js";import"./PdfViewerOutlineSidebar-C2yiEqPB.js";import"./PdfViewerSidebarHeader-CpywQt5s.js";import"./useBaseUiId-CGT1eYgE.js";import"./useControlled-DiVYHBT1.js";import"./CompositeRoot-4Io8IeER.js";import"./CompositeItem-CxOclKWd.js";import"./ToolbarRootContext-D4ao5sDu.js";import"./composite-3G0XmPl8.js";import"./svgIconContainer-DTQIUstT.js";import"./PdfViewerSearchBar-D_nN9p0X.js";import"./chevron-up-BRrwh_Wq.js";import"./chevron-down-CtzoxwNt.js";import"./cross-B2Ff3nzN.js";import"./PdfViewerSidebar-D7yzesW_.js";import"./index-CtKLFWsO.js";import"./index-CTvYrdTG.js";import"./index-BqFbX9xD.js";import"./PdfViewerToolbar-DWOdRuXC.js";import"./Button-C--AVR5N.js";import"./chevron-right-B3wxzgGh.js";import"./Input-CrYGG830.js";import"./search-gRWhsC7a.js";import"./spin-BqMreaWf.js";import"./error-C6IIEk7L.js";import"./withOsdkMetrics-CswUt8H_.js";import"./makeExternalStore-V4YAFWjd.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
