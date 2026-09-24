import{j as r,M as s}from"./iframe-CWCaAWug.js";import{P as p}from"./pdf-viewer-C6TCuVkb.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BdDmnpEf.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfViewer-BTfLMg8Q.js";import"./index-BCUxEitH.js";import"./BasePdfViewer-ClfEumE8.js";import"./BasePdfViewer.module.css-BCPGj4GS.js";import"./PdfViewerAnnotationLayer-qUbU0GYS.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DV0IG4rG.js";import"./PdfViewerOutlineSidebar-DCU7Wo8Q.js";import"./PdfViewerSidebarHeader-DK4nXTnW.js";import"./useBaseUiId-BW_UtI62.js";import"./useControlled-BTf1PsUt.js";import"./CompositeRoot-DknMpM42.js";import"./CompositeItem-DoJwIv2T.js";import"./ToolbarRootContext-BlDQXh6V.js";import"./composite-BR9g6bcx.js";import"./svgIconContainer-B05glsOt.js";import"./PdfViewerSearchBar-Cf49BSuH.js";import"./chevron-up-BeKF6Tqk.js";import"./chevron-down-TdN2wngs.js";import"./cross-DIjpr0JB.js";import"./PdfViewerSidebar-pHc2zcLO.js";import"./index-BctpQ9zM.js";import"./index-BWfbtsx7.js";import"./index-j1R37CPf.js";import"./PdfViewerToolbar-BovDbRPy.js";import"./Button-DiqPmqG4.js";import"./chevron-right-pxQ1eugn.js";import"./Input-BfCxIW-2.js";import"./search-CqQdgI04.js";import"./spin-Dk-9py9u.js";import"./error-B3tx7_Th.js";import"./withOsdkMetrics-IvetZHLX.js";import"./makeExternalStore-DuyB91Wg.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
