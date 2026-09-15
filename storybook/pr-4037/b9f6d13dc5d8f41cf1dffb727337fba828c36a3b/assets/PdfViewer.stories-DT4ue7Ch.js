import{j as r,M as s}from"./iframe-CpvsyndC.js";import{P as p}from"./pdf-viewer-lIWZfQ5S.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-YO_4nVMH.js";import"./preload-helper-v1ULc-zT.js";import"./PdfViewer-D_EhRuDI.js";import"./index-OXZTet4E.js";import"./BasePdfViewer-CSETVA0j.js";import"./BasePdfViewer.module.css-Ql0ONumy.js";import"./PdfViewerAnnotationLayer-3iBDPV9N.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BgCB9UOe.js";import"./PdfViewerOutlineSidebar-0oyDGWsB.js";import"./PdfViewerSidebarHeader-CRPN0Fa3.js";import"./useBaseUiId-CYqXXgOS.js";import"./useControlled-D-CxRUi2.js";import"./CompositeRoot-CK5ssIQ3.js";import"./CompositeItem-DpS-WC5l.js";import"./ToolbarRootContext-Bn57AYug.js";import"./composite-Bs9G8wyi.js";import"./svgIconContainer-Msyl1KBc.js";import"./PdfViewerSearchBar-B-gOH9SB.js";import"./chevron-up-D65VTpAR.js";import"./chevron-down-AhYvmllp.js";import"./cross-Bcfh6JZM.js";import"./PdfViewerSidebar-BdIRWDof.js";import"./index-4rhUuJvO.js";import"./index-BYz18T7P.js";import"./index-BQoSmoXa.js";import"./PdfViewerToolbar-DGaHrYVD.js";import"./Button-CCew8i_i.js";import"./chevron-right-DIK_VGJu.js";import"./Input-D6DNjjz9.js";import"./search-CKGbca0G.js";import"./spin-CYTQpRI6.js";import"./error-o4jN_MzE.js";import"./withOsdkMetrics-BrjOXXvf.js";import"./makeExternalStore-BjYOVJLR.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
