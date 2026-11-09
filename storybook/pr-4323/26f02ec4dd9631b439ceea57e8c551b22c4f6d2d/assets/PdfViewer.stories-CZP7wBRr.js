import{j as r,M as s}from"./iframe-D4P7etlB.js";import{P as p}from"./pdf-viewer-D4wNLWCo.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DH3j10yD.js";import"./preload-helper-C2lPWNQK.js";import"./PdfViewer-B-q_g5aV.js";import"./index--jClFyuO.js";import"./BasePdfViewer-C5IcTsDM.js";import"./BasePdfViewer.module.css-C5kyNEx4.js";import"./PdfViewerAnnotationLayer-hyXOc8wg.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BNMCYCej.js";import"./PdfViewerOutlineSidebar-DZtcqWHN.js";import"./PdfViewerSidebarHeader-CCUP9oYl.js";import"./useBaseUiId-DvebyHll.js";import"./useControlled-Bt7GOIrD.js";import"./CompositeRoot-DF6AjUpi.js";import"./CompositeItem-Ca01-11J.js";import"./ToolbarRootContext-BJaSUWck.js";import"./composite-EmCbbtLr.js";import"./svgIconContainer-U5WzETGn.js";import"./PdfViewerSearchBar-a6XnklwN.js";import"./chevron-up-C2KJQHoa.js";import"./chevron-down-6L8qWnzl.js";import"./cross-2BDiF0Hd.js";import"./PdfViewerSidebar-D4uL6N47.js";import"./index-C2PCEa1N.js";import"./index-CryUHWua.js";import"./index-CwQjgJZY.js";import"./PdfViewerToolbar-CrCFIln_.js";import"./Button-DSmwZlqW.js";import"./chevron-right-nw2YE6Ge.js";import"./Input-qm2XT5j9.js";import"./search-BeidNAh3.js";import"./spin-DDS5VNY5.js";import"./error-BEbiBzi3.js";import"./withOsdkMetrics-DllWQK_5.js";import"./makeExternalStore-B40swsdd.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
