import{j as r,M as s}from"./iframe-K0TCdsde.js";import{P as p}from"./pdf-viewer-CHRFW1e_.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C4I7bMjA.js";import"./preload-helper-Dwgne7Il.js";import"./PdfViewer-D6q0wzQP.js";import"./index-DItHkTgY.js";import"./BasePdfViewer-ugVOo0gn.js";import"./BasePdfViewer.module.css-FSEMHYKZ.js";import"./PdfViewerAnnotationLayer-BEPaUH3O.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CrM-MYKh.js";import"./PdfViewerOutlineSidebar-DPHbsx0K.js";import"./PdfViewerSidebarHeader-DmfY-ZmZ.js";import"./useBaseUiId-BMvE3UAz.js";import"./useControlled-CpHTfHM_.js";import"./CompositeRoot-Cs1rgyIt.js";import"./CompositeItem-CKtGokfX.js";import"./ToolbarRootContext-B08lxs8l.js";import"./composite-BDOTFVh5.js";import"./svgIconContainer-Gp_WdiNB.js";import"./PdfViewerSearchBar-BZ8Dxr-e.js";import"./chevron-up-C1-T6d0o.js";import"./chevron-down-BkK6PVnf.js";import"./cross-DjsH4BEX.js";import"./PdfViewerSidebar-DrMFbpAv.js";import"./index-DTPy9xIo.js";import"./index-Ce5TUgVz.js";import"./index-BSQQlf89.js";import"./PdfViewerToolbar-CEOveaWt.js";import"./Button-vcsLfruM.js";import"./chevron-right-DqGwtd4M.js";import"./Input-jHELzDU6.js";import"./search-FP5lKD6I.js";import"./spin-CttV4dMj.js";import"./error-C3B7tWvq.js";import"./withOsdkMetrics-B9tQP4dB.js";import"./makeExternalStore-sZwLQQxf.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
