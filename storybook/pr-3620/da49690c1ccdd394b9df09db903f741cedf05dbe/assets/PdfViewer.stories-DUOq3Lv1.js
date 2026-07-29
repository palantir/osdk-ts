import{j as r,M as s}from"./iframe-Bvc3GqwO.js";import{P as p}from"./pdf-viewer-k0wGGFCV.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-my1Hlri7.js";import"./preload-helper-B0t1EL9b.js";import"./PdfRenderer-0kWWCrW6.js";import"./index-Xuw5gDJk.js";import"./PdfViewer-Cr53P7Wp.js";import"./PdfViewer.module.css-CQ17a7mQ.js";import"./PdfViewerAnnotationLayer-DJpywMcj.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CEYxKSOA.js";import"./PdfViewerOutlineSidebar-5zSeeFH-.js";import"./PdfViewerSidebarHeader-CElxI4p7.js";import"./useBaseUiId-sWVGNDSC.js";import"./useControlled-S-w7uv-V.js";import"./CompositeRoot-CWpUP8eP.js";import"./CompositeItem-C3lrh8v_.js";import"./ToolbarRootContext-DcA09HJY.js";import"./composite-CfI-HDCa.js";import"./svgIconContainer-RvZuTijS.js";import"./PdfViewerSearchBar-C01qqlG3.js";import"./chevron-up-Dy3rv3na.js";import"./chevron-down-DB-wQkD7.js";import"./cross-DFgF4kLc.js";import"./PdfViewerSidebar-Ch9e8DYG.js";import"./index-BBfvC_3C.js";import"./index-D0suL3J6.js";import"./index-if-pT0qq.js";import"./PdfViewerToolbar-Bu3lV6g7.js";import"./Button-CE6JFCro.js";import"./chevron-right-Dh7jTfUn.js";import"./Input-rKjGz7ft.js";import"./search-C4s6NW4T.js";import"./spin-DrblZR5T.js";import"./error-Cmb39vju.js";import"./withOsdkMetrics-BErJ5uW5.js";import"./makeExternalStore-C7V97glS.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
