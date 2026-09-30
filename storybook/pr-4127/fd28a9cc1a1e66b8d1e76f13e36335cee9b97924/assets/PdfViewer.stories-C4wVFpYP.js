import{j as r,M as s}from"./iframe-BqOAaVYX.js";import{P as p}from"./pdf-viewer-Bt-Bv4rK.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C9RQEB_Q.js";import"./preload-helper-DfAqa6Ns.js";import"./PdfViewer-DNKZHfr4.js";import"./index-hhMnxhy8.js";import"./BasePdfViewer-DGxqb0OY.js";import"./BasePdfViewer.module.css-D0SokHgJ.js";import"./PdfViewerAnnotationLayer-BWCkSc7t.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-V36GARDv.js";import"./PdfViewerOutlineSidebar-Dh-_B008.js";import"./PdfViewerSidebarHeader-1P7xVe0W.js";import"./useBaseUiId-D8PXSJwD.js";import"./useControlled-Cw0rstUZ.js";import"./CompositeRoot-_ulds24G.js";import"./CompositeItem-lsMfNC7P.js";import"./ToolbarRootContext-Db3ZHaqK.js";import"./composite-FQnt6Ug_.js";import"./svgIconContainer-fHQR-WGO.js";import"./PdfViewerSearchBar-COtMZNl3.js";import"./chevron-up-CX9ShSqo.js";import"./chevron-down-CWxaKaem.js";import"./cross-VDw2oJTP.js";import"./PdfViewerSidebar-ufeQALtA.js";import"./index-l3AZM9tW.js";import"./index-D2HyYCxp.js";import"./index-W1jvd9mH.js";import"./PdfViewerToolbar-BL4n4zEd.js";import"./Button-DLn-Tp2Y.js";import"./chevron-right-B8XlGj8M.js";import"./Input-DGoYfUS_.js";import"./search-BrbOR0sP.js";import"./spin-CEnY82oF.js";import"./error-BmfSiLn5.js";import"./withOsdkMetrics-DCrwrvzV.js";import"./makeExternalStore-BiBaRYea.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
