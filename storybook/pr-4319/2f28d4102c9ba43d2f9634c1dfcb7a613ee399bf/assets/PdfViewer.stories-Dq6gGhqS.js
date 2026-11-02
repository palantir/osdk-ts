import{j as r,M as s}from"./iframe-BrffKLyp.js";import{P as p}from"./pdf-viewer-h_-_KbRB.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-ClkTdfaZ.js";import"./preload-helper-BB6iUnWm.js";import"./PdfViewer-v2Bkvvu5.js";import"./index-DdTg6oKw.js";import"./BasePdfViewer-D8rOP9ji.js";import"./BasePdfViewer.module.css-w3n7xFt8.js";import"./PdfViewerAnnotationLayer-BX7B1DVP.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B9kbGy6r.js";import"./PdfViewerOutlineSidebar-Dx0GE3IX.js";import"./PdfViewerSidebarHeader-BWjefAYE.js";import"./useBaseUiId-OXag9z4A.js";import"./useControlled-ByoWnUuY.js";import"./CompositeRoot-D7UWMgY7.js";import"./CompositeItem-BfleHTK8.js";import"./ToolbarRootContext-B5DfTbi7.js";import"./composite-B19juyCu.js";import"./svgIconContainer-dbsVi0_7.js";import"./PdfViewerSearchBar-DaKjIeCs.js";import"./chevron-up-DXoCNCBM.js";import"./chevron-down-BEFoIyYv.js";import"./cross-Dp6LnhT2.js";import"./PdfViewerSidebar-DO6sDIX1.js";import"./index-YnTFldk0.js";import"./index-BY-yZOS1.js";import"./index-BNYKUSid.js";import"./PdfViewerToolbar-CG3xE6Fq.js";import"./Button-BBZWD59x.js";import"./chevron-right-BHPGz79_.js";import"./Input-D50y4-4d.js";import"./search-DpKU3GOV.js";import"./spin-BPMPYerz.js";import"./error-y0lQ0i5v.js";import"./withOsdkMetrics-rbdPxHeN.js";import"./makeExternalStore-DG5GHaRJ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
