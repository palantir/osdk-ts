import{j as r,M as s}from"./iframe-CYdVR6sB.js";import{P as p}from"./pdf-viewer-B4TuIAry.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-EgDSsald.js";import"./preload-helper-BXur23Md.js";import"./PdfViewer-DONmLDxO.js";import"./index-BALJL5HN.js";import"./BasePdfViewer-NE4QVelu.js";import"./BasePdfViewer.module.css-Cp8FYX6B.js";import"./PdfViewerAnnotationLayer-5wx1o6c1.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DLrRMtoU.js";import"./PdfViewerOutlineSidebar-KsmVmag2.js";import"./PdfViewerSidebarHeader-C3oV8GMP.js";import"./useBaseUiId-DWAeiyj4.js";import"./useControlled-DJ_ChqUq.js";import"./CompositeRoot-B6EvVlLu.js";import"./CompositeItem-C73xX0Ds.js";import"./ToolbarRootContext-ryiKPViF.js";import"./composite-Cc3NubB-.js";import"./svgIconContainer-BA_bcDbd.js";import"./PdfViewerSearchBar-jmpyF7yL.js";import"./chevron-up-JM4U7PPB.js";import"./chevron-down-BTVG76nb.js";import"./cross-Cw6hhHQ7.js";import"./PdfViewerSidebar-Cxo91CJ0.js";import"./index-BfKW-3Wf.js";import"./index-DoUPlBgv.js";import"./index-B8qCRObq.js";import"./PdfViewerToolbar-CWwfBxPU.js";import"./Button-DXqS5gF6.js";import"./chevron-right-DydSznQd.js";import"./Input-8WX07h9e.js";import"./search-Ceaj3yJ_.js";import"./spin-TG55u7b2.js";import"./error-D8UfR1ZG.js";import"./withOsdkMetrics-DXfIJx3f.js";import"./makeExternalStore-CoWYgG6l.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
