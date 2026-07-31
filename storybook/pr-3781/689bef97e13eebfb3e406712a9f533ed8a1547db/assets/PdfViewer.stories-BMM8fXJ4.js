import{j as r,M as s}from"./iframe-CVw8lT_p.js";import{P as p}from"./pdf-viewer-BySBLNhA.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BzflnvbC.js";import"./preload-helper-39HDiriG.js";import"./PdfRenderer-Cb5fBb00.js";import"./index-seJCcwx0.js";import"./PdfViewer-CtQ87WsI.js";import"./PdfViewer.module.css-CvZh9815.js";import"./PdfViewerAnnotationLayer-BO38jV7x.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-1wWrUJpd.js";import"./PdfViewerOutlineSidebar-CSfrHBbR.js";import"./PdfViewerSidebarHeader-BQbZUA_Y.js";import"./useBaseUiId-DX7AvzL6.js";import"./useControlled-BjfgiGuC.js";import"./CompositeRoot-b8lJclG0.js";import"./CompositeItem-DWFZqP11.js";import"./ToolbarRootContext-CDJpuj06.js";import"./composite-02otrQol.js";import"./svgIconContainer-j0iPz0xP.js";import"./PdfViewerSearchBar-BDAv40ZS.js";import"./chevron-up-CZxr1E0O.js";import"./chevron-down-BYHRqgTY.js";import"./cross-CKjM0IJA.js";import"./PdfViewerSidebar-DdZQbIEW.js";import"./index-B0nXunlt.js";import"./index-DOrwx4ox.js";import"./index-BV9_SaTX.js";import"./PdfViewerToolbar-D2SkbISk.js";import"./Button-DDnd28Ua.js";import"./chevron-right-C0l4uu6M.js";import"./Input-aUjsDD_S.js";import"./search-B9c9IUJL.js";import"./spin-CDxGt-7K.js";import"./error-70eabRvD.js";import"./withOsdkMetrics-B0amdy6Q.js";import"./makeExternalStore-DJnA5Pzt.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
