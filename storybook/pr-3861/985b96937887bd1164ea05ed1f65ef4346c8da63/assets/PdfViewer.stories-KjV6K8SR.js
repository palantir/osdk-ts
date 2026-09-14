import{j as r,M as s}from"./iframe-DIZ-Bu8w.js";import{P as p}from"./pdf-viewer-wwmcxWrK.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-bJ_Phkl-.js";import"./preload-helper-BCeaJvSh.js";import"./PdfViewer-C6BHZJdd.js";import"./index-U9LN2Bz3.js";import"./BasePdfViewer-Bhx1dowH.js";import"./BasePdfViewer.module.css-CHHenCyB.js";import"./PdfViewerAnnotationLayer-HXfaO76A.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-4Q0VTEOu.js";import"./PdfViewerOutlineSidebar-Cdr0LIpu.js";import"./PdfViewerSidebarHeader-CwkVn7dp.js";import"./useBaseUiId-CBNbS5zc.js";import"./useControlled-CLVHgJsp.js";import"./CompositeRoot-UKrC5Af_.js";import"./CompositeItem-BtZ6x-gO.js";import"./ToolbarRootContext-BVSgixiH.js";import"./composite-g9iDGAQe.js";import"./svgIconContainer-IKodGSm3.js";import"./PdfViewerSearchBar-C6QZEzgj.js";import"./chevron-up-D9PLiJAm.js";import"./chevron-down-DSfB9wHE.js";import"./cross-DxgTLWiz.js";import"./PdfViewerSidebar-C1PCdtV0.js";import"./index-CkInxViu.js";import"./index-C_o4DvqR.js";import"./index-C_qvm4WD.js";import"./PdfViewerToolbar-D6KpILGQ.js";import"./Button-B1ALhdFr.js";import"./chevron-right-DNGrNe4w.js";import"./Input-CIeGAlok.js";import"./search-DmtLA8wB.js";import"./spin-CBa6SyXs.js";import"./error-uSSd40F1.js";import"./withOsdkMetrics-CD3VlAOg.js";import"./makeExternalStore-DE0i2YSI.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
