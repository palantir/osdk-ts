import{j as r,M as s}from"./iframe-Bw13kIxi.js";import{P as p}from"./pdf-viewer-BdOpsGfR.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CbxWfYRn.js";import"./preload-helper-BzOLmTcY.js";import"./PdfViewer-DtJGqIyk.js";import"./index-MMxGRtZu.js";import"./BasePdfViewer-8sOAJLbe.js";import"./BasePdfViewer.module.css-dXA6WaQ_.js";import"./PdfViewerAnnotationLayer-CUKw5rlm.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CrLy4_GT.js";import"./PdfViewerOutlineSidebar-hyjEZkta.js";import"./PdfViewerSidebarHeader-Dfkv8Tqg.js";import"./useBaseUiId-BD7FpPox.js";import"./useControlled-DefJa1NZ.js";import"./CompositeRoot-D3tWT_zL.js";import"./CompositeItem-B4j9mPKG.js";import"./ToolbarRootContext-IHMHRzml.js";import"./composite-BFCFgZut.js";import"./svgIconContainer-CHQSAFNt.js";import"./PdfViewerSearchBar-DsAGyuHE.js";import"./chevron-up-B2KSviuP.js";import"./chevron-down-hwQFkKEa.js";import"./cross-Bot7O1S5.js";import"./PdfViewerSidebar-ihpUCWkT.js";import"./index-Dtvh5Ts7.js";import"./index-CUU4Y7hn.js";import"./index-BqWGwO84.js";import"./PdfViewerToolbar-DB4YbZ0b.js";import"./Button-CE0Z6ey5.js";import"./chevron-right-Dt3lo7hs.js";import"./Input-2zOhGHVv.js";import"./search-DC1ogqGn.js";import"./spin-DqkbUM7m.js";import"./error-CDpWRRdK.js";import"./withOsdkMetrics-Bh3armvA.js";import"./makeExternalStore-BPlb4pia.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
