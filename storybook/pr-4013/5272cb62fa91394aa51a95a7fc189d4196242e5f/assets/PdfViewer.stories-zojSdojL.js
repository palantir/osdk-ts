import{j as r,M as s}from"./iframe-B4QogxC6.js";import{P as p}from"./pdf-viewer-kRyK5Snu.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DLlXzUTD.js";import"./preload-helper-C_5k-fFt.js";import"./PdfViewer-dEOYj-SW.js";import"./index-CQyvBzj_.js";import"./BasePdfViewer-DSRYcubn.js";import"./BasePdfViewer.module.css-ykm7ZP8c.js";import"./PdfViewerAnnotationLayer-DmKn76Up.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-aP-GBiGO.js";import"./PdfViewerOutlineSidebar-BVnTOFtk.js";import"./PdfViewerSidebarHeader-BUw6vOmo.js";import"./useBaseUiId-DownjkF0.js";import"./useControlled-T3xesycb.js";import"./CompositeRoot-V6wo6pQE.js";import"./CompositeItem-BoXFiz_E.js";import"./ToolbarRootContext-De8fRc6j.js";import"./composite-Dqc63iLy.js";import"./svgIconContainer-DdyooWte.js";import"./PdfViewerSearchBar-BeJbLlSf.js";import"./chevron-up-Ch3wPrX6.js";import"./chevron-down-BlCKOTL8.js";import"./cross-Dv490F0o.js";import"./PdfViewerSidebar-Dkaz3GeS.js";import"./index-K9tFI_58.js";import"./index-BKn8iF1n.js";import"./index-D0VjMeuF.js";import"./PdfViewerToolbar-DjkgNfCq.js";import"./Button-CIw-2F8I.js";import"./chevron-right-BsSTg5bg.js";import"./Input-DiRfBBOs.js";import"./search-BgJqBCXd.js";import"./spin-tnwlooD7.js";import"./error-rqdE4hRy.js";import"./withOsdkMetrics-DDrBn77T.js";import"./makeExternalStore-BBdCQtVj.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
