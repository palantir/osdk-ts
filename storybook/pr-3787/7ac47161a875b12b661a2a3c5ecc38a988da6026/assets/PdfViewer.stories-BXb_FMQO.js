import{j as r,M as s}from"./iframe-B312ejAg.js";import{P as p}from"./pdf-viewer-DJzqH4K7.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B2bn5oMv.js";import"./preload-helper-y_TwqfdY.js";import"./PdfRenderer-CJDNMaLJ.js";import"./index-M8CqzHEe.js";import"./PdfViewer-BK0AdYAs.js";import"./PdfViewer.module.css-CwrXy6V4.js";import"./PdfViewerAnnotationLayer-DRevQNef.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D-hKSC7-.js";import"./PdfViewerOutlineSidebar-Cof8NPv4.js";import"./PdfViewerSidebarHeader-CuRZcmHJ.js";import"./useBaseUiId-anpR_KLF.js";import"./useControlled-Dbu3jRTE.js";import"./CompositeRoot-CcnEhXt3.js";import"./CompositeItem-B5kZOPHG.js";import"./ToolbarRootContext-CZlcd-GQ.js";import"./composite-EvWupaEF.js";import"./svgIconContainer-CzNhgEtv.js";import"./PdfViewerSearchBar-CegmHnTj.js";import"./chevron-up-C4ibNhIy.js";import"./chevron-down-DR1l8zQy.js";import"./cross-fdsbY64l.js";import"./PdfViewerSidebar-DJeFZ5NN.js";import"./index-OifC9Xwy.js";import"./index-Cf0quKT1.js";import"./index-DAOTkIj1.js";import"./PdfViewerToolbar-BCQlQCcn.js";import"./Button-CREGuHb1.js";import"./chevron-right-Dhq9W6CJ.js";import"./Input-hV3H3zUc.js";import"./search-DkAQ0ID2.js";import"./spin-BM2o_vtP.js";import"./error-CcgwDgNh.js";import"./withOsdkMetrics-BvU1ehSn.js";import"./makeExternalStore-UZoMjkrc.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
