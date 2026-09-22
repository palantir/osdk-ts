import{j as r,M as s}from"./iframe-NgqvngwL.js";import{P as p}from"./pdf-viewer-E8msEwtG.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-JNUiQHL2.js";import"./preload-helper-C7qDpPhw.js";import"./PdfViewer-nhGkDUIk.js";import"./index-qNBEcOe2.js";import"./BasePdfViewer-BbAblAq-.js";import"./BasePdfViewer.module.css-CZ-35fOU.js";import"./PdfViewerAnnotationLayer-CysaT8wP.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BCQHV0Mv.js";import"./PdfViewerOutlineSidebar-qZ254DVE.js";import"./PdfViewerSidebarHeader-0R4Thdiu.js";import"./useBaseUiId-usyGi_EF.js";import"./useControlled-eXO0aHwT.js";import"./CompositeRoot-JwrOlmdH.js";import"./CompositeItem-C3cyTcS-.js";import"./ToolbarRootContext-CPIM7tk6.js";import"./composite-D8ywKD-R.js";import"./svgIconContainer-Dg9noX_E.js";import"./PdfViewerSearchBar-DWPHNomJ.js";import"./chevron-up-DL4ATUq1.js";import"./chevron-down-Bn4ZfVbM.js";import"./cross-B13Y_yM6.js";import"./PdfViewerSidebar-CF7mec2W.js";import"./index-DktHhzQs.js";import"./index-PMXb-wuA.js";import"./index-DpzlvyBx.js";import"./PdfViewerToolbar-GQQKdGre.js";import"./Button-oU3-hekz.js";import"./chevron-right-uWafKmMB.js";import"./Input-CVgaaiBC.js";import"./search-Dwv2h1CQ.js";import"./spin-CCEN_STG.js";import"./error-BXs3tL6Z.js";import"./withOsdkMetrics-pTfsj7aC.js";import"./makeExternalStore-BhuLMaNX.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
