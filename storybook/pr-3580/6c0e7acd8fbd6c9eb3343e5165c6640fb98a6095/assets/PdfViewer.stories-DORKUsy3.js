import{j as r,M as s}from"./iframe-DjNcwtyF.js";import{P as p}from"./pdf-viewer-BaMEAumg.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BUmYduU2.js";import"./preload-helper-BlurYcsu.js";import"./PdfRenderer-_z9u1YZF.js";import"./index-DlfDEuMy.js";import"./PdfViewer-Cr6Xla_S.js";import"./PdfViewer.module.css-DGsyqtLd.js";import"./PdfViewerAnnotationLayer-B1bt7lG9.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-YeXBNOHy.js";import"./PdfViewerOutlineSidebar-DsyK2-x-.js";import"./PdfViewerSidebarHeader-j0rGY0im.js";import"./useBaseUiId-DtQ8itjz.js";import"./useControlled-BCOo9PsH.js";import"./CompositeRoot-CMA7CHgw.js";import"./CompositeItem-p5N-XohV.js";import"./ToolbarRootContext-B_JSm_wM.js";import"./composite-_Zi5hsVn.js";import"./svgIconContainer-BloETKks.js";import"./PdfViewerSearchBar-qVof3BT8.js";import"./chevron-up-DOttWbU2.js";import"./chevron-down-BxaO6vl0.js";import"./cross-CAGDORQd.js";import"./PdfViewerSidebar-BzPa0gwG.js";import"./index-D7aQe20D.js";import"./index-Wa1RvSxW.js";import"./index-C10Nkt1X.js";import"./PdfViewerToolbar-CO9UKPQq.js";import"./Button-Cq8fAgAs.js";import"./chevron-right-DMz7bo23.js";import"./Input-Bab10rEQ.js";import"./search-BkTLS9-p.js";import"./spin-CTskz9Tm.js";import"./error-BlJ5qp7I.js";import"./withOsdkMetrics-BrijnFac.js";import"./makeExternalStore-C1qBq1rw.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
