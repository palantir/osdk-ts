import{j as r,M as s}from"./iframe-Bx-FSmYs.js";import{P as p}from"./pdf-viewer-DzvZyHiV.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DKwjWGrM.js";import"./preload-helper-DgijergL.js";import"./PdfViewer-JmTTYWth.js";import"./index-xwvc2Shv.js";import"./BasePdfViewer-BW2F-y9f.js";import"./BasePdfViewer.module.css-DFeQK12g.js";import"./PdfViewerAnnotationLayer-Chok5Pap.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D_Ts3ULo.js";import"./PdfViewerOutlineSidebar-BnFYnSpE.js";import"./PdfViewerSidebarHeader-DAyTWKsg.js";import"./useBaseUiId-BGi2L2nz.js";import"./useControlled-DFOJ9xFP.js";import"./CompositeRoot-BIY8rNAr.js";import"./CompositeItem-CMA7rFte.js";import"./ToolbarRootContext-DpyqD2o0.js";import"./composite-mmpRjkxT.js";import"./svgIconContainer-CBLTX1NK.js";import"./PdfViewerSearchBar-tDqtMcJ9.js";import"./chevron-up-K8CVZpQ3.js";import"./chevron-down-Buw4ucuN.js";import"./cross-BOo5QBm9.js";import"./PdfViewerSidebar-CitAlBiA.js";import"./index-BY0uRhrX.js";import"./index-CIkpzaA0.js";import"./index-Ye47VGO5.js";import"./PdfViewerToolbar-XkkkBQTw.js";import"./Button--MuiOxa3.js";import"./chevron-right-BuNPQgEZ.js";import"./Input-Cv-wNC9i.js";import"./search-CdlZ7Qxj.js";import"./spin-p2VuFxde.js";import"./error-DdvC7qFd.js";import"./withOsdkMetrics-UuLHfX-P.js";import"./makeExternalStore-CCy_wMev.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
