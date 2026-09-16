import{j as r,M as s}from"./iframe-CWKtkIUB.js";import{P as p}from"./pdf-viewer-QplXLFs4.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-JT61sPB7.js";import"./preload-helper-ipGJxtLm.js";import"./PdfViewer-CZS-fCcn.js";import"./index-DmJxPlh_.js";import"./BasePdfViewer-D1mpPjvS.js";import"./BasePdfViewer.module.css-CIbNAOJo.js";import"./PdfViewerAnnotationLayer-BSgdSXdn.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CSRBWYqH.js";import"./PdfViewerOutlineSidebar-CRSDUYrr.js";import"./PdfViewerSidebarHeader-CS-IFNoj.js";import"./useBaseUiId-B8eULTI6.js";import"./useControlled-BMMn65Nk.js";import"./CompositeRoot-DRcrL8-B.js";import"./CompositeItem-C2bCi6DR.js";import"./ToolbarRootContext-DoNt8TAQ.js";import"./composite-CLrQ0Pw0.js";import"./svgIconContainer-CNCTNhPA.js";import"./PdfViewerSearchBar-EFkhioWT.js";import"./chevron-up-CZyGwcyD.js";import"./chevron-down-lIwS08X8.js";import"./cross-DEu5gm-s.js";import"./PdfViewerSidebar-BUV_cHSv.js";import"./index-BG-YC_yo.js";import"./index-Pd0hKwBH.js";import"./index-CDK29Ulj.js";import"./PdfViewerToolbar-Cs0i_RYl.js";import"./Button-BfO_B2Gb.js";import"./chevron-right-D_p9tV_F.js";import"./Input-CX60mJQX.js";import"./search-D674kfs0.js";import"./spin-BNRpZT-W.js";import"./error-y4GKwRxO.js";import"./withOsdkMetrics-LG6-R3uz.js";import"./makeExternalStore-Cwu6Hqp2.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
