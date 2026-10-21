import{j as r,M as s}from"./iframe-AXAl_lkK.js";import{P as p}from"./pdf-viewer-BFfQd8mG.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BF8s2ywD.js";import"./preload-helper-CmOyIjss.js";import"./PdfViewer-DXh6Ty2O.js";import"./index-WwDO5TYI.js";import"./BasePdfViewer-CR6EgeMD.js";import"./BasePdfViewer.module.css-Bvu2dzJC.js";import"./PdfViewerAnnotationLayer-DMTZyUPS.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cyx__npZ.js";import"./PdfViewerOutlineSidebar-CUVDbfJI.js";import"./PdfViewerSidebarHeader-Bj1zD2QN.js";import"./useBaseUiId-Z03BErLK.js";import"./useControlled-CwZsDCym.js";import"./CompositeRoot-CLadqUzK.js";import"./CompositeItem-3bSE7nfu.js";import"./ToolbarRootContext-Bjje7bvz.js";import"./composite-DhTcvoOi.js";import"./svgIconContainer-C41-1JgD.js";import"./PdfViewerSearchBar-Cvhft3Gk.js";import"./chevron-up-5Z9e1fPn.js";import"./chevron-down-Bzpri4FT.js";import"./cross-CQtMlVpl.js";import"./PdfViewerSidebar-Cm_znfa1.js";import"./index-DyLMV4YC.js";import"./index-waMJrP0w.js";import"./index-BfO3FL2b.js";import"./PdfViewerToolbar-CyDIKkkA.js";import"./Button-PnLOiyuX.js";import"./chevron-right-BMQOm2UK.js";import"./Input-rah5Oh7j.js";import"./search-DSOJHa0m.js";import"./spin-BbpsMNFM.js";import"./error-DelAmSaO.js";import"./withOsdkMetrics-CZL_7UfS.js";import"./makeExternalStore-xudMkMrV.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
