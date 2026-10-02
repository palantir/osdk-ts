import{j as r,M as s}from"./iframe-DpUFwGwm.js";import{P as p}from"./pdf-viewer-Cyr_9RbP.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DMqx_km6.js";import"./preload-helper-D7G3iNMY.js";import"./PdfViewer-BdlKMjaE.js";import"./index-BRNwf_dL.js";import"./BasePdfViewer-OiZBUXiT.js";import"./BasePdfViewer.module.css-BSIBBxyk.js";import"./PdfViewerAnnotationLayer-BO5sRJiA.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CEBc4kLt.js";import"./PdfViewerOutlineSidebar-WcQUmZIU.js";import"./PdfViewerSidebarHeader-Dwqtj6SF.js";import"./useBaseUiId-BCiTIIVN.js";import"./useControlled-raZDZG7g.js";import"./CompositeRoot-HSiY2NqE.js";import"./CompositeItem-CN8uA6ij.js";import"./ToolbarRootContext-DKuVgI34.js";import"./composite-Cj7Gyck6.js";import"./svgIconContainer-DnMlbACY.js";import"./PdfViewerSearchBar-Ddcs48Wv.js";import"./chevron-up-CXjssTN2.js";import"./chevron-down-CYVMAiKh.js";import"./cross-BOdVaiDd.js";import"./PdfViewerSidebar-GiPrFWjs.js";import"./index-B-mDfD20.js";import"./index-ySwYaDEc.js";import"./index-DauVYyRU.js";import"./PdfViewerToolbar-CQdxJJpJ.js";import"./Button-DfSDbPeQ.js";import"./chevron-right-DlN6AtQ7.js";import"./Input-B7COcDHt.js";import"./search-BkAszfZ6.js";import"./spin-CNCslWB8.js";import"./error-B3ctmJqj.js";import"./withOsdkMetrics-D7Wb3D4v.js";import"./makeExternalStore-Cx_BHKOC.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
