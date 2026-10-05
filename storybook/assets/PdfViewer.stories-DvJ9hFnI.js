import{j as r,M as s}from"./iframe-Bhux-jL2.js";import{P as p}from"./pdf-viewer-B160nZaE.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CzGdfIsZ.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfViewer-ByMVb2aV.js";import"./index-CqpPyV6t.js";import"./BasePdfViewer-0ofdlSjQ.js";import"./BasePdfViewer.module.css-BOo94dZJ.js";import"./PdfViewerAnnotationLayer-BssBVoz4.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CAM-Tigb.js";import"./PdfViewerOutlineSidebar-Cuy1C8vW.js";import"./PdfViewerSidebarHeader-CCjLXpth.js";import"./useBaseUiId-De8pklpX.js";import"./useControlled-B8x__iZM.js";import"./CompositeRoot-nEFRKI7G.js";import"./CompositeItem-x-GueMXE.js";import"./ToolbarRootContext-BAnbUtNA.js";import"./composite-pG-5UHC0.js";import"./svgIconContainer-DLxw3PxE.js";import"./PdfViewerSearchBar-DkUVSKFD.js";import"./chevron-up-DmzAlWEp.js";import"./chevron-down-_Dmt60i4.js";import"./cross-CUQYhxA4.js";import"./PdfViewerSidebar-C61BoOzT.js";import"./index-fIrfSYEO.js";import"./index-Dq01vjvQ.js";import"./index-DbS2jUPU.js";import"./PdfViewerToolbar-DE7ZVxBd.js";import"./Button-CMvjR2Al.js";import"./chevron-right-BAkPAMZP.js";import"./Input-Cz3DPiZR.js";import"./search-jbt_qsn3.js";import"./spin-CEu93eOk.js";import"./error-mg2-r6Xs.js";import"./withOsdkMetrics-D-lmPy0A.js";import"./makeExternalStore-fmuI2lu4.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
