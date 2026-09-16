import{j as r,M as s}from"./iframe-BDguHbPD.js";import{P as p}from"./pdf-viewer-BP_p05Zo.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CRl-xAYO.js";import"./preload-helper-7xLPbKmM.js";import"./PdfViewer-DIuRq9SL.js";import"./index-C_5MPolp.js";import"./BasePdfViewer-gKQv4gDB.js";import"./BasePdfViewer.module.css-CH3KynC3.js";import"./PdfViewerAnnotationLayer-DkfYfc2e.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DFdHx-pu.js";import"./PdfViewerOutlineSidebar-DhPX6bkZ.js";import"./PdfViewerSidebarHeader-C53vdW5d.js";import"./useBaseUiId-bwbz0VU7.js";import"./useControlled-B3aVNzWK.js";import"./CompositeRoot-DpTk_RYC.js";import"./CompositeItem-5MkrSg_6.js";import"./ToolbarRootContext-CALlmZI0.js";import"./composite-BsxX_L6c.js";import"./svgIconContainer-Z2Julm7W.js";import"./PdfViewerSearchBar-B13wN6Ef.js";import"./chevron-up-pw_FndaE.js";import"./chevron-down-CHEXQxiW.js";import"./cross-D4TeOGZ-.js";import"./PdfViewerSidebar-DIXjxvYn.js";import"./index-CaXJKsDl.js";import"./index-BAF4Gh4w.js";import"./index-C7DI1YIp.js";import"./PdfViewerToolbar-Cya-ARX0.js";import"./Button-D2v8_Tej.js";import"./chevron-right-4SiFLcwn.js";import"./Input-CXvy1-u2.js";import"./search-B1yR-f_r.js";import"./spin-Dl9RBa9c.js";import"./error-uqFmDj8x.js";import"./withOsdkMetrics-CLLpRdbv.js";import"./makeExternalStore-COwSJhBY.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
