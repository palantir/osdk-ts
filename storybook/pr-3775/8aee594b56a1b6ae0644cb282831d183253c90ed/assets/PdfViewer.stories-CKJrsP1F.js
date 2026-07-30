import{j as r,M as s}from"./iframe-oJ2FO9gh.js";import{P as p}from"./pdf-viewer-CAPbf-5M.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DsJZ0Q3s.js";import"./preload-helper-CvpglEc3.js";import"./PdfRenderer-CyI9FX4V.js";import"./index-BV7N8IQq.js";import"./PdfViewer-DeaR6Nz6.js";import"./PdfViewer.module.css-BFjWvkXI.js";import"./PdfViewerAnnotationLayer-4NwCGRaY.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DBChoQXZ.js";import"./PdfViewerOutlineSidebar-DRIAYPHj.js";import"./PdfViewerSidebarHeader-BWcxY74g.js";import"./useBaseUiId--8htrZkx.js";import"./useControlled-C3SPN_RN.js";import"./CompositeRoot-D6o5WZY0.js";import"./CompositeItem-Dq5Pjrzb.js";import"./ToolbarRootContext-KIChva0u.js";import"./composite-DNBMgSTn.js";import"./svgIconContainer-DrpVPmB5.js";import"./PdfViewerSearchBar-BFt20I3a.js";import"./chevron-up-CsoNf0vg.js";import"./chevron-down-Ba4HOL7F.js";import"./cross-JrXM6Q4E.js";import"./PdfViewerSidebar-DWODXdzF.js";import"./index-Bm7cqmq_.js";import"./index-Cc835WrV.js";import"./index-Cs1NT0zx.js";import"./PdfViewerToolbar-DutkG0ri.js";import"./Button-f6PsM82T.js";import"./chevron-right-CfbkFPhW.js";import"./Input-Bnt9eVNU.js";import"./search-YW5i8NVp.js";import"./spin-30sKG_HK.js";import"./error-B9ewsirH.js";import"./withOsdkMetrics-BAaL3YVb.js";import"./makeExternalStore-D6lsgFI3.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
