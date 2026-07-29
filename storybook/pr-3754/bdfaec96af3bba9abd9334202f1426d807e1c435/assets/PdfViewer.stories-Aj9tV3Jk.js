import{j as r,M as s}from"./iframe-Cpo2Lb7Q.js";import{P as p}from"./pdf-viewer-Ba9i-cbe.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-mA41_XXF.js";import"./preload-helper-BTyBDeYw.js";import"./PdfRenderer-CPIOCrhf.js";import"./index-DAIxb8lO.js";import"./PdfViewer-CzCGivec.js";import"./PdfViewer.module.css-BmqjA9XR.js";import"./PdfViewerAnnotationLayer-BNh9ITxd.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-WmKyQ8ZS.js";import"./PdfViewerOutlineSidebar-CjNGC0qx.js";import"./PdfViewerSidebarHeader-D09OSxhJ.js";import"./useBaseUiId-C71UhqfB.js";import"./useControlled-Du4CUvuR.js";import"./CompositeRoot-CCIA2lG3.js";import"./CompositeItem-Can9NOH7.js";import"./ToolbarRootContext-4YzqWCdW.js";import"./composite-lg9O8pjM.js";import"./svgIconContainer-CNBgUvgp.js";import"./PdfViewerSearchBar-Bj9vJI4Q.js";import"./chevron-up-B0XQFr4l.js";import"./chevron-down-BSTwpJrf.js";import"./cross-CZFyZqXF.js";import"./PdfViewerSidebar-wCKCGCkB.js";import"./index-DxrxQtdn.js";import"./index-P8ZVWR7P.js";import"./index-BzSe1Ywi.js";import"./PdfViewerToolbar-D9UYby2F.js";import"./Button-DvY2Q1-Z.js";import"./chevron-right-DgHtr72z.js";import"./Input-Cq3cg5h0.js";import"./search-81KRYPyx.js";import"./spin-ByuU1eKi.js";import"./error-C4NjMbrc.js";import"./withOsdkMetrics-j77wZ3nI.js";import"./makeExternalStore-Bmx7Tt0X.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
