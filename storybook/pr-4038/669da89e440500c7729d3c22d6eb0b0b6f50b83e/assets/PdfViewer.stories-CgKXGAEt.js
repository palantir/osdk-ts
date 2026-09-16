import{j as r,M as s}from"./iframe-CFSd_ghT.js";import{P as p}from"./pdf-viewer-ECy55KP1.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-nxEklwmg.js";import"./preload-helper-ZllT-xST.js";import"./PdfViewer-CP9VxYir.js";import"./index-BVC2DtDE.js";import"./BasePdfViewer-DazzJMFY.js";import"./BasePdfViewer.module.css-qD0Vqonh.js";import"./PdfViewerAnnotationLayer-BNdwOjFz.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B9FWMh6q.js";import"./PdfViewerOutlineSidebar-C23ShPkX.js";import"./PdfViewerSidebarHeader-fvOUI3Vt.js";import"./useBaseUiId-Bi512Q4g.js";import"./useControlled-CUIixQM1.js";import"./CompositeRoot-D_0QRgdK.js";import"./CompositeItem-DvZYqwOH.js";import"./ToolbarRootContext-87swm1F0.js";import"./composite-rhm-ES_j.js";import"./svgIconContainer-CuLuTWV9.js";import"./PdfViewerSearchBar-BodWe_wr.js";import"./chevron-up-CtjHTlSw.js";import"./chevron-down-CkZ0acRz.js";import"./cross-Pk2YzKDQ.js";import"./PdfViewerSidebar-CCKzbRHm.js";import"./index-C6yQCaVG.js";import"./index-CX8cSHY9.js";import"./index-PmO53gZu.js";import"./PdfViewerToolbar-CMfODP56.js";import"./Button-CII42J6y.js";import"./chevron-right-TFTNg3M8.js";import"./Input-B266R5K5.js";import"./search-CiZh2SnD.js";import"./spin-IIu7ymiQ.js";import"./error-QrCIC66e.js";import"./withOsdkMetrics-D3lDS6Ow.js";import"./makeExternalStore-BPSbFC_f.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
