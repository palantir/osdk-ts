import{j as r,M as s}from"./iframe-BkwEqmSq.js";import{P as p}from"./pdf-viewer-D6rvKeS4.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DGFHvjm1.js";import"./preload-helper-MCr5wq_M.js";import"./PdfRenderer-DoKjQAxg.js";import"./index-DVW2Aiqe.js";import"./PdfViewer-CjfrdZDE.js";import"./PdfViewer.module.css-BL2L6hGF.js";import"./PdfViewerAnnotationLayer-ZWew0qL7.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DqorhRJk.js";import"./PdfViewerOutlineSidebar-CZA6F837.js";import"./PdfViewerSidebarHeader-DoBovp6A.js";import"./useBaseUiId-CVhcNOwH.js";import"./useControlled-Tz_Ckt-9.js";import"./CompositeRoot-CoTwofHI.js";import"./CompositeItem-B2o5Yurs.js";import"./ToolbarRootContext-Cf2pD7ow.js";import"./composite-DEnckzcf.js";import"./svgIconContainer-CB5tgpNi.js";import"./PdfViewerSearchBar-B6MepDNo.js";import"./chevron-up-uhRQydQu.js";import"./chevron-down-OyX7j9kx.js";import"./cross-B56sfghs.js";import"./PdfViewerSidebar-mhYXmPym.js";import"./index-DOxRJGP0.js";import"./index-CcQ72eda.js";import"./index-DRtYq8s7.js";import"./PdfViewerToolbar-C7DFX80R.js";import"./Button-BQo7qXQ1.js";import"./chevron-right-H-okKYrd.js";import"./Input-BtbblvMI.js";import"./search-DHn2yg3a.js";import"./spin-CuIVTJG7.js";import"./error-BxIC2Wcp.js";import"./withOsdkMetrics-B6cmau_u.js";import"./makeExternalStore-SZ3-wHy1.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
