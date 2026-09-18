import{j as r,M as s}from"./iframe-BDa8Fqup.js";import{P as p}from"./pdf-viewer-C8WFR_Rj.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BkKevoxW.js";import"./preload-helper-C9_zurnG.js";import"./PdfViewer-CKaQJM_0.js";import"./index-pjqeNj_i.js";import"./BasePdfViewer-CoVMEj23.js";import"./BasePdfViewer.module.css-DnryaTI3.js";import"./PdfViewerAnnotationLayer-CxXDeXVd.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CL1jZc62.js";import"./PdfViewerOutlineSidebar-B0JTf5bv.js";import"./PdfViewerSidebarHeader-C3Wpucys.js";import"./useBaseUiId-XTCdzLB-.js";import"./useControlled-C8kqLhB2.js";import"./CompositeRoot-FW-11geX.js";import"./CompositeItem-CxqNqspP.js";import"./ToolbarRootContext-bJCZq9fk.js";import"./composite-DOKDZZ1y.js";import"./svgIconContainer-DdVraw0H.js";import"./PdfViewerSearchBar-BuzJlkKW.js";import"./chevron-up-BgbPZoMo.js";import"./chevron-down-XbIjVc8V.js";import"./cross-CptJAf1F.js";import"./PdfViewerSidebar-BQkqxzQj.js";import"./index-CO6Kit7T.js";import"./index-DR8p4qUn.js";import"./index-DCtmNJWH.js";import"./PdfViewerToolbar-BphUad10.js";import"./Button-By4eZEsF.js";import"./chevron-right-Chh4A08O.js";import"./Input-mz3axp_m.js";import"./search-DMOASIyP.js";import"./spin-BSAHiavj.js";import"./error-DaHq0ZVm.js";import"./withOsdkMetrics-VckxLh6W.js";import"./makeExternalStore-CrFgIlYD.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
