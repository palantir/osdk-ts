import{j as r,M as s}from"./iframe-BkR_0Whf.js";import{P as p}from"./pdf-viewer-DQ-W9QdD.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BAyo1xOd.js";import"./preload-helper-BZj2lHf4.js";import"./PdfViewer-BCWQ-qSq.js";import"./index-ZGE4mIMl.js";import"./BasePdfViewer-BzSdB3cs.js";import"./BasePdfViewer.module.css-CMGd0t2j.js";import"./PdfViewerAnnotationLayer-BOeNk63q.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D3Hbxobg.js";import"./PdfViewerOutlineSidebar-BUCEQHvH.js";import"./PdfViewerSidebarHeader-CsC6dtRO.js";import"./useBaseUiId-D0GFLUCc.js";import"./useControlled-qGG-lubz.js";import"./CompositeRoot-Dh9p28vf.js";import"./CompositeItem-DJJJBa43.js";import"./ToolbarRootContext-B0bmzvoG.js";import"./composite-DK0lUWCR.js";import"./svgIconContainer-Cq5Gigac.js";import"./PdfViewerSearchBar-BnmpbE3c.js";import"./chevron-up-o1Z4ivEH.js";import"./chevron-down-D-JVojHo.js";import"./cross-Cj_dISDs.js";import"./PdfViewerSidebar-BnMU5_h4.js";import"./index-BWbnaTYz.js";import"./index-BHvnJTnu.js";import"./index-BYjUCuHE.js";import"./PdfViewerToolbar-DYckw3dq.js";import"./Button-9bj61-xy.js";import"./chevron-right-H2x6QkH_.js";import"./Input-iGBf8GKC.js";import"./search-BYwC6oDp.js";import"./spin-DAlxH2zz.js";import"./error-CceWhdeD.js";import"./withOsdkMetrics-Ejahsq4F.js";import"./makeExternalStore-32xgHA4-.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
