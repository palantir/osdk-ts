import{j as r,M as s}from"./iframe-DcZIbII1.js";import{P as p}from"./pdf-viewer-Dm2-7Vb-.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C7pq6fdO.js";import"./preload-helper-CtJBcs4m.js";import"./PdfViewer-U7DjUrYd.js";import"./index-CknXFCuG.js";import"./BasePdfViewer-DVOkoG1K.js";import"./BasePdfViewer.module.css-h89CJZSz.js";import"./PdfViewerAnnotationLayer-BmxrppdV.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CPhOg-_V.js";import"./PdfViewerOutlineSidebar-D9kVOJfc.js";import"./PdfViewerSidebarHeader-BvJrnDIZ.js";import"./useBaseUiId-Bwnxqilm.js";import"./useControlled-CtuIn0tc.js";import"./CompositeRoot-DHtGtgFZ.js";import"./CompositeItem-0HlJZQq8.js";import"./ToolbarRootContext-DW70chtw.js";import"./composite-im6S2sQa.js";import"./svgIconContainer-CCPtMkY_.js";import"./PdfViewerSearchBar-R4AaiCgX.js";import"./chevron-up-DJd1hGhJ.js";import"./chevron-down-CgbkcCiQ.js";import"./cross-B7rc_3vM.js";import"./PdfViewerSidebar-C6J6_1pd.js";import"./index-DSHI6oH0.js";import"./index-Dkeo5kI9.js";import"./index-B9y2Cfx6.js";import"./PdfViewerToolbar-D_LeBPfZ.js";import"./Button-fbYfSW4g.js";import"./chevron-right-Cx3Vp_dU.js";import"./Input-DgnbxA8W.js";import"./search-ByPzgBRT.js";import"./spin-CF4LYkF5.js";import"./error-CfhtcL_7.js";import"./withOsdkMetrics-D2PqzxOJ.js";import"./makeExternalStore-Dx5t4IsM.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
