import{j as r,M as s}from"./iframe-BcMMFnf6.js";import{P as p}from"./pdf-viewer-B3akoQJU.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Dh8UBRo3.js";import"./preload-helper-Bdi1tYmS.js";import"./PdfViewer-BIrU5zVs.js";import"./index-BMHtYDol.js";import"./BasePdfViewer-Cynssfme.js";import"./BasePdfViewer.module.css-DtViRPOR.js";import"./PdfViewerAnnotationLayer-Db3tWKH4.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DnLR1eq4.js";import"./PdfViewerOutlineSidebar-V8rJH-Xx.js";import"./PdfViewerSidebarHeader-CA3jR5MJ.js";import"./useBaseUiId-Dh5_vj5x.js";import"./useControlled-DFUxWacU.js";import"./CompositeRoot-BZoZAOEs.js";import"./CompositeItem-t1YG6a8m.js";import"./ToolbarRootContext-BPQo0iii.js";import"./composite-B2X0dip5.js";import"./svgIconContainer-C05amAGf.js";import"./PdfViewerSearchBar-CYb1WS0o.js";import"./chevron-up-Bi69W96J.js";import"./chevron-down-Co1TC95K.js";import"./cross-6YkLE3rk.js";import"./PdfViewerSidebar-BtfF1HWX.js";import"./index-BjuvBbw0.js";import"./index-BnYXDYMU.js";import"./index-CPLAyU55.js";import"./PdfViewerToolbar-DrFd-FBs.js";import"./Button-DEYF-M81.js";import"./chevron-right-DvjQDmDw.js";import"./Input-BrlK9Tqs.js";import"./search-2DDBXVlF.js";import"./spin-Cb7YdDaa.js";import"./error-DAhNXKes.js";import"./withOsdkMetrics-BH4rg4j0.js";import"./makeExternalStore-DdbizQyP.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
