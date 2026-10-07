import{j as r,M as s}from"./iframe-BzHLIdAf.js";import{P as p}from"./pdf-viewer-CRAXGTtU.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-ClUk98yp.js";import"./preload-helper-C5EK4nFx.js";import"./PdfViewer-DIkNuqIK.js";import"./index-tkfEcbGy.js";import"./BasePdfViewer-DDPyeThs.js";import"./BasePdfViewer.module.css-C1USmJIR.js";import"./PdfViewerAnnotationLayer-CyS-z40C.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CY_Pm9KY.js";import"./PdfViewerOutlineSidebar-CKibcBei.js";import"./PdfViewerSidebarHeader-XZAXy1Sx.js";import"./useBaseUiId-DulnEBx2.js";import"./useControlled-BUD4_K19.js";import"./CompositeRoot-CjXegX49.js";import"./CompositeItem-DoI0Nlr7.js";import"./ToolbarRootContext-DfZ85ISE.js";import"./composite-C-vnMrHU.js";import"./svgIconContainer-yN9N03QS.js";import"./PdfViewerSearchBar-CNv9sInF.js";import"./chevron-up-CwvYcK9B.js";import"./chevron-down-C3-VW8uJ.js";import"./cross-DFzeXQKN.js";import"./PdfViewerSidebar-Dji1HJLN.js";import"./index-CNDpcyk6.js";import"./index-BTFfBOqo.js";import"./index-B3AMqERT.js";import"./PdfViewerToolbar-Dr4W4F7H.js";import"./Button-oOxpuNBl.js";import"./chevron-right-C5YoXKL-.js";import"./Input-DD8tFxDd.js";import"./search-BBdM6dRe.js";import"./spin-RwybSLfr.js";import"./error-DnjCL8vD.js";import"./withOsdkMetrics-C6AsUlOu.js";import"./makeExternalStore-CzyuozHX.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
