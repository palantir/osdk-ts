import{j as r,M as s}from"./iframe-C_zjGY3J.js";import{P as p}from"./pdf-viewer-DthMNxAD.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C1l4gEQZ.js";import"./preload-helper-CxQirRCn.js";import"./PdfViewer-BJ8YDGKI.js";import"./index-DKxF60He.js";import"./BasePdfViewer-CnstEd-n.js";import"./BasePdfViewer.module.css-BTEbx6l2.js";import"./PdfViewerAnnotationLayer-CaAWAq8M.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DOOJSaI9.js";import"./PdfViewerOutlineSidebar-QI7A1R4_.js";import"./PdfViewerSidebarHeader-2oRwYz6a.js";import"./useBaseUiId-B_8kV6Oo.js";import"./useControlled-Cax61rbp.js";import"./CompositeRoot-FvSK3I_g.js";import"./CompositeItem-LZfgl15E.js";import"./ToolbarRootContext-CDpaEjw6.js";import"./composite-Cr4kgIEQ.js";import"./svgIconContainer-D5MQxCYm.js";import"./PdfViewerSearchBar-pD_VNEbD.js";import"./chevron-up-C0TyuGk4.js";import"./chevron-down-DXGDx1Zu.js";import"./cross-CQU2s8jh.js";import"./PdfViewerSidebar-Jwth_AHM.js";import"./index-B0AlpjVO.js";import"./index-9SuB44sP.js";import"./index-DHjZHyf_.js";import"./PdfViewerToolbar-CVQ10YQg.js";import"./Button-CKW0-13G.js";import"./chevron-right-DepHxSqI.js";import"./Input-DcJi9KF0.js";import"./search-BzCll0d5.js";import"./spin-Dz4s1qj7.js";import"./error-D5GOl81y.js";import"./withOsdkMetrics-BNDJqEzp.js";import"./makeExternalStore-UmBMWTEb.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
