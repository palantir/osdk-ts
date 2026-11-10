import{j as r,M as s}from"./iframe-CfbjiUO2.js";import{P as p}from"./pdf-viewer-2QBEqCxl.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-usBiRgdB.js";import"./preload-helper-9qFOutGb.js";import"./PdfViewer-CkXYApAx.js";import"./index-DhEKv3k8.js";import"./BasePdfViewer-DJB9_lds.js";import"./BasePdfViewer.module.css-JwtLv1uZ.js";import"./PdfViewerAnnotationLayer-BUfLzmfL.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CVZjzGMV.js";import"./PdfViewerOutlineSidebar-B-yLYXLp.js";import"./PdfViewerSidebarHeader-C1uN5Z6o.js";import"./useBaseUiId-KkzZtg6c.js";import"./useControlled-NF1yqRGY.js";import"./CompositeRoot-CXgLN0Iq.js";import"./CompositeItem-CXj7-nx_.js";import"./ToolbarRootContext-DEszTe9o.js";import"./composite-BLsaDnsq.js";import"./svgIconContainer-n1-XLaqe.js";import"./PdfViewerSearchBar-CIBFGTkz.js";import"./chevron-up-CcxcxHpC.js";import"./chevron-down-7jPpylX5.js";import"./cross-CDv3c9ZT.js";import"./PdfViewerSidebar-Bs4Hob8D.js";import"./index-Bv3dL3pD.js";import"./index-DeN7WaWx.js";import"./index-Cdt2HnwD.js";import"./PdfViewerToolbar-Y1Y0Zxy4.js";import"./Button-BVuGahtR.js";import"./chevron-right-0ZHExpFP.js";import"./Input-C6r2dONX.js";import"./search-BvtxNbE5.js";import"./spin-CtnqQZad.js";import"./error-CdqVFWE7.js";import"./withOsdkMetrics-1iZQrA2_.js";import"./makeExternalStore-bIg36UO0.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
