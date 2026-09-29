import{j as r,M as s}from"./iframe-BDrYxAnj.js";import{P as p}from"./pdf-viewer-Bb-QpIsh.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-RPfP-IH9.js";import"./preload-helper-BbEpp3I7.js";import"./PdfViewer-BrrOrI_q.js";import"./index-BPEebEts.js";import"./BasePdfViewer-CAtnKpwc.js";import"./BasePdfViewer.module.css-843t6O9F.js";import"./PdfViewerAnnotationLayer-DYDl40rG.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BIjhMJxS.js";import"./PdfViewerOutlineSidebar-WVBs3Nsk.js";import"./PdfViewerSidebarHeader-BMtMp4jA.js";import"./useBaseUiId-CAXuqLAY.js";import"./useControlled-BxTCkN_B.js";import"./CompositeRoot-DZSZG_eB.js";import"./CompositeItem-Bmk8s39S.js";import"./ToolbarRootContext-GKsQXXvO.js";import"./composite-DYyfkGU2.js";import"./svgIconContainer-Ds5xgQa8.js";import"./PdfViewerSearchBar-CgnVKetr.js";import"./chevron-up-DvvDuSOP.js";import"./chevron-down-DSLDVHXx.js";import"./cross-DN7w6x3L.js";import"./PdfViewerSidebar-BqWRquz4.js";import"./index-5OHDQhQD.js";import"./index-BrKxc1O3.js";import"./index-7qmIIDvp.js";import"./PdfViewerToolbar-BoPaVApJ.js";import"./Button-BXNKdTW4.js";import"./chevron-right-CHiS3KBb.js";import"./Input-C01z3l8s.js";import"./search-bZxTGR19.js";import"./spin-VDHpKJWg.js";import"./error-Bic94l6Q.js";import"./withOsdkMetrics-O05I0Pm6.js";import"./makeExternalStore-BknbLg4s.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
