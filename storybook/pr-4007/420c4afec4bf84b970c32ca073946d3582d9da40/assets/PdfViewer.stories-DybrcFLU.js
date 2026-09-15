import{j as r,M as s}from"./iframe-BJcI6I7N.js";import{P as p}from"./pdf-viewer-CfPve2QQ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-UIzTCztY.js";import"./preload-helper-t8YjvYIO.js";import"./PdfViewer-C-340aHd.js";import"./index-ciSMf65j.js";import"./BasePdfViewer-Dm6EIRN9.js";import"./BasePdfViewer.module.css-BrnUk4If.js";import"./PdfViewerAnnotationLayer-BSf5vSB-.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-EGnhopE7.js";import"./PdfViewerOutlineSidebar-BViwegOK.js";import"./PdfViewerSidebarHeader-mVUFj7I5.js";import"./useBaseUiId-DEblu5yn.js";import"./useControlled-CouybXNc.js";import"./CompositeRoot-D_FNc8SW.js";import"./CompositeItem-DBn217Rb.js";import"./ToolbarRootContext-Dl2ojvsq.js";import"./composite-idv80Jfn.js";import"./svgIconContainer-ChDR1isz.js";import"./PdfViewerSearchBar-w3eIJn0c.js";import"./chevron-up-Cz0SE9zU.js";import"./chevron-down-BrRIIpof.js";import"./cross-BXeyHaO7.js";import"./PdfViewerSidebar-CX8ph2zT.js";import"./index-CRh5r80N.js";import"./index-2EHDOsjj.js";import"./index-CwTnZiyW.js";import"./PdfViewerToolbar-BGIbPtpU.js";import"./Button-0eHUW9F4.js";import"./chevron-right-D33JWlcn.js";import"./Input-kyBh5Wk4.js";import"./search-c-uEdInI.js";import"./spin-ChJeXnJf.js";import"./error-llhgzFId.js";import"./withOsdkMetrics-Da2pPJDy.js";import"./makeExternalStore-DeicAe6-.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
