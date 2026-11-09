import{j as r,M as s}from"./iframe-CvQ7w9cm.js";import{P as p}from"./pdf-viewer-ClEVKmCx.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Ecw7orNh.js";import"./preload-helper-DQXfiblR.js";import"./PdfViewer-C6hNauKf.js";import"./index-2iDqrev3.js";import"./BasePdfViewer-B4gVIY6d.js";import"./BasePdfViewer.module.css-W_HjhKXg.js";import"./PdfViewerAnnotationLayer-pCwCDqHI.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BUMGJzOx.js";import"./PdfViewerOutlineSidebar-mJhnTza0.js";import"./PdfViewerSidebarHeader-CC5ThcTZ.js";import"./useBaseUiId-Dm6kpRCs.js";import"./useControlled-D1WZsU2S.js";import"./CompositeRoot-DNGKXjyy.js";import"./CompositeItem-BhDBjBvE.js";import"./ToolbarRootContext-DjbW4ahc.js";import"./composite-BwPwzWwu.js";import"./svgIconContainer-DN6Jj3b-.js";import"./PdfViewerSearchBar-gSRlNZw3.js";import"./chevron-up-CnOWiwR0.js";import"./chevron-down-CVrOZp8I.js";import"./cross-xNEqMC60.js";import"./PdfViewerSidebar-BHQStQNA.js";import"./index-F4qb8FGJ.js";import"./index-Ban7KgTd.js";import"./index-DRIyOfaO.js";import"./PdfViewerToolbar-CODcPoDm.js";import"./Button-Cq3u6MOe.js";import"./chevron-right-g5RwPUdT.js";import"./Input-DHzSCAAb.js";import"./search-D1f6LLc_.js";import"./spin-C7ZiOQls.js";import"./error-S-GP8zQ9.js";import"./withOsdkMetrics-YRpFiv4w.js";import"./makeExternalStore-BQ0wnuzx.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
