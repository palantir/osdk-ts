import{j as r,M as s}from"./iframe-iZnS8oEd.js";import{P as p}from"./pdf-viewer-SAYXjrQP.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CcYWasjp.js";import"./preload-helper-Bp14nz6B.js";import"./PdfViewer-DMFjo815.js";import"./index-DYpyIwVE.js";import"./BasePdfViewer-_HCOw70m.js";import"./BasePdfViewer.module.css-Bp2vpobC.js";import"./PdfViewerAnnotationLayer-CyBlUl2I.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-V9TrtIO8.js";import"./PdfViewerOutlineSidebar-C4_FzP_y.js";import"./PdfViewerSidebarHeader-Dh5pWbBX.js";import"./useBaseUiId-30R3WmkM.js";import"./useControlled-D6M_jpuK.js";import"./CompositeRoot-CANX6QIC.js";import"./CompositeItem-wRG5nrDT.js";import"./ToolbarRootContext-Da2ttLiC.js";import"./composite-DFXKizFH.js";import"./svgIconContainer-CQ9YnN-K.js";import"./PdfViewerSearchBar-CjulQyLz.js";import"./chevron-up-BXRLDr4e.js";import"./chevron-down-BCGqeKWb.js";import"./cross-CwJuB6vr.js";import"./PdfViewerSidebar-KxXo1ojL.js";import"./index-CiXw8-sy.js";import"./index-BGV0iA7n.js";import"./index-lcQmyE2o.js";import"./PdfViewerToolbar-wKSlkoJp.js";import"./Button-UwlMUZt9.js";import"./chevron-right-ByRsc0sC.js";import"./Input-DJavpeQK.js";import"./search-VBwZcVe4.js";import"./spin-DHmqF-iq.js";import"./error-D6yePDbl.js";import"./withOsdkMetrics-B-D7eEQx.js";import"./makeExternalStore-RezbOIS0.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
