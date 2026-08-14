import{j as r,M as s}from"./iframe-CyC9Pk-h.js";import{P as p}from"./pdf-viewer-w5ESmDca.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D-seUCVD.js";import"./preload-helper-Ba_eiWvD.js";import"./PdfViewer-BEOBVdAg.js";import"./index-Jw1W-Dcz.js";import"./BasePdfViewer-DhDeu8sU.js";import"./BasePdfViewer.module.css-CBa9H4Wd.js";import"./PdfViewerAnnotationLayer-B8yh5VYS.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CnmggZgI.js";import"./PdfViewerOutlineSidebar-B8Rlft9d.js";import"./PdfViewerSidebarHeader-zZvbiJMP.js";import"./useBaseUiId-DA5rbGS_.js";import"./useControlled-C3ihEHs7.js";import"./CompositeRoot-IIh02nqe.js";import"./CompositeItem-hsjBXfuI.js";import"./ToolbarRootContext-DTThoWLk.js";import"./composite-DqgZShC5.js";import"./svgIconContainer-CtuyHuEk.js";import"./PdfViewerSearchBar-BViPP_PB.js";import"./chevron-up-f0uQ3YfI.js";import"./chevron-down-CKdV8T0F.js";import"./cross-D41ZPA6o.js";import"./PdfViewerSidebar-BfpC5Zx7.js";import"./index-L4eHIYb3.js";import"./index-DtMSFM7u.js";import"./index-1iTTRwMn.js";import"./PdfViewerToolbar-C91LB-Z8.js";import"./Button-CqFoA8aV.js";import"./chevron-right-DEblZaZR.js";import"./Input-5xKjP-wg.js";import"./search-CPABJXMR.js";import"./spin-BrfwzKNO.js";import"./error-C7KSTTAG.js";import"./withOsdkMetrics-BZTfI1Of.js";import"./makeExternalStore-C4_agDxn.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
