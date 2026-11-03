import{j as r,M as s}from"./iframe-BZrHCCWD.js";import{P as p}from"./pdf-viewer-CXi0aJ__.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BtPao_lN.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfViewer-C60JjplO.js";import"./index-BbBwfHG7.js";import"./BasePdfViewer-BKqR0McJ.js";import"./BasePdfViewer.module.css-D3Xbd4mY.js";import"./PdfViewerAnnotationLayer-DF-J9zqb.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BDFTk8LK.js";import"./PdfViewerOutlineSidebar-D3VkOTQH.js";import"./PdfViewerSidebarHeader-DIDzNdxq.js";import"./useBaseUiId-BS5c_qfo.js";import"./useControlled-CGFBoHyX.js";import"./CompositeRoot-Wu9GxS0l.js";import"./CompositeItem-DdzLCYzu.js";import"./ToolbarRootContext-HdK5b1bg.js";import"./composite-B06N-5LO.js";import"./svgIconContainer-DvKRTV-T.js";import"./PdfViewerSearchBar-udjPnGmv.js";import"./chevron-up-DMTbCHUh.js";import"./chevron-down-BCopBMR6.js";import"./cross-CQg-zCtt.js";import"./PdfViewerSidebar-2B5ShKgl.js";import"./index-J3cPUL6v.js";import"./index-D_mlxwiI.js";import"./index-BoSlXWJn.js";import"./PdfViewerToolbar-BEe0o6IM.js";import"./Button-JGRhrjvL.js";import"./chevron-right-CVh3X6Pp.js";import"./Input-3V3vHuAM.js";import"./search-PU-jJ5zI.js";import"./spin-CxOTaxmK.js";import"./error-D2Jou9ns.js";import"./withOsdkMetrics-DyjVeD0H.js";import"./makeExternalStore-Dg_VN0ud.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
