import{j as r,M as s}from"./iframe-C-TWQ9Dj.js";import{P as p}from"./pdf-viewer-DL5KIp0G.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DBUUYZFT.js";import"./preload-helper-SRiQ6y29.js";import"./PdfViewer-CEyUl4hy.js";import"./index-PmPY8NSw.js";import"./BasePdfViewer-BI2gynsi.js";import"./BasePdfViewer.module.css-CpAJRB7d.js";import"./PdfViewerAnnotationLayer-C5J2Dqgg.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BuisHpR_.js";import"./PdfViewerOutlineSidebar-DCbBgCZE.js";import"./PdfViewerSidebarHeader-CfVjy6KS.js";import"./useBaseUiId-C7aOOgXJ.js";import"./useControlled-CySHXj1X.js";import"./CompositeRoot-BO5byAO0.js";import"./CompositeItem-Dko6wR9I.js";import"./ToolbarRootContext-C8QhLNp3.js";import"./composite-D--SIj9q.js";import"./svgIconContainer-lMlNb8_m.js";import"./PdfViewerSearchBar-nR8gM5gF.js";import"./chevron-up-Sqfpy2Po.js";import"./chevron-down-gXZSSvnY.js";import"./cross-BVZ0tu48.js";import"./PdfViewerSidebar-B-FAAQOD.js";import"./index-CEKrq0xG.js";import"./index--LBhfvhY.js";import"./index-Dii1cflf.js";import"./PdfViewerToolbar-9OdgvODE.js";import"./Button-CBan_F_X.js";import"./chevron-right-BLjxC1ou.js";import"./Input-C724ccD9.js";import"./search-CPuRKLWN.js";import"./spin-Ckr6R6Hw.js";import"./error-C4q3M3Sg.js";import"./withOsdkMetrics-DIyUXY1U.js";import"./makeExternalStore-Lt703n6D.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
