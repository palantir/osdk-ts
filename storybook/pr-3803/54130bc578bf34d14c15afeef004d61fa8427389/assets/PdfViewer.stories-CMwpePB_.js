import{j as r,M as s}from"./iframe-S-vStvKN.js";import{P as p}from"./pdf-viewer-C4kPNoO6.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-d9F_z_oh.js";import"./preload-helper-BJgwrY7C.js";import"./PdfRenderer-ull2KnVO.js";import"./index-CbjwQjV5.js";import"./PdfViewer-BClRR7tz.js";import"./PdfViewer.module.css-DnzQaOhl.js";import"./PdfViewerAnnotationLayer-D6goYZpH.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CAxnddKu.js";import"./PdfViewerOutlineSidebar-7BDSO75u.js";import"./PdfViewerSidebarHeader-BDdE0fLO.js";import"./useBaseUiId-C0o_RGcW.js";import"./useControlled-C5Iajxos.js";import"./CompositeRoot-DQs5aDcl.js";import"./CompositeItem-DeNKjXbZ.js";import"./ToolbarRootContext-CfVJoQTt.js";import"./composite-wryo-yVl.js";import"./svgIconContainer-BJmrTafn.js";import"./PdfViewerSearchBar-H5NsB1e4.js";import"./chevron-up-BGR1zClM.js";import"./chevron-down-BMmYWNJW.js";import"./cross-BYqG8NZ_.js";import"./PdfViewerSidebar-BPxrT9RI.js";import"./index-CPqJNuLS.js";import"./index-BSoJFv-J.js";import"./index-BAYRy6lS.js";import"./PdfViewerToolbar-7aZMHJoo.js";import"./Button-DDxw7Nns.js";import"./chevron-right-CmsYkEyC.js";import"./Input-BSmAlFZc.js";import"./search-C-pD2cWO.js";import"./spin-ZWlN1fUP.js";import"./error-RAN2hlFn.js";import"./withOsdkMetrics-CLaWF8BQ.js";import"./makeExternalStore-BfGL_RoB.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
