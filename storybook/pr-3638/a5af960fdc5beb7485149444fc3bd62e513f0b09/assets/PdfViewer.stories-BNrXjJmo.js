import{j as r,M as s}from"./iframe-D19FdeZ5.js";import{P as p}from"./pdf-viewer-DiP1bOTq.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B8g9at9n.js";import"./preload-helper-DDgU7gWw.js";import"./PdfRenderer-1Wcn60xa.js";import"./index-C-JUZCdg.js";import"./PdfViewer-ADpkB2sF.js";import"./PdfViewer.module.css-sH739tM5.js";import"./PdfViewerAnnotationLayer-Clk1-fcC.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DI8s7tXK.js";import"./PdfViewerOutlineSidebar-BdaZ3kWS.js";import"./PdfViewerSidebarHeader-Bg7hpu9N.js";import"./useBaseUiId-_B9PHlWX.js";import"./useControlled-CxhSZM1o.js";import"./CompositeRoot-D3DRJFh6.js";import"./CompositeItem-CSYndqI1.js";import"./ToolbarRootContext-sKIqKh9d.js";import"./composite-D5RWh6v2.js";import"./svgIconContainer-DbVS29Tz.js";import"./PdfViewerSearchBar-DAxYHblg.js";import"./chevron-up-BI_ip_kO.js";import"./chevron-down-DHPcNjce.js";import"./cross-CBMojWZK.js";import"./PdfViewerSidebar-DtQc1fA6.js";import"./index-CERxgRVL.js";import"./index-SiZiara9.js";import"./index-EjE6FTTb.js";import"./PdfViewerToolbar-g3ZJMBav.js";import"./Button-BJ-VtjQ9.js";import"./chevron-right-6ltfjGA7.js";import"./Input-DqW8AQJb.js";import"./search-DuawIE4c.js";import"./spin-iVGKwpIx.js";import"./error-D781TkmO.js";import"./withOsdkMetrics-DprP80WS.js";import"./makeExternalStore-UvIRmA59.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
