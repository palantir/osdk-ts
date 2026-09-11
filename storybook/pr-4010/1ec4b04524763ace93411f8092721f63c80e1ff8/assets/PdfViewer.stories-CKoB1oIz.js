import{j as r,M as s}from"./iframe-g7EXj__l.js";import{P as p}from"./pdf-viewer-DyNeyzPN.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-jNiF-uQQ.js";import"./preload-helper-D8k1PL_q.js";import"./PdfViewer-Cmr-VE1I.js";import"./index-STGRTw-I.js";import"./BasePdfViewer-C1D55wkd.js";import"./BasePdfViewer.module.css-CXOOPVry.js";import"./PdfViewerAnnotationLayer-CH58IfGw.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CWVSSDEw.js";import"./PdfViewerOutlineSidebar-DezkC1WY.js";import"./PdfViewerSidebarHeader-DUkn7mYK.js";import"./useBaseUiId-JhwK1l7S.js";import"./useControlled-Bl9w2UKC.js";import"./CompositeRoot-CTDiglAD.js";import"./CompositeItem-C0TLzRF2.js";import"./ToolbarRootContext-BDh1zVyN.js";import"./composite-CTFcElLo.js";import"./svgIconContainer-DFRoFWsy.js";import"./PdfViewerSearchBar-DJWkigim.js";import"./chevron-up-iBR_txD1.js";import"./chevron-down-DYMGKjqf.js";import"./cross-DMuPKEQ0.js";import"./PdfViewerSidebar-Czqh2Q-W.js";import"./index-CuPaLakH.js";import"./index-B0EzKUi-.js";import"./index-C-z8TFzf.js";import"./PdfViewerToolbar-NerC0Hai.js";import"./Button-bn5eeaYG.js";import"./chevron-right-Dmi3rb_I.js";import"./Input-B51qbm94.js";import"./search-Dyr6dgW-.js";import"./spin-BleaucU0.js";import"./error-CiSXC6k7.js";import"./withOsdkMetrics-DC-0ZtoG.js";import"./makeExternalStore-B5gQKQXN.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
