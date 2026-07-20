import{j as r,M as s}from"./iframe-DT9j0dse.js";import{P as p}from"./pdf-viewer-BcKRx6la.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CZYoadS1.js";import"./preload-helper-CS6ZnhOo.js";import"./PdfRenderer-jjkCcTIg.js";import"./index-_oeWpIzU.js";import"./PdfViewer-T5GUdeWw.js";import"./PdfViewer.module.css-BwLm84R3.js";import"./PdfViewerAnnotationLayer-Cld8sQ83.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DWtkV7Kq.js";import"./PdfViewerOutlineSidebar-SRGpr4sK.js";import"./PdfViewerSidebarHeader-BDZ63bXw.js";import"./useBaseUiId-Dw_jGLyx.js";import"./useControlled-D9HvvuD8.js";import"./CompositeRoot-D--_DX9G.js";import"./CompositeItem-CyYlkIbz.js";import"./ToolbarRootContext-C2l5c9OB.js";import"./composite-CYwrF1Sd.js";import"./svgIconContainer-B46pfafK.js";import"./PdfViewerSearchBar-Df8Qm6nE.js";import"./chevron-up-pc20Kopv.js";import"./chevron-down-DUAJ1UeP.js";import"./cross-D8t5PTmZ.js";import"./PdfViewerSidebar-BdnDuNWv.js";import"./index-CzVU5LdN.js";import"./index-DC4s8G3k.js";import"./index-CteNZEY4.js";import"./PdfViewerToolbar-DHNbkPPr.js";import"./Button-B7sDvfv4.js";import"./chevron-right-z2ngs6i3.js";import"./Input-DvTRsVdv.js";import"./search-BqfLmDKn.js";import"./spin-zqV0WYsV.js";import"./error-jfnzqbY6.js";import"./withOsdkMetrics-7bJMqpje.js";import"./makeExternalStore-D7EguKd1.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
