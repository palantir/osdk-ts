import{j as r,M as s}from"./iframe-29gR9XhZ.js";import{P as p}from"./pdf-viewer-vjA9-qA8.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DryyBtV2.js";import"./preload-helper-DlT-mGxO.js";import"./PdfViewer-DD6bObVb.js";import"./index-CrsEpx0M.js";import"./BasePdfViewer-ar9JMT39.js";import"./BasePdfViewer.module.css-BHGFA3r6.js";import"./PdfViewerAnnotationLayer-r4YF1qPM.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-1OeFBWCV.js";import"./PdfViewerOutlineSidebar-8rymVOmP.js";import"./PdfViewerSidebarHeader-BUThlEeJ.js";import"./useBaseUiId-s8FPLP5u.js";import"./useControlled-DH4JcH5f.js";import"./CompositeRoot-BhXeyUrp.js";import"./CompositeItem-7um1p8gd.js";import"./ToolbarRootContext-Vw1tC3hX.js";import"./composite-C-osCGVl.js";import"./svgIconContainer-B81IYS8r.js";import"./PdfViewerSearchBar-B5LeJG40.js";import"./chevron-up-BqCjK7xm.js";import"./chevron-down-C2ebRgMi.js";import"./cross-CuUhPQxd.js";import"./PdfViewerSidebar-C0iGa4Zz.js";import"./index-DG-eMoMu.js";import"./index-DdlQpJHG.js";import"./index-BVNMC1S5.js";import"./PdfViewerToolbar-DsVY6J_U.js";import"./Button-DYk_F-qJ.js";import"./chevron-right-CZTyla85.js";import"./Input-5lsFnUBK.js";import"./search-DAxbo9jb.js";import"./spin-8Gvb7hZy.js";import"./error-C8ioQ8xA.js";import"./withOsdkMetrics-B8queKnp.js";import"./makeExternalStore-CAnIClXP.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
