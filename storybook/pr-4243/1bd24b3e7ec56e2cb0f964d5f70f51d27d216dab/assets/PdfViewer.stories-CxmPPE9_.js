import{j as r,M as s}from"./iframe-tNZJ_yts.js";import{P as p}from"./pdf-viewer-DztA7bNd.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BlYDqjXp.js";import"./preload-helper-Cs-zZmWk.js";import"./PdfViewer-BbWNYW6-.js";import"./index-GtjnSSRw.js";import"./BasePdfViewer-Bc2lcoCf.js";import"./BasePdfViewer.module.css-BGnOTI83.js";import"./PdfViewerAnnotationLayer-D8vY3Gwn.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-5FRQEOZj.js";import"./PdfViewerOutlineSidebar-Q6TB6Zd8.js";import"./PdfViewerSidebarHeader-CdATXfWQ.js";import"./useBaseUiId-CfzXRAwD.js";import"./useControlled-BcyW94WW.js";import"./CompositeRoot-CFSn1tEq.js";import"./CompositeItem-DK62Ja5z.js";import"./ToolbarRootContext-Bgv8jhAk.js";import"./composite-BiyNCJEr.js";import"./svgIconContainer-Cg9fo9q3.js";import"./PdfViewerSearchBar-B7oBJJ7t.js";import"./chevron-up-R7htkY2h.js";import"./chevron-down-B8TK3y2h.js";import"./cross-ocv2rHpU.js";import"./PdfViewerSidebar-CxOhyVmT.js";import"./index-ZWb-P89H.js";import"./index-B8odcJPp.js";import"./index-BI50CR4r.js";import"./PdfViewerToolbar-BzTFB_cF.js";import"./Button-q3PQJ8YO.js";import"./chevron-right-C-_5_npA.js";import"./Input-Bd3UykWw.js";import"./search-380Wfs82.js";import"./spin-CbuvdWCQ.js";import"./error-DA-ZYNwq.js";import"./withOsdkMetrics-CxocJMpO.js";import"./makeExternalStore-BGIMf0MS.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
