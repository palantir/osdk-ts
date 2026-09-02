import{j as r,M as s}from"./iframe-BtTN4BQB.js";import{P as p}from"./pdf-viewer-DN9CO4x2.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DKoI4js6.js";import"./preload-helper-C2hFUd6N.js";import"./PdfViewer-Caa-sM0D.js";import"./index-pxWT2dwl.js";import"./BasePdfViewer-OL9w6cXG.js";import"./BasePdfViewer.module.css-C4-tpThP.js";import"./PdfViewerAnnotationLayer-Coc7qNim.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BZ37hH8U.js";import"./PdfViewerOutlineSidebar-CWvgCMuV.js";import"./PdfViewerSidebarHeader-B4fgR3zc.js";import"./useBaseUiId-lIY47ohq.js";import"./useControlled-BY2aVBy7.js";import"./CompositeRoot-BSRv4Qnc.js";import"./CompositeItem-Dm5rFUvO.js";import"./ToolbarRootContext-BKy1ZUvI.js";import"./composite-CdDRlQtM.js";import"./svgIconContainer-Ck-gVtGn.js";import"./PdfViewerSearchBar-CrGiqdQh.js";import"./chevron-up-CPUlXJJh.js";import"./chevron-down-BcmFYUSl.js";import"./cross-q76qzbb-.js";import"./PdfViewerSidebar-Blr0WOKT.js";import"./index-9u2i6wOA.js";import"./index-Cq-V6BRN.js";import"./index-CMayXVvR.js";import"./PdfViewerToolbar-CVbDBLi9.js";import"./Button-BLq1-le0.js";import"./chevron-right-CVx3OQTb.js";import"./Input-BP96gLBp.js";import"./search-B3tYggTx.js";import"./spin-Bkf41HYE.js";import"./error-eGAnK2yX.js";import"./withOsdkMetrics-DMwNEK1o.js";import"./makeExternalStore-Djs-AWxx.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
