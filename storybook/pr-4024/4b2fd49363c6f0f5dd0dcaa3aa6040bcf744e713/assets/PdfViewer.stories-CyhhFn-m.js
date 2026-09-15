import{j as r,M as s}from"./iframe-BhKMX8Fx.js";import{P as p}from"./pdf-viewer-7-1N6cty.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CJfwSN8J.js";import"./preload-helper-CZy_0jgg.js";import"./PdfViewer-CJhnh9yF.js";import"./index-DyXRR_oe.js";import"./BasePdfViewer-DdCkn1Z1.js";import"./BasePdfViewer.module.css-DSGQEcwP.js";import"./PdfViewerAnnotationLayer-Bkxqy3fQ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CZ_5G-W0.js";import"./PdfViewerOutlineSidebar-D_41Og8G.js";import"./PdfViewerSidebarHeader-COq0NQr0.js";import"./useBaseUiId-B9dth6ze.js";import"./useControlled-D7ZrYDZP.js";import"./CompositeRoot-DnjZA3jo.js";import"./CompositeItem-CaT0iTXd.js";import"./ToolbarRootContext-CjkyXnS-.js";import"./composite-CveWDbYe.js";import"./svgIconContainer-Dqg69n5p.js";import"./PdfViewerSearchBar-Cuf5Zkhx.js";import"./chevron-up-DunxYoVZ.js";import"./chevron-down-B_4JujMO.js";import"./cross-Cg-ZPVlB.js";import"./PdfViewerSidebar-BclWzTna.js";import"./index-C-yRIYxo.js";import"./index-BvAdv-zV.js";import"./index-C8--fwDy.js";import"./PdfViewerToolbar-DfneYPt6.js";import"./Button-XEWUMbMz.js";import"./chevron-right-NwxtFUjm.js";import"./Input-qedQc-sF.js";import"./search-BJB8jL9m.js";import"./spin-C4G32LEy.js";import"./error-BDttauQc.js";import"./withOsdkMetrics-Bm1ct0GQ.js";import"./makeExternalStore-ChUKIeN-.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
