import{j as r,M as s}from"./iframe-CDBJBi9y.js";import{P as p}from"./pdf-viewer-B9cBOhe9.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DOOcTuFu.js";import"./preload-helper-CPpjahNM.js";import"./PdfRenderer-CxVwxfac.js";import"./index-2YnGD4P-.js";import"./PdfViewer-B3Hqp1w_.js";import"./PdfViewer.module.css-D6bSpSxZ.js";import"./PdfViewerAnnotationLayer-DBchBhzI.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cck2bjv9.js";import"./PdfViewerOutlineSidebar-BPBCvpTR.js";import"./PdfViewerSidebarHeader-jHgCbsHL.js";import"./useBaseUiId-NZoa3elP.js";import"./useControlled-Bde8tXyW.js";import"./CompositeRoot-CK629s4H.js";import"./CompositeItem-CxmnoSQk.js";import"./ToolbarRootContext-CGoDLCQp.js";import"./composite-CWLOPAC6.js";import"./svgIconContainer-CnFpwshs.js";import"./PdfViewerSearchBar-DCGiml2O.js";import"./chevron-up-DJpU5_t_.js";import"./chevron-down-BnVvJT4Z.js";import"./cross-sH7tNTxb.js";import"./PdfViewerSidebar-Dr0V-qep.js";import"./index-aO0ncbOX.js";import"./index-DfA0AXNS.js";import"./index-Cumt9Tsy.js";import"./PdfViewerToolbar-CeF8YY6m.js";import"./Button-B0MvZMyN.js";import"./chevron-right-CEcRXvAg.js";import"./Input-TomMleJD.js";import"./search-DVghM6nk.js";import"./spin-CM8Xds4F.js";import"./error-B8dmfV4o.js";import"./withOsdkMetrics-BVBX6iV3.js";import"./makeExternalStore-B9IeP5n3.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
