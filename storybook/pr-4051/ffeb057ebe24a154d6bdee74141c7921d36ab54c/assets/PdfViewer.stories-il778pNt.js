import{j as r,M as s}from"./iframe-CRcSxZM8.js";import{P as p}from"./pdf-viewer-BPeIRTKx.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Dc9zR4gQ.js";import"./preload-helper-ZugcXPGT.js";import"./PdfViewer-BphX11Wa.js";import"./index-g1O5dw2n.js";import"./BasePdfViewer-C4JpmLWB.js";import"./BasePdfViewer.module.css-B3CBFX7a.js";import"./PdfViewerAnnotationLayer-Ce8OeBrp.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CyDG8DNg.js";import"./PdfViewerOutlineSidebar-ChvCMCGf.js";import"./PdfViewerSidebarHeader-w64Tg0j5.js";import"./useBaseUiId-CR1J1kR-.js";import"./useControlled-DQ_eI8kZ.js";import"./CompositeRoot-B6o3Go7Y.js";import"./CompositeItem-Bm_HuJxQ.js";import"./ToolbarRootContext-Ca7X_ytn.js";import"./composite-BjyHBRpa.js";import"./svgIconContainer-BqvfQ7m-.js";import"./PdfViewerSearchBar-C5l2mez7.js";import"./chevron-up-CPVZT41c.js";import"./chevron-down-D5oDo9t-.js";import"./cross-C5cQzVwl.js";import"./PdfViewerSidebar-BZAvED8-.js";import"./index-DLIQOwa5.js";import"./index-Xkx1Z8NF.js";import"./index-DYDBkDSv.js";import"./PdfViewerToolbar-BgOjeTUP.js";import"./Button-BJQF3YiE.js";import"./chevron-right-thnABMRM.js";import"./Input-CNRyhWNO.js";import"./search-D6xupaDO.js";import"./spin-tdWuX_NP.js";import"./error-Dn8wlh4f.js";import"./withOsdkMetrics-D8xbJlmg.js";import"./makeExternalStore-C137KZPA.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
