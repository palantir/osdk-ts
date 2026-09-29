import{j as r,M as s}from"./iframe-lKHX2RT0.js";import{P as p}from"./pdf-viewer-Bf93CRZX.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DX1CxRk8.js";import"./preload-helper-CPQlIB48.js";import"./PdfViewer-CRYX98YK.js";import"./index-DN0L_sQz.js";import"./BasePdfViewer-BxAdAMIP.js";import"./BasePdfViewer.module.css-i83VzmkJ.js";import"./PdfViewerAnnotationLayer-CYTCEbau.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CNr2Sr6J.js";import"./PdfViewerOutlineSidebar-DdzxUwa8.js";import"./PdfViewerSidebarHeader-B6PO8eQM.js";import"./useBaseUiId-BNpyRqoY.js";import"./useControlled-CuEFhIkH.js";import"./CompositeRoot-JJYSjhdB.js";import"./CompositeItem-YCGN9OAN.js";import"./ToolbarRootContext-DHnu7bP1.js";import"./composite-Cid_avm0.js";import"./svgIconContainer-CI8K89aC.js";import"./PdfViewerSearchBar-B-wc9mpM.js";import"./chevron-up-DmMrt3XM.js";import"./chevron-down-5rT0_jwP.js";import"./cross-BS8Ys0sh.js";import"./PdfViewerSidebar-CuPFgDNa.js";import"./index-mAvkRfFj.js";import"./index-C5DiV1o7.js";import"./index-nDWqsS2b.js";import"./PdfViewerToolbar-DQnisrHI.js";import"./Button-BEKYhgY7.js";import"./chevron-right-HwoiDLEs.js";import"./Input-Bw27QJ9U.js";import"./search-DYMiyHIs.js";import"./spin-XwQ6_65n.js";import"./error-Zaa9-6nd.js";import"./withOsdkMetrics-BcneEdmh.js";import"./makeExternalStore-BxeHtCAo.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
        code: \`// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
