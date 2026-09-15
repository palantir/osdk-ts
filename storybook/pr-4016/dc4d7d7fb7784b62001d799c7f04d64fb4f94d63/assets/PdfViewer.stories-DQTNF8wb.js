import{j as r,M as s}from"./iframe-jTK2SxfT.js";import{P as p}from"./pdf-viewer-C-nTTxp4.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DZ3QHGGd.js";import"./preload-helper-qQ4kAc2Q.js";import"./PdfViewer-BRo8WoRl.js";import"./index-Pz1htbT9.js";import"./BasePdfViewer-B3gMnN8g.js";import"./BasePdfViewer.module.css-CkA9_U62.js";import"./PdfViewerAnnotationLayer-CG5GgePa.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Db9s_yPr.js";import"./PdfViewerOutlineSidebar-RXNtjtuD.js";import"./PdfViewerSidebarHeader-tZ0WmRSb.js";import"./useBaseUiId--4cJ9Rmo.js";import"./useControlled-qZTm53K2.js";import"./CompositeRoot-CmgTLCRm.js";import"./CompositeItem-Cq-oGUuG.js";import"./ToolbarRootContext-Cq-6mE15.js";import"./composite-iOJ2PvUN.js";import"./svgIconContainer-GdUN0nSr.js";import"./PdfViewerSearchBar-DX-DLGIJ.js";import"./chevron-up-CBEIpNtk.js";import"./chevron-down-B-85uVWr.js";import"./cross-DrKqX7p4.js";import"./PdfViewerSidebar-Cc81xy1K.js";import"./index-DyHfw1UB.js";import"./index-BMtptVtR.js";import"./index-CSlECQqo.js";import"./PdfViewerToolbar-DyoIdOsx.js";import"./Button-DS-hfsg1.js";import"./chevron-right-rwtXlJ5-.js";import"./Input-C57k62_6.js";import"./search-DswSvB8a.js";import"./spin-D_DM-dva.js";import"./error-BtNAl0M5.js";import"./withOsdkMetrics-DXkox581.js";import"./makeExternalStore-Cfa2Qg1q.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
