import{j as r,M as s}from"./iframe-B4UcJlUn.js";import{P as p}from"./pdf-viewer-XuiQ6xK3.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-l-qgVKCE.js";import"./preload-helper-nCBdWicC.js";import"./PdfRenderer-Bn4EVt22.js";import"./index-C8ef4t-Z.js";import"./PdfViewer-D7dnFrYH.js";import"./PdfViewer.module.css-BP4rgne1.js";import"./PdfViewerAnnotationLayer-CLCsrJhb.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-tUZ9U4N7.js";import"./PdfViewerOutlineSidebar-BRgHlFR-.js";import"./PdfViewerSidebarHeader-BXMtBla_.js";import"./useBaseUiId-B5hZssna.js";import"./useControlled-Bi9AY8b2.js";import"./CompositeRoot-CKEPNDuc.js";import"./CompositeItem-BH6AHNlU.js";import"./ToolbarRootContext-Dvnv9LkO.js";import"./composite-C7ayO821.js";import"./svgIconContainer-jV7YtvQC.js";import"./PdfViewerSearchBar-BuAAV318.js";import"./chevron-up-dbt7498-.js";import"./chevron-down-CeZmVDL8.js";import"./cross-CDlzpv2a.js";import"./PdfViewerSidebar-DD3mLa-0.js";import"./index-CJtYrTIY.js";import"./index-9mx_yRh-.js";import"./index-B9KiQzXE.js";import"./PdfViewerToolbar-D7_VeblK.js";import"./Button-BadEAtWa.js";import"./chevron-right-DLrvMMhE.js";import"./Input-eMNIp8tt.js";import"./search-BUVwFVg8.js";import"./spin-C_qCoF-G.js";import"./error-CwHD_sRR.js";import"./withOsdkMetrics-BsIweO9h.js";import"./makeExternalStore-CeFMygCV.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
