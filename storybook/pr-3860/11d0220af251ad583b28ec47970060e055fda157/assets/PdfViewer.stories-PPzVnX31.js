import{j as r,M as s}from"./iframe-iH6aGZ-L.js";import{P as p}from"./pdf-viewer-C7Jroh5i.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DFQvl457.js";import"./preload-helper-CJtpjaOC.js";import"./PdfViewer-C33tVziF.js";import"./index-B4R4MaYX.js";import"./BasePdfViewer-BmNIhR3Q.js";import"./BasePdfViewer.module.css-oFXDfh48.js";import"./PdfViewerAnnotationLayer-CgGb6UIV.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B15rV0HZ.js";import"./PdfViewerOutlineSidebar-CinigVI5.js";import"./PdfViewerSidebarHeader-Dh_ipuxw.js";import"./useBaseUiId-BSDhHAYa.js";import"./useControlled-Ciw2H6Dm.js";import"./CompositeRoot-Dqfyq2-j.js";import"./CompositeItem-DWpKdWiQ.js";import"./ToolbarRootContext-BUYtkzjr.js";import"./composite-DeLDawp0.js";import"./svgIconContainer-BL1fQZ1j.js";import"./PdfViewerSearchBar-CsF19T-g.js";import"./chevron-up-DevHBhg2.js";import"./chevron-down-Uo9hPIsv.js";import"./cross-CkFkh41g.js";import"./PdfViewerSidebar-DWE9sNOp.js";import"./index-CoSy4Fag.js";import"./index-DyyqAmyq.js";import"./index-2xFQTGFl.js";import"./PdfViewerToolbar-C93QYJHL.js";import"./Button-7Khz_S_G.js";import"./chevron-right-BlAN6LBu.js";import"./Input-D14Qdbql.js";import"./search-2at2vqv1.js";import"./spin-B7DS-Tme.js";import"./error-UygG0IL8.js";import"./withOsdkMetrics-B5j3Cgvy.js";import"./makeExternalStore-DoAAt5DI.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
