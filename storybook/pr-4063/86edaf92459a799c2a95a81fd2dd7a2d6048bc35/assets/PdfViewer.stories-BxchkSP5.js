import{j as r,M as s}from"./iframe-3pBmeYFT.js";import{P as p}from"./pdf-viewer-8_Cpw7Be.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CoXfJCFF.js";import"./preload-helper-vBjj0fkZ.js";import"./PdfViewer-CHeYtT22.js";import"./index-HXkjhg6z.js";import"./BasePdfViewer-BaElwpco.js";import"./BasePdfViewer.module.css-CK860-zJ.js";import"./PdfViewerAnnotationLayer-CiX54pZJ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-hzb7GZkb.js";import"./PdfViewerOutlineSidebar-7FbIpiXk.js";import"./PdfViewerSidebarHeader-Cz5M8PHm.js";import"./useBaseUiId-BX_7JiSc.js";import"./useControlled-MqJ_-6UI.js";import"./CompositeRoot-CNMgY8gW.js";import"./CompositeItem-BAzi-4_X.js";import"./ToolbarRootContext-BROspXHg.js";import"./composite-D407pmHd.js";import"./svgIconContainer-oYexr0c7.js";import"./PdfViewerSearchBar-DxEI4-C0.js";import"./chevron-up-DAQKOLvL.js";import"./chevron-down-CPXZLq0t.js";import"./cross-Cw8SpRPo.js";import"./PdfViewerSidebar-qfPcQlLn.js";import"./index-C-EOv5jG.js";import"./index-C4p6xkMh.js";import"./index-EVh21tlW.js";import"./PdfViewerToolbar-CUk4mDyi.js";import"./Button-DVJw32Da.js";import"./chevron-right-BDF-_aSR.js";import"./Input-BQ6oicvc.js";import"./search-CQOti8kz.js";import"./spin-BdD-eT-2.js";import"./error-oFoemtYn.js";import"./withOsdkMetrics-CZjqmY54.js";import"./makeExternalStore-B9tQcCLS.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
