import{j as r,M as s}from"./iframe-BgcQ9h4y.js";import{P as p}from"./pdf-viewer-C03642jb.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-qe4i9xK8.js";import"./preload-helper-DtmsntH8.js";import"./PdfRenderer-DS8Dc4Iz.js";import"./index-BQd_JZY0.js";import"./PdfViewer-k-UEJQq9.js";import"./PdfViewer.module.css-CZ8LLZoA.js";import"./PdfViewerAnnotationLayer-3zKjpqqL.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-2oKXVJu5.js";import"./PdfViewerOutlineSidebar-DQHMYxAH.js";import"./PdfViewerSidebarHeader-BPWthClP.js";import"./useBaseUiId-Cy1K6eVD.js";import"./useControlled-ByWRwYD5.js";import"./CompositeRoot-D5dG-YVN.js";import"./CompositeItem-D0WL-5ct.js";import"./ToolbarRootContext-P5Z4VtM1.js";import"./composite-BFXF1QD6.js";import"./svgIconContainer-Bte_bcu8.js";import"./PdfViewerSearchBar-Dg4f0Sg8.js";import"./chevron-up-DEkXTuw4.js";import"./chevron-down-JsT-GO6_.js";import"./cross-BKkH7W-I.js";import"./PdfViewerSidebar-aB129Nv_.js";import"./index-BPS6XYpJ.js";import"./index-DlQl1oZE.js";import"./index-82HpqR86.js";import"./PdfViewerToolbar-DF97VdXL.js";import"./Button-CDKRHZ9u.js";import"./chevron-right-BO8p5wM1.js";import"./Input-BDGeHby0.js";import"./search-VzUopX3G.js";import"./spin-KXfCEe5B.js";import"./error-887l69um.js";import"./withOsdkMetrics-C3WzTARe.js";import"./makeExternalStore-BKJUWcYF.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
