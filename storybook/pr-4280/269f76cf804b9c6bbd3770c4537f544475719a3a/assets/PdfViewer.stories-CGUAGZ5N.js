import{j as r,M as s}from"./iframe-CVTk1lj6.js";import{P as p}from"./pdf-viewer-c-EggXhH.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DR5gKbfu.js";import"./preload-helper-Ch_NUblH.js";import"./PdfViewer-DxuMS-56.js";import"./index-Ca2wp4d3.js";import"./BasePdfViewer-DfVDAc9h.js";import"./BasePdfViewer.module.css-CVP5vTzC.js";import"./PdfViewerAnnotationLayer-roQWutF5.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D2Ws68ZQ.js";import"./PdfViewerOutlineSidebar-BPQ9f-5_.js";import"./PdfViewerSidebarHeader-C8pMRBHz.js";import"./useBaseUiId-ChhYdebi.js";import"./useControlled-7LT5KU92.js";import"./CompositeRoot-MbpE-R-k.js";import"./CompositeItem-CwoHKheb.js";import"./ToolbarRootContext-Bdz2jmkC.js";import"./composite-CaJc-JUa.js";import"./svgIconContainer-BlxLcGWd.js";import"./PdfViewerSearchBar-DMynBUF1.js";import"./chevron-up-B51_8lxD.js";import"./chevron-down-DNy2-Jwx.js";import"./cross-Dl6Djxwv.js";import"./PdfViewerSidebar-DAHv6AJ8.js";import"./index-B9pgwjc0.js";import"./index-D-pc5yxy.js";import"./index-B2mOMAcR.js";import"./PdfViewerToolbar-dItBSuHj.js";import"./Button-B65aTlIJ.js";import"./chevron-right-DppJxBJK.js";import"./Input-DUWZnL0B.js";import"./search-Cr_k9lr1.js";import"./spin-B3n45jxX.js";import"./error-DD1GLIG6.js";import"./withOsdkMetrics-COaPxDqK.js";import"./makeExternalStore-BoZqRL7K.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
