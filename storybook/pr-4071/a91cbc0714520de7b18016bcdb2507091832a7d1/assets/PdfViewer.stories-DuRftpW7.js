import{j as r,M as s}from"./iframe-m0ugFJ_n.js";import{P as p}from"./pdf-viewer-Bc2fdsfl.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DrvnEZ9o.js";import"./preload-helper-KeOwj4qj.js";import"./PdfViewer-YFQhK0so.js";import"./index-CrjphzT5.js";import"./BasePdfViewer-UBfA__ql.js";import"./BasePdfViewer.module.css-DDF5CC6v.js";import"./PdfViewerAnnotationLayer-Do7-N4Rl.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-kyaLmxIi.js";import"./PdfViewerOutlineSidebar-CAvZHRgU.js";import"./PdfViewerSidebarHeader-CFCsQqLM.js";import"./useBaseUiId-DnAq2IXn.js";import"./useControlled-Cbg37gEr.js";import"./CompositeRoot-DukGxd8t.js";import"./CompositeItem-DwEHzZa4.js";import"./ToolbarRootContext-DuKgQD9s.js";import"./composite-CkzXePM6.js";import"./svgIconContainer-Y7-V7Oui.js";import"./PdfViewerSearchBar-0qrIxgcx.js";import"./chevron-up-B5ukEuhN.js";import"./chevron-down-CRZsF1SF.js";import"./cross-BQwE0Wie.js";import"./PdfViewerSidebar-Bzb2Wnz9.js";import"./index-BchCr8yn.js";import"./index-FGKMGa8g.js";import"./index-Cv1cYxMy.js";import"./PdfViewerToolbar-BmGF9i0D.js";import"./Button-BYPOjnzJ.js";import"./chevron-right-Dg4zizhn.js";import"./Input-BmzIYnaH.js";import"./search-BBD2MUX2.js";import"./spin-ByFgnW5r.js";import"./error-C7YpCdj7.js";import"./withOsdkMetrics-B3S-uWw6.js";import"./makeExternalStore-gYyz61fG.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
