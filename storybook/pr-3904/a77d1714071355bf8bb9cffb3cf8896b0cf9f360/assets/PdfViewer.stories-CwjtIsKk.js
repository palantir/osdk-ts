import{j as r,M as s}from"./iframe-BgvLvKva.js";import{P as p}from"./pdf-viewer-C5Vr9m3z.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CQVnJEIz.js";import"./preload-helper-B1HwKvYQ.js";import"./PdfViewer-C17I03e9.js";import"./index-C5UyF6W2.js";import"./BasePdfViewer-CmtlFtB1.js";import"./BasePdfViewer.module.css-DcWEiW1K.js";import"./PdfViewerAnnotationLayer-DF6ySRk3.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Nx64LbJn.js";import"./PdfViewerOutlineSidebar-DCSDkEeo.js";import"./PdfViewerSidebarHeader-CXJF5Wtf.js";import"./useBaseUiId-ctMKwW6N.js";import"./useControlled-DJVt1nAj.js";import"./CompositeRoot-BHcHvfti.js";import"./CompositeItem-BIOBD7ED.js";import"./ToolbarRootContext-1Zs9_aIX.js";import"./composite-BYxHSO5E.js";import"./svgIconContainer-CcU0b5d6.js";import"./PdfViewerSearchBar-BbXaoTHv.js";import"./chevron-up-CaIMonBt.js";import"./chevron-down-Dsbl3RB_.js";import"./cross-WN3vBfZU.js";import"./PdfViewerSidebar-B_s3CFgU.js";import"./index-Dsqet5kS.js";import"./index-DHe1MgcY.js";import"./index-DIEiR9vc.js";import"./PdfViewerToolbar-C0HcgPAv.js";import"./Button-CT3oLFOf.js";import"./chevron-right-DLNJMKo-.js";import"./Input-BRpNUPT7.js";import"./search-BC3w2ZRf.js";import"./spin-CxL9XlR5.js";import"./error-MS4gG1j8.js";import"./withOsdkMetrics-Ccq9KWbZ.js";import"./makeExternalStore-C6g-u5rg.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
