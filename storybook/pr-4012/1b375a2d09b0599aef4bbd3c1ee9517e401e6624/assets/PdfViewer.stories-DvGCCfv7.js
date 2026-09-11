import{j as r,M as s}from"./iframe-BHMJk_pQ.js";import{P as p}from"./pdf-viewer-DF7luOou.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-ChvEdytR.js";import"./preload-helper-yZDhH5uY.js";import"./PdfViewer-BymFNQT_.js";import"./index-CGIFCVjE.js";import"./BasePdfViewer-BeFHInHZ.js";import"./BasePdfViewer.module.css-ClTjxzLF.js";import"./PdfViewerAnnotationLayer-CRuB6pPV.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-MYqczd51.js";import"./PdfViewerOutlineSidebar-BY_gewEs.js";import"./PdfViewerSidebarHeader-TrM7eRgM.js";import"./useBaseUiId-q1ez9o9O.js";import"./useControlled-CoWycKh2.js";import"./CompositeRoot-DExkPkqU.js";import"./CompositeItem-C-ykAJ2x.js";import"./ToolbarRootContext-eWmTNPN4.js";import"./composite-vsetCZGp.js";import"./svgIconContainer-EnhuaKpb.js";import"./PdfViewerSearchBar-DxIewKW6.js";import"./chevron-up-Dab4RRO1.js";import"./chevron-down-DAwRR1Ih.js";import"./cross-Ca7k_LyQ.js";import"./PdfViewerSidebar-Bj6rCugL.js";import"./index-DYYPIily.js";import"./index-DlggJEEa.js";import"./index-CzKMl-a_.js";import"./PdfViewerToolbar-s1bx6uNP.js";import"./Button-agVfxQZq.js";import"./chevron-right-Bhh2SDXE.js";import"./Input-Bs3tYIFL.js";import"./search-BSgVHkt6.js";import"./spin-bEbG95gF.js";import"./error-DwwBySlx.js";import"./withOsdkMetrics-Bfl9jveo.js";import"./makeExternalStore-BvwVYkGq.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
