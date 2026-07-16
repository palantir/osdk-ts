import{j as r,M as s}from"./iframe-anW6-Kv1.js";import{P as p}from"./pdf-viewer-CK3iqheG.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CnI8ORQb.js";import"./preload-helper-C7Pf2-ue.js";import"./PdfRenderer-4EdBWOA9.js";import"./index-DZWEciFV.js";import"./PdfViewer-DHm41gPV.js";import"./PdfViewer.module.css-BWjrMa0q.js";import"./PdfViewerAnnotationLayer-BTMgXRg1.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dbb0RkjH.js";import"./PdfViewerOutlineSidebar-B9T3gqxu.js";import"./PdfViewerSidebarHeader-BtG-MQOp.js";import"./useBaseUiId-BskUv227.js";import"./useControlled-DYLDqUrt.js";import"./CompositeRoot-wvocBqtO.js";import"./CompositeItem-DenTfmjz.js";import"./ToolbarRootContext-Cfe5oDAE.js";import"./composite-tY0gZ9xf.js";import"./svgIconContainer-CQ9JVNE9.js";import"./PdfViewerSearchBar-B7dt3Jg_.js";import"./chevron-up-CwJKpAem.js";import"./chevron-down-DVhXO3Vu.js";import"./cross-95il3B-S.js";import"./PdfViewerSidebar-CBYe8Cbs.js";import"./index-V2ILH22Z.js";import"./index-aYDmKqlu.js";import"./index-xdzVTZ5K.js";import"./PdfViewerToolbar-DqSNzkwe.js";import"./Button-BMtVMS_U.js";import"./chevron-right-M1KLmH8Y.js";import"./Input-pNBQT4IM.js";import"./search-CwkqZKHt.js";import"./spin-BwrkweuI.js";import"./error-us3TzVgj.js";import"./withOsdkMetrics-A7ayThPn.js";import"./makeExternalStore-8xOz0-jk.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
