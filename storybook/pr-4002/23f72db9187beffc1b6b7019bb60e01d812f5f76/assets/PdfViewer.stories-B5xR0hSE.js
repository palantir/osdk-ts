import{j as r,M as s}from"./iframe-BDntCMEH.js";import{P as p}from"./pdf-viewer-BjDjribN.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B6pWUgHr.js";import"./preload-helper-B50VuOmN.js";import"./PdfViewer-tLpD77-d.js";import"./index-B0z8RHyd.js";import"./BasePdfViewer-t-DW5Z1S.js";import"./BasePdfViewer.module.css-CQAAqyHi.js";import"./PdfViewerAnnotationLayer-JjVNGp47.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dp85Zd4w.js";import"./PdfViewerOutlineSidebar-DIJ5en6e.js";import"./PdfViewerSidebarHeader-Cj-mBDri.js";import"./useBaseUiId-BTqLhW0i.js";import"./useControlled-B173rJPI.js";import"./CompositeRoot-CqCXHM5p.js";import"./CompositeItem-BTJTpSwe.js";import"./ToolbarRootContext-C8N9jA7J.js";import"./composite-BQ7qlaUQ.js";import"./svgIconContainer-B6ralbiB.js";import"./PdfViewerSearchBar-DI_g_zzS.js";import"./chevron-up-Disd9lAY.js";import"./chevron-down-BxBh9Dqz.js";import"./cross-BH8OF0Bn.js";import"./PdfViewerSidebar-DrNSiPOy.js";import"./index-BQKiMfv1.js";import"./index-CX_hrFB8.js";import"./index-BOofLcNJ.js";import"./PdfViewerToolbar-lkVmMGb9.js";import"./Button-Bpn7C7dn.js";import"./chevron-right-DOEG618o.js";import"./Input-CXpC2-sJ.js";import"./search-CYEButG9.js";import"./spin-7KI6O9X9.js";import"./error-CAncZcqv.js";import"./withOsdkMetrics-DaoCVVMK.js";import"./makeExternalStore-j3YsZMxz.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
