import{j as r,M as s}from"./iframe-D7UqPUqg.js";import{P as p}from"./pdf-viewer-DDzhZFuE.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BkwGNOZT.js";import"./preload-helper-Cn4dnxMR.js";import"./PdfViewer-J-L_xRfg.js";import"./index-B1myIupO.js";import"./BasePdfViewer-DpG1j96d.js";import"./BasePdfViewer.module.css-BdwiuBGl.js";import"./PdfViewerAnnotationLayer-Cczz7DNZ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-GoKbZ4f3.js";import"./PdfViewerOutlineSidebar-6_53oXI_.js";import"./PdfViewerSidebarHeader-BA_U0GHX.js";import"./useBaseUiId-cZ22buUA.js";import"./useControlled-BvzqTfft.js";import"./CompositeRoot-DcOfLjWr.js";import"./CompositeItem-DTU093CG.js";import"./ToolbarRootContext-CLsWTMgH.js";import"./composite-CksaxzsE.js";import"./svgIconContainer-CDkwNXGT.js";import"./PdfViewerSearchBar-CBOTgllm.js";import"./chevron-up-B4rNVdRr.js";import"./chevron-down-DzpLubs1.js";import"./cross-Bj6j_CtG.js";import"./PdfViewerSidebar-Cc8-1SFE.js";import"./index-BLUZuP7j.js";import"./index-zv9FWzoH.js";import"./index-CvRiwgND.js";import"./PdfViewerToolbar-BBaU07Qb.js";import"./Button-zkNcwcgB.js";import"./chevron-right-BauPPWGD.js";import"./Input-DUMT1c48.js";import"./search-Da0O3BMF.js";import"./spin-bnjPnvUZ.js";import"./error-n93hCEyg.js";import"./withOsdkMetrics-CutvgG7T.js";import"./makeExternalStore-hhxh63bW.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
