import{j as r,M as s}from"./iframe-DIhVLHWR.js";import{P as p}from"./pdf-viewer-DH-vvvNc.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Cnleh1rH.js";import"./preload-helper-DLYQvN5u.js";import"./PdfViewer-CTd1TAor.js";import"./index-yKNrR2B4.js";import"./BasePdfViewer-CyqP8SV-.js";import"./BasePdfViewer.module.css-2zzjXlCF.js";import"./PdfViewerAnnotationLayer-B31feNvu.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CwDqirP5.js";import"./PdfViewerOutlineSidebar-BbfaHwCv.js";import"./PdfViewerSidebarHeader-CTUaGTQL.js";import"./useBaseUiId-CNPP6ho2.js";import"./useControlled-BGD6VLnv.js";import"./CompositeRoot-DqrzMnzB.js";import"./CompositeItem-oXJFfhwO.js";import"./ToolbarRootContext-DPTQ5YE4.js";import"./composite-tiXb7rK6.js";import"./svgIconContainer-D0TTrVxE.js";import"./PdfViewerSearchBar-DTMxk5fU.js";import"./chevron-up-6zlct0hU.js";import"./chevron-down-Cs6sjnv7.js";import"./cross-B1cvRkvv.js";import"./PdfViewerSidebar-CmBalvOG.js";import"./index-CbR9L2SG.js";import"./index-C5TdACSr.js";import"./index-CHn3e9nX.js";import"./PdfViewerToolbar-Cfg6z7w7.js";import"./Button-vhJFIUHZ.js";import"./chevron-right-XJtMQ-Es.js";import"./Input-BMTQDxuL.js";import"./search-Cy5B3T22.js";import"./spin-B5SuHibV.js";import"./error-BbBgUwm_.js";import"./withOsdkMetrics-Cal4vLIC.js";import"./makeExternalStore-JpSfp1kg.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
