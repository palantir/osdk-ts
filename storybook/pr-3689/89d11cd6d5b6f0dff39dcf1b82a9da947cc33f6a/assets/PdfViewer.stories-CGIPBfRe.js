import{j as r,M as s}from"./iframe-BwUhqCha.js";import{P as p}from"./pdf-viewer-LKjY7cVD.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DLj209dp.js";import"./preload-helper-Co1LY0h5.js";import"./PdfRenderer-CVOhdA_d.js";import"./index-CE6gam3r.js";import"./PdfViewer-BDnAsO-q.js";import"./PdfViewer.module.css-BxlA5ZlY.js";import"./PdfViewerAnnotationLayer-ChC7nH60.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CjA-4vtO.js";import"./PdfViewerOutlineSidebar-ATQMiQvW.js";import"./PdfViewerSidebarHeader-COjXwgfd.js";import"./useBaseUiId-DQ4lMAbK.js";import"./useControlled-C4Euwqkt.js";import"./CompositeRoot-Co2SL-Sj.js";import"./CompositeItem-4yr6biJB.js";import"./ToolbarRootContext-C9Cr-bZn.js";import"./composite-CRoeB7O4.js";import"./svgIconContainer-DS5qCVWC.js";import"./PdfViewerSearchBar-Cv4JwkIE.js";import"./chevron-up-CAOg-reJ.js";import"./chevron-down-BO5XFDgA.js";import"./cross-DXeJR9Kc.js";import"./PdfViewerSidebar-BI3QbbJ0.js";import"./index-BMfBpXQH.js";import"./index-Dff1cT5m.js";import"./index-oRK7HinW.js";import"./PdfViewerToolbar-1S98dYQy.js";import"./Button-olWJl-1Y.js";import"./chevron-right-vs5dy_um.js";import"./Input-DBfhJfYQ.js";import"./search-DVnuDMkg.js";import"./spin-DJ-s2zlh.js";import"./error-CuXNzXqG.js";import"./withOsdkMetrics-DGwO1-Lc.js";import"./makeExternalStore-BhQfOl-y.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
