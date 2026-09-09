import{j as r,M as s}from"./iframe-CHFOhFuc.js";import{P as p}from"./pdf-viewer-BzA7gQax.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D4Q3lQtO.js";import"./preload-helper-B-1rSRgY.js";import"./PdfViewer-hd_0PX2S.js";import"./index-BpX6hENj.js";import"./BasePdfViewer-P3tl1wIa.js";import"./BasePdfViewer.module.css-D4JdG3EJ.js";import"./PdfViewerAnnotationLayer-8Coo2Nlx.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BKtMpsdq.js";import"./PdfViewerOutlineSidebar-B7L0CjdA.js";import"./PdfViewerSidebarHeader-_BCyfR5Z.js";import"./useBaseUiId-CpuSZ-O9.js";import"./useControlled-Cnl8z_DZ.js";import"./CompositeRoot-WrvYFshd.js";import"./CompositeItem-V52V_N8R.js";import"./ToolbarRootContext-D3CnJ-Kn.js";import"./composite-C909Fk53.js";import"./svgIconContainer-zzwTq_t7.js";import"./PdfViewerSearchBar-Crkhd2f8.js";import"./chevron-up-C_rJHoy0.js";import"./chevron-down-DDx-Wnyx.js";import"./cross-CLtam5MT.js";import"./PdfViewerSidebar-Cz3yZeO5.js";import"./index-ClhHXn3z.js";import"./index-DQOrZvkv.js";import"./index-BvRLFMPY.js";import"./PdfViewerToolbar-BcMdaK1S.js";import"./Button-DHQU-3rC.js";import"./chevron-right-DxXAWTEu.js";import"./Input-D8YBib2L.js";import"./search-Ct1jR5-1.js";import"./spin-DR_fpufo.js";import"./error-2828ta47.js";import"./withOsdkMetrics-BHwUIoHR.js";import"./makeExternalStore-CXAxXc_Y.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
