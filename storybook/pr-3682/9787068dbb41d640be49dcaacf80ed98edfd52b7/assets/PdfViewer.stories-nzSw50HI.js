import{j as r,M as s}from"./iframe-T1o6DwQn.js";import{P as p}from"./pdf-viewer-D1racHkH.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DCVaGtUh.js";import"./preload-helper-CkSYKUqL.js";import"./PdfRenderer-NAaHzWd9.js";import"./index-C-Yvvs3G.js";import"./PdfViewer-5TgSAWNU.js";import"./PdfViewer.module.css-CZFrq9lu.js";import"./PdfViewerAnnotationLayer-BMH5lJ6e.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C6JMZHW5.js";import"./PdfViewerOutlineSidebar-DTjCh1oJ.js";import"./PdfViewerSidebarHeader-CU6onbVE.js";import"./useBaseUiId-CQK9r6XJ.js";import"./useControlled-KFuOJB7y.js";import"./CompositeRoot-Dm1Bk0vf.js";import"./CompositeItem-Cwg9cZxl.js";import"./ToolbarRootContext-CmFCJCtX.js";import"./composite-BUVy4G6Q.js";import"./svgIconContainer-BEph9AST.js";import"./PdfViewerSearchBar-CAb52MZV.js";import"./chevron-up-Do6vwFJ8.js";import"./chevron-down-DR4svmgW.js";import"./cross-DNFg9adP.js";import"./PdfViewerSidebar-DDHCN3xY.js";import"./index-D1JQTjX2.js";import"./index-Cj5oaWDZ.js";import"./index-DzvoDz4m.js";import"./PdfViewerToolbar-BCuzfr-D.js";import"./Button-B5AFRMRx.js";import"./chevron-right-CIbwZZKn.js";import"./Input-Dan1z7PJ.js";import"./search-CLuqE52U.js";import"./spin-Ccv-IInC.js";import"./error-Cwg5VJo2.js";import"./withOsdkMetrics-B2606ITo.js";import"./makeExternalStore-BlXYWwZo.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
