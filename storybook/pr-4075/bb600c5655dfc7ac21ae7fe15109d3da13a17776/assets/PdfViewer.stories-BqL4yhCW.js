import{j as r,M as s}from"./iframe-C23O6NDH.js";import{P as p}from"./pdf-viewer-BSa552Ld.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Dpd0xSrP.js";import"./preload-helper-C6QLezK5.js";import"./PdfViewer-BdUQpz4X.js";import"./index-X4EzQgBc.js";import"./BasePdfViewer-CGh9x2WA.js";import"./BasePdfViewer.module.css-DM3glnlp.js";import"./PdfViewerAnnotationLayer-Dx2jR7lQ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C3ANCZPH.js";import"./PdfViewerOutlineSidebar-CVbi6rdJ.js";import"./PdfViewerSidebarHeader-ji4r3MU3.js";import"./useBaseUiId-Dfg7k-g6.js";import"./useControlled-nFjFO6Es.js";import"./CompositeRoot-6PkP2U4N.js";import"./CompositeItem-MVk24y7z.js";import"./ToolbarRootContext-CCDSBvgO.js";import"./composite-BUM50nEL.js";import"./svgIconContainer-CspjXoBM.js";import"./PdfViewerSearchBar-Bsv2TVrr.js";import"./chevron-up-BE5pmvVV.js";import"./chevron-down-BjdzvOWL.js";import"./cross-PRFvDACG.js";import"./PdfViewerSidebar-C2Vh76pe.js";import"./index-BGnkTDfz.js";import"./index-CHGHLDNb.js";import"./index-CBgO55BO.js";import"./PdfViewerToolbar-BTZkSGsd.js";import"./Button-jRCHNGhX.js";import"./chevron-right-C2P_zHQ0.js";import"./Input-Cu2UirtN.js";import"./search-Bu-mkKdB.js";import"./spin-D_4ShcUm.js";import"./error-OxS9nPVJ.js";import"./withOsdkMetrics-B-NwsNBy.js";import"./makeExternalStore-B3L7DbLk.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
