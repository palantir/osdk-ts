import{j as r,M as s}from"./iframe-KFmuHpi6.js";import{P as p}from"./pdf-viewer-CtgZZ7Wu.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D15ocuzb.js";import"./preload-helper-DA3sodJk.js";import"./PdfViewer-C-mtUwUh.js";import"./index-CBTTDR05.js";import"./BasePdfViewer-DfSQWDU0.js";import"./BasePdfViewer.module.css-Da_ZWdm5.js";import"./PdfViewerAnnotationLayer-DS9UPdUS.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C_vu0iri.js";import"./PdfViewerOutlineSidebar-D3byc3mq.js";import"./PdfViewerSidebarHeader-CSpk1JqY.js";import"./useBaseUiId-CrXnmgW5.js";import"./useControlled-D9mNQgHG.js";import"./CompositeRoot-D5JUsLnP.js";import"./CompositeItem-BqmVxYgk.js";import"./ToolbarRootContext-DPZQ9O-r.js";import"./composite-Bv5M65D9.js";import"./svgIconContainer-D_AfyEve.js";import"./PdfViewerSearchBar-gK1E-06N.js";import"./chevron-up-DPcbr57D.js";import"./chevron-down-BDNkXUjZ.js";import"./cross-BxqJFApi.js";import"./PdfViewerSidebar-DriO-lSz.js";import"./index-tH9oz2kR.js";import"./index-BkMhET5E.js";import"./index-Di_4vTer.js";import"./PdfViewerToolbar-rrN1UZx-.js";import"./Button-CS75p-oM.js";import"./chevron-right-x5yoYf1-.js";import"./Input-B-ppJqtJ.js";import"./search-Bq4-27c_.js";import"./spin-CSWKqQPS.js";import"./error-BbvMlxw1.js";import"./withOsdkMetrics-BaXo7wYf.js";import"./makeExternalStore-C27aCTGI.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
