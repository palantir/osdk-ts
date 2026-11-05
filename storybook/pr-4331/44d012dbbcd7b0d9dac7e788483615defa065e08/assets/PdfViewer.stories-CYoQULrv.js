import{j as r,M as s}from"./iframe-NfexZY9x.js";import{P as p}from"./pdf-viewer-DUoevZdp.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BDaAAvPW.js";import"./preload-helper-CLTJrXfR.js";import"./PdfViewer-BDERYHYZ.js";import"./index-DHazzmu_.js";import"./BasePdfViewer-zz4nirAK.js";import"./BasePdfViewer.module.css-D6SXM04f.js";import"./PdfViewerAnnotationLayer-D9LVGXgY.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B8BVG2l1.js";import"./PdfViewerOutlineSidebar-1tUWAM2Y.js";import"./PdfViewerSidebarHeader-D3WiYT30.js";import"./useBaseUiId-C16bF6M9.js";import"./useControlled-qgEamnCT.js";import"./CompositeRoot-Hy35wcS-.js";import"./CompositeItem-CHYMHjt2.js";import"./ToolbarRootContext-BdUx3mSp.js";import"./composite-BGUozWMo.js";import"./svgIconContainer-p6aEe31f.js";import"./PdfViewerSearchBar-BGYwKDQU.js";import"./chevron-up-Dz_N7Qax.js";import"./chevron-down-ZCZOaNcj.js";import"./cross-BPxlVDyK.js";import"./PdfViewerSidebar-BFbf18h1.js";import"./index-C7mnTzRF.js";import"./index-DaRojdGd.js";import"./index-Dp-u7LeB.js";import"./PdfViewerToolbar-BEGnl1QT.js";import"./Button-DY6lym1F.js";import"./chevron-right-DZq8sTAG.js";import"./Input-CPs1rDr1.js";import"./search-CmlPMAF4.js";import"./spin-f8psmi8L.js";import"./error-CIC9WqgE.js";import"./withOsdkMetrics-DSmb0LrF.js";import"./makeExternalStore-C62gR5VT.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
