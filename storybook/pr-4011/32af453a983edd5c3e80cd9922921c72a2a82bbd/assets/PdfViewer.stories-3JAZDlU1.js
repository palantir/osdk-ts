import{j as r,M as s}from"./iframe-D0YyS42l.js";import{P as p}from"./pdf-viewer-Dk53ntGa.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BumALgbd.js";import"./preload-helper-BCB_Qe4i.js";import"./PdfViewer-C3XIjyx8.js";import"./index-Bsavn4W3.js";import"./BasePdfViewer-BV7LxpfP.js";import"./BasePdfViewer.module.css-BjkJtY26.js";import"./PdfViewerAnnotationLayer--MQkkjzX.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BR9BGLnq.js";import"./PdfViewerOutlineSidebar-D4X3pkwQ.js";import"./PdfViewerSidebarHeader-C6WZ5hBG.js";import"./useBaseUiId-D4SQ7WJt.js";import"./useControlled-BGd4K6A9.js";import"./CompositeRoot-CvCbKzH7.js";import"./CompositeItem-CUm9EsTA.js";import"./ToolbarRootContext-Dm0HFQW0.js";import"./composite-z8nqybue.js";import"./svgIconContainer-ppOpPTiK.js";import"./PdfViewerSearchBar-CDk9gomb.js";import"./chevron-up-DZVTcENu.js";import"./chevron-down-B2Awu_XJ.js";import"./cross-dsq08tGB.js";import"./PdfViewerSidebar-DukjMxMP.js";import"./index-B-0gmAXF.js";import"./index-O1djYu27.js";import"./index-C1kCmh68.js";import"./PdfViewerToolbar-D0AFtF7H.js";import"./Button-tmtP2Iw5.js";import"./chevron-right-D0FIi6b5.js";import"./Input-souD-H1n.js";import"./search-BXsTnHq3.js";import"./spin-KPUVBhkK.js";import"./error-CbeKU1Tz.js";import"./withOsdkMetrics-D7tqwlWZ.js";import"./makeExternalStore-Bdcno4ct.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
