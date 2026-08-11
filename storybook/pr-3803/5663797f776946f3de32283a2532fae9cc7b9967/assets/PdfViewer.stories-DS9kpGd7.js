import{j as r,M as s}from"./iframe-BuOHRKsP.js";import{P as p}from"./pdf-viewer-MkC-Jpwl.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BlEFUHuM.js";import"./preload-helper-D55cUpwl.js";import"./PdfRenderer-BQQWEAVl.js";import"./index-BBfXYKOl.js";import"./PdfViewer-B4clFtQf.js";import"./PdfViewer.module.css-B1U39B3a.js";import"./PdfViewerAnnotationLayer-CnYQT2b0.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BIbgU7Il.js";import"./PdfViewerOutlineSidebar-1-KlbRLm.js";import"./PdfViewerSidebarHeader-DxvdNdt8.js";import"./useBaseUiId-D4iw-mlj.js";import"./useControlled-bWISvX2W.js";import"./CompositeRoot-Dj-Aqsox.js";import"./CompositeItem-CaeozsZB.js";import"./ToolbarRootContext-Cs3xyXej.js";import"./composite-B1qo73Ui.js";import"./svgIconContainer-Nml_YWLq.js";import"./PdfViewerSearchBar-CJc_uG5c.js";import"./chevron-up-D8LkRIuC.js";import"./chevron-down-CxHFRpwG.js";import"./cross-BRcFo6DS.js";import"./PdfViewerSidebar-DYIbegkf.js";import"./index-DrlXNLRO.js";import"./index-DfhwtYnd.js";import"./index-l9rhgyQ3.js";import"./PdfViewerToolbar-C2XY_exR.js";import"./Button-DaTxS74m.js";import"./chevron-right-COpMaxet.js";import"./Input-DcZ1PnWt.js";import"./search-BuBL3EQ9.js";import"./spin-BsbD5MrR.js";import"./error-BSxgzHvg.js";import"./withOsdkMetrics-DZ1nPowA.js";import"./makeExternalStore-DTc4l4C7.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
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
        code: \`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
