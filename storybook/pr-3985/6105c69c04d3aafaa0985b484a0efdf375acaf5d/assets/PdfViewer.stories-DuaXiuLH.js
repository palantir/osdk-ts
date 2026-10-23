import{j as r,M as s}from"./iframe-D07nCh-w.js";import{P as p}from"./pdf-viewer-7_VZ4rQw.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BrgxHC4b.js";import"./preload-helper-CmcD2_D_.js";import"./PdfViewer-CDkRp3P4.js";import"./index-BuDZJHpF.js";import"./BasePdfViewer-oSmYCqmE.js";import"./BasePdfViewer.module.css-Dm0WdGmC.js";import"./PdfViewerAnnotationLayer-DjQj7ttm.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D8mMDuWT.js";import"./PdfViewerOutlineSidebar-9oPhtvae.js";import"./PdfViewerSidebarHeader-BYx1vGZA.js";import"./useBaseUiId-psA3q1id.js";import"./useControlled-CXqQNY_F.js";import"./CompositeRoot-DJ0tY9Cs.js";import"./CompositeItem-Br0cx3Iq.js";import"./ToolbarRootContext-DqdX595l.js";import"./composite-C9jYcXJr.js";import"./svgIconContainer-PtRD7k8A.js";import"./PdfViewerSearchBar-D-IN9zYo.js";import"./chevron-up-uIPDCvf4.js";import"./chevron-down-dIbn2_mD.js";import"./cross-CTO9sPn-.js";import"./PdfViewerSidebar-CDB-tQWu.js";import"./index-a0NtOl0y.js";import"./index-BIjdr9-z.js";import"./index-BrNSxG5V.js";import"./PdfViewerToolbar-C213f-iY.js";import"./Button-DEuGu2m_.js";import"./chevron-right-ChCG4MaV.js";import"./Input-98CZZbi3.js";import"./search-CytW_RDV.js";import"./spin-CH2u-C8a.js";import"./error-ByDyMI-d.js";import"./withOsdkMetrics-BiT0eK7g.js";import"./makeExternalStore-D0hTV5Nv.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
