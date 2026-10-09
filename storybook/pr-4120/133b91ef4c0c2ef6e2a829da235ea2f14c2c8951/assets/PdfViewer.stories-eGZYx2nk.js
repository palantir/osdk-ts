import{j as r,M as s}from"./iframe-DpbVK0Z4.js";import{P as p}from"./pdf-viewer-Dm5UklqS.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DzZfOi-e.js";import"./preload-helper-BMTjOH4m.js";import"./PdfViewer-DejSM3mH.js";import"./index-FV6PMg5w.js";import"./BasePdfViewer-BxXIyMai.js";import"./BasePdfViewer.module.css-neCynqWF.js";import"./PdfViewerAnnotationLayer-Be_i9bdB.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D_EzGKMo.js";import"./PdfViewerOutlineSidebar-BReUhURo.js";import"./PdfViewerSidebarHeader-2DEOD84m.js";import"./useBaseUiId-DPGPywgp.js";import"./useControlled-C8mfwfwA.js";import"./CompositeRoot-CsA2bLZK.js";import"./CompositeItem-7xXFyPB2.js";import"./ToolbarRootContext-EQtWNPb0.js";import"./composite-B3hTwjvJ.js";import"./svgIconContainer-BopSq90e.js";import"./PdfViewerSearchBar-Co7z-H0U.js";import"./chevron-up-HnaF2m-N.js";import"./chevron-down-BPIZ_aJd.js";import"./cross-CfOksEOQ.js";import"./PdfViewerSidebar-Dxtbncai.js";import"./index-DFzod05J.js";import"./index-CtCwm9A8.js";import"./index-DjzWs5sw.js";import"./PdfViewerToolbar-CwuID0nw.js";import"./Button-DXRDup3v.js";import"./chevron-right-BYMZwGjp.js";import"./Input-AjQ1LbFX.js";import"./search-Bpcgz7ed.js";import"./spin-aiYPu9y8.js";import"./error-Ddzskxi-.js";import"./withOsdkMetrics-CogiPj_o.js";import"./makeExternalStore-hBeqTILr.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
