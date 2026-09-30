import{j as r,M as s}from"./iframe-_5xzb7Z5.js";import{P as p}from"./pdf-viewer-DAlY5JMk.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Bfm6O3QD.js";import"./preload-helper-9kDSgaR1.js";import"./PdfViewer-CM6ueFaq.js";import"./index-BQLQ6q72.js";import"./BasePdfViewer-qE8UCKHB.js";import"./BasePdfViewer.module.css-BKN5_p64.js";import"./PdfViewerAnnotationLayer-BVhOUfug.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B0z1agvg.js";import"./PdfViewerOutlineSidebar-BDHQPDBo.js";import"./PdfViewerSidebarHeader-0LWyqgWi.js";import"./useBaseUiId-CL6BvqYc.js";import"./useControlled-CaOEMTdE.js";import"./CompositeRoot-BbcxLSvn.js";import"./CompositeItem-sQD2esUI.js";import"./ToolbarRootContext-BP4N1j53.js";import"./composite-RcxH71Ia.js";import"./svgIconContainer-zoYg_i-y.js";import"./PdfViewerSearchBar-C9tMeqM0.js";import"./chevron-up-BdNore9n.js";import"./chevron-down-Dc3YtOri.js";import"./cross-DvzeLUuw.js";import"./PdfViewerSidebar-DdFgfTAu.js";import"./index-CNCDNsvZ.js";import"./index-Bwe_rVKq.js";import"./index-a6ymnaCE.js";import"./PdfViewerToolbar-CriIuNJs.js";import"./Button-BN8W0OGL.js";import"./chevron-right-96ZD6KIM.js";import"./Input-6FTkig4D.js";import"./search-FeXiW-S5.js";import"./spin-DC62Wf2M.js";import"./error-Ba02y8oz.js";import"./withOsdkMetrics-uKo-L4d5.js";import"./makeExternalStore-GpKW6nTD.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
