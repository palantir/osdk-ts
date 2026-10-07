import{j as r,M as s}from"./iframe-DFY8VJiA.js";import{P as p}from"./pdf-viewer-CBubBad8.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C5GoKwGn.js";import"./preload-helper-DYQPoB0a.js";import"./PdfViewer-DHjjy49G.js";import"./index-Cyh0BAGo.js";import"./BasePdfViewer-Cho-Sdxe.js";import"./BasePdfViewer.module.css-CQ_9yG32.js";import"./PdfViewerAnnotationLayer-CNFWjMFY.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cxx-VyF-.js";import"./PdfViewerOutlineSidebar-BzYaKTnK.js";import"./PdfViewerSidebarHeader-Ddk3yjpE.js";import"./useBaseUiId-munBw4hb.js";import"./useControlled-DlDk3rjW.js";import"./CompositeRoot-BIdCaiM_.js";import"./CompositeItem-DHHY_NUU.js";import"./ToolbarRootContext-C-PsSYTx.js";import"./composite-DERqHqf8.js";import"./svgIconContainer-BC0JvcAN.js";import"./PdfViewerSearchBar-CzX5QL6d.js";import"./chevron-up-CNM2w3h5.js";import"./chevron-down-C0e9hGKt.js";import"./cross-DhwePusw.js";import"./PdfViewerSidebar-DTCWv8YG.js";import"./index-CO5nCbUA.js";import"./index-CFOVWCD1.js";import"./index-DkOv0cie.js";import"./PdfViewerToolbar-cHRL0AzH.js";import"./Button-Dd-6Wm_t.js";import"./chevron-right-Ci3zb6jW.js";import"./Input-ZKaLnGto.js";import"./search-DmLazW2P.js";import"./spin-CRAuJFY_.js";import"./error-RuEwtCs3.js";import"./withOsdkMetrics-US1iMNLV.js";import"./makeExternalStore-Beeee7G7.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
