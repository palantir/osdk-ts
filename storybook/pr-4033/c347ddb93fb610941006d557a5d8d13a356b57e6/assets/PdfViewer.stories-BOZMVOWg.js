import{j as r,M as s}from"./iframe-W94gYwuG.js";import{P as p}from"./pdf-viewer-aStNTTKD.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-mbqNqTMv.js";import"./preload-helper-BZdF85c1.js";import"./PdfViewer-Bv6n8r_6.js";import"./index-Cuk5CzZs.js";import"./BasePdfViewer-5mccy4_C.js";import"./BasePdfViewer.module.css-Ci1VonQQ.js";import"./PdfViewerAnnotationLayer-GQr_fAFZ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CEjHBY8_.js";import"./PdfViewerOutlineSidebar-B9V_VkOB.js";import"./PdfViewerSidebarHeader-Bas7iQN8.js";import"./useBaseUiId-DLO1E5rV.js";import"./useControlled-BNYkrsEO.js";import"./CompositeRoot-SaWHLFAx.js";import"./CompositeItem-DfviX0qN.js";import"./ToolbarRootContext-BJjWSvlz.js";import"./composite-DlnNiwsN.js";import"./svgIconContainer-DML7KnhH.js";import"./PdfViewerSearchBar-CgOhW0sE.js";import"./chevron-up-Bj_aV9-Q.js";import"./chevron-down-C2jygjf1.js";import"./cross-B_Jh2OAU.js";import"./PdfViewerSidebar-Bnrcs8tW.js";import"./index-D8f0-tDA.js";import"./index-Dr7s6soJ.js";import"./index-DDztdIhx.js";import"./PdfViewerToolbar-BJHU9XQ5.js";import"./Button-DaHI_b0v.js";import"./chevron-right-Db0Ma81a.js";import"./Input-CjZq1vGj.js";import"./search-c21shtzO.js";import"./spin-Dv3SxCFo.js";import"./error-BiPx4nD4.js";import"./withOsdkMetrics-BUuBi764.js";import"./makeExternalStore-CHaLvDqs.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
