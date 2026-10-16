import{j as r,M as s}from"./iframe-DbS9D_O3.js";import{P as p}from"./pdf-viewer-B3oxR0J8.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Dgo5WHSX.js";import"./preload-helper-CCKJK0hs.js";import"./PdfViewer-BHyZ5CD9.js";import"./index-DtbYZf2o.js";import"./BasePdfViewer-DujHsMP9.js";import"./BasePdfViewer.module.css-Dp8m_Q-T.js";import"./PdfViewerAnnotationLayer-ChLUsakK.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cm5etKMO.js";import"./PdfViewerOutlineSidebar-Dl9mxVac.js";import"./PdfViewerSidebarHeader-C2HExgkf.js";import"./useBaseUiId-DGo7w5rM.js";import"./useControlled-BU_DIXGN.js";import"./CompositeRoot-BX4IXpi5.js";import"./CompositeItem-CBVEdJrU.js";import"./ToolbarRootContext-DAT__9MO.js";import"./composite-BVFSknHB.js";import"./svgIconContainer-BWtkfvw7.js";import"./PdfViewerSearchBar-BlOdGdD_.js";import"./chevron-up-Dgd7h0T-.js";import"./chevron-down-CRHApYO-.js";import"./cross-D8Acxe7x.js";import"./PdfViewerSidebar-BJn-93Sk.js";import"./index-Cn4ErW0D.js";import"./index-DjECoGdr.js";import"./index-Cz6dsjwa.js";import"./PdfViewerToolbar-BWGRUAHb.js";import"./Button-CgXhCctb.js";import"./chevron-right-nogJPmOp.js";import"./Input-BjkhNLJi.js";import"./search-O2b5hRrN.js";import"./spin-BzeJqwXZ.js";import"./error-RW3dtBbn.js";import"./withOsdkMetrics-COgOpeFu.js";import"./makeExternalStore-qkyjGCKT.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
