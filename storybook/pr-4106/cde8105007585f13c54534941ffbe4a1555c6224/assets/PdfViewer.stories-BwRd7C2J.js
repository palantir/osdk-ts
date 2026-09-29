import{j as r,M as s}from"./iframe-DuWBrnX6.js";import{P as p}from"./pdf-viewer-DHsDCS6C.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-sVANiNW1.js";import"./preload-helper-DrgdFKpA.js";import"./PdfViewer-BbW5r-BN.js";import"./index-OYdh6lUD.js";import"./BasePdfViewer-DBWtxXHk.js";import"./BasePdfViewer.module.css-B5mXb34J.js";import"./PdfViewerAnnotationLayer-DV4XCsh9.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CmX3oZwF.js";import"./PdfViewerOutlineSidebar-7LINj5Lz.js";import"./PdfViewerSidebarHeader-D-t_WczU.js";import"./useBaseUiId-CdjTAmdC.js";import"./useControlled-CfhHYIWN.js";import"./CompositeRoot-DXY1uypv.js";import"./CompositeItem-BMOplAgs.js";import"./ToolbarRootContext-rla5WBjp.js";import"./composite-CJJfU9AF.js";import"./svgIconContainer-DbzEfa2V.js";import"./PdfViewerSearchBar-DJZ5Stmp.js";import"./chevron-up-D5CWgtqe.js";import"./chevron-down-C1ZcStCW.js";import"./cross-C8yX_l8v.js";import"./PdfViewerSidebar-C-U5IFtq.js";import"./index-BrPlemdb.js";import"./index-BL6aYYYG.js";import"./index-CVjf0aQc.js";import"./PdfViewerToolbar-vMexKpD0.js";import"./Button-_WXHae0p.js";import"./chevron-right-Bz6hrCos.js";import"./Input-BkO3X1te.js";import"./search-D_dtCoIW.js";import"./spin-CRqQcXsQ.js";import"./error-Ch_37QlI.js";import"./withOsdkMetrics-DGxRrW5c.js";import"./makeExternalStore-CjwtTBHZ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
