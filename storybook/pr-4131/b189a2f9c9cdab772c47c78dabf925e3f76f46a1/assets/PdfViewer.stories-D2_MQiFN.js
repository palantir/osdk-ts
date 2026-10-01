import{j as r,M as s}from"./iframe-t8tzCNQG.js";import{P as p}from"./pdf-viewer-BZjiNQ2C.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-QVFjsuJo.js";import"./preload-helper-DgmnFE1F.js";import"./PdfViewer-BDGKOMdw.js";import"./index-B2ZMYIpf.js";import"./BasePdfViewer-CH1Fjj3V.js";import"./BasePdfViewer.module.css-C2fsgb3A.js";import"./PdfViewerAnnotationLayer-y8H9JPxV.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B1mm1img.js";import"./PdfViewerOutlineSidebar-B7SGJ7Vn.js";import"./PdfViewerSidebarHeader-CPojr5Fm.js";import"./useBaseUiId-5tpyF_oD.js";import"./useControlled-C3Y23C1t.js";import"./CompositeRoot-BFFS3acU.js";import"./CompositeItem-BgkQkbdd.js";import"./ToolbarRootContext-HtRVgU8t.js";import"./composite-CtIsJulR.js";import"./svgIconContainer-BMtFokv3.js";import"./PdfViewerSearchBar-DPDFomZi.js";import"./chevron-up-0Ha6kq4G.js";import"./chevron-down-Dw7pUuxv.js";import"./cross-BlbUaBXV.js";import"./PdfViewerSidebar-CAoG_C7c.js";import"./index-BP5-XTdL.js";import"./index-D86oorM3.js";import"./index-BUDOFPoc.js";import"./PdfViewerToolbar-Dsz3X8Qa.js";import"./Button-DJ3cf7JH.js";import"./chevron-right-Dc7qQUib.js";import"./Input-hnDJE6Oy.js";import"./search-CeoT8iOL.js";import"./spin-D93OntOw.js";import"./error-ByvTRN4V.js";import"./withOsdkMetrics-D05rZYt3.js";import"./makeExternalStore-tE7kFU6z.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
