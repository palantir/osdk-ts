import{j as r,M as s}from"./iframe-rflnhUL0.js";import{P as p}from"./pdf-viewer-hNjMJUWQ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B5OrEsTA.js";import"./preload-helper-JrW1tzuD.js";import"./PdfRenderer-BzTlKTLn.js";import"./index-CKEIJLZz.js";import"./PdfViewer-DlbBgwVB.js";import"./PdfViewer.module.css-Dqhauc2o.js";import"./PdfViewerAnnotationLayer-Ze59b2Un.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BbGlLUyt.js";import"./PdfViewerOutlineSidebar-DbzCpmQe.js";import"./PdfViewerSidebarHeader-DduLgCLP.js";import"./useBaseUiId-B-D920ll.js";import"./useControlled-pmT8hQxb.js";import"./CompositeRoot-BmA5EQMM.js";import"./CompositeItem--VYrNhIm.js";import"./ToolbarRootContext-DEPy0pOQ.js";import"./composite-DWpGM0Ys.js";import"./svgIconContainer-CfRMoYYm.js";import"./PdfViewerSearchBar-XQhb4ENW.js";import"./chevron-up-BV5Nu5QP.js";import"./chevron-down-DJU55j1c.js";import"./cross-DnlUR3uJ.js";import"./PdfViewerSidebar-t20XaPw9.js";import"./index-CVhEYDwD.js";import"./index-DskUz2s5.js";import"./index-Cmmo0Jm_.js";import"./PdfViewerToolbar-Cd3faZey.js";import"./Button-C3fC6A6m.js";import"./chevron-right-Bgn6R33g.js";import"./Input-DxO_QsKj.js";import"./search-Dbr7xQD1.js";import"./spin-EsoDE0IT.js";import"./error-CQhUr9EW.js";import"./withOsdkMetrics-KUKh2Lgy.js";import"./makeExternalStore-CT5u938L.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
