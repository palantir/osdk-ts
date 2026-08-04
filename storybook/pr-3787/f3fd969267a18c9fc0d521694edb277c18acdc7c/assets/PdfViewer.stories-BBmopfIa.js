import{j as r,M as s}from"./iframe-Ch4YG9zO.js";import{P as p}from"./pdf-viewer-DTgdP0PK.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-wwLZadLF.js";import"./preload-helper-B2FbqY3N.js";import"./PdfRenderer-CAuzlgg0.js";import"./index-Tj0gjODi.js";import"./PdfViewer-H2Wsnnbb.js";import"./PdfViewer.module.css-Cs9qSyZa.js";import"./PdfViewerAnnotationLayer-DzTdrEki.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CTWBRMO7.js";import"./PdfViewerOutlineSidebar-BtZ2BT8m.js";import"./PdfViewerSidebarHeader-DERnUS04.js";import"./useBaseUiId-n1xJoDj4.js";import"./useControlled-DDKlVuXM.js";import"./CompositeRoot-DM67HPNT.js";import"./CompositeItem-D7zxms0O.js";import"./ToolbarRootContext-DFHW9hl5.js";import"./composite-Bj5YxLBn.js";import"./svgIconContainer-Cn1U1N9z.js";import"./PdfViewerSearchBar-C97KNug1.js";import"./chevron-up-_utqkyNy.js";import"./chevron-down-BNKmlKfx.js";import"./cross-BsOxLVVI.js";import"./PdfViewerSidebar-BQs0_crh.js";import"./index-DmkOCqw0.js";import"./index-C9z0_KHF.js";import"./index-B1Pg27bT.js";import"./PdfViewerToolbar-CpbiL2YM.js";import"./Button-BwCFldKH.js";import"./chevron-right-Z5RXjYHN.js";import"./Input-BqjoA6Wr.js";import"./search-Dl_XkKU0.js";import"./spin-D8k9zMeI.js";import"./error-KSQFRnjc.js";import"./withOsdkMetrics-DjmuwpSc.js";import"./makeExternalStore-Bqt01k7N.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
