import{j as r,M as s}from"./iframe-DRvkx6EA.js";import{P as p}from"./pdf-viewer-CrIGNe0o.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Bv8LNB0k.js";import"./preload-helper-BhyZ3nJx.js";import"./PdfRenderer-CqyhYfn7.js";import"./index-L1UV-AGh.js";import"./PdfViewer-CQgfm_1V.js";import"./PdfViewer.module.css-oKtwSMgT.js";import"./PdfViewerAnnotationLayer-Dh_nCpka.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BniZRg41.js";import"./PdfViewerOutlineSidebar-DAbEHqen.js";import"./PdfViewerSidebarHeader-pdXtRXMH.js";import"./useBaseUiId-BUt3PNYZ.js";import"./useControlled-CGkNej65.js";import"./CompositeRoot-BKX8N_iu.js";import"./CompositeItem-dZ8Gs4gk.js";import"./ToolbarRootContext-BNhBTPnD.js";import"./composite-C22uJ7fn.js";import"./svgIconContainer-CJyvIw8C.js";import"./PdfViewerSearchBar-JQqWR8Lr.js";import"./chevron-up-BxRhVDsV.js";import"./chevron-down-CVLOcSCE.js";import"./cross-3oIIwt46.js";import"./PdfViewerSidebar-CFrM8j4i.js";import"./index-CJP3bEHO.js";import"./index-B_NabjnV.js";import"./index-B-a3URan.js";import"./PdfViewerToolbar-B4VFBF4s.js";import"./Button-CQpi19yq.js";import"./chevron-right-Cjg1ZFNK.js";import"./Input-BYnQBqlk.js";import"./search-N-0jef5s.js";import"./spin-Dc0XP_JB.js";import"./error-DPz_nmti.js";import"./withOsdkMetrics-GVKSYvIi.js";import"./makeExternalStore-CHxLaRQK.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
