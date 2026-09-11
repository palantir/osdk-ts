import{j as r,M as s}from"./iframe-Cd0WuP5s.js";import{P as p}from"./pdf-viewer-pQZfiH2a.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CCfSwqfD.js";import"./preload-helper-BULq60Sg.js";import"./PdfViewer-CxAlFabh.js";import"./index-Dn3UPUEv.js";import"./BasePdfViewer-uZOTZWCG.js";import"./BasePdfViewer.module.css-LSvWQbiL.js";import"./PdfViewerAnnotationLayer-DAibjFT5.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BLoeGog7.js";import"./PdfViewerOutlineSidebar-BfWUZLyk.js";import"./PdfViewerSidebarHeader-0wp4tX8J.js";import"./useBaseUiId-DrebTsUj.js";import"./useControlled-BoZ7gbt2.js";import"./CompositeRoot-DVz_H_XK.js";import"./CompositeItem-CUY6v9CS.js";import"./ToolbarRootContext-zlKF7dlE.js";import"./composite-DOtbOOdR.js";import"./svgIconContainer-Zo359bK_.js";import"./PdfViewerSearchBar-DXgxR9Sg.js";import"./chevron-up-DD5syRc5.js";import"./chevron-down-Dtgstolr.js";import"./cross-Cht5ZydL.js";import"./PdfViewerSidebar-BMuDXVZY.js";import"./index-8j_gMIpQ.js";import"./index-C-_orMox.js";import"./index-BgMZ2AWP.js";import"./PdfViewerToolbar-D_Go5aXB.js";import"./Button-DQgJQ0ys.js";import"./chevron-right-Che5kgaY.js";import"./Input-Cxx4mnqf.js";import"./search-j5X8koaR.js";import"./spin-CpDaRo9q.js";import"./error-BXNrYt0u.js";import"./withOsdkMetrics-DqISDKn-.js";import"./makeExternalStore-j6ewfQ1j.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
