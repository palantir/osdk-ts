import{j as r,M as s}from"./iframe-rrq8MZm7.js";import{P as p}from"./pdf-viewer-Cw7wOeVp.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Cq4zpKVe.js";import"./preload-helper-g_e3lUw3.js";import"./PdfViewer-CWjVUMfg.js";import"./index-DgF7SkuQ.js";import"./BasePdfViewer-DoBgid2L.js";import"./BasePdfViewer.module.css-D-Al21dp.js";import"./PdfViewerAnnotationLayer-B4Pa56El.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DuBOUwep.js";import"./PdfViewerOutlineSidebar-NoCBmk9W.js";import"./PdfViewerSidebarHeader-BuVWJ43n.js";import"./useBaseUiId-Ck0oWSaP.js";import"./useControlled-CFE1onYy.js";import"./CompositeRoot-ClJgtuze.js";import"./CompositeItem-CfvMX9u5.js";import"./ToolbarRootContext-BX6aviUc.js";import"./composite-Dz23lKV_.js";import"./svgIconContainer-DzRNCFzx.js";import"./PdfViewerSearchBar-dG4sQ6YI.js";import"./chevron-up-DVKUDI8L.js";import"./chevron-down-wVslH90M.js";import"./cross-Dx39xAnI.js";import"./PdfViewerSidebar-CeRKcbxP.js";import"./index-Bf3ZsPEb.js";import"./index-CSl6GKyJ.js";import"./index-CxWs-nPq.js";import"./PdfViewerToolbar-CFkS54m9.js";import"./Button-CR0VLtCt.js";import"./chevron-right-BvEAsPni.js";import"./Input-DomtRdeE.js";import"./search-HS8jOdU9.js";import"./spin-DYtT6oRy.js";import"./error-Bcjq0Lff.js";import"./withOsdkMetrics-CkwBt4Ou.js";import"./makeExternalStore-Ce8SSisl.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
