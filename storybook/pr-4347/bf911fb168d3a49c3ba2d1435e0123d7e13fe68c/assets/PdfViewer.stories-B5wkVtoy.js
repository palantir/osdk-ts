import{j as r,M as s}from"./iframe-Deuk3WWS.js";import{P as p}from"./pdf-viewer-BiIZdemw.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Bpz5QJjh.js";import"./preload-helper-BBagj194.js";import"./PdfViewer-DMseUL44.js";import"./index-6Crz7A4k.js";import"./BasePdfViewer-Ce8cuFgJ.js";import"./BasePdfViewer.module.css-CNGkPTRT.js";import"./PdfViewerAnnotationLayer-BCZ5JIuq.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CQkK4J0w.js";import"./PdfViewerOutlineSidebar-kUbC4AGV.js";import"./PdfViewerSidebarHeader-Bm96ScVq.js";import"./useBaseUiId-C0TzrPg5.js";import"./useControlled-Ck5NZ_4o.js";import"./CompositeRoot-B8pT3EHZ.js";import"./CompositeItem-D95IUf9G.js";import"./ToolbarRootContext-BQx_lx6V.js";import"./composite-CHecoTnn.js";import"./svgIconContainer-B5ALG4eV.js";import"./PdfViewerSearchBar-BhmWWsjc.js";import"./chevron-up-ZuExc0Ep.js";import"./chevron-down-CzdIHmMJ.js";import"./cross-BVTbes25.js";import"./PdfViewerSidebar-CGxwwHVz.js";import"./index-BOxz8-qW.js";import"./index-CLNZjEzY.js";import"./index-T88N5Ozy.js";import"./PdfViewerToolbar-CIAnS-Rz.js";import"./Button-NLGJUEdX.js";import"./chevron-right-DQvdjn_c.js";import"./Input-DB3pzys-.js";import"./search-CbQ17IfG.js";import"./spin-BagSaugu.js";import"./error-kMW-uU3e.js";import"./withOsdkMetrics-ZZvmUZ78.js";import"./makeExternalStore-C0hhujMA.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
