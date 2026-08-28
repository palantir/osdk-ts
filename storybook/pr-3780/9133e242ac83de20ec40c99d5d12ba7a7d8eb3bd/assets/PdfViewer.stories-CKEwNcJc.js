import{j as r,M as s}from"./iframe-DvvN0iZ4.js";import{P as p}from"./pdf-viewer-BS1xNDtj.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BDv_Amko.js";import"./preload-helper-COgx8bff.js";import"./PdfViewer-C2cAIzeE.js";import"./index-CExWqhF3.js";import"./BasePdfViewer-BLmRt3kP.js";import"./BasePdfViewer.module.css-CUAhXlal.js";import"./PdfViewerAnnotationLayer-Djvls5h9.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D9cCzEKX.js";import"./PdfViewerOutlineSidebar-dlsKKAMO.js";import"./PdfViewerSidebarHeader-CRJ1QKYE.js";import"./useBaseUiId-BMLYN1z9.js";import"./useControlled-BJtimK6V.js";import"./CompositeRoot-BxwLubKa.js";import"./CompositeItem-D7Fao19X.js";import"./ToolbarRootContext-Yypg0Ver.js";import"./composite-C1x5nTDV.js";import"./svgIconContainer-DO7duNWZ.js";import"./PdfViewerSearchBar-CHyEQorq.js";import"./chevron-up-ByIbg-KB.js";import"./chevron-down-6mjfuih6.js";import"./cross-DdXxY3zw.js";import"./PdfViewerSidebar-Cbd9KQFB.js";import"./index-DIu0upuI.js";import"./index-CK5HdBab.js";import"./index-DU7UvfyD.js";import"./PdfViewerToolbar-BzCd5Jrf.js";import"./Button-BQEhn0-h.js";import"./chevron-right-D29V-hpG.js";import"./Input-RroOyWit.js";import"./search-iASH-OFa.js";import"./spin-DMe_OZBG.js";import"./error-C5MrVcfF.js";import"./withOsdkMetrics-BfnLSscO.js";import"./makeExternalStore-DCEfrMP4.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
