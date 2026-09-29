import{j as r,M as s}from"./iframe-C0TXowYh.js";import{P as p}from"./pdf-viewer-C7gJInon.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BnXUc1Pq.js";import"./preload-helper-DxTxvmk8.js";import"./PdfViewer-DcK7YHyf.js";import"./index-Cu2rgIRW.js";import"./BasePdfViewer-pio__8c7.js";import"./BasePdfViewer.module.css-CZ8PJ8qW.js";import"./PdfViewerAnnotationLayer-BfpxGD6z.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CfNN6W2T.js";import"./PdfViewerOutlineSidebar-DzZQ1ASz.js";import"./PdfViewerSidebarHeader-BcDgYL66.js";import"./useBaseUiId-CxGokxTP.js";import"./useControlled-BFSHGlV3.js";import"./CompositeRoot-BKRNsjas.js";import"./CompositeItem-KxsL0x_o.js";import"./ToolbarRootContext-CE5VkmEX.js";import"./composite-CXmgh9Nc.js";import"./svgIconContainer-C2fAWGrt.js";import"./PdfViewerSearchBar-C-xNFA8H.js";import"./chevron-up-DHjP8CN5.js";import"./chevron-down-D7WH3ySY.js";import"./cross-BfvUUSFN.js";import"./PdfViewerSidebar-Bh3d27ZU.js";import"./index-DWDyv98l.js";import"./index-u3QGRCwO.js";import"./index-C6Y-pof4.js";import"./PdfViewerToolbar-Ce2SORxh.js";import"./Button-D_dg1W6z.js";import"./chevron-right-egT1p0zn.js";import"./Input-8EnzzSA0.js";import"./search-6re8IEAF.js";import"./spin-Decq6JRc.js";import"./error-Z4OH-yWW.js";import"./withOsdkMetrics-BPzAvbiW.js";import"./makeExternalStore-C_tJozdQ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
