import{j as r,M as s}from"./iframe-DW6PMPsi.js";import{P as p}from"./pdf-viewer-BmqB1GYi.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-GL4gyZeO.js";import"./preload-helper-BlWs9PqI.js";import"./PdfViewer-DFFC0nsd.js";import"./index-D66c38lk.js";import"./BasePdfViewer-ClE1LuAY.js";import"./BasePdfViewer.module.css-XkllYXZg.js";import"./PdfViewerAnnotationLayer-76_gEZ3A.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Ct7XgwyB.js";import"./PdfViewerOutlineSidebar-DMqUpqIP.js";import"./PdfViewerSidebarHeader-Ggq_HtYC.js";import"./useBaseUiId-Ddck3Zgv.js";import"./useControlled-DHdXh0yp.js";import"./CompositeRoot-Dh-8gF8y.js";import"./CompositeItem-Cs1O47Aq.js";import"./ToolbarRootContext-097dpJrh.js";import"./composite-n7_MOsSq.js";import"./svgIconContainer-DIp-XZwm.js";import"./PdfViewerSearchBar-CAo7kN2i.js";import"./chevron-up-C50MppHG.js";import"./chevron-down-DJEtRyIF.js";import"./cross-DYQhBJHJ.js";import"./PdfViewerSidebar-DpQZiWFQ.js";import"./index-cpYh8GYP.js";import"./index-FqdShp73.js";import"./index-DqyvE86A.js";import"./PdfViewerToolbar-D03z_1rb.js";import"./Button-B-NFgFRe.js";import"./chevron-right-D5Y3ct8D.js";import"./Input-CpyRhfdw.js";import"./search-C1KQWKmH.js";import"./spin-C1c-Lj1D.js";import"./error-DYDpYg5Z.js";import"./withOsdkMetrics-M_tvK9si.js";import"./makeExternalStore-D3FsvLmH.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
