import{j as r,M as s}from"./iframe-CiSKHfyc.js";import{P as p}from"./pdf-viewer-CuXTP18H.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BHFCKfk9.js";import"./preload-helper-CWupNPgO.js";import"./PdfViewer-DxKIjzUu.js";import"./index-D3wSasD3.js";import"./BasePdfViewer-CQ8yn9KF.js";import"./BasePdfViewer.module.css-C8-eRAoz.js";import"./PdfViewerAnnotationLayer-DZ6E44VC.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DkWziXfV.js";import"./PdfViewerOutlineSidebar-BymfGBtU.js";import"./PdfViewerSidebarHeader-DpfBipNy.js";import"./useBaseUiId-b_FN5CrC.js";import"./useControlled-CiZcMD85.js";import"./CompositeRoot-DGORO-V9.js";import"./CompositeItem-_hXBxygC.js";import"./ToolbarRootContext-D7bvCCy6.js";import"./composite-jZQCk-zR.js";import"./svgIconContainer-BJUr7DHQ.js";import"./PdfViewerSearchBar-CkfCG7ZZ.js";import"./chevron-up-Dlo1kaVg.js";import"./chevron-down-D5jrtiFY.js";import"./cross-DLLCkXVB.js";import"./PdfViewerSidebar-BJYS0Gyb.js";import"./index-CVFbikLp.js";import"./index-B_PLf88V.js";import"./index-EV91z822.js";import"./PdfViewerToolbar-B0bAdZbF.js";import"./Button-Cmyv-rnS.js";import"./chevron-right-D_u8lc1C.js";import"./Input-Cul32AIH.js";import"./search-DZapC1lH.js";import"./spin-BTz6X7oU.js";import"./error-CDPXWVFZ.js";import"./withOsdkMetrics-CWRpGlls.js";import"./makeExternalStore-BA-q_GW8.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
