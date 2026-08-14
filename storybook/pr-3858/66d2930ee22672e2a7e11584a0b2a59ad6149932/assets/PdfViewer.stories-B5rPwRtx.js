import{j as r,M as s}from"./iframe-BRo99t7B.js";import{P as p}from"./pdf-viewer-L6xGsNhR.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BguK7_Ug.js";import"./preload-helper-CigqD04b.js";import"./PdfViewer-CXrKJazg.js";import"./index-R8YjK2xc.js";import"./BasePdfViewer-D16Cb2PS.js";import"./BasePdfViewer.module.css-D-vzVU8X.js";import"./PdfViewerAnnotationLayer-Dm4BVlLc.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BJFKAsJn.js";import"./PdfViewerOutlineSidebar-DZseq9ib.js";import"./PdfViewerSidebarHeader-B8uSiccL.js";import"./useBaseUiId-BSnWm0Ty.js";import"./useControlled-nWezCynf.js";import"./CompositeRoot-B6v9PZhW.js";import"./CompositeItem-D0ZY96tK.js";import"./ToolbarRootContext-CXGtLwjz.js";import"./composite-DVnIZAH7.js";import"./svgIconContainer-BQOaCuBG.js";import"./PdfViewerSearchBar-zFWOrxic.js";import"./chevron-up-DRsCLc8v.js";import"./chevron-down-_xL6OTaR.js";import"./cross-CDIMFWJV.js";import"./PdfViewerSidebar-DwIjAZRt.js";import"./index-CB_jfM4i.js";import"./index-CGghKiPn.js";import"./index-Duc0FtTv.js";import"./PdfViewerToolbar-yfyznvGI.js";import"./Button-BkY4eupJ.js";import"./chevron-right-hTXfFjVT.js";import"./Input-DcSDPPuu.js";import"./search-GQ4U1QoP.js";import"./spin-BzqouW4O.js";import"./error-DCHg5wYe.js";import"./withOsdkMetrics-CbR5n7Rt.js";import"./makeExternalStore-BmrHbVoq.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
