import{j as r,M as s}from"./iframe-b99LbP9m.js";import{P as p}from"./pdf-viewer-lUwkPRbu.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CeLl22EY.js";import"./preload-helper-DVhK3iQp.js";import"./PdfViewer-qGituhvo.js";import"./index-lvCDhi6D.js";import"./BasePdfViewer-BE-PnNpd.js";import"./BasePdfViewer.module.css-CZ99dk0S.js";import"./PdfViewerAnnotationLayer-HbKEh6VS.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Be4dW7PI.js";import"./PdfViewerOutlineSidebar-D_cFsv1U.js";import"./PdfViewerSidebarHeader-BQyczJl7.js";import"./useBaseUiId-6kqzncOU.js";import"./useControlled-ByvbEfpA.js";import"./CompositeRoot-BY362AcT.js";import"./CompositeItem-CKc0sSZR.js";import"./ToolbarRootContext-BgL_RAO8.js";import"./composite-CtvoA4ac.js";import"./svgIconContainer-BihU0y1S.js";import"./PdfViewerSearchBar-DFbPWVsL.js";import"./chevron-up-3lhbrUVC.js";import"./chevron-down-D4nxFd5U.js";import"./cross-DIxLp0N9.js";import"./PdfViewerSidebar-BiKS_DWb.js";import"./index-DLEC-1eU.js";import"./index-DJmpNsh_.js";import"./index-CQtcp48q.js";import"./PdfViewerToolbar-DcT7UJoe.js";import"./Button-C5yqAo8p.js";import"./chevron-right-bY8hn0iT.js";import"./Input-hdA3kWA3.js";import"./search-CC467d8u.js";import"./spin-W7FhABmw.js";import"./error-DAEmkM_5.js";import"./withOsdkMetrics-C6RLviWF.js";import"./makeExternalStore-BPDPOT32.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
