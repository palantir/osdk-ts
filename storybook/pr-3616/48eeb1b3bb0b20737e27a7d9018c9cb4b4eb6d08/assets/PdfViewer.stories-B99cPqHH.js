import{j as r,M as s}from"./iframe-BgM7s6NU.js";import{P as p}from"./pdf-viewer-KKPW9vKd.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Cpxghm0C.js";import"./preload-helper-DgVGrWWk.js";import"./PdfRenderer-B313g82U.js";import"./index-BxYlfej2.js";import"./PdfViewer-DJqm655l.js";import"./PdfViewer.module.css-kvSg7nwO.js";import"./PdfViewerAnnotationLayer-B_AKSGIR.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CbKK5jsR.js";import"./PdfViewerOutlineSidebar-RgXD5LlJ.js";import"./PdfViewerSidebarHeader-BLyN5FUO.js";import"./useBaseUiId-CN6gEpIH.js";import"./useControlled-MG65Srm2.js";import"./CompositeRoot-BMQeoNId.js";import"./CompositeItem-CrmgCkQt.js";import"./ToolbarRootContext-BCyCuwMC.js";import"./composite-DOIGingi.js";import"./svgIconContainer-yByNBI5e.js";import"./PdfViewerSearchBar-Jo76HEUd.js";import"./chevron-up-BVLYgFje.js";import"./chevron-down-BwDFHFRh.js";import"./cross-Dmj7s9vC.js";import"./PdfViewerSidebar-DoH8DOIC.js";import"./index-W4gviOzE.js";import"./index-CipJaMI-.js";import"./index-o8A-H11s.js";import"./PdfViewerToolbar-C13LvfWR.js";import"./Button-DKbJ926h.js";import"./chevron-right-DdFFXDrt.js";import"./Input-D4IATUa3.js";import"./search-B4LU9bhP.js";import"./spin-DptXou1S.js";import"./error-CqOKc6wG.js";import"./withOsdkMetrics-Bfa6_rea.js";import"./makeExternalStore-DjI0JxPL.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
