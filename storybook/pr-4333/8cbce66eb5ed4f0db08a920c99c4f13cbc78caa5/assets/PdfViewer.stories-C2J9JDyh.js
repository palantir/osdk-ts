import{j as r,M as s}from"./iframe-DSFJZDbB.js";import{P as p}from"./pdf-viewer-H13vNZUN.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B60ZQW69.js";import"./preload-helper-BXZsHDRp.js";import"./PdfViewer-B7Qq2rHV.js";import"./index-7paxFDvD.js";import"./BasePdfViewer-J0OenkBG.js";import"./BasePdfViewer.module.css-DTlYkk7k.js";import"./PdfViewerAnnotationLayer-CP9C7FVQ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BmSuomEq.js";import"./PdfViewerOutlineSidebar-Bae-P-9f.js";import"./PdfViewerSidebarHeader-LHO_pOp2.js";import"./useBaseUiId-c3zUK5X5.js";import"./useControlled-C2eq60VR.js";import"./CompositeRoot-CYwXzK9W.js";import"./CompositeItem-Dz7MzIvk.js";import"./ToolbarRootContext-jXB37hMy.js";import"./composite-DxVQtdWX.js";import"./svgIconContainer-RNVtlkjd.js";import"./PdfViewerSearchBar-CrTQtdok.js";import"./chevron-up-hNV0beo3.js";import"./chevron-down-VJT3Mdig.js";import"./cross-BB9CVc-Q.js";import"./PdfViewerSidebar-UN5jr7RK.js";import"./index-Cwvk-iSE.js";import"./index-DZNGA6d-.js";import"./index-D6ZHe2_A.js";import"./PdfViewerToolbar-Ck-6-j2e.js";import"./Button-DQPbKfHN.js";import"./chevron-right-CSuiBNI9.js";import"./Input-PKRWZfPT.js";import"./search-CoFzowK4.js";import"./spin-XCn1vyUY.js";import"./error-uQwZC4G-.js";import"./withOsdkMetrics-BTLO2asc.js";import"./makeExternalStore-CLq3a0rV.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
