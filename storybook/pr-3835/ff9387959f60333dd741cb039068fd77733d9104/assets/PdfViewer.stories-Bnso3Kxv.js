import{j as r,M as s}from"./iframe-tdx6Uf_P.js";import{P as p}from"./pdf-viewer-BH0RQytb.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BuW9j4fn.js";import"./preload-helper-B_he2lyp.js";import"./PdfRenderer-6Wyatb0E.js";import"./index-4qw7cdU-.js";import"./PdfViewer-DSdwAFJt.js";import"./PdfViewer.module.css-DahGt2io.js";import"./PdfViewerAnnotationLayer-Dn3BlmnC.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-ZU72GkF7.js";import"./PdfViewerOutlineSidebar-CaLBBPSv.js";import"./PdfViewerSidebarHeader-CYdIOGB3.js";import"./useBaseUiId-9iypYP_V.js";import"./useControlled-xMZoIalt.js";import"./CompositeRoot-DiEVg1kw.js";import"./CompositeItem-CgbzO3VR.js";import"./ToolbarRootContext-DgAPui9g.js";import"./composite-CabNVbdx.js";import"./svgIconContainer-CU1572n2.js";import"./PdfViewerSearchBar-DRarZRVk.js";import"./chevron-up-DhOayR1Q.js";import"./chevron-down-BnN32e5h.js";import"./cross-DO9nY1S8.js";import"./PdfViewerSidebar-E720q2kv.js";import"./index-D33Cjobj.js";import"./index-CGb-0Bhb.js";import"./index-Bc3aW3nV.js";import"./PdfViewerToolbar-CkkgPKrd.js";import"./Button-CSckS2t3.js";import"./chevron-right-B0LhLNL1.js";import"./Input-xHgbyYEO.js";import"./search-CH-DUc6I.js";import"./spin-OlmJZqwx.js";import"./error-Cf_wRazy.js";import"./withOsdkMetrics-ycYz0MI_.js";import"./makeExternalStore-DGM9c3Eo.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
