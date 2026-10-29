import{j as r,M as s}from"./iframe-DFOR2onK.js";import{P as p}from"./pdf-viewer-C5KB3pqM.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CUaL_u00.js";import"./preload-helper-ByXSQw30.js";import"./PdfViewer-ByhRwbtq.js";import"./index-BVkLsmBt.js";import"./BasePdfViewer-Dh2pA6k-.js";import"./BasePdfViewer.module.css-CegpEJI2.js";import"./PdfViewerAnnotationLayer-ktyZj2s_.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DFMMCMgL.js";import"./PdfViewerOutlineSidebar-Cb15Cgg_.js";import"./PdfViewerSidebarHeader-BFm9bNAy.js";import"./useBaseUiId-Dsp7jumh.js";import"./useControlled-CtMTriq1.js";import"./CompositeRoot-s1Ihit7X.js";import"./CompositeItem-CtUWLqeJ.js";import"./ToolbarRootContext-DMxHSqVF.js";import"./composite-CRJMZ4tZ.js";import"./svgIconContainer-DjkUaIxk.js";import"./PdfViewerSearchBar-Dx8Otbwh.js";import"./chevron-up-DC98x_tH.js";import"./chevron-down-BMNaDKAR.js";import"./cross-C9kRknfx.js";import"./PdfViewerSidebar-uKPbAz8J.js";import"./index-BCk6aVbl.js";import"./index-DY_-DVUB.js";import"./index-OUX8MUQn.js";import"./PdfViewerToolbar-DUjamy02.js";import"./Button-MewiuY9J.js";import"./chevron-right-BObRZvvG.js";import"./Input-tEOQdwSz.js";import"./search-4X3AVeSP.js";import"./spin-Cgkw6PHl.js";import"./error-BAimxzZD.js";import"./withOsdkMetrics-of9jSM-3.js";import"./makeExternalStore-CaVoQzcs.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
