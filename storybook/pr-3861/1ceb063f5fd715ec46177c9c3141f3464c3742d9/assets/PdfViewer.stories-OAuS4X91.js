import{j as r,M as s}from"./iframe-RR2p5XOS.js";import{P as p}from"./pdf-viewer-FMScOpPy.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BwvmddPy.js";import"./preload-helper-BOhV1rHy.js";import"./PdfViewer-DWiSFJgx.js";import"./index-DnsNcod6.js";import"./BasePdfViewer-DzugKMay.js";import"./BasePdfViewer.module.css-D5f8vGI7.js";import"./PdfViewerAnnotationLayer-C6cYlCy6.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CNKiucsU.js";import"./PdfViewerOutlineSidebar-B1ksfB7F.js";import"./PdfViewerSidebarHeader-hM8aX6It.js";import"./useBaseUiId-C9ZH8_C_.js";import"./useControlled-CigCjjeU.js";import"./CompositeRoot-Ch6KSj3o.js";import"./CompositeItem-suN-dd_e.js";import"./ToolbarRootContext-BDIbARai.js";import"./composite-p_UpWlex.js";import"./svgIconContainer-u0oJjKFx.js";import"./PdfViewerSearchBar-EEe8BNXw.js";import"./chevron-up-CTeXYASG.js";import"./chevron-down-CB1UmGgK.js";import"./cross-CR4LSxOQ.js";import"./PdfViewerSidebar-Ca2TT6oA.js";import"./index-s6aMoLTN.js";import"./index-HN-AhAeO.js";import"./index-DKLD7YVV.js";import"./PdfViewerToolbar-CknZATXu.js";import"./Button-Fi5pU_nf.js";import"./chevron-right-Dkq84reB.js";import"./Input-e_TaAvAj.js";import"./search-DcbJPUOn.js";import"./spin-PfrRcvK-.js";import"./error-CMBIrR-E.js";import"./withOsdkMetrics-DRbYLGlL.js";import"./makeExternalStore-CT6Maj4O.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
