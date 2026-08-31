import{j as r,M as s}from"./iframe-CJA1xNbf.js";import{P as p}from"./pdf-viewer-w8FdAkSR.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D2zA8S7H.js";import"./preload-helper-C2luW4zJ.js";import"./PdfViewer-CQf9pnYn.js";import"./index-C-8NmWLG.js";import"./BasePdfViewer-AqWjoU07.js";import"./BasePdfViewer.module.css-CtXGsyEb.js";import"./PdfViewerAnnotationLayer-DNIXansd.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DbVQCoC3.js";import"./PdfViewerOutlineSidebar-c5WYiyI-.js";import"./PdfViewerSidebarHeader-CFskt9CL.js";import"./useBaseUiId-BvJ2qcSN.js";import"./useControlled-Cw0VkJXd.js";import"./CompositeRoot-DkUXQBgO.js";import"./CompositeItem-DEmGmvGp.js";import"./ToolbarRootContext-sfA9hU9w.js";import"./composite-DOttNt49.js";import"./svgIconContainer-CbX6k65p.js";import"./PdfViewerSearchBar-BlFd1sOI.js";import"./chevron-up-BINIMOu0.js";import"./chevron-down-CisS9nHL.js";import"./cross-CQqjvK9t.js";import"./PdfViewerSidebar-BcN2igxa.js";import"./index-CoZeC-uo.js";import"./index-DnzCeTgw.js";import"./index-COLkTz0A.js";import"./PdfViewerToolbar-DD7jDWjj.js";import"./Button-vRCY7Tct.js";import"./chevron-right-CMsfIdol.js";import"./Input-BEw3OBGr.js";import"./search-BEFnIjoY.js";import"./spin-ZbxgUQV0.js";import"./error-BRaZ14N8.js";import"./withOsdkMetrics-CqtplnYL.js";import"./makeExternalStore-C0IKfOCn.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
