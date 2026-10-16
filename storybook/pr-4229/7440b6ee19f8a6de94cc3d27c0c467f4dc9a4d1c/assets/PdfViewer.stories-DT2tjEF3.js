import{j as r,M as s}from"./iframe-B7GNjqYa.js";import{P as p}from"./pdf-viewer-DcbOKjab.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BpnaLY03.js";import"./preload-helper-BAlwY9vI.js";import"./PdfViewer-DwbGYZ12.js";import"./index-BS_kYp2J.js";import"./BasePdfViewer-DZDAFNoy.js";import"./BasePdfViewer.module.css-DR9sxgqt.js";import"./PdfViewerAnnotationLayer-DdOGaf11.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CSea0Iyt.js";import"./PdfViewerOutlineSidebar-BzypO005.js";import"./PdfViewerSidebarHeader-Bg4yzfaJ.js";import"./useBaseUiId-CFM8-ppd.js";import"./useControlled-qLlPw49u.js";import"./CompositeRoot-C5fO4sWV.js";import"./CompositeItem-Bd_Q9u8B.js";import"./ToolbarRootContext-m_MjqPd8.js";import"./composite-C3LspNj0.js";import"./svgIconContainer-DoNcIMx3.js";import"./PdfViewerSearchBar-Cd5sbTWf.js";import"./chevron-up-DMzJCt7D.js";import"./chevron-down-DB4mVzp_.js";import"./cross-BiueRdx7.js";import"./PdfViewerSidebar-IpsiBzBq.js";import"./index-DsFN0VWM.js";import"./index-fPGG7RjX.js";import"./index-BCluv78G.js";import"./PdfViewerToolbar-DVwEvZ4V.js";import"./Button-CuSrXijd.js";import"./chevron-right-Dd1o1CfJ.js";import"./Input-COrKdsAC.js";import"./search-BPhnv7M1.js";import"./spin-BpZzL314.js";import"./error-zFyncHCE.js";import"./withOsdkMetrics-DYcwkBzp.js";import"./makeExternalStore-BhSOqX6p.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
