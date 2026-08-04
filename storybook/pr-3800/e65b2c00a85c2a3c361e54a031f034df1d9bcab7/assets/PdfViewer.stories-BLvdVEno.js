import{j as r,M as s}from"./iframe-Dj3y_FXz.js";import{P as p}from"./pdf-viewer-CqmHaaC1.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DTzqZkyW.js";import"./preload-helper-D41TUqQK.js";import"./PdfRenderer-BPEL6JHl.js";import"./index-DD6p90gq.js";import"./PdfViewer-DptqhpD8.js";import"./PdfViewer.module.css-CeGXTUT8.js";import"./PdfViewerAnnotationLayer-CaihkTvV.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DI-UXz-m.js";import"./PdfViewerOutlineSidebar-D09lOr9z.js";import"./PdfViewerSidebarHeader-BviQ8e5-.js";import"./useBaseUiId-D8RgwyAn.js";import"./useControlled-CogZz_Fp.js";import"./CompositeRoot-ZZ4foFxN.js";import"./CompositeItem-DERML8IO.js";import"./ToolbarRootContext-BWQ69sPa.js";import"./composite-DnSqe8X8.js";import"./svgIconContainer-D_6_keQ1.js";import"./PdfViewerSearchBar-Cgr-8m-c.js";import"./chevron-up-CBYfshmm.js";import"./chevron-down-vDvBpfK_.js";import"./cross-CVdfkFqF.js";import"./PdfViewerSidebar-C3t7oKRj.js";import"./index-hy5cmm3j.js";import"./index-CxKUFA2E.js";import"./index-18fnm7EA.js";import"./PdfViewerToolbar-BHsby7LT.js";import"./Button-Dz0Fa_jz.js";import"./chevron-right-Du9CPEt2.js";import"./Input-C00XXgL_.js";import"./search-DqELWH10.js";import"./spin-CXONpVyo.js";import"./error-a0jqZXnu.js";import"./withOsdkMetrics-FM_wpNGl.js";import"./makeExternalStore-CoHw-zti.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
