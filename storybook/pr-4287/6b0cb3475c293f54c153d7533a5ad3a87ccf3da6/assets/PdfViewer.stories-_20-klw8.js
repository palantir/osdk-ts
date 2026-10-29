import{j as r,M as s}from"./iframe-B4MgyMWl.js";import{P as p}from"./pdf-viewer-culbJteq.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-VL8abOKc.js";import"./preload-helper-BUOdkVYn.js";import"./PdfViewer-DfgBnXX1.js";import"./index-CWrwK-HJ.js";import"./BasePdfViewer-BLgtWPQd.js";import"./BasePdfViewer.module.css-B1RqCCrV.js";import"./PdfViewerAnnotationLayer-BhfYjAuD.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BnHRh-fE.js";import"./PdfViewerOutlineSidebar-Dtrt6Rwo.js";import"./PdfViewerSidebarHeader-DfCzOZ7E.js";import"./useBaseUiId-cePy-Fka.js";import"./useControlled-CqJ99-8o.js";import"./CompositeRoot-B5mQ1tSS.js";import"./CompositeItem-Brr5mEPn.js";import"./ToolbarRootContext-BOMUT60A.js";import"./composite-CAyP_TTE.js";import"./svgIconContainer-DSK9BMKz.js";import"./PdfViewerSearchBar-CNsI6vBK.js";import"./chevron-up-7jhO8h_Q.js";import"./chevron-down-ie3vWH8s.js";import"./cross-DeZ5LgCs.js";import"./PdfViewerSidebar-C1NkBoKy.js";import"./index-iqc6oGJg.js";import"./index-fmJhNd3L.js";import"./index-CyhRYA9d.js";import"./PdfViewerToolbar-pteB7sQN.js";import"./Button-CpaCdx-9.js";import"./chevron-right-C0ygtpTr.js";import"./Input-DyGREfir.js";import"./search-DD9Ps7Xi.js";import"./spin-BH0HcTSR.js";import"./error-6geuwXkd.js";import"./withOsdkMetrics-DM07Q-qZ.js";import"./makeExternalStore-DUbcYQez.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
