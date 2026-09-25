import{j as r,M as s}from"./iframe-CNaoCaD-.js";import{P as p}from"./pdf-viewer-DUjlGMK-.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-ceU23QhP.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfViewer-CyklfKZ1.js";import"./index-D0c6s8Wh.js";import"./BasePdfViewer-FmsTOLYs.js";import"./BasePdfViewer.module.css--N_WuiAr.js";import"./PdfViewerAnnotationLayer-BGLGg5yG.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-qFxl_ei5.js";import"./PdfViewerOutlineSidebar-CopYzVG0.js";import"./PdfViewerSidebarHeader-CFwqU8N5.js";import"./useBaseUiId-BLzWWyTo.js";import"./useControlled-DxXwsmI6.js";import"./CompositeRoot-Bfo96CA0.js";import"./CompositeItem-DGSUi3Oj.js";import"./ToolbarRootContext-C6YFR30y.js";import"./composite-DI12gblL.js";import"./svgIconContainer-DMxMunFc.js";import"./PdfViewerSearchBar-CId7dUE_.js";import"./chevron-up-etrIxmlI.js";import"./chevron-down-LMtkkQTV.js";import"./cross-BAAhVfqY.js";import"./PdfViewerSidebar-Bb3zajrI.js";import"./index-CbXbemY1.js";import"./index-CO70LKAy.js";import"./index-bkL56BYD.js";import"./PdfViewerToolbar-s5yOgTUc.js";import"./Button-DnaSBDda.js";import"./chevron-right-CyKSYbAq.js";import"./Input-BBHZGssD.js";import"./search-ORWNQV-Y.js";import"./spin-BYuPDVLY.js";import"./error-CEVIMozV.js";import"./withOsdkMetrics-C088wNt_.js";import"./makeExternalStore-DdM6Dx34.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
