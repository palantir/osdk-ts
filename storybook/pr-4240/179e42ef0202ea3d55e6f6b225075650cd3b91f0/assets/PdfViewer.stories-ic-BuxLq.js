import{j as r,M as s}from"./iframe-BN5ehZsU.js";import{P as p}from"./pdf-viewer-BreH8Szc.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Dsr9NcyI.js";import"./preload-helper-DiI2ZQ3N.js";import"./PdfViewer-rS5Ty2ed.js";import"./index-CUoza1kZ.js";import"./BasePdfViewer-CruIj2FT.js";import"./BasePdfViewer.module.css-uPZY4n1z.js";import"./PdfViewerAnnotationLayer-oG9M0UJs.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BZykHkLM.js";import"./PdfViewerOutlineSidebar-BmMr9hO0.js";import"./PdfViewerSidebarHeader-dld6bGXM.js";import"./useBaseUiId-BEp1f_TL.js";import"./useControlled-Dn-0uibR.js";import"./CompositeRoot-DTJ2Xerl.js";import"./CompositeItem-CfdU5eWF.js";import"./ToolbarRootContext-C4vwBpF_.js";import"./composite-Dz6G3wtQ.js";import"./svgIconContainer-3_nrEXxJ.js";import"./PdfViewerSearchBar-CQ0K-RGI.js";import"./chevron-up-7CFsoCYd.js";import"./chevron-down-DSRGL9k7.js";import"./cross-CTzlKmgX.js";import"./PdfViewerSidebar-DMNAA3xa.js";import"./index-CfzvYg2Q.js";import"./index-CNUSOrN9.js";import"./index-BMD_ABKq.js";import"./PdfViewerToolbar-VHpNV36E.js";import"./Button-Ca_A2rxi.js";import"./chevron-right-DtIe8yJ3.js";import"./Input-Byq2KsKZ.js";import"./search-B5pZpNhj.js";import"./spin-DQ75iL_2.js";import"./error-BrwUp-mO.js";import"./withOsdkMetrics-XTiZGcd-.js";import"./makeExternalStore-9ZiGbHue.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
