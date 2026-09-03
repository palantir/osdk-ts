import{j as r,M as s}from"./iframe-CVgWx_mk.js";import{P as p}from"./pdf-viewer-PD5vZfrB.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BqGbyCUh.js";import"./preload-helper-CFfBa7BD.js";import"./PdfViewer-CxS9yd5h.js";import"./index-KhqTHjvK.js";import"./BasePdfViewer-BMEjnQtF.js";import"./BasePdfViewer.module.css-OvqzWTRs.js";import"./PdfViewerAnnotationLayer-D_jqBXts.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CDA1OErO.js";import"./PdfViewerOutlineSidebar-qK6IAXnz.js";import"./PdfViewerSidebarHeader-CgxoZXiq.js";import"./useBaseUiId-B0ovho4b.js";import"./useControlled-CmMjx2zB.js";import"./CompositeRoot-CWLiFArD.js";import"./CompositeItem-CCjIa2t2.js";import"./ToolbarRootContext-CaqtX5pJ.js";import"./composite-mrQGTihx.js";import"./svgIconContainer-MI5luthc.js";import"./PdfViewerSearchBar-DLV9bJw1.js";import"./chevron-up-DVoFCslT.js";import"./chevron-down-DTQ9C7Jw.js";import"./cross-Ch2oGVZP.js";import"./PdfViewerSidebar-zQRn5HwC.js";import"./index-Bo_a2b3D.js";import"./index-Dj_0AH5M.js";import"./index-kHlCzxdB.js";import"./PdfViewerToolbar-BKYZRZmD.js";import"./Button-BdWA5AOv.js";import"./chevron-right-IqOmnL33.js";import"./Input-B_ebmuiE.js";import"./search-BdiQZg80.js";import"./spin-BBGD8-5Z.js";import"./error-aoO-9vvY.js";import"./withOsdkMetrics-DoeckjWh.js";import"./makeExternalStore-Dyx7TWX2.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
