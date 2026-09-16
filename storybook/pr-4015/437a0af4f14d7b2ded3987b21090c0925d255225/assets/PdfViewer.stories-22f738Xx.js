import{j as r,M as s}from"./iframe-I5kvh-Kw.js";import{P as p}from"./pdf-viewer-BpqyYYK4.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-fCu2hI0c.js";import"./preload-helper-Bdf318pV.js";import"./PdfViewer-BorJdPMS.js";import"./index-HKnhZxyX.js";import"./BasePdfViewer-D2UF8sdI.js";import"./BasePdfViewer.module.css-vzadRZwz.js";import"./PdfViewerAnnotationLayer-g-01qb-X.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DnfEo_go.js";import"./PdfViewerOutlineSidebar-CAROzcKI.js";import"./PdfViewerSidebarHeader-DkNa-waf.js";import"./useBaseUiId-BejWRuZ2.js";import"./useControlled-B-k81KQz.js";import"./CompositeRoot-DP-SsOcP.js";import"./CompositeItem-Ck73puur.js";import"./ToolbarRootContext-BpC1haoE.js";import"./composite-DzvS9mVY.js";import"./svgIconContainer-DDPN3ss8.js";import"./PdfViewerSearchBar-B0tcZJgN.js";import"./chevron-up-7ANrVMQo.js";import"./chevron-down-BWVLfJxG.js";import"./cross-Yl6g30y6.js";import"./PdfViewerSidebar-C-cBopyM.js";import"./index-BYHjFf0T.js";import"./index-BV_M3ZY7.js";import"./index-B3JolPJS.js";import"./PdfViewerToolbar-AIPS9NT9.js";import"./Button-B2DkfEqk.js";import"./chevron-right-CE6rpQoJ.js";import"./Input-GvrpBokI.js";import"./search-C9rUiq_s.js";import"./spin-DgyecEEp.js";import"./error-Dywin3-5.js";import"./withOsdkMetrics-CldLsQ2u.js";import"./makeExternalStore-CUhQIJ-n.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
