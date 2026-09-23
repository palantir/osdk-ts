import{j as r,M as s}from"./iframe-CWxH_eja.js";import{P as p}from"./pdf-viewer-DC9BWfxK.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-mFKA4SCc.js";import"./preload-helper-BGM-FNNL.js";import"./PdfViewer-DaIJmwZD.js";import"./index-rukiLk-t.js";import"./BasePdfViewer-BNrGEwZT.js";import"./BasePdfViewer.module.css-BamvrecD.js";import"./PdfViewerAnnotationLayer-D9wQaaQl.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DFWggdJt.js";import"./PdfViewerOutlineSidebar-CDcAJqhP.js";import"./PdfViewerSidebarHeader-Cxy7ZaCf.js";import"./useBaseUiId-DjXwJ_4A.js";import"./useControlled-CaUffLu_.js";import"./CompositeRoot-DE5qHj0D.js";import"./CompositeItem-ClK4GwxV.js";import"./ToolbarRootContext-BeUcIWq0.js";import"./composite--3W2QfLD.js";import"./svgIconContainer-BVjwrQj6.js";import"./PdfViewerSearchBar-BqC25G3G.js";import"./chevron-up-CQPb-X1m.js";import"./chevron-down-CtewQHTT.js";import"./cross-BUnzug5D.js";import"./PdfViewerSidebar-3BYPeLFB.js";import"./index-91nsioHy.js";import"./index-CCBaaayX.js";import"./index-VZEG51bO.js";import"./PdfViewerToolbar-Rb0HcLvx.js";import"./Button-xLQbkIr8.js";import"./chevron-right-52Er8IeG.js";import"./Input-CalfVJQO.js";import"./search-CCiYcsoJ.js";import"./spin-DOXLJM3l.js";import"./error-4ibjlhF7.js";import"./withOsdkMetrics-BxqDWVVo.js";import"./makeExternalStore-MGpOOWzr.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
