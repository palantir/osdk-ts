import{j as r,M as s}from"./iframe-BrczSXWd.js";import{P as p}from"./pdf-viewer-BepAVTxC.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-bHsZrpZS.js";import"./preload-helper-C9BY0Y3l.js";import"./PdfViewer-D3EuJx54.js";import"./index-DudA86qY.js";import"./BasePdfViewer-B6riY9Hj.js";import"./BasePdfViewer.module.css-cstrvPQ1.js";import"./PdfViewerAnnotationLayer-BgNv1zln.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DE5GJRgT.js";import"./PdfViewerOutlineSidebar-DZpCtusT.js";import"./PdfViewerSidebarHeader-jicJGQyQ.js";import"./useBaseUiId-BAdjTZxi.js";import"./useControlled-rjkFsMU4.js";import"./CompositeRoot-BSNg0blt.js";import"./CompositeItem-BJcTRkcm.js";import"./ToolbarRootContext-BTk5x8Vt.js";import"./composite-Bm0YB8hl.js";import"./svgIconContainer-CE-3RmSd.js";import"./PdfViewerSearchBar-U_IPavex.js";import"./chevron-up-CohoVb5E.js";import"./chevron-down-Bqbgyapn.js";import"./cross-Ru6xXr8E.js";import"./PdfViewerSidebar-CSu1mxLK.js";import"./index-HlCA-cEl.js";import"./index-BNKav9tw.js";import"./index-DjqiYrmI.js";import"./PdfViewerToolbar-CWgWi4tZ.js";import"./Button-DCegplHy.js";import"./chevron-right-2DMlM-Pk.js";import"./Input-B6lE5n2S.js";import"./search-BIr2ECst.js";import"./spin-CS46t0Mz.js";import"./error-CUc0NJXd.js";import"./withOsdkMetrics-DGpmb3Iv.js";import"./makeExternalStore-C7i3F044.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
