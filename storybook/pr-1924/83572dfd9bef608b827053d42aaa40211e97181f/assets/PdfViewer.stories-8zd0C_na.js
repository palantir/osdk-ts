import{j as r,M as s}from"./iframe-dYZcY_yd.js";import{P as p}from"./pdf-viewer-D8rd4kP5.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BB7b5a3x.js";import"./preload-helper-nvTVJuZ0.js";import"./PdfViewer-CBHhl3kk.js";import"./index-DdpHHEag.js";import"./BasePdfViewer-By4qYAbO.js";import"./BasePdfViewer.module.css-DU9iqYTC.js";import"./PdfViewerAnnotationLayer-D9IOnhxK.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CLosT6CK.js";import"./PdfViewerOutlineSidebar-lizOEXD8.js";import"./PdfViewerSidebarHeader-DeRXSQz-.js";import"./useBaseUiId-BmHomGuM.js";import"./useControlled-BgrYkcgC.js";import"./CompositeRoot-BZ8JZtBk.js";import"./CompositeItem-DIIkXBkk.js";import"./ToolbarRootContext-DaQhWJhT.js";import"./composite-D7xb_xyv.js";import"./svgIconContainer-d4KiPlL-.js";import"./PdfViewerSearchBar-B1xcoh2k.js";import"./chevron-up-ChID50vc.js";import"./chevron-down-DS-zMT_I.js";import"./cross-Dy_Om33n.js";import"./PdfViewerSidebar-DLSlVitw.js";import"./index-CtGq4PGv.js";import"./index-D1qSefVk.js";import"./index-CTY9EHBj.js";import"./PdfViewerToolbar-qxHt1y7V.js";import"./Button-lcjZj2UQ.js";import"./chevron-right-C6nJZ5F6.js";import"./Input-2gIVp1J7.js";import"./search-CDnnsnvp.js";import"./spin-D_kOqZFM.js";import"./error-D1PWFSVl.js";import"./withOsdkMetrics-7sRD0apQ.js";import"./makeExternalStore-CHw5k_cg.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
