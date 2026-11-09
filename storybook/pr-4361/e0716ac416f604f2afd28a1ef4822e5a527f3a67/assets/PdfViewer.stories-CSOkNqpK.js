import{j as r,M as s}from"./iframe-BUHzazL7.js";import{P as p}from"./pdf-viewer-cI8xidwE.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CoxQiRzh.js";import"./preload-helper-7pS0gMeE.js";import"./PdfViewer-Do-gAMHY.js";import"./index-DAbvms11.js";import"./BasePdfViewer-CzXl2SC_.js";import"./BasePdfViewer.module.css-_APHTQji.js";import"./PdfViewerAnnotationLayer-x1Ui08Hd.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CEupebQE.js";import"./PdfViewerOutlineSidebar-CB16eZxU.js";import"./PdfViewerSidebarHeader-CS9JuolC.js";import"./useBaseUiId-C-XGHDUu.js";import"./useControlled-Bi-hDwUg.js";import"./CompositeRoot-D6qmuIsD.js";import"./CompositeItem-DKAPVnml.js";import"./ToolbarRootContext-CSl7A__z.js";import"./composite-CJH_Fsm0.js";import"./svgIconContainer-BXxi0rpR.js";import"./PdfViewerSearchBar-0tzSUxqJ.js";import"./chevron-up-BX1AyASN.js";import"./chevron-down-B-LRa2LO.js";import"./cross-7sgOHlSE.js";import"./PdfViewerSidebar-B7u8KC3b.js";import"./index-DO3hWjnR.js";import"./index-DxPhhuRZ.js";import"./index-4VpR6oTN.js";import"./PdfViewerToolbar-BxZciHHS.js";import"./Button-DSLJNPkR.js";import"./chevron-right-Dw-YlYEy.js";import"./Input-BfjcqwT4.js";import"./search-DMRlY3rF.js";import"./spin-D3VQPYPt.js";import"./error-yaL4IHLV.js";import"./withOsdkMetrics-BXf-ymjN.js";import"./makeExternalStore-9kWZAU-l.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
