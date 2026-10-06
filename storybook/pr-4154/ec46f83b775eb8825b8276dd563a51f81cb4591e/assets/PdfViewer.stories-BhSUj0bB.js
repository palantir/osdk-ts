import{j as r,M as s}from"./iframe-i3f0VK7P.js";import{P as p}from"./pdf-viewer-DTR_NUuK.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CZZXxE8c.js";import"./preload-helper-CcQVXdAf.js";import"./PdfViewer-D3Havh9d.js";import"./index-BSc8nCuA.js";import"./BasePdfViewer-CXoRg8-X.js";import"./BasePdfViewer.module.css-C-jncDTQ.js";import"./PdfViewerAnnotationLayer-Bd5CVCWw.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DnL0S9eH.js";import"./PdfViewerOutlineSidebar-ColfIKAn.js";import"./PdfViewerSidebarHeader-Nb3M64At.js";import"./useBaseUiId-3GNAAiBc.js";import"./useControlled-BBd9b3hp.js";import"./CompositeRoot-fteDc1R_.js";import"./CompositeItem-C5NIgZsO.js";import"./ToolbarRootContext-DMZj-zjR.js";import"./composite-GZoC5isN.js";import"./svgIconContainer-DpWasIbE.js";import"./PdfViewerSearchBar-Bc1XPhNc.js";import"./chevron-up-Dmmoi6D2.js";import"./chevron-down-BEmwBzIe.js";import"./cross-U10SUwzd.js";import"./PdfViewerSidebar-Bft19V59.js";import"./index-B9C8GZw0.js";import"./index-UuGZwwy8.js";import"./index-CrHn1Rne.js";import"./PdfViewerToolbar-hnKdcW95.js";import"./Button-CM2JbGjZ.js";import"./chevron-right-B_fWAyqd.js";import"./Input-BKCzKS6Z.js";import"./search-D1ajCeBe.js";import"./spin-DxE3f87V.js";import"./error-Cm9VDJHx.js";import"./withOsdkMetrics-xRq5i0OL.js";import"./makeExternalStore-Ds3owEGg.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
