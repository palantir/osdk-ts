import{j as r,M as s}from"./iframe-Ee2tiFng.js";import{P as p}from"./pdf-viewer-DKLWOLYK.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D6x00ohW.js";import"./preload-helper-CtRzgCKY.js";import"./PdfViewer-Bfamghzg.js";import"./index-BycdD30l.js";import"./BasePdfViewer-DK3T87Oo.js";import"./BasePdfViewer.module.css-DQmjbFfo.js";import"./PdfViewerAnnotationLayer-Dwkjr6RB.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CCuGMO7N.js";import"./PdfViewerOutlineSidebar-u-mGwRCd.js";import"./PdfViewerSidebarHeader-CNVANn84.js";import"./useBaseUiId-Be0iYuTZ.js";import"./useControlled-BncLGICw.js";import"./CompositeRoot-BAu7qMLr.js";import"./CompositeItem-CLuGmXNA.js";import"./ToolbarRootContext-DJCzTPIr.js";import"./composite-DV6J8ilo.js";import"./svgIconContainer-DBeRHNA7.js";import"./PdfViewerSearchBar-CnisBCf3.js";import"./chevron-up-abKIDFMi.js";import"./chevron-down-CvL73yqq.js";import"./cross-Brhn2tbY.js";import"./PdfViewerSidebar-CGgen8YV.js";import"./index-DKxbLgfs.js";import"./index-JJBCSCXl.js";import"./index-BedpPbbM.js";import"./PdfViewerToolbar-tmEBRln_.js";import"./Button-CwIbjmyl.js";import"./chevron-right-uUb6fWcB.js";import"./Input-QNUgM8xD.js";import"./search-CiSU3HM-.js";import"./spin-CO2LPTuF.js";import"./error-DM4M2_Dk.js";import"./withOsdkMetrics-D0H1MUTi.js";import"./makeExternalStore-BrNx43tP.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
