import{j as r,M as s}from"./iframe-DsRLlUaX.js";import{P as p}from"./pdf-viewer-HQWfjyaP.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CzP2vJp7.js";import"./preload-helper-C3_l2Hl0.js";import"./PdfViewer-BBzoD4gR.js";import"./index-BjtlPBUb.js";import"./BasePdfViewer-hmZ7hoQZ.js";import"./BasePdfViewer.module.css-DFxxXjRW.js";import"./PdfViewerAnnotationLayer-DMnmWIxh.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DFxD37dq.js";import"./PdfViewerOutlineSidebar-DjNRsG2s.js";import"./PdfViewerSidebarHeader-Czua-ZtS.js";import"./useBaseUiId-C4i6MKWL.js";import"./useControlled-DEedTOrX.js";import"./CompositeRoot-27bpmOMq.js";import"./CompositeItem-DfeVObqB.js";import"./ToolbarRootContext-B0k-j8eq.js";import"./composite-DOMJJy3E.js";import"./svgIconContainer-zp1B85KB.js";import"./PdfViewerSearchBar-BYnibhQO.js";import"./chevron-up-BmlmJwCX.js";import"./chevron-down-BpedfE0t.js";import"./cross-BZKb8UMR.js";import"./PdfViewerSidebar-CiA8HSle.js";import"./index-C9cwWX6g.js";import"./index-n_UhMgqI.js";import"./index-Bav5EGdy.js";import"./PdfViewerToolbar-jtwwqxM7.js";import"./Button-DOnuCfPD.js";import"./chevron-right-CyYm55fk.js";import"./Input-DZ_xmuAk.js";import"./search-SgUD_ncl.js";import"./spin-BbOZjGwp.js";import"./error-CaruzJxR.js";import"./withOsdkMetrics-BDhrFxgU.js";import"./makeExternalStore-0t40E2-H.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
