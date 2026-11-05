import{j as r,M as s}from"./iframe-BK35Aetk.js";import{P as p}from"./pdf-viewer-BhWFhU2Q.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D8RK7f-Z.js";import"./preload-helper-CSbGcA9T.js";import"./PdfViewer-A9ODxoNF.js";import"./index-CRoVE56T.js";import"./BasePdfViewer-RBC1XeXx.js";import"./BasePdfViewer.module.css-Cz4sxuif.js";import"./PdfViewerAnnotationLayer-C7WX6488.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DHOmw-w0.js";import"./PdfViewerOutlineSidebar-CberJcs2.js";import"./PdfViewerSidebarHeader-Czt94W_c.js";import"./useBaseUiId-wzcWLuni.js";import"./useControlled-Dh0EQZ-9.js";import"./CompositeRoot-vaWJgZFv.js";import"./CompositeItem-1I2WlbJ9.js";import"./ToolbarRootContext-BdRYVpKL.js";import"./composite-BC1NOOFJ.js";import"./svgIconContainer-CSIx5hfy.js";import"./PdfViewerSearchBar-zIpc5tu8.js";import"./chevron-up-CItaJGWq.js";import"./chevron-down-CyfgKJCg.js";import"./cross-B0y6D7Iy.js";import"./PdfViewerSidebar-DP5_KCld.js";import"./index-DhoMcwTi.js";import"./index-DW1QNimG.js";import"./index-CMsvzF6c.js";import"./PdfViewerToolbar-CpGScDk6.js";import"./Button-DM8aYBS9.js";import"./chevron-right-DgPusHSH.js";import"./Input-BBffaDeP.js";import"./search-BlafU9EC.js";import"./spin-BkQu84j6.js";import"./error-DLnzRR-1.js";import"./withOsdkMetrics-BZ06iEbV.js";import"./makeExternalStore-CRBaxVJ6.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
