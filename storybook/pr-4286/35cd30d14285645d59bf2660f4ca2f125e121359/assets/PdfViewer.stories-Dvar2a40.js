import{j as r,M as s}from"./iframe-CNj1GFG8.js";import{P as p}from"./pdf-viewer-BlNeH6pk.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Btx32DO7.js";import"./preload-helper-Cjo-XvAp.js";import"./PdfViewer-B3P65-q9.js";import"./index-oB_g-d5V.js";import"./BasePdfViewer-pFGOrxi3.js";import"./BasePdfViewer.module.css-CUo0UvTw.js";import"./PdfViewerAnnotationLayer-B4sY6tqY.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BlArshD2.js";import"./PdfViewerOutlineSidebar-D-PbzLfT.js";import"./PdfViewerSidebarHeader-Cw3oz3Hx.js";import"./useBaseUiId-CsicFn0g.js";import"./useControlled-DjWof5sy.js";import"./CompositeRoot-YPdwQ__Z.js";import"./CompositeItem-xqfWa6Bp.js";import"./ToolbarRootContext-Nkrk5VcP.js";import"./composite-BHr8Wk2A.js";import"./svgIconContainer-Bhefl8zi.js";import"./PdfViewerSearchBar-9kRJJXWh.js";import"./chevron-up-SuCJxHXj.js";import"./chevron-down-UgpOAJV9.js";import"./cross-B62mBt8r.js";import"./PdfViewerSidebar-D869ydUI.js";import"./index-rvaooZlS.js";import"./index-BASR5P1U.js";import"./index-eXax19dP.js";import"./PdfViewerToolbar-JRmWMPbp.js";import"./Button-DUnKzmAM.js";import"./chevron-right-D8i9ARj2.js";import"./Input-BxtPTbIC.js";import"./search-9WBJrji3.js";import"./spin-FC8eOrtJ.js";import"./error-D9mbXxgI.js";import"./withOsdkMetrics-6BIUOFhO.js";import"./makeExternalStore-CM009B6W.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
