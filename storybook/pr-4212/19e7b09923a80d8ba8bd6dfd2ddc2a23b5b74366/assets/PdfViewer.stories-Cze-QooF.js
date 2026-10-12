import{j as r,M as s}from"./iframe-BSB0HYWK.js";import{P as p}from"./pdf-viewer-CYeWFIVu.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-g9eLIqDx.js";import"./preload-helper-BkFYvt7D.js";import"./PdfViewer-DWWOWawv.js";import"./index-CFn7NuDF.js";import"./BasePdfViewer-Blif1xSu.js";import"./BasePdfViewer.module.css-BcRArw-e.js";import"./PdfViewerAnnotationLayer-B3beKgDT.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D7CqW36d.js";import"./PdfViewerOutlineSidebar-BTIJ7-MJ.js";import"./PdfViewerSidebarHeader-sDA2zGPG.js";import"./useBaseUiId-DOYgZcYk.js";import"./useControlled-CPd31jrj.js";import"./CompositeRoot-C4garnxN.js";import"./CompositeItem-DFUc4zP3.js";import"./ToolbarRootContext-BHLo6WQV.js";import"./composite-DrFNuPAr.js";import"./svgIconContainer-ZqmkZwCg.js";import"./PdfViewerSearchBar-DgUrl-nQ.js";import"./chevron-up-CFLZDerz.js";import"./chevron-down-eX4f9a69.js";import"./cross-CyBS2Nke.js";import"./PdfViewerSidebar-CrFmbNi8.js";import"./index-DF12onFH.js";import"./index-qi5mcdT7.js";import"./index-UxDU_lnD.js";import"./PdfViewerToolbar-CAnl319g.js";import"./Button-odXi-ust.js";import"./chevron-right-C47bqiVY.js";import"./Input-BwaAEQhC.js";import"./search-DVQNznbm.js";import"./spin-D_tHMjUh.js";import"./error-Bf4UPDqQ.js";import"./withOsdkMetrics-BSqN_NUg.js";import"./makeExternalStore-dBNRhzI_.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
