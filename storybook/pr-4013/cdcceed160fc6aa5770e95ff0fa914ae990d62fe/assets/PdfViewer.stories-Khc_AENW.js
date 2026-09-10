import{j as r,M as s}from"./iframe-DbFztG_g.js";import{P as p}from"./pdf-viewer-BEgmr7sV.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BPmfbGn3.js";import"./preload-helper-5yPlXN3h.js";import"./PdfViewer-DFlo9ls6.js";import"./index-BNGbb9rK.js";import"./BasePdfViewer-DE4IsWP4.js";import"./BasePdfViewer.module.css-BbDxleOk.js";import"./PdfViewerAnnotationLayer-CPPns7M6.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CuyzOf-w.js";import"./PdfViewerOutlineSidebar-CMOfmICe.js";import"./PdfViewerSidebarHeader-DIh2zy0t.js";import"./useBaseUiId-BJNUcsKi.js";import"./useControlled-CtpQZwRP.js";import"./CompositeRoot-rv0VCPkW.js";import"./CompositeItem-Of_bmSJ2.js";import"./ToolbarRootContext-DsXUgMuU.js";import"./composite-DmkJ6YWF.js";import"./svgIconContainer-BS_91pYI.js";import"./PdfViewerSearchBar-D77slx_t.js";import"./chevron-up-DUV2O2CG.js";import"./chevron-down-teVJIekx.js";import"./cross-DGv6zSaG.js";import"./PdfViewerSidebar-yfq2WYLt.js";import"./index-aejPdgJq.js";import"./index-CjeOPmmS.js";import"./index-DUEaSppR.js";import"./PdfViewerToolbar-B64un7ru.js";import"./Button-UBStgghd.js";import"./chevron-right-DZIUtwxV.js";import"./Input-C-K2OOHO.js";import"./search-BDnZaHng.js";import"./spin-BWX0mtcp.js";import"./error-0lPH6zk9.js";import"./withOsdkMetrics-C9cTzLSh.js";import"./makeExternalStore-BJK_8FWf.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
