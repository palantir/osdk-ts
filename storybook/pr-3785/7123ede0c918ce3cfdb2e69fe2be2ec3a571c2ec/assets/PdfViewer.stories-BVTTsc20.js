import{j as r,M as s}from"./iframe-Bf2U0wCC.js";import{P as p}from"./pdf-viewer-COXNRwyE.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CHRllIld.js";import"./preload-helper-B7BTsDqe.js";import"./PdfRenderer-4J-T3JfB.js";import"./index-DTioBO_V.js";import"./PdfViewer-BSgulmJo.js";import"./PdfViewer.module.css-DlObF2S4.js";import"./PdfViewerAnnotationLayer-BLwP53Z_.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BSGmP8zW.js";import"./PdfViewerOutlineSidebar-CrYX3Atd.js";import"./PdfViewerSidebarHeader-B2wkMNCa.js";import"./useBaseUiId-9mx6zIx7.js";import"./useControlled-Bdm8AXhj.js";import"./CompositeRoot-DevkKQU_.js";import"./CompositeItem-IczX1adk.js";import"./ToolbarRootContext-DJE5EDVH.js";import"./composite-CuGbenFt.js";import"./svgIconContainer-DpvB8Y2n.js";import"./PdfViewerSearchBar-C66nzp8n.js";import"./chevron-up-D_ts1FpW.js";import"./chevron-down-CYc3xdZN.js";import"./cross-DV8e5TBd.js";import"./PdfViewerSidebar-C2vyUWr9.js";import"./index-xzJ-XSgN.js";import"./index-CCvKupVl.js";import"./index-B_wOLzlx.js";import"./PdfViewerToolbar-DXLUddFh.js";import"./Button-ZT6AtrIL.js";import"./chevron-right-DiWKvnfX.js";import"./Input-DHFhxehL.js";import"./search-CSich7qy.js";import"./spin-Cu3M3FTE.js";import"./error-p0-ItGgy.js";import"./withOsdkMetrics-DiupHODT.js";import"./makeExternalStore-SEqUXvVt.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
