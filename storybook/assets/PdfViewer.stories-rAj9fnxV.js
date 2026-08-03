import{j as r,M as s}from"./iframe-BZPmmk4P.js";import{P as p}from"./pdf-viewer-VWZPyGYA.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-do9Gm-tP.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfRenderer-B1KLB0_a.js";import"./index-YprcwoL3.js";import"./PdfViewer-CUvKBB5Z.js";import"./PdfViewer.module.css-DwV6dSwH.js";import"./PdfViewerAnnotationLayer-c8FKj9cr.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CvdB3TSw.js";import"./PdfViewerOutlineSidebar-7N6oWmtw.js";import"./PdfViewerSidebarHeader-BeJ_ETAy.js";import"./useBaseUiId-DlX5x9RU.js";import"./useControlled-wsohqWtM.js";import"./CompositeRoot-CGjE8xh7.js";import"./CompositeItem-Bc6vhKBa.js";import"./ToolbarRootContext-D0N7lU5l.js";import"./composite-CLHhRxo7.js";import"./svgIconContainer-B4NoFBSG.js";import"./PdfViewerSearchBar-C-2HQkV2.js";import"./chevron-up-BtK6FZIk.js";import"./chevron-down-D5amVYwn.js";import"./cross-DFdy-FQA.js";import"./PdfViewerSidebar-CA8YRZLP.js";import"./index-BzfQ8r3a.js";import"./index-CIOjucrA.js";import"./index-DA0MCU0C.js";import"./PdfViewerToolbar-6rAfNspO.js";import"./Button-DcV7IA-r.js";import"./chevron-right-yePqFS-2.js";import"./Input-dytyLcfC.js";import"./search-Dsvd_0gV.js";import"./spin-B1j0qokM.js";import"./error-Ctnqq7qU.js";import"./withOsdkMetrics-B48JLbxj.js";import"./makeExternalStore-CZiN_ybo.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
