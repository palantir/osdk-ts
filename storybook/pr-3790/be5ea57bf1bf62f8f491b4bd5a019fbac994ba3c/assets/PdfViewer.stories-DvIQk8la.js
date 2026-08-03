import{j as r,M as s}from"./iframe-ByDFxc6J.js";import{P as p}from"./pdf-viewer-BS4jf4jf.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DUzGmhbE.js";import"./preload-helper-DsAHu_tG.js";import"./PdfRenderer-CjinxLmC.js";import"./index-COrglkMl.js";import"./PdfViewer-DqY3ZN3O.js";import"./PdfViewer.module.css-DZ1uqqMf.js";import"./PdfViewerAnnotationLayer-CMUhpCIw.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DPNxzDh-.js";import"./PdfViewerOutlineSidebar-DsBGh_N3.js";import"./PdfViewerSidebarHeader-CND32GJU.js";import"./useBaseUiId-D3OL8vQs.js";import"./useControlled-Ci-xyBbB.js";import"./CompositeRoot-BdFLD7I3.js";import"./CompositeItem-2RzmuieV.js";import"./ToolbarRootContext-BIWqFB3h.js";import"./composite-Cwm4Y6dc.js";import"./svgIconContainer-Cdl4pzn_.js";import"./PdfViewerSearchBar-C6FT8kQU.js";import"./chevron-up-B_l3k6Yl.js";import"./chevron-down-E23zrlQO.js";import"./cross-w3hxXSvD.js";import"./PdfViewerSidebar-DtCupu-2.js";import"./index-BBAKdsvN.js";import"./index-B9guDax2.js";import"./index-Bc4TUgst.js";import"./PdfViewerToolbar-pjGQbJMj.js";import"./Button-m3_edGWL.js";import"./chevron-right-DhhwG-6_.js";import"./Input-DDk9us9b.js";import"./search-DGeK7c1j.js";import"./spin-DuLUTN92.js";import"./error-C9F6tpCk.js";import"./withOsdkMetrics-Du8BWQXf.js";import"./makeExternalStore-E2xf1luR.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
