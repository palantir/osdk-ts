import{j as r,M as s}from"./iframe-Bg0i_UAO.js";import{P as p}from"./pdf-viewer-C7giX_Rp.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CHhlgXjg.js";import"./preload-helper-bomzM5Jo.js";import"./PdfViewer-BxAc8Rr5.js";import"./index-iuNvYGUj.js";import"./BasePdfViewer-CALTwNUW.js";import"./BasePdfViewer.module.css-B2NC8MHn.js";import"./PdfViewerAnnotationLayer-OjD5R0cO.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-25vbzKe9.js";import"./PdfViewerOutlineSidebar-VPPlmZIt.js";import"./PdfViewerSidebarHeader-BuEA0FEX.js";import"./useBaseUiId-Dy2tLJKh.js";import"./useControlled-BYTWKxAR.js";import"./CompositeRoot-C3CwfXtV.js";import"./CompositeItem-DcA0lzjF.js";import"./ToolbarRootContext-BrU5VQqZ.js";import"./composite-DU2hn-v2.js";import"./svgIconContainer-458A5wVg.js";import"./PdfViewerSearchBar-ClWQl__D.js";import"./chevron-up-B4yy4nu1.js";import"./chevron-down-WqwXZksn.js";import"./cross-DYXULJqv.js";import"./PdfViewerSidebar-Dqr2Skdn.js";import"./index-DdfZaivF.js";import"./index-BNlKleF-.js";import"./index-DmhiGDhn.js";import"./PdfViewerToolbar-BS41D-KK.js";import"./Button-BG7UnPBU.js";import"./chevron-right-DMYFjuWB.js";import"./Input-DGqcQ9G-.js";import"./search-FIM5R_Xb.js";import"./spin-DagrF9id.js";import"./error-DVM1iMsf.js";import"./withOsdkMetrics-CcEO5U0p.js";import"./makeExternalStore-DXmjaos-.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
