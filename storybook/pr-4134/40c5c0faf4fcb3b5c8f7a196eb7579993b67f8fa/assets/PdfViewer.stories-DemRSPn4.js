import{j as r,M as s}from"./iframe-Cm8T158U.js";import{P as p}from"./pdf-viewer-Bi1231Sl.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-SNHdwmHO.js";import"./preload-helper-Dg6khx2b.js";import"./PdfViewer-DhMX_WiK.js";import"./index-CgyhAk5D.js";import"./BasePdfViewer-BjHUZSAe.js";import"./BasePdfViewer.module.css-Drez132c.js";import"./PdfViewerAnnotationLayer-DtCSOBOZ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DDz57owk.js";import"./PdfViewerOutlineSidebar-DFzjL5ga.js";import"./PdfViewerSidebarHeader-9L5JJWkv.js";import"./useBaseUiId-DOlC9YEi.js";import"./useControlled-2KbdkYL7.js";import"./CompositeRoot-C7uTznLk.js";import"./CompositeItem-DdfovVZg.js";import"./ToolbarRootContext-81tt_rrb.js";import"./composite-BF9l_TFl.js";import"./svgIconContainer-CwvpItZa.js";import"./PdfViewerSearchBar-DDLsa6Cn.js";import"./chevron-up-DONvJUai.js";import"./chevron-down-CcWrtqn6.js";import"./cross-DRMZ0Z7-.js";import"./PdfViewerSidebar-C82bBFBm.js";import"./index-D9OySAXe.js";import"./index-B-f--Lzy.js";import"./index-DBvuzU0Y.js";import"./PdfViewerToolbar-xQcvqpFj.js";import"./Button-CDJirsdr.js";import"./chevron-right-CgA4kMgd.js";import"./Input-CwlN5ff_.js";import"./search-C5kq4KUb.js";import"./spin-DPE7y9Pf.js";import"./error-W0yg1EoP.js";import"./withOsdkMetrics-By5xofqX.js";import"./makeExternalStore-Bwp5qgF6.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
