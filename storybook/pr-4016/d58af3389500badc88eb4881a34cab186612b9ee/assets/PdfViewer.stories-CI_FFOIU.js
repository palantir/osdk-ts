import{j as r,M as s}from"./iframe-DlB65lJW.js";import{P as p}from"./pdf-viewer-CAAXA0vJ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B1RyP-vM.js";import"./preload-helper-DV_Jg5FM.js";import"./PdfViewer-DHPULPTD.js";import"./index-B8sBGRC5.js";import"./BasePdfViewer-BMWvNSeu.js";import"./BasePdfViewer.module.css-MP1g0fU_.js";import"./PdfViewerAnnotationLayer-D38SuFAQ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cyd0OVyP.js";import"./PdfViewerOutlineSidebar-CS1stO4f.js";import"./PdfViewerSidebarHeader-Baf8JETy.js";import"./useBaseUiId-C0JAm9wS.js";import"./useControlled-CQNoni_g.js";import"./CompositeRoot-CV1MWrY1.js";import"./CompositeItem-PpZ3j7ZS.js";import"./ToolbarRootContext-BDX936Z-.js";import"./composite-CUY2PD51.js";import"./svgIconContainer-DE9YLrbK.js";import"./PdfViewerSearchBar-CHiNa1eO.js";import"./chevron-up-CLmE4ohw.js";import"./chevron-down-BHTjgyZJ.js";import"./cross-BYT-n1qT.js";import"./PdfViewerSidebar-BKayBHhh.js";import"./index-D-Hc9dUX.js";import"./index-Dk8pEk6M.js";import"./index-vvEU_kVM.js";import"./PdfViewerToolbar-DO_hZH2r.js";import"./Button-C6hVNenO.js";import"./chevron-right-BbCT-pbW.js";import"./Input-CXcuZUCe.js";import"./search-DUnv4tIx.js";import"./spin-K5Ep1epe.js";import"./error-DriOx_PR.js";import"./withOsdkMetrics-6eg3mxYV.js";import"./makeExternalStore-OTHtuU79.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
