import{j as r,M as s}from"./iframe-BvgKvBTT.js";import{P as p}from"./pdf-viewer-CnxzRUir.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BQt3lb4M.js";import"./preload-helper-dVfNiIKn.js";import"./PdfViewer-CaLyXweh.js";import"./index-C6P12W9x.js";import"./BasePdfViewer-CVotAepM.js";import"./BasePdfViewer.module.css-D_AVwnz2.js";import"./PdfViewerAnnotationLayer-_vtoMZa7.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BinLz001.js";import"./PdfViewerOutlineSidebar-DvJuwVu2.js";import"./PdfViewerSidebarHeader-D0wD_mGs.js";import"./useRenderElement-BFIknrE2.js";import"./useControlled-B2MP0s-G.js";import"./CompositeRoot-BLHVQZq-.js";import"./CompositeItem-xDL0fAk1.js";import"./ToolbarRootContext-C5CAj_EH.js";import"./composite-DfJtFIGD.js";import"./useBaseUiId-DWfZ2Kad.js";import"./svgIconContainer-BZvKBCv0.js";import"./PdfViewerSearchBar-Ci0dBtMR.js";import"./chevron-up-aUqVWteC.js";import"./chevron-down-Df3bql-T.js";import"./cross-Dgfh0hI8.js";import"./PdfViewerSidebar-CQo8AthB.js";import"./index-Da4z4C_A.js";import"./index-yqy4XRqT.js";import"./index-BzjqKOq7.js";import"./PdfViewerToolbar-9Tabbm9V.js";import"./Button-CZUmTkhK.js";import"./chevron-right-BjK6KagD.js";import"./Input-B8f6lg4l.js";import"./search-B95gAtiZ.js";import"./spin-D0KB-hsi.js";import"./error-B-n6_xad.js";import"./withOsdkMetrics-D0FOqMKK.js";import"./makeExternalStore-DebjiHh_.js";const W={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const X=["Default"];export{o as Default,X as __namedExportsOrder,W as default};
