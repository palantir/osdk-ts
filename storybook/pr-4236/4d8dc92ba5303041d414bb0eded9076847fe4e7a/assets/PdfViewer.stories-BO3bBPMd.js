import{j as r,M as s}from"./iframe-sYP-l0_a.js";import{P as p}from"./pdf-viewer-axaVxQKB.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Bg2LkbgU.js";import"./preload-helper-IUxRucnJ.js";import"./PdfViewer-BZRixV98.js";import"./index-BQi0o8Ch.js";import"./BasePdfViewer-3LH4JKKe.js";import"./BasePdfViewer.module.css-D2vc8KRF.js";import"./PdfViewerAnnotationLayer-C0ZVVJFh.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-LMA5_LLe.js";import"./PdfViewerOutlineSidebar-Dwh81Asp.js";import"./PdfViewerSidebarHeader-EvIActhD.js";import"./useBaseUiId-Btvm4iEK.js";import"./useControlled-BPCLqxL9.js";import"./CompositeRoot-CLDatbQ_.js";import"./CompositeItem-7yi4DVr9.js";import"./ToolbarRootContext-BoQIBGO1.js";import"./composite-C-aQf2ph.js";import"./svgIconContainer-BEJydEi7.js";import"./PdfViewerSearchBar-B4dTfnHH.js";import"./chevron-up-BgSVvo7b.js";import"./chevron-down-BmV5GZMn.js";import"./cross-Bm2pwBEc.js";import"./PdfViewerSidebar-AVC6BSLf.js";import"./index-00-MRRTX.js";import"./index-C0H-vXi6.js";import"./index-mlL1YxFR.js";import"./PdfViewerToolbar-ecdSUnLu.js";import"./Button-B9jbca7B.js";import"./chevron-right-BPGajvL_.js";import"./Input-CSh4Ffdb.js";import"./search-DLv6CrwK.js";import"./spin-CELmcFhX.js";import"./error-DO2C4OtK.js";import"./withOsdkMetrics-2D2ceNeO.js";import"./makeExternalStore-CFZXdEl0.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
