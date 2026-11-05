import{j as r,M as s}from"./iframe-DNoPlrmW.js";import{P as p}from"./pdf-viewer-B7oJBDMS.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DD4Z1Wdg.js";import"./preload-helper-BA-kC20r.js";import"./PdfViewer-CBjzrys_.js";import"./index-GMd43Lzl.js";import"./BasePdfViewer-Bq7Nb1hI.js";import"./BasePdfViewer.module.css-uzfRbk-O.js";import"./PdfViewerAnnotationLayer-BBmTVslS.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-XKABu1If.js";import"./PdfViewerOutlineSidebar-BTwxtHrT.js";import"./PdfViewerSidebarHeader-DSyxCZ-J.js";import"./useBaseUiId-CG8dqONM.js";import"./useControlled-L9fBFGN0.js";import"./CompositeRoot-7aUSnkUV.js";import"./CompositeItem-CVV0k2jm.js";import"./ToolbarRootContext-D3fcj2nK.js";import"./composite-8FnP0FRm.js";import"./svgIconContainer-CUvRyfnW.js";import"./PdfViewerSearchBar-D2PJQhJI.js";import"./chevron-up-B92WlZ_y.js";import"./chevron-down-AD2NYQ4Y.js";import"./cross-Dbdjn7RF.js";import"./PdfViewerSidebar-BK_bp-yQ.js";import"./index-DzuC6B4f.js";import"./index-CiJY3H2C.js";import"./index-PNiqJ9T4.js";import"./PdfViewerToolbar-CTcfh2OD.js";import"./Button-Au7RONC3.js";import"./chevron-right-BeInzhoM.js";import"./Input-Ci_chYxf.js";import"./search-BAl_vtGE.js";import"./spin-CVIhooYE.js";import"./error-BcP9NYX_.js";import"./withOsdkMetrics-C7RJ1R_V.js";import"./makeExternalStore-ThIGMhbJ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
