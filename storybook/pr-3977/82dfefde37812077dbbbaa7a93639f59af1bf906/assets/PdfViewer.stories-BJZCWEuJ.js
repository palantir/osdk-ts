import{j as r,M as s}from"./iframe-BjnXfZ9H.js";import{P as p}from"./pdf-viewer-CdJPs3Tm.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-9NTc_KhL.js";import"./preload-helper-bepxIrLy.js";import"./PdfViewer-Bs7Syf9g.js";import"./index-BelFyW9j.js";import"./BasePdfViewer-Bk9G0Gsy.js";import"./BasePdfViewer.module.css-D3LsN83-.js";import"./PdfViewerAnnotationLayer-Lrd_DzIh.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-9q3yFhoj.js";import"./PdfViewerOutlineSidebar-NBkA7Wpf.js";import"./PdfViewerSidebarHeader-VeIQQ5k_.js";import"./useBaseUiId--nXvl9pb.js";import"./useControlled-30IDLW3T.js";import"./CompositeRoot-Djh9YnPA.js";import"./CompositeItem-DVl86_s7.js";import"./ToolbarRootContext-Dapwrg0X.js";import"./composite-CmHNarO8.js";import"./svgIconContainer-CwvuHzUD.js";import"./PdfViewerSearchBar-IxNZGHfP.js";import"./chevron-up-DsjO8iRj.js";import"./chevron-down-C_lHJsgk.js";import"./cross-Ca4hBGJI.js";import"./PdfViewerSidebar-BvTcofRl.js";import"./index-C3tw8knN.js";import"./index-B42gKKnv.js";import"./index-BA9yDYNK.js";import"./PdfViewerToolbar-BdHKowoL.js";import"./Button-87n6zTQD.js";import"./chevron-right-muJaTNtG.js";import"./Input-DOBVQBLE.js";import"./search-4U4uPWIz.js";import"./spin-vrSDzm81.js";import"./error-B6h0Ljte.js";import"./withOsdkMetrics-9hdMnSaG.js";import"./makeExternalStore-C1Xa5Pr9.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
