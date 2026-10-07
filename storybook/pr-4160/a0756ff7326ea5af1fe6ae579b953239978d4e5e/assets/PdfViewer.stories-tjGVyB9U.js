import{j as r,M as s}from"./iframe-BMLtitQA.js";import{P as p}from"./pdf-viewer-LE1AGbVX.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B5Oy_UdF.js";import"./preload-helper-B7zvwNzg.js";import"./PdfViewer-Dr4Oxadf.js";import"./index-BKoaBi8s.js";import"./BasePdfViewer-B62Sdqmg.js";import"./BasePdfViewer.module.css-BTIi6Omp.js";import"./PdfViewerAnnotationLayer-C7_NxUz7.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DkE610W8.js";import"./PdfViewerOutlineSidebar-DrZp7oaR.js";import"./PdfViewerSidebarHeader-KbydxlhY.js";import"./useBaseUiId-Bv7ijZL9.js";import"./useControlled-BSRFoePA.js";import"./CompositeRoot-CdNOM7Hm.js";import"./CompositeItem-FfLXXCMg.js";import"./ToolbarRootContext-C3i3QER6.js";import"./composite-0pBAMAMm.js";import"./svgIconContainer-DG_uvfKl.js";import"./PdfViewerSearchBar-BvbM14Pj.js";import"./chevron-up-D0YU9iNA.js";import"./chevron-down-BmGdKwgH.js";import"./cross-B9AlOyDj.js";import"./PdfViewerSidebar-DvCNE9Hi.js";import"./index-Dq5rNNxI.js";import"./index-1wGhlHyg.js";import"./index-G040djXj.js";import"./PdfViewerToolbar-R-7qvI-i.js";import"./Button-eAAIImFA.js";import"./chevron-right-DwZ4V7P_.js";import"./Input-D3mEoBXJ.js";import"./search-CINj6xtb.js";import"./spin-Dwd9CEQd.js";import"./error-DwpvxQx3.js";import"./withOsdkMetrics-Bco6NPuI.js";import"./makeExternalStore-6yj2j-8e.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
