import{j as r,M as s}from"./iframe-CziGYRZ5.js";import{P as p}from"./pdf-viewer-De4tIBme.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Bid6WE1d.js";import"./preload-helper-gc9urLS2.js";import"./PdfViewer-lE_6wkD_.js";import"./index-FTgGsQkL.js";import"./BasePdfViewer-DPzfAxDx.js";import"./BasePdfViewer.module.css-zDPZiuO_.js";import"./PdfViewerAnnotationLayer-OSHvZcvt.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cu9PI-ZG.js";import"./PdfViewerOutlineSidebar-Cg2NU83P.js";import"./PdfViewerSidebarHeader-BoXG0lNR.js";import"./useBaseUiId-DlaJxT3G.js";import"./useControlled-Cl0l9Mrk.js";import"./CompositeRoot-Cmcfk9Du.js";import"./CompositeItem-Bv09Xrw7.js";import"./ToolbarRootContext-YLrOIXIR.js";import"./composite-BvX1_pb1.js";import"./svgIconContainer-DFNJwVrV.js";import"./PdfViewerSearchBar-Ddpx1B5J.js";import"./chevron-up-DowPrP_U.js";import"./chevron-down-BzHtNLP_.js";import"./cross-BHNWGXzB.js";import"./PdfViewerSidebar-D9r9ij3B.js";import"./index-C3TtPejY.js";import"./index-DvwMpTX4.js";import"./index-BgvYMuxB.js";import"./PdfViewerToolbar-Cl3eFVZh.js";import"./Button-DfO3Y95R.js";import"./chevron-right-D7UEqjQ7.js";import"./Input-B_f-YNqg.js";import"./search-cETe_cym.js";import"./spin-DTScJCJR.js";import"./error-q8pihEMG.js";import"./withOsdkMetrics-B4ICqk1s.js";import"./makeExternalStore-CKEXKIUu.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
