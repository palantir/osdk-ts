import{j as r,M as s}from"./iframe-Uo3dslN8.js";import{P as p}from"./pdf-viewer-Djo2UcwF.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-zfZh0uXl.js";import"./preload-helper-Di20YyVw.js";import"./PdfViewer-CLPBnlVG.js";import"./index-DM2i2mIv.js";import"./BasePdfViewer-DAKKPD5o.js";import"./BasePdfViewer.module.css-iHZazfMB.js";import"./PdfViewerAnnotationLayer-CQTAzyd2.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-4i8pbLVv.js";import"./PdfViewerOutlineSidebar-D_eFuEmw.js";import"./PdfViewerSidebarHeader-D_R4gqDU.js";import"./useBaseUiId-BMW1tYuT.js";import"./useControlled-DxDhJC_G.js";import"./CompositeRoot-DydVLWDJ.js";import"./CompositeItem-CwindMm_.js";import"./ToolbarRootContext-CpVoG4Hd.js";import"./composite-CJL7rGjP.js";import"./svgIconContainer-CCPA44UG.js";import"./PdfViewerSearchBar-Z09AC3-Z.js";import"./chevron-up-C9IrMgVb.js";import"./chevron-down-CCfCID7b.js";import"./cross-CtSgYx1A.js";import"./PdfViewerSidebar-DSxICXAM.js";import"./index-DmI8cFxT.js";import"./index-BjmUJLrE.js";import"./index-DNOgt9xG.js";import"./PdfViewerToolbar-CGL9wx2n.js";import"./Button-CVEJXnPN.js";import"./chevron-right-Dyr-xiGY.js";import"./Input-COrEd_bS.js";import"./search-DMwUXAz4.js";import"./spin-Dky_OAmb.js";import"./error-Suxt282O.js";import"./withOsdkMetrics-BYDhROpI.js";import"./makeExternalStore-BoTJ6suj.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
