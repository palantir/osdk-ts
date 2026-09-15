import{j as r,M as s}from"./iframe-DuUcAaP1.js";import{P as p}from"./pdf-viewer-mhTy1xhA.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Bxsvjm7e.js";import"./preload-helper-Cljs7IBf.js";import"./PdfViewer-CN4JWyX0.js";import"./index-BMAxCDX5.js";import"./BasePdfViewer-C5Z7kBBz.js";import"./BasePdfViewer.module.css-BoMTSAWC.js";import"./PdfViewerAnnotationLayer-B8_yNU4I.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CbjfTuSn.js";import"./PdfViewerOutlineSidebar-z4Vt2n8K.js";import"./PdfViewerSidebarHeader-VVkAk4Z_.js";import"./useBaseUiId-CfMTCz35.js";import"./useControlled-hj_GBxd9.js";import"./CompositeRoot-BsxybYJF.js";import"./CompositeItem-t4AJuCm-.js";import"./ToolbarRootContext-USv7Hl-3.js";import"./composite-D0tirFPb.js";import"./svgIconContainer-D6Wl3-m9.js";import"./PdfViewerSearchBar-A_gCAbp2.js";import"./chevron-up-wrksAtHw.js";import"./chevron-down-DyPw48Bz.js";import"./cross-DA3pEoMX.js";import"./PdfViewerSidebar-CKlmNxFr.js";import"./index-BdrLvqg1.js";import"./index-C7wdlZ1Q.js";import"./index-C8RlHGqn.js";import"./PdfViewerToolbar-CaGDj3oE.js";import"./Button-DYK5XWRq.js";import"./chevron-right-DnDRfasm.js";import"./Input-ZBAaH2zD.js";import"./search-B301Jn8l.js";import"./spin-BRZ1-F1z.js";import"./error-CQ18bNi9.js";import"./withOsdkMetrics-C2TwiXMB.js";import"./makeExternalStore-CsrMhPRl.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
