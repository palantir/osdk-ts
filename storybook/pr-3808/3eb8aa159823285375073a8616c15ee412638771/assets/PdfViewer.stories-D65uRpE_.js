import{j as r,M as s}from"./iframe-CPz4EE4b.js";import{P as p}from"./pdf-viewer-DsXUYQQW.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BWm7rw3P.js";import"./preload-helper-BF9ZU9L2.js";import"./PdfRenderer-Bpz1mtH-.js";import"./index-DPQnz2kY.js";import"./PdfViewer-BcSJ01fH.js";import"./PdfViewer.module.css-BTIP6VVK.js";import"./PdfViewerAnnotationLayer-C-Xjd8qn.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BwdUDZ93.js";import"./PdfViewerOutlineSidebar-CKOQtT5M.js";import"./PdfViewerSidebarHeader-CGD9o_Ii.js";import"./useBaseUiId-DA8N-Cu-.js";import"./useControlled-CcD5XhNi.js";import"./CompositeRoot-C5EfbjfA.js";import"./CompositeItem-DCP0DZpD.js";import"./ToolbarRootContext-BXV7NB_D.js";import"./composite-DC2iaAhD.js";import"./svgIconContainer-DvQDx7ps.js";import"./PdfViewerSearchBar-DyzDOa-o.js";import"./chevron-up-Ch2roQXK.js";import"./chevron-down-BgJNP9vx.js";import"./cross-B6wcH7NV.js";import"./PdfViewerSidebar-DmBk-wvE.js";import"./index-8dkGhFzU.js";import"./index-YkFTybZ5.js";import"./index-CJDK8JNQ.js";import"./PdfViewerToolbar-Dij_PbFN.js";import"./Button-C0KwGN38.js";import"./chevron-right-Ba7qQa7D.js";import"./Input-BPvVCqJh.js";import"./search-CXWbO0Ru.js";import"./spin-D3hhoUS1.js";import"./error-CgKzZzah.js";import"./withOsdkMetrics-CPx-A9BJ.js";import"./makeExternalStore-CPJA5Zb3.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
