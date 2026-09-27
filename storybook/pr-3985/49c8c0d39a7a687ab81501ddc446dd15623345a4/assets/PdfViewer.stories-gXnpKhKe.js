import{j as r,M as s}from"./iframe-BjMPQmdZ.js";import{P as p}from"./pdf-viewer-B11WViZg.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CSbRzh7g.js";import"./preload-helper-B8Ak4a51.js";import"./PdfViewer-pjl75h-3.js";import"./index-oZX62iJS.js";import"./BasePdfViewer-C9rJCvM3.js";import"./BasePdfViewer.module.css-DubpB-Qc.js";import"./PdfViewerAnnotationLayer-BR_1DS17.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dh3Ht-j8.js";import"./PdfViewerOutlineSidebar-CPW4022N.js";import"./PdfViewerSidebarHeader-CmHM0rhM.js";import"./useBaseUiId-D8cmXz0j.js";import"./useControlled-DmP1tMz2.js";import"./CompositeRoot-C3UYeWyY.js";import"./CompositeItem-ejF_MhIC.js";import"./ToolbarRootContext-BJ3LM2Fu.js";import"./composite-CSAWSVfE.js";import"./svgIconContainer-Dwz9d1MN.js";import"./PdfViewerSearchBar-KiudKgKu.js";import"./chevron-up-Db5MztaK.js";import"./chevron-down-IIBkH-oY.js";import"./cross-JpXN3sJS.js";import"./PdfViewerSidebar-DiU9I1JY.js";import"./index-4XbIxfFx.js";import"./index-D9GWSad1.js";import"./index-DtER7TIS.js";import"./PdfViewerToolbar-Cy4DEI2T.js";import"./Button-CZzc-gIr.js";import"./chevron-right-CozP-wxC.js";import"./Input-D7HYNJJj.js";import"./search-D6_fqh0V.js";import"./spin-BF1EzJPc.js";import"./error-BP2V_PLi.js";import"./withOsdkMetrics-DcvRTKGS.js";import"./makeExternalStore-B8EVnW0L.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
