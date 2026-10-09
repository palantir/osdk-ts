import{j as r,M as s}from"./iframe-KOHCB4Ql.js";import{P as p}from"./pdf-viewer-CpQ6DUFd.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BDnOZ2xV.js";import"./preload-helper-C6JW-Yng.js";import"./PdfViewer-DKPYob9f.js";import"./index-BNcO0wRN.js";import"./BasePdfViewer-BH_RdNCz.js";import"./BasePdfViewer.module.css-6Sd3e8sC.js";import"./PdfViewerAnnotationLayer-BN9AJ8k7.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D0dqIUGp.js";import"./PdfViewerOutlineSidebar-DVEkPC0Z.js";import"./PdfViewerSidebarHeader-tgzGjdRG.js";import"./useBaseUiId-CnRKbAt1.js";import"./useControlled-BY7stmzf.js";import"./CompositeRoot-B4djeu73.js";import"./CompositeItem-wiNuWtyF.js";import"./ToolbarRootContext-DilrPmxZ.js";import"./composite-ChHDZB6E.js";import"./svgIconContainer-C4qAid9G.js";import"./PdfViewerSearchBar-DB1Pf2GI.js";import"./chevron-up-DA-oKW4V.js";import"./chevron-down-InZk2kmp.js";import"./cross-BUaadKZZ.js";import"./PdfViewerSidebar-BpS13hED.js";import"./index-w7dGULd9.js";import"./index-CBKKW39b.js";import"./index-BQDXS8xb.js";import"./PdfViewerToolbar-BMNsNNIy.js";import"./Button-uumGSIHU.js";import"./chevron-right-Dfp_9Lda.js";import"./Input-D6-DkH9C.js";import"./search-Dd1zov5c.js";import"./spin-wvU5baDv.js";import"./error-C0G7w8jF.js";import"./withOsdkMetrics-BvJsymAS.js";import"./makeExternalStore-DeVyI-Ob.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
