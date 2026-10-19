import{j as r,M as s}from"./iframe-Dcbb45TM.js";import{P as p}from"./pdf-viewer-CYuFN4EF.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-TN2xgzo6.js";import"./preload-helper-D8JM7gnw.js";import"./PdfViewer-BLtmO5jM.js";import"./index-BP3mGvIi.js";import"./BasePdfViewer-CjquG2Vi.js";import"./BasePdfViewer.module.css-exJkvJ8V.js";import"./PdfViewerAnnotationLayer-BKkPBqVn.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BE_XdJcG.js";import"./PdfViewerOutlineSidebar-De3UsHFz.js";import"./PdfViewerSidebarHeader-DYRpWmvU.js";import"./useBaseUiId-KvLNO8W4.js";import"./useControlled-Da1fb4mu.js";import"./CompositeRoot-DVsnHDkI.js";import"./CompositeItem-1Mp7uRya.js";import"./ToolbarRootContext-CgWzIiHM.js";import"./composite-BIYviI6v.js";import"./svgIconContainer-C653aYE0.js";import"./PdfViewerSearchBar-DS0tATtD.js";import"./chevron-up-CIfC59-P.js";import"./chevron-down-B67Z7lxm.js";import"./cross-CFg2OY8m.js";import"./PdfViewerSidebar-8inAKOTg.js";import"./index-Dqy8Ou-s.js";import"./index-LAjudTQg.js";import"./index-DPou_tLy.js";import"./PdfViewerToolbar-D_Vzkv5S.js";import"./Button-Bfb_bO0G.js";import"./chevron-right-CHQwRfJl.js";import"./Input-DKG4JtdJ.js";import"./search-8-lHNRta.js";import"./spin-nUphxVQx.js";import"./error-DGuxoAox.js";import"./withOsdkMetrics-BnTsjsNt.js";import"./makeExternalStore-Dm_3NQPJ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
