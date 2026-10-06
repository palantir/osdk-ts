import{j as r,M as s}from"./iframe-Cd5diGA4.js";import{P as p}from"./pdf-viewer-DcHvvDhU.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BQchbfQ3.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfViewer-BsDiU7K8.js";import"./index-CzM4WAmt.js";import"./BasePdfViewer-B71Hu9ef.js";import"./BasePdfViewer.module.css-BUUAeVb5.js";import"./PdfViewerAnnotationLayer-C1Lvoh_-.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-TTlf5RDD.js";import"./PdfViewerOutlineSidebar-D3LhoTc8.js";import"./PdfViewerSidebarHeader-DLt8qwax.js";import"./useBaseUiId-visX6u-_.js";import"./useControlled-BM2rkvMt.js";import"./CompositeRoot-CNo3Liwx.js";import"./CompositeItem-Bud6cqZd.js";import"./ToolbarRootContext-BsB0g93g.js";import"./composite-CvjMA8y2.js";import"./svgIconContainer-DaB2_UOp.js";import"./PdfViewerSearchBar-COLCOQr4.js";import"./chevron-up-C0JkiHi0.js";import"./chevron-down-BxrXgsF8.js";import"./cross-ButwHlHJ.js";import"./PdfViewerSidebar-B1xn2shA.js";import"./index-BqTfBsD7.js";import"./index-DAgKjLrT.js";import"./index-Y3NM_UBm.js";import"./PdfViewerToolbar-BncnWaEc.js";import"./Button-CqfMgiGG.js";import"./chevron-right-BZF0Mncu.js";import"./Input-BTdSlwyz.js";import"./search-Dn_Ud8yw.js";import"./spin-DLAojGP9.js";import"./error-BudjlwPt.js";import"./withOsdkMetrics-C_0Aw4CV.js";import"./makeExternalStore-CFuKSi4I.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
