import{j as r,M as s}from"./iframe-CzZ1CUeI.js";import{P as p}from"./pdf-viewer-5NhqaNQu.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-kJIeHgAb.js";import"./preload-helper-CKiwuCze.js";import"./PdfViewer-BR31xZrP.js";import"./index-CgrT0C-o.js";import"./BasePdfViewer-C2ajhLEE.js";import"./BasePdfViewer.module.css-DWvqhQDw.js";import"./PdfViewerAnnotationLayer-Bjzvulgb.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DJ9A3J2s.js";import"./PdfViewerOutlineSidebar-ByD3RH8J.js";import"./PdfViewerSidebarHeader-CWeHzN91.js";import"./useBaseUiId-BDfaFxEX.js";import"./useControlled-DsQHF60n.js";import"./CompositeRoot-Byc-6gMS.js";import"./CompositeItem-CIKEUP56.js";import"./ToolbarRootContext-CutVy21d.js";import"./composite-BtIW984D.js";import"./svgIconContainer-tM4UWMZ6.js";import"./PdfViewerSearchBar-DfiAEA9W.js";import"./chevron-up-C_-rE1Kh.js";import"./chevron-down-C3ryHGnx.js";import"./cross-D3n1K_EZ.js";import"./PdfViewerSidebar-CLvaIzt-.js";import"./index-C1_2t6dA.js";import"./index-BbscB5rP.js";import"./index-D9Klgxm6.js";import"./PdfViewerToolbar-CW4kUtRm.js";import"./Button-Dq-U227i.js";import"./chevron-right-WNVLLuQD.js";import"./Input-D_HiSYHG.js";import"./search-CsQMUjFR.js";import"./spin-CW2UQ-HH.js";import"./error-BfspTM5I.js";import"./withOsdkMetrics-CRmsMiCZ.js";import"./makeExternalStore-ES2aAlwo.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
