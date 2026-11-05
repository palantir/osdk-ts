import{j as r,M as s}from"./iframe-BGZow3KJ.js";import{P as p}from"./pdf-viewer-CR7spcCU.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BD6eUKXE.js";import"./preload-helper-CV0-5wxc.js";import"./PdfViewer-CJCRuVrF.js";import"./index-BDJbf4mz.js";import"./BasePdfViewer-rdMJU4kr.js";import"./BasePdfViewer.module.css-DEgI0ssU.js";import"./PdfViewerAnnotationLayer-Ic7M3gy4.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CvtBHVEq.js";import"./PdfViewerOutlineSidebar-DszAO5Un.js";import"./PdfViewerSidebarHeader-C3fR1Sa-.js";import"./useBaseUiId-BlZeP_kj.js";import"./useControlled-C-Ujr0_X.js";import"./CompositeRoot-BiZixX6A.js";import"./CompositeItem-BUIK-kSM.js";import"./ToolbarRootContext-CqO-yoJp.js";import"./composite-CN_PLOWp.js";import"./svgIconContainer-GlJoQzna.js";import"./PdfViewerSearchBar-BnE7bpV8.js";import"./chevron-up-BhsxBA7H.js";import"./chevron-down-4eRxImwL.js";import"./cross-Dn--TE22.js";import"./PdfViewerSidebar-8qDA0BGH.js";import"./index-D9ncN4SR.js";import"./index-BuHLiRGy.js";import"./index-C3aV2ZJb.js";import"./PdfViewerToolbar-6Ztrn-4k.js";import"./Button-B8_EYdXY.js";import"./chevron-right-DA-dtMyX.js";import"./Input-BSDEuHVc.js";import"./search-xttomfsG.js";import"./spin-CTWCRRlF.js";import"./error-C57Ogh7g.js";import"./withOsdkMetrics-D6t-dwVR.js";import"./makeExternalStore-C3raoZ1p.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
