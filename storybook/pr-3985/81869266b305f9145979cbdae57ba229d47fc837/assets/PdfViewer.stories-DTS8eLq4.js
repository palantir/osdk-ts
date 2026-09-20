import{j as r,M as s}from"./iframe-Bx31wN7l.js";import{P as p}from"./pdf-viewer-DYoAYaHe.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-V5GJRNMw.js";import"./preload-helper-fuKytI2J.js";import"./PdfViewer-D55zH49g.js";import"./index-DZxERBQ8.js";import"./BasePdfViewer-DAqvD8uF.js";import"./BasePdfViewer.module.css-Db7rTieC.js";import"./PdfViewerAnnotationLayer-CBKOiT3a.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BHfI2Fi2.js";import"./PdfViewerOutlineSidebar-DDlxB92L.js";import"./PdfViewerSidebarHeader-BYi8KrV8.js";import"./useBaseUiId-BpE0KEfc.js";import"./useControlled-BUc-d8tN.js";import"./CompositeRoot-DgtyOefj.js";import"./CompositeItem-CXKQZ3E9.js";import"./ToolbarRootContext-BEc0iwyp.js";import"./composite-Bx5EuYDq.js";import"./svgIconContainer-CsmE7H8N.js";import"./PdfViewerSearchBar-Bd63vCmR.js";import"./chevron-up-B3g37vVs.js";import"./chevron-down-Ca2LkDWe.js";import"./cross-ByPIg3cq.js";import"./PdfViewerSidebar-UtwODWGV.js";import"./index-BrSdfPya.js";import"./index-ec0TeVrD.js";import"./index-WQiMJ8U5.js";import"./PdfViewerToolbar-Bnghk2Eq.js";import"./Button-D8P70LO7.js";import"./chevron-right-wc1q4edg.js";import"./Input-CQoFLmc7.js";import"./search-BkXPkxMB.js";import"./spin-D5g2Y2kJ.js";import"./error-BqlruEo6.js";import"./withOsdkMetrics-DO2o0cgY.js";import"./makeExternalStore-BiPnGhaA.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
