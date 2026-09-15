import{j as r,M as s}from"./iframe-BHoRCdfJ.js";import{P as p}from"./pdf-viewer-BVa5os3C.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-lWjQAm1p.js";import"./preload-helper-PcfL1ZgJ.js";import"./PdfViewer-pDp1TRxM.js";import"./index-CRbMuko2.js";import"./BasePdfViewer-EZXMDr_z.js";import"./BasePdfViewer.module.css-B3cFR0mL.js";import"./PdfViewerAnnotationLayer-DAcgLK31.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DPxU8X_D.js";import"./PdfViewerOutlineSidebar-KmCL210P.js";import"./PdfViewerSidebarHeader-BDhNKa12.js";import"./useBaseUiId-B3Ti1xga.js";import"./useControlled-CXIbMiD_.js";import"./CompositeRoot-ThINdV3g.js";import"./CompositeItem-C8lI6v5m.js";import"./ToolbarRootContext-VQGHIcMO.js";import"./composite-DA-yFNZT.js";import"./svgIconContainer-Ddyj85do.js";import"./PdfViewerSearchBar-CZEUE9R4.js";import"./chevron-up-DudaSCwQ.js";import"./chevron-down-DCJDhdZ9.js";import"./cross-o6c578IU.js";import"./PdfViewerSidebar-BJAMyLWo.js";import"./index-CQXq0Q8i.js";import"./index-KzV2K_a8.js";import"./index-BqxqbHVw.js";import"./PdfViewerToolbar-CFvZugoA.js";import"./Button-GIqq_QaR.js";import"./chevron-right-BTLltB87.js";import"./Input-RRy85S6o.js";import"./search-CzBp321S.js";import"./spin-Dq_7Vmpc.js";import"./error-D1WxR2nX.js";import"./withOsdkMetrics-DiUqqX9-.js";import"./makeExternalStore-_J7Y5wzS.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
