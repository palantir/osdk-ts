import{j as r,M as s}from"./iframe-C4UMSUV8.js";import{P as p}from"./pdf-viewer-3rtsWeIU.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BCXiHzDo.js";import"./preload-helper-BqsIy_YL.js";import"./PdfViewer-DIXiNTO1.js";import"./index-Dlv7asCS.js";import"./BasePdfViewer-iga0fp3v.js";import"./BasePdfViewer.module.css-Ak3nPOuj.js";import"./PdfViewerAnnotationLayer-Ch_N3FcB.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-ClUew2zN.js";import"./PdfViewerOutlineSidebar-RxL3lDwr.js";import"./PdfViewerSidebarHeader-Cm_hUtvl.js";import"./useBaseUiId-BfnaHgsG.js";import"./useControlled-DaMNSDAG.js";import"./CompositeRoot-BWiYgqjG.js";import"./CompositeItem-DdxiUYfL.js";import"./ToolbarRootContext-DVOP2BC1.js";import"./composite-BaqTaPKU.js";import"./svgIconContainer-AOO7GD-s.js";import"./PdfViewerSearchBar-SvNYbmRl.js";import"./chevron-up-I5wkW0rm.js";import"./chevron-down-OaulZx0F.js";import"./cross-DzO2_pjl.js";import"./PdfViewerSidebar-8ig9blke.js";import"./index-BlMVnv-1.js";import"./index-Dm12TBSV.js";import"./index-DMrzx1Mz.js";import"./PdfViewerToolbar-BS8IU3IK.js";import"./Button-3fs9_LlW.js";import"./chevron-right-C-zrQz2s.js";import"./Input-Dd7hmS3r.js";import"./search-D1rWsfme.js";import"./spin-D0jhQAV7.js";import"./error-Dz-jjHSU.js";import"./withOsdkMetrics-DT43r1D8.js";import"./makeExternalStore-CmEuGlMk.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
