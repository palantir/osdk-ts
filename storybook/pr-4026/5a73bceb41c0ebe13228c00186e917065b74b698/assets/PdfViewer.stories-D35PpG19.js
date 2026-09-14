import{j as r,M as s}from"./iframe-DGk-Gwvb.js";import{P as p}from"./pdf-viewer-xwSzlfbZ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CLVa3N6Y.js";import"./preload-helper-DZHE4yfF.js";import"./PdfViewer-BOrVzFgg.js";import"./index-CHt6784l.js";import"./BasePdfViewer-Ck_fjaUx.js";import"./BasePdfViewer.module.css-C8ZEkYD1.js";import"./PdfViewerAnnotationLayer-DUEdCeA-.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BHOrD1hh.js";import"./PdfViewerOutlineSidebar-iEAYs1Jm.js";import"./PdfViewerSidebarHeader-DPQGSYE_.js";import"./useBaseUiId-CYF4ttQ0.js";import"./useControlled-BLk_1CnQ.js";import"./CompositeRoot-DDgk6TJM.js";import"./CompositeItem-CaGEr3lp.js";import"./ToolbarRootContext-DYa8q61O.js";import"./composite-UKbswMLH.js";import"./svgIconContainer-DWhpBW2K.js";import"./PdfViewerSearchBar-BrZF39MT.js";import"./chevron-up-DOU89T7t.js";import"./chevron-down-F0KSYD0T.js";import"./cross-Bv56pu7B.js";import"./PdfViewerSidebar-Bxgm9PZm.js";import"./index-BDWQvtVH.js";import"./index--TUwCCTO.js";import"./index-Y3fUVY7j.js";import"./PdfViewerToolbar-DSBWo_Wg.js";import"./Button-D8mEnRQz.js";import"./chevron-right-D3vDCGxo.js";import"./Input-lpBjDH3J.js";import"./search-DuL1IKxe.js";import"./spin-CVyveTVf.js";import"./error-CNFmOPSg.js";import"./withOsdkMetrics-B38cTpqn.js";import"./makeExternalStore-DekmBIJm.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
