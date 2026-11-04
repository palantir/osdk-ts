import{j as r,M as s}from"./iframe-BVgEXOM0.js";import{P as p}from"./pdf-viewer-3RvY68D8.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C_sqE25Z.js";import"./preload-helper-CactQ6nb.js";import"./PdfViewer-trLvOIm8.js";import"./index-8aR2Ioa8.js";import"./BasePdfViewer-4oh5JkRu.js";import"./BasePdfViewer.module.css-rTfAfOjr.js";import"./PdfViewerAnnotationLayer-QySnewE4.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D8PRvvmO.js";import"./PdfViewerOutlineSidebar-Ds2tE0Hs.js";import"./PdfViewerSidebarHeader-DPwh2aVs.js";import"./useBaseUiId-D5ZxfDH3.js";import"./useControlled-BIcpHOeT.js";import"./CompositeRoot-DfmXFzEj.js";import"./CompositeItem-DmERPWlX.js";import"./ToolbarRootContext-Cn0yRgUL.js";import"./composite-CZzw119W.js";import"./svgIconContainer-CDZ82EYf.js";import"./PdfViewerSearchBar-DArrfQk7.js";import"./chevron-up-D3mBBAI9.js";import"./chevron-down-CrDZIThJ.js";import"./cross-D1T8VNxn.js";import"./PdfViewerSidebar-C6VSxaCQ.js";import"./index-BfuXcFcC.js";import"./index-DQzPD5cl.js";import"./index-DwR3j9NI.js";import"./PdfViewerToolbar-DO8PjZJL.js";import"./Button-WKXKQ1tY.js";import"./chevron-right-DGUhyTXR.js";import"./Input-odv82aFx.js";import"./search-CxzK3q4z.js";import"./spin-C4FWmCEg.js";import"./error-B5TbSbWu.js";import"./withOsdkMetrics-C2GPaHST.js";import"./makeExternalStore-aQWgWKmj.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
