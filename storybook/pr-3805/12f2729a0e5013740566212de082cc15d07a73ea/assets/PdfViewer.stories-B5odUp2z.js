import{j as r,M as s}from"./iframe-D0RhBbJ7.js";import{P as p}from"./pdf-viewer-CTto6Ft3.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DXB11oms.js";import"./preload-helper-B4Xh17S2.js";import"./PdfRenderer-D6Gm9at_.js";import"./index-D2Roz-9u.js";import"./PdfViewer-afTR53mk.js";import"./PdfViewer.module.css-C6l8ZZcQ.js";import"./PdfViewerAnnotationLayer-CN3FzCep.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-gZ4-OwEX.js";import"./PdfViewerOutlineSidebar-CRlSIP3z.js";import"./PdfViewerSidebarHeader-BmqrAlsk.js";import"./useBaseUiId-T9aew-gX.js";import"./useControlled-BjciqBy6.js";import"./CompositeRoot-2VoQWKvj.js";import"./CompositeItem-BY-oynxC.js";import"./ToolbarRootContext-u1w7Gkl9.js";import"./composite-B8QHgAvj.js";import"./svgIconContainer-DuD4Mtb3.js";import"./PdfViewerSearchBar-DITKP88S.js";import"./chevron-up-GZw36zE5.js";import"./chevron-down-DHSkS5E6.js";import"./cross-BW6hDEvA.js";import"./PdfViewerSidebar-BRzgRZ9I.js";import"./index-CLNQopGb.js";import"./index-j6SYw05A.js";import"./index-CxHqbhkx.js";import"./PdfViewerToolbar-fcXcY_5W.js";import"./Button-DB4dzGoL.js";import"./chevron-right-CtcX8sZQ.js";import"./Input-CFIey-mK.js";import"./search-DRKOfXxF.js";import"./spin-DDG1WWVn.js";import"./error-CRtUKBZI.js";import"./withOsdkMetrics-B0Rjn456.js";import"./makeExternalStore-DPu8JMdK.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
