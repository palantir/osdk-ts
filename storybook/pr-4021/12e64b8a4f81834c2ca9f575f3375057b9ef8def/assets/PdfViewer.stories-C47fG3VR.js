import{j as r,M as s}from"./iframe-DBsN32YB.js";import{P as p}from"./pdf-viewer-ByGWq3_M.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-9Cfr-Zt3.js";import"./preload-helper-D8tz-Fbl.js";import"./PdfViewer-DVdlb3Y8.js";import"./index-nhJVH1tz.js";import"./BasePdfViewer-DhXrDDRn.js";import"./BasePdfViewer.module.css-C5FR1y-9.js";import"./PdfViewerAnnotationLayer-CwPvVH9l.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Bms_kiBZ.js";import"./PdfViewerOutlineSidebar-B7EFLXun.js";import"./PdfViewerSidebarHeader-s36jyeda.js";import"./useBaseUiId-CSOklioX.js";import"./useControlled-BvDU6EbQ.js";import"./CompositeRoot-D8peGb2J.js";import"./CompositeItem-Dfbl7Tdw.js";import"./ToolbarRootContext-6JBun5UY.js";import"./composite-BNtgV9XE.js";import"./svgIconContainer-X_dBFOT2.js";import"./PdfViewerSearchBar-6K_Yt22D.js";import"./chevron-up-C4B6mav5.js";import"./chevron-down-eJT7_Kub.js";import"./cross-DPk5SIsZ.js";import"./PdfViewerSidebar-B2lDtNh5.js";import"./index-eEgfn-we.js";import"./index-vWZxRhPY.js";import"./index-Cf_xmn3O.js";import"./PdfViewerToolbar-BlmudfqG.js";import"./Button-CQwlNKu1.js";import"./chevron-right-bMiKJSK7.js";import"./Input-DkxwhWbl.js";import"./search-rD_BABVw.js";import"./spin-BJdIjQ3i.js";import"./error-C3JCbj1L.js";import"./withOsdkMetrics-1oll6lxC.js";import"./makeExternalStore-DbaTP8FP.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
