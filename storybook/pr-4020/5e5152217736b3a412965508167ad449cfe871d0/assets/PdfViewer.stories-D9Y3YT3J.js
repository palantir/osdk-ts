import{j as r,M as s}from"./iframe-88cR0Kb6.js";import{P as p}from"./pdf-viewer-vJd48lH8.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DtxSZbWW.js";import"./preload-helper-YlgatCnn.js";import"./PdfViewer-DFL5L226.js";import"./index-B3iu9Z4K.js";import"./BasePdfViewer-BnCIr6Gy.js";import"./BasePdfViewer.module.css-QkLYJ5vu.js";import"./PdfViewerAnnotationLayer-CKUgscxO.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C7i7Mlcz.js";import"./PdfViewerOutlineSidebar-DYGhnTXV.js";import"./PdfViewerSidebarHeader-C5yJDGGl.js";import"./useBaseUiId-DM5phI6w.js";import"./useControlled-B1WACGZl.js";import"./CompositeRoot-joFOOXBP.js";import"./CompositeItem-x-J85oX3.js";import"./ToolbarRootContext-B6xb1eEg.js";import"./composite-D2yt_gez.js";import"./svgIconContainer-BWrQPgSJ.js";import"./PdfViewerSearchBar-BVHjeT-O.js";import"./chevron-up-DkIe5-SH.js";import"./chevron-down-J3WtM_eJ.js";import"./cross-vHFr3mSH.js";import"./PdfViewerSidebar-C-flwzDZ.js";import"./index-CIeymtFj.js";import"./index-m81VPS-N.js";import"./index-CGLm8TXz.js";import"./PdfViewerToolbar-D0RynAGW.js";import"./Button-CfFrXY9_.js";import"./chevron-right-DJpwbbYW.js";import"./Input-CBeXc1FM.js";import"./search-D2eeLv3Q.js";import"./spin-CQQvVUmq.js";import"./error-B6tbVTJ_.js";import"./withOsdkMetrics-BByVeH1n.js";import"./makeExternalStore-DzZ4mLu7.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
