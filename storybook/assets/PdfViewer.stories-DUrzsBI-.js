import{j as r,M as s}from"./iframe-Bqb8e56z.js";import{P as p}from"./pdf-viewer-DJFs3MB4.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-KsqSUZCo.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfRenderer-B8g8Nv4g.js";import"./index-CReoR6Ri.js";import"./PdfViewer-XD3CWwFW.js";import"./PdfViewer.module.css-CQ4XQhFc.js";import"./PdfViewerAnnotationLayer-pNb13zGI.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CAU35SIT.js";import"./PdfViewerOutlineSidebar-BJuNrP_T.js";import"./PdfViewerSidebarHeader-nQpFdLOR.js";import"./useBaseUiId-DZTItZ6G.js";import"./useControlled-D2VuLNB-.js";import"./CompositeRoot-CsEdNrD3.js";import"./CompositeItem-Be_PCj3i.js";import"./ToolbarRootContext-mnk_5yNn.js";import"./composite-CS1pQ03C.js";import"./svgIconContainer-F71y2enf.js";import"./PdfViewerSearchBar-DPmdPITX.js";import"./chevron-up-CBoL-fb4.js";import"./chevron-down-BYuW85L0.js";import"./cross-Fw1aZ42r.js";import"./PdfViewerSidebar-hmu8GqbI.js";import"./index-0XcjW038.js";import"./index-w_SXVmWn.js";import"./index-DQNPZVpa.js";import"./PdfViewerToolbar-DJ_AL5Jr.js";import"./Button-SSzBwglZ.js";import"./chevron-right-6vdff-iA.js";import"./Input-BSsr1nM6.js";import"./minus-BmgnG-lu.js";import"./search-D_zrQfhi.js";import"./spin-CfEj_i36.js";import"./error-BdOjo0Xa.js";import"./withOsdkMetrics-rvBRyKke.js";import"./makeExternalStore-D3mizy5p.js";const W={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const X=["Default"];export{o as Default,X as __namedExportsOrder,W as default};
