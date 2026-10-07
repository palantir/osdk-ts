import{j as r,M as s}from"./iframe-DaskLrq8.js";import{P as p}from"./pdf-viewer-BwGU_Gwi.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CIedXgvp.js";import"./preload-helper-BVj_xxLy.js";import"./PdfViewer-D5XGJiRm.js";import"./index-Bqih82xZ.js";import"./BasePdfViewer-f9Xv3-qA.js";import"./BasePdfViewer.module.css-CuqAoBa5.js";import"./PdfViewerAnnotationLayer-CW_xXzT9.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-aI4J6Z_X.js";import"./PdfViewerOutlineSidebar-VOBfFJN0.js";import"./PdfViewerSidebarHeader-C00CN4jT.js";import"./useBaseUiId-DMXF2oMu.js";import"./useControlled-CYCM7Lap.js";import"./CompositeRoot-BNgyz3CD.js";import"./CompositeItem-BVBCC1HX.js";import"./ToolbarRootContext-BzuzU9vE.js";import"./composite-BYKbQoC1.js";import"./svgIconContainer-tkjo1pD1.js";import"./PdfViewerSearchBar-B9pxINup.js";import"./chevron-up-BMkjSMDP.js";import"./chevron-down-CjfhpjkO.js";import"./cross-B-0FObLb.js";import"./PdfViewerSidebar-2zGs2m6g.js";import"./index-DmvVgxHl.js";import"./index-C_mHhOwa.js";import"./index-Dy_kZRgY.js";import"./PdfViewerToolbar-DQrD8D-2.js";import"./Button-BrqzKE8K.js";import"./chevron-right-CC-p5PCu.js";import"./Input-DB2lb1xd.js";import"./search-25BjkPAP.js";import"./spin-4IN9bQG2.js";import"./error-5sU13yE2.js";import"./withOsdkMetrics-CjFNfKow.js";import"./makeExternalStore-CIn7ze2w.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
