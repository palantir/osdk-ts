import{j as r,M as s}from"./iframe-CECvnXSo.js";import{P as p}from"./pdf-viewer-CuLf4t6I.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DxOUcoJk.js";import"./preload-helper-C7RmVTZ8.js";import"./PdfRenderer-CRBYhQ-I.js";import"./index-1Ss0MhFY.js";import"./PdfViewer-CBN5gZxR.js";import"./PdfViewer.module.css-BCEpUBLP.js";import"./PdfViewerAnnotationLayer-RaNjdsV4.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DfEZt_cS.js";import"./PdfViewerOutlineSidebar-Cz0aqmiA.js";import"./PdfViewerSidebarHeader-B-iqaRBz.js";import"./useBaseUiId-Cj2ApOB0.js";import"./useControlled-CNYSLQui.js";import"./CompositeRoot-CjrscRi5.js";import"./CompositeItem-17y826AO.js";import"./ToolbarRootContext-D_-i9-df.js";import"./composite-DVzDbgfm.js";import"./svgIconContainer-Dw7ng1xf.js";import"./PdfViewerSearchBar-B0LOlouj.js";import"./chevron-up-CqV6r3WR.js";import"./chevron-down-7FdXUDp0.js";import"./cross-E94Uu_yX.js";import"./PdfViewerSidebar-nwn3bnaD.js";import"./index-DvUYyCBl.js";import"./index-Cx4Rhex7.js";import"./index-50UB8KvJ.js";import"./PdfViewerToolbar-iz5K88cr.js";import"./Button-CBdPJVa9.js";import"./chevron-right-D7vkRyxy.js";import"./Input-1uhs_ahV.js";import"./search-BIoI0uGK.js";import"./spin-BmEu99Z0.js";import"./error-DDGWEmGW.js";import"./withOsdkMetrics-D81SOOp8.js";import"./makeExternalStore-Bdlxnl76.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
