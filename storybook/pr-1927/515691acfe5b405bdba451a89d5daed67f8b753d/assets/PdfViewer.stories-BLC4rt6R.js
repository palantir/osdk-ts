import{j as r,M as s}from"./iframe-DOKsSIoF.js";import{P as p}from"./pdf-viewer-CNWpgqoB.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-rUQ9oI8l.js";import"./preload-helper-DIcDZjtS.js";import"./PdfRenderer-CWz_QdGf.js";import"./index-_xXvNYcY.js";import"./PdfViewer-FqNcWVbq.js";import"./PdfViewer.module.css-BbRqB8Vj.js";import"./PdfViewerAnnotationLayer-Ccgd5FJg.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BfmkDIn4.js";import"./PdfViewerOutlineSidebar-BNhYeXv-.js";import"./PdfViewerSidebarHeader-C4rgzLYr.js";import"./useBaseUiId-DGSgOirr.js";import"./useControlled-B82oHfdu.js";import"./CompositeRoot-CEL2g1BT.js";import"./CompositeItem-C0yPEj0b.js";import"./ToolbarRootContext-BPvqgk36.js";import"./composite-DQ6AxwFj.js";import"./svgIconContainer-Dpin5oqd.js";import"./PdfViewerSearchBar-B3JGPeDc.js";import"./chevron-up-Bj2d_Ux2.js";import"./chevron-down-DsDR74iP.js";import"./cross-D475DauV.js";import"./PdfViewerSidebar-DKliej-l.js";import"./index-Db4L4DG0.js";import"./index-BvLhZQjl.js";import"./index-DhP_5L9k.js";import"./PdfViewerToolbar-vW6P8K2l.js";import"./Button-CR4Jq5Wr.js";import"./chevron-right-Caq0fsJK.js";import"./Input-Do1A5iUq.js";import"./search-BcWq1pIm.js";import"./spin-CTJjG24L.js";import"./error-0smIlLow.js";import"./withOsdkMetrics-DxFA8_hv.js";import"./makeExternalStore-DJgCcd_q.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
