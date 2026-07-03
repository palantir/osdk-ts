import{j as r,M as s}from"./iframe-CzEAcITS.js";import{P as p}from"./pdf-viewer-CQ0sPrxn.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D-vmhZ3F.js";import"./preload-helper-DVUrYGcs.js";import"./PdfRenderer-0M7Rjmao.js";import"./index-DidwzLKx.js";import"./PdfViewer-H9fS_Y2J.js";import"./PdfViewer.module.css-mERKRpO4.js";import"./PdfViewerAnnotationLayer-B6n66Y9I.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Z6NIJkxB.js";import"./PdfViewerOutlineSidebar-DxuKhBti.js";import"./PdfViewerSidebarHeader-CV1g0b-x.js";import"./useBaseUiId-Wsui1rDl.js";import"./useControlled-n-om19Vg.js";import"./CompositeRoot-CHXdTk1p.js";import"./CompositeItem-DRPR7SAg.js";import"./ToolbarRootContext-74w3-zbe.js";import"./composite-CGc5OLRr.js";import"./svgIconContainer-BzNHxf01.js";import"./PdfViewerSearchBar-ST8L7Nf_.js";import"./chevron-up-CFNiCYfk.js";import"./chevron-down-Ck7FvghV.js";import"./cross-BEXvhRFN.js";import"./PdfViewerSidebar-cQOCR87x.js";import"./index-BrIngB4d.js";import"./index-CGs03jCU.js";import"./index-CgPz4Is9.js";import"./PdfViewerToolbar-DXSbEY32.js";import"./Button-Bjv4-aZR.js";import"./chevron-right-LndCHlsL.js";import"./Input-DsiSoXN8.js";import"./search-D1GRIozI.js";import"./spin-2l8VZag3.js";import"./error-Cpn6Ss2N.js";import"./withOsdkMetrics-Bpkx_Q9E.js";import"./makeExternalStore-8CHn5UYf.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
