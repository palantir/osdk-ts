import{j as r,M as s}from"./iframe-CdF0Fq9c.js";import{P as p}from"./pdf-viewer-CejRrLN6.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-gYRtWSrF.js";import"./preload-helper-Ct1oZRJx.js";import"./PdfViewer-DwtCNr_t.js";import"./index-C157L91v.js";import"./BasePdfViewer-C2nGnn2g.js";import"./BasePdfViewer.module.css-DjkVta0D.js";import"./PdfViewerAnnotationLayer-CO_tIopP.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B5RYXWTx.js";import"./PdfViewerOutlineSidebar-QEmxugVw.js";import"./PdfViewerSidebarHeader-DGF6i5po.js";import"./useBaseUiId-ONWuAW-H.js";import"./useControlled-B9w800yx.js";import"./CompositeRoot-U1hzNcbh.js";import"./CompositeItem-D7LuxCQJ.js";import"./ToolbarRootContext-B-5g_cXd.js";import"./composite-CLj3gTzn.js";import"./svgIconContainer-B4dKEY9f.js";import"./PdfViewerSearchBar-Du8PSIhk.js";import"./chevron-up-JVtIWz-O.js";import"./chevron-down-duFxKh1l.js";import"./cross-DSYmSTiz.js";import"./PdfViewerSidebar-DMr7aw7T.js";import"./index-DcWJRYHo.js";import"./index-1mFMxabl.js";import"./index-C1-F-JKF.js";import"./PdfViewerToolbar-BCP-QUDN.js";import"./Button-BBUQ2vzx.js";import"./chevron-right-BGTmdZ9d.js";import"./Input-DtrPcu15.js";import"./search-DhvEixTQ.js";import"./spin-oBrpuyxG.js";import"./error-1hy_7Gr5.js";import"./withOsdkMetrics-6s0IiMkQ.js";import"./makeExternalStore-DXEmCGwz.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
