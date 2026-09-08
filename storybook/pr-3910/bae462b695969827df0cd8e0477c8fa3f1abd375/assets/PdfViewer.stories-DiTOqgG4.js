import{j as r,M as s}from"./iframe-lO6oHnL4.js";import{P as p}from"./pdf-viewer-vJud5HP9.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Cyc0bPWz.js";import"./preload-helper-CZ1zKWtp.js";import"./PdfViewer-DG_V3e_i.js";import"./index-Dl6F1U12.js";import"./BasePdfViewer-DVR3zb78.js";import"./BasePdfViewer.module.css-DhESsjvb.js";import"./PdfViewerAnnotationLayer-BlMoV_6j.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Deo0dCJD.js";import"./PdfViewerOutlineSidebar-D12oEeL0.js";import"./PdfViewerSidebarHeader-Bcci_MoR.js";import"./useBaseUiId-B846_agE.js";import"./useControlled-D27zJnZ2.js";import"./CompositeRoot-Dm4bOIC_.js";import"./CompositeItem-FdcQgDtf.js";import"./ToolbarRootContext-BfcKDhBA.js";import"./composite-BjZ2VOoR.js";import"./svgIconContainer-BCDfPS-8.js";import"./PdfViewerSearchBar-Q72LXttA.js";import"./chevron-up-ixzeTbOR.js";import"./chevron-down-0zZDUaq4.js";import"./cross-CmTyvcmm.js";import"./PdfViewerSidebar-y1hMFBMz.js";import"./index-Cx18vdAy.js";import"./index-D1QV3ytK.js";import"./index-DwP6FR90.js";import"./PdfViewerToolbar-jLnjsbIC.js";import"./Button-8GX9Y-dN.js";import"./chevron-right-C3LxtTzT.js";import"./Input-oxwV_krW.js";import"./search-BNOG_dw_.js";import"./spin-D0H-DIBq.js";import"./error-CA5mje1x.js";import"./withOsdkMetrics-BoEX6J3t.js";import"./makeExternalStore-CjtvZY1y.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
