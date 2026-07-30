import{j as r,M as s}from"./iframe-Bt4Xobet.js";import{P as p}from"./pdf-viewer-fh3gLQrN.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BvMPxFnG.js";import"./preload-helper-CIGldWkI.js";import"./PdfRenderer-Czn3Vzjf.js";import"./index-C9QCKnRv.js";import"./PdfViewer-D4z8BeiF.js";import"./PdfViewer.module.css-D56cKcfn.js";import"./PdfViewerAnnotationLayer-DwzwrGwA.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CBZXF83P.js";import"./PdfViewerOutlineSidebar-BSHrPT0V.js";import"./PdfViewerSidebarHeader-BkqKH1NP.js";import"./useBaseUiId-OZ0hUE_a.js";import"./useControlled-DyGKRwST.js";import"./CompositeRoot-DtFSvxE9.js";import"./CompositeItem-DgpKcPgo.js";import"./ToolbarRootContext-DIt4thAF.js";import"./composite-DDgJpTsN.js";import"./svgIconContainer-BK5VnXrw.js";import"./PdfViewerSearchBar-_8FejUVv.js";import"./chevron-up-BXNYnWL8.js";import"./chevron-down-IwUW_Yhg.js";import"./cross-EISoXgiZ.js";import"./PdfViewerSidebar-HQXFfXSR.js";import"./index-DSNbiTi3.js";import"./index-CZKjIZkZ.js";import"./index-CjzROSaJ.js";import"./PdfViewerToolbar-hSEe7p6b.js";import"./Button-CTrNzNt_.js";import"./chevron-right-BfviaDbH.js";import"./Input-D-1nEW3a.js";import"./search-BUQOh4mX.js";import"./spin-xOS_Hk2K.js";import"./error-CzuGt2Gr.js";import"./withOsdkMetrics-BjgVacGN.js";import"./makeExternalStore-84IoszYF.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
