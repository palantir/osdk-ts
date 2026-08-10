import{j as r,M as s}from"./iframe-W7klRwPo.js";import{P as p}from"./pdf-viewer-GlRQn89s.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Cws8Cwgj.js";import"./preload-helper-DzzVRHA1.js";import"./PdfRenderer-DhAb89JG.js";import"./index-DqAaMvOx.js";import"./PdfViewer-CBeCpvbr.js";import"./PdfViewer.module.css-DG3OkNs-.js";import"./PdfViewerAnnotationLayer-CLneqfkf.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D_L7BTpq.js";import"./PdfViewerOutlineSidebar-CGIw-sin.js";import"./PdfViewerSidebarHeader-CuqdwqwF.js";import"./useBaseUiId-CmsqdJ-e.js";import"./useControlled-D-e4oaL6.js";import"./CompositeRoot-BV4kjky4.js";import"./CompositeItem-Dn5gqGcd.js";import"./ToolbarRootContext-pxZkIimq.js";import"./composite-C2wWpGQA.js";import"./svgIconContainer-CavRQoS6.js";import"./PdfViewerSearchBar-7bbVCfXt.js";import"./chevron-up-_V4rXeXu.js";import"./chevron-down-C5eusy-A.js";import"./cross-CVS5175r.js";import"./PdfViewerSidebar-BmOELA1-.js";import"./index-CybiIO96.js";import"./index-f5L3Ve5D.js";import"./index-BjtQcmRh.js";import"./PdfViewerToolbar-KvdtLAaa.js";import"./Button-Djh2cg4Z.js";import"./chevron-right-CqbHZRsI.js";import"./Input-e9mOs_hp.js";import"./search-C0IxMrHh.js";import"./spin-DJdduNhp.js";import"./error-BkwKplka.js";import"./withOsdkMetrics-wjgZ6riq.js";import"./makeExternalStore-CKtLXmhF.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
