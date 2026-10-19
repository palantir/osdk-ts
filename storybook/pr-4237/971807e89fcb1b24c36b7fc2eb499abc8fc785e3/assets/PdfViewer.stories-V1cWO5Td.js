import{j as r,M as s}from"./iframe-BH9-Vfs1.js";import{P as p}from"./pdf-viewer-CzEV9-7e.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B4dcqM82.js";import"./preload-helper-CoJdsvxJ.js";import"./PdfViewer-BlUVD-Yv.js";import"./index-_6Q5jVBK.js";import"./BasePdfViewer-CsZ6vs9_.js";import"./BasePdfViewer.module.css-Jd_fAF6k.js";import"./PdfViewerAnnotationLayer-DDqATwU3.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DGsFA5PN.js";import"./PdfViewerOutlineSidebar-DOBN2kvH.js";import"./PdfViewerSidebarHeader-BOgbcUp1.js";import"./useBaseUiId-CdU1pKU6.js";import"./useControlled-UCeQQNPP.js";import"./CompositeRoot-C4LeCwy8.js";import"./CompositeItem-D5PXOQkD.js";import"./ToolbarRootContext-CbUVM7d6.js";import"./composite-aDEaeN1m.js";import"./svgIconContainer-BPyIUPO5.js";import"./PdfViewerSearchBar-waMSOGKb.js";import"./chevron-up-CyXdAHIW.js";import"./chevron-down-SngEWHwD.js";import"./cross-HuW5yWPa.js";import"./PdfViewerSidebar-Dal5OWNv.js";import"./index-CHoEIfe6.js";import"./index-CUm5VRBM.js";import"./index-iq-MawLa.js";import"./PdfViewerToolbar-Cep15Hdu.js";import"./Button-DJTiAyTL.js";import"./chevron-right-CY4GXW28.js";import"./Input-CYVECsi-.js";import"./search-CaTzsfhK.js";import"./spin-C3TZH1yr.js";import"./error-BMBrp2lF.js";import"./withOsdkMetrics-DsCWHvB2.js";import"./makeExternalStore-Cax4wnWM.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
