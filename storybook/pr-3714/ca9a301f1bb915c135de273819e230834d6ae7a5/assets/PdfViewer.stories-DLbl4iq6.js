import{j as r,M as s}from"./iframe-Dyt1i0jF.js";import{P as p}from"./pdf-viewer-B91clAbX.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Czfm38oj.js";import"./preload-helper-CkXDm4BP.js";import"./PdfViewer-BL5BZDF1.js";import"./index-DcAXBN3b.js";import"./BasePdfViewer-5VMiOF8m.js";import"./BasePdfViewer.module.css-XJh1m6qh.js";import"./PdfViewerAnnotationLayer-zWhAv3bv.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BkL3YoSs.js";import"./PdfViewerOutlineSidebar-kfm7EZXD.js";import"./PdfViewerSidebarHeader-4vRFSPTD.js";import"./useBaseUiId-BY0MTYtv.js";import"./useControlled-DJki7VzO.js";import"./CompositeRoot-BG0fQA-W.js";import"./CompositeItem-DJhVVbgA.js";import"./ToolbarRootContext-D-RVnupo.js";import"./composite-BdidWOpb.js";import"./svgIconContainer-D-uDx2T6.js";import"./PdfViewerSearchBar-DijKPZ5S.js";import"./chevron-up-DxvKa27Q.js";import"./chevron-down-w0huiaYQ.js";import"./cross-S19HD2HE.js";import"./PdfViewerSidebar-D2zw1x4j.js";import"./index-C7QokEBW.js";import"./index-mVEsOtEX.js";import"./index-evf_4PQ0.js";import"./PdfViewerToolbar-C9hGJUHS.js";import"./Button-BLyqJRhh.js";import"./chevron-right-CDQ41pn-.js";import"./Input-Z3F9W9iQ.js";import"./search-DVzPLhja.js";import"./spin-BMKtJRa6.js";import"./error-Op_HT_Tg.js";import"./withOsdkMetrics-5wv9ordD.js";import"./makeExternalStore-tWIcELzA.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
