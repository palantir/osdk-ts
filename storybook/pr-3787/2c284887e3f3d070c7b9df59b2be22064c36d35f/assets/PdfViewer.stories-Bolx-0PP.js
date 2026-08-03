import{j as r,M as s}from"./iframe-COpzlCaB.js";import{P as p}from"./pdf-viewer-BCnWrDl5.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-ClLfpS0V.js";import"./preload-helper-BkdBjdKP.js";import"./PdfRenderer-BEEAevVQ.js";import"./index-C84ec9Pj.js";import"./PdfViewer-B1wBTlgf.js";import"./PdfViewer.module.css-9zddf_yn.js";import"./PdfViewerAnnotationLayer-BFSSBgkb.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BKrfEVCy.js";import"./PdfViewerOutlineSidebar-BplDsvoa.js";import"./PdfViewerSidebarHeader-DvMssUyk.js";import"./useBaseUiId-DFFRH3M1.js";import"./useControlled-CbqA1NEj.js";import"./CompositeRoot-CkpIx56i.js";import"./CompositeItem-dCINd5Kj.js";import"./ToolbarRootContext-q4CS8Gcs.js";import"./composite-D23jvVzu.js";import"./svgIconContainer-CIaQ8xsd.js";import"./PdfViewerSearchBar-C6zmDLk7.js";import"./chevron-up-BzjlG3vo.js";import"./chevron-down-BLPE-Xtj.js";import"./cross-5K3lKZgy.js";import"./PdfViewerSidebar-DWBXsnPG.js";import"./index-q7IUoNRd.js";import"./index-B9im3oSs.js";import"./index-BRjWtFt3.js";import"./PdfViewerToolbar-Dn9xmRCl.js";import"./Button-DI3ND7oX.js";import"./chevron-right-DU9zG2pl.js";import"./Input-C6sS8Woo.js";import"./search-N-S2SVsa.js";import"./spin-D0SSGCpU.js";import"./error-DyfqkQ_Z.js";import"./withOsdkMetrics-Dr6Y0hve.js";import"./makeExternalStore-BOVYqmIl.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
