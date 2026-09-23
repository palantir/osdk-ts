import{j as r,M as s}from"./iframe-Cav9-PmA.js";import{P as p}from"./pdf-viewer-BI9DyfEH.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Cq-sE_Vk.js";import"./preload-helper-C5qWD71s.js";import"./PdfViewer-BE1YTXNs.js";import"./index-CL4yhLt9.js";import"./BasePdfViewer-BgWUXAct.js";import"./BasePdfViewer.module.css-oVsFBoRU.js";import"./PdfViewerAnnotationLayer-Do1LDNB8.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-s69GMUgw.js";import"./PdfViewerOutlineSidebar-DX1Y-XKL.js";import"./PdfViewerSidebarHeader-scQ2-lZs.js";import"./useBaseUiId-FJrmMdaq.js";import"./useControlled-D_WTTjhN.js";import"./CompositeRoot-IoKCuD4-.js";import"./CompositeItem-COO8IGaX.js";import"./ToolbarRootContext-BTcyHQC1.js";import"./composite-BhU6OEFZ.js";import"./svgIconContainer-DLGQs5zG.js";import"./PdfViewerSearchBar-DejmEC1i.js";import"./chevron-up-DzozoERN.js";import"./chevron-down-8Euui_dn.js";import"./cross-Clu4CbjC.js";import"./PdfViewerSidebar-Bz0ycUDh.js";import"./index-CGDltp0P.js";import"./index-B3WsbxUl.js";import"./index-CB0DImnr.js";import"./PdfViewerToolbar-7OwazIVE.js";import"./Button-lsqLjeDU.js";import"./chevron-right-DhLWBeMw.js";import"./Input-BztqfZ4v.js";import"./search-LZGc9ZDj.js";import"./spin-C3SoWy4z.js";import"./error-DdLyc_Py.js";import"./withOsdkMetrics-Bmf3O0C1.js";import"./makeExternalStore-ZoA1Ll7J.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
