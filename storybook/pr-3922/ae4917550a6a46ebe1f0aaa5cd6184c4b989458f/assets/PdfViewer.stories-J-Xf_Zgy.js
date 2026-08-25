import{j as r,M as s}from"./iframe-cVISvyfe.js";import{P as p}from"./pdf-viewer-BWXmvSUE.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-RIdJfK0V.js";import"./preload-helper-CV7QtPzK.js";import"./PdfViewer-BBV1xIop.js";import"./index-Cp1JV-_2.js";import"./BasePdfViewer-DRYMA43x.js";import"./BasePdfViewer.module.css-DJEX5zs4.js";import"./PdfViewerAnnotationLayer-B3VlC7QX.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-EsKS1ohN.js";import"./PdfViewerOutlineSidebar-B9vdLwPZ.js";import"./PdfViewerSidebarHeader-CTmjleTY.js";import"./useBaseUiId-CkxMnH4M.js";import"./useControlled-_y7ng7_J.js";import"./CompositeRoot-DxKfbgpf.js";import"./CompositeItem-BIYi67JM.js";import"./ToolbarRootContext-Kuy8kCkh.js";import"./composite-pva2vyCm.js";import"./svgIconContainer-BLZRnc85.js";import"./PdfViewerSearchBar-B_jiioMF.js";import"./chevron-up-CqzjlTZ_.js";import"./chevron-down-CuCy4Lvp.js";import"./cross-BQcZgDu4.js";import"./PdfViewerSidebar-BB639JbD.js";import"./index-BwvBu9MX.js";import"./index-BqMrmVK2.js";import"./index-mfykt0Ga.js";import"./PdfViewerToolbar-wvv8GwwX.js";import"./Button-CXrCi2Zt.js";import"./chevron-right-t_pBjkiO.js";import"./Input-6utg62a_.js";import"./search-Ck4999wE.js";import"./spin-DqMKToUA.js";import"./error-BPDzH4j4.js";import"./withOsdkMetrics-CKuQj_0t.js";import"./makeExternalStore-Bt321Qwa.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
