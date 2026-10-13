import{j as r,M as s}from"./iframe-CK-e_P5n.js";import{P as p}from"./pdf-viewer-gsTrV9v5.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Cpb0h8JE.js";import"./preload-helper-CdfmlsWT.js";import"./PdfViewer-Di1Bv0DS.js";import"./index-D1NbsZsT.js";import"./BasePdfViewer-X8sxRcIt.js";import"./BasePdfViewer.module.css-V73stPus.js";import"./PdfViewerAnnotationLayer-D_fznaPF.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DTfQIuyi.js";import"./PdfViewerOutlineSidebar-Brp64MOA.js";import"./PdfViewerSidebarHeader-BUxPApTY.js";import"./useBaseUiId-B6Thtd3O.js";import"./useControlled-flZbgJml.js";import"./CompositeRoot-Bo0Sy2BX.js";import"./CompositeItem-BRNQwarA.js";import"./ToolbarRootContext-BzLZyYhL.js";import"./composite-CF-uZGHD.js";import"./svgIconContainer-CUe9azR3.js";import"./PdfViewerSearchBar-DQG5Uvob.js";import"./chevron-up-Cfji1tGK.js";import"./chevron-down-D3RJwgIP.js";import"./cross-DdB0B2DT.js";import"./PdfViewerSidebar-BTAUfz8C.js";import"./index--at66w-A.js";import"./index-BmOKXyuk.js";import"./index-BAl9UwQ_.js";import"./PdfViewerToolbar-BgAhOGrE.js";import"./Button-DnxkikPI.js";import"./chevron-right-BWQ_XPbL.js";import"./Input-DGmd96_F.js";import"./search-D8NL3mRl.js";import"./spin-kBG-LxG7.js";import"./error-BFAdc9Td.js";import"./withOsdkMetrics-DFjAQMzo.js";import"./makeExternalStore-Bf6pa7D3.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
