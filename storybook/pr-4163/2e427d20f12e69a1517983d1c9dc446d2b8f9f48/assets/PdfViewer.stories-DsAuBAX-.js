import{j as r,M as s}from"./iframe-DTvoIH2r.js";import{P as p}from"./pdf-viewer-0TTAcbZZ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B7ETVuxY.js";import"./preload-helper-Bl5BDaS_.js";import"./PdfViewer-C5TTnR-Q.js";import"./index-Cm5sGWxJ.js";import"./BasePdfViewer-B8YQ1U8h.js";import"./BasePdfViewer.module.css-aBNolFbv.js";import"./PdfViewerAnnotationLayer-CjBbNXdK.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-p4SIgPdB.js";import"./PdfViewerOutlineSidebar-XN90CorS.js";import"./PdfViewerSidebarHeader-P2yxKHEs.js";import"./useBaseUiId-DFuLIzAR.js";import"./useControlled-0uh_9m14.js";import"./CompositeRoot-C_JqeGsa.js";import"./CompositeItem-OtQFnxkB.js";import"./ToolbarRootContext-Bwl43FVk.js";import"./composite-u0e-F1rW.js";import"./svgIconContainer-TNOoFETa.js";import"./PdfViewerSearchBar-Ci2rc2t8.js";import"./chevron-up-Bhsls9ly.js";import"./chevron-down-Kc2WAjaE.js";import"./cross-dEikKBUB.js";import"./PdfViewerSidebar-JVnSkhhQ.js";import"./index-C_BS0Bod.js";import"./index-BkNGnmPX.js";import"./index-huiBNFNy.js";import"./PdfViewerToolbar-C4t0R2ed.js";import"./Button-Eyz2dERQ.js";import"./chevron-right-C4Kdomun.js";import"./Input-C-tth6vb.js";import"./search-CkOB4LMx.js";import"./spin-DPfQuqRQ.js";import"./error-CAqUL9Mb.js";import"./withOsdkMetrics-iCsj3SqR.js";import"./makeExternalStore-B3yQfg4Y.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
