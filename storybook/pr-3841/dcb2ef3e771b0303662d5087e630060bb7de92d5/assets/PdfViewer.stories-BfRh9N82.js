import{j as r,M as s}from"./iframe-BYf_OhJ0.js";import{P as p}from"./pdf-viewer-Bf1r3Ul8.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DRqaUI0C.js";import"./preload-helper-CMb40c8b.js";import"./PdfViewer-CnGeb4xV.js";import"./index-D24vcPYb.js";import"./BasePdfViewer-D2Pueaga.js";import"./BasePdfViewer.module.css-C4yPSaYG.js";import"./PdfViewerAnnotationLayer-DyqTOLlx.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DH21uHYr.js";import"./PdfViewerOutlineSidebar-9JgU6Vaz.js";import"./PdfViewerSidebarHeader-RKr_Ad5q.js";import"./useBaseUiId-BV6TRjLb.js";import"./useControlled-D82M4IV8.js";import"./CompositeRoot-BCGvYXAG.js";import"./CompositeItem-CptL6v0D.js";import"./ToolbarRootContext-U6rUTj3k.js";import"./composite-Czk5304D.js";import"./svgIconContainer-CLNhy3XP.js";import"./PdfViewerSearchBar-DM_rZgyH.js";import"./chevron-up-m_qLx9BF.js";import"./chevron-down-BFyWQHOE.js";import"./cross-937OAABn.js";import"./PdfViewerSidebar-D-juNDXV.js";import"./index-DGCG5Etv.js";import"./index-Cfn6IIi-.js";import"./index-C0REXx9G.js";import"./PdfViewerToolbar-DeQseyXI.js";import"./Button-HH_9r5OW.js";import"./chevron-right-_3N5sf2I.js";import"./Input-jGJDNg7d.js";import"./search-CG-g63hT.js";import"./spin-C7MHM8Q7.js";import"./error-IoYBerAI.js";import"./withOsdkMetrics-D932jFv2.js";import"./makeExternalStore-xpSL_Msm.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
