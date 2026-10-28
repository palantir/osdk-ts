import{j as r,M as s}from"./iframe-CDXR5TiH.js";import{P as p}from"./pdf-viewer-Dr0mku1Q.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Cq0DZjpT.js";import"./preload-helper-Dl7TLzKT.js";import"./PdfViewer-Dap67NmV.js";import"./index-BUlTo8si.js";import"./BasePdfViewer-ER94IrO8.js";import"./BasePdfViewer.module.css-Bh9yIBpF.js";import"./PdfViewerAnnotationLayer-Cf7CjYSr.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-dz3gCp10.js";import"./PdfViewerOutlineSidebar-A56K3uUc.js";import"./PdfViewerSidebarHeader-CevFyXkR.js";import"./useBaseUiId-DQwBq2Ep.js";import"./useControlled-D1Q05_VM.js";import"./CompositeRoot-TCN9vz98.js";import"./CompositeItem-BwsWbkWf.js";import"./ToolbarRootContext-DIR8ob_8.js";import"./composite-DrLkfYl3.js";import"./svgIconContainer-DvE8o4ZI.js";import"./PdfViewerSearchBar-Bab0m2ob.js";import"./chevron-up-D72_TCvN.js";import"./chevron-down-D5h4llJH.js";import"./cross-BNFw8vL_.js";import"./PdfViewerSidebar-BT0diqwo.js";import"./index-a1CxhX_F.js";import"./index-DyQAqcSx.js";import"./index-DgZ9bURa.js";import"./PdfViewerToolbar-4oDVer0T.js";import"./Button-BX5bEl7N.js";import"./chevron-right-yeWuda1b.js";import"./Input-CpjIkFYJ.js";import"./search-B19UftdY.js";import"./spin-DwEabI-a.js";import"./error-DB4Z3Bk1.js";import"./withOsdkMetrics-DTJ2dgc2.js";import"./makeExternalStore-DS89lBNV.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
