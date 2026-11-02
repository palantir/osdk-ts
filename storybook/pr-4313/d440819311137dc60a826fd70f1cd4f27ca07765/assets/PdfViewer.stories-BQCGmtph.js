import{j as r,M as s}from"./iframe-B6oWV_cO.js";import{P as p}from"./pdf-viewer-B_pbiXCf.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-1O9U6TqW.js";import"./preload-helper-CvT5iRxj.js";import"./PdfViewer-D_tt6F68.js";import"./index-jWi9en1s.js";import"./BasePdfViewer-CyLrtb6_.js";import"./BasePdfViewer.module.css-D-9ey5gU.js";import"./PdfViewerAnnotationLayer-DYiqrRoW.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CND27DwJ.js";import"./PdfViewerOutlineSidebar-DAkmjCeE.js";import"./PdfViewerSidebarHeader-DoXTDHvm.js";import"./useBaseUiId-Lqu0Q_Vu.js";import"./useControlled-BYVF8v0w.js";import"./CompositeRoot-BOsrxmub.js";import"./CompositeItem-Bt81vcwk.js";import"./ToolbarRootContext-BPjzZzdt.js";import"./composite-Dp6W2S9Q.js";import"./svgIconContainer-CyQYn__Q.js";import"./PdfViewerSearchBar-BVzqic0l.js";import"./chevron-up-bHgsMpWq.js";import"./chevron-down-DRI3eY5G.js";import"./cross-CMQlEfgT.js";import"./PdfViewerSidebar-CwkuMVJb.js";import"./index-DgJyY4kw.js";import"./index-CuLm7S4g.js";import"./index-BRc86hmI.js";import"./PdfViewerToolbar-CWWXjhu-.js";import"./Button-COxF9se3.js";import"./chevron-right-DRUferBa.js";import"./Input-Czst-Pu5.js";import"./search-elVCr7Zu.js";import"./spin-BD5CCDBd.js";import"./error-BpLqO6z6.js";import"./withOsdkMetrics-U9jYKXmV.js";import"./makeExternalStore-DOLupiTS.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
