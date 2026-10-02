import{j as r,M as s}from"./iframe-BolfAo4P.js";import{P as p}from"./pdf-viewer-BMMUkuHy.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-V05lbn-t.js";import"./preload-helper-ByLp_rEH.js";import"./PdfViewer-BIUnFmJk.js";import"./index-Dmp4oRqW.js";import"./BasePdfViewer-BRkG-3ra.js";import"./BasePdfViewer.module.css-BXLqQIr3.js";import"./PdfViewerAnnotationLayer-BexI6Eox.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B1fgIlxN.js";import"./PdfViewerOutlineSidebar-C9vq7pS6.js";import"./PdfViewerSidebarHeader-D3lzFB7B.js";import"./useBaseUiId-DvZ-ac1w.js";import"./useControlled-C5FT7OgD.js";import"./CompositeRoot-B2zEO4pR.js";import"./CompositeItem-BQgJHL6C.js";import"./ToolbarRootContext-Dsfyi3tb.js";import"./composite-kotVvYj1.js";import"./svgIconContainer-zqDwx0Og.js";import"./PdfViewerSearchBar-CUS2FxId.js";import"./chevron-up-DQQUjxtC.js";import"./chevron-down-Bj7fILeX.js";import"./cross-CPB91upb.js";import"./PdfViewerSidebar-DW9W04sl.js";import"./index-DXDGkGFP.js";import"./index-Bt9kKuNp.js";import"./index-Cea80THD.js";import"./PdfViewerToolbar-DpI6noaV.js";import"./Button-D-ABdEsl.js";import"./chevron-right--IBrR7Q_.js";import"./Input-DnQW0UEK.js";import"./search-Sp-9ghy3.js";import"./spin-CIeuJ9yU.js";import"./error-Dnl49oZI.js";import"./withOsdkMetrics-DkkczEbv.js";import"./makeExternalStore-B6jLw3hY.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
