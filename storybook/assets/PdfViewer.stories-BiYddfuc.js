import{j as r,M as s}from"./iframe-Dk0apQWL.js";import{P as p}from"./pdf-viewer-BNHX63bn.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DfLuYiVj.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfViewer-Cf5g5h2G.js";import"./index-BB76_vsP.js";import"./BasePdfViewer-B5sk2_k-.js";import"./BasePdfViewer.module.css-CMk1f9Ue.js";import"./PdfViewerAnnotationLayer-CwDF3bEw.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B296IzfV.js";import"./PdfViewerOutlineSidebar-BybYRPLt.js";import"./PdfViewerSidebarHeader-DeK_PpFG.js";import"./useBaseUiId-DQQ7To9Z.js";import"./useControlled-BoHpDSdR.js";import"./CompositeRoot-CKIYjpf5.js";import"./CompositeItem-C2KsOfaA.js";import"./ToolbarRootContext-Cfg54QU-.js";import"./composite-Cbj8LV8T.js";import"./svgIconContainer-BwfkG_x4.js";import"./PdfViewerSearchBar-CkGD4dD4.js";import"./chevron-up-DpOwjUJM.js";import"./chevron-down-BDsXaIBN.js";import"./cross-mMEGpaf9.js";import"./PdfViewerSidebar-cLmi3mXg.js";import"./index-C72SMcb2.js";import"./index-Dw8JwmE5.js";import"./index-D4wGw7f5.js";import"./PdfViewerToolbar-BHmy6_vk.js";import"./Button-cnivFiIY.js";import"./chevron-right-BhZmxYxw.js";import"./Input-BWvGoQIW.js";import"./search-DeE9hnrl.js";import"./spin-BjUIUU7b.js";import"./error-gPnUZGMu.js";import"./withOsdkMetrics-Bwt22oAD.js";import"./makeExternalStore-hT_U_1se.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
