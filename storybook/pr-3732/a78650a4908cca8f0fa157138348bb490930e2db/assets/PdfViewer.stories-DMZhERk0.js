import{j as r,M as s}from"./iframe-BVFrXrYq.js";import{P as p}from"./pdf-viewer-CDyB8pGA.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BprRSRo6.js";import"./preload-helper-HXZr6wiN.js";import"./PdfRenderer-Kff_Q0VO.js";import"./index-DYfZu-Ee.js";import"./PdfViewer-D_MkGG0f.js";import"./PdfViewer.module.css-DQXpCrGh.js";import"./PdfViewerAnnotationLayer-DCYUR5UD.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-dMImK53L.js";import"./PdfViewerOutlineSidebar-BHf5-kQi.js";import"./PdfViewerSidebarHeader-wJ10ZBzN.js";import"./useBaseUiId-rUB46zhQ.js";import"./useControlled-DWUZNbgT.js";import"./CompositeRoot-DPfmMP78.js";import"./CompositeItem-CGK1pG4p.js";import"./ToolbarRootContext-C9c31ZG8.js";import"./composite-giO6rXsy.js";import"./svgIconContainer-iyTG0sGg.js";import"./PdfViewerSearchBar-CUj76-Us.js";import"./chevron-up-Djvsvmon.js";import"./chevron-down-CSaEu3Fq.js";import"./cross-D5G1I7-7.js";import"./PdfViewerSidebar-C75ymK3L.js";import"./index-BrQWPLKv.js";import"./index-CwOjfOXs.js";import"./index-Bc-PTka1.js";import"./PdfViewerToolbar-5M3IUKE5.js";import"./Button-ByKYiqBb.js";import"./chevron-right-DE61ZzIM.js";import"./Input-x53Ed6WS.js";import"./search-Ck_fv0WH.js";import"./spin-B0ARpB0p.js";import"./error-utCnBBOj.js";import"./withOsdkMetrics-J13aY73Y.js";import"./makeExternalStore-KFg2pyql.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
