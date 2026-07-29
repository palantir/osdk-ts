import{j as r,M as s}from"./iframe-D8OemlW9.js";import{P as p}from"./pdf-viewer-B8Pf-LFK.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Am7aYkkl.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfRenderer-DmQvviw9.js";import"./index-CiF4zylQ.js";import"./PdfViewer-D7Q3NYZo.js";import"./PdfViewer.module.css-DrHgGBQN.js";import"./PdfViewerAnnotationLayer-CAha3Igm.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CbhhX7Jm.js";import"./PdfViewerOutlineSidebar-CdT8Vh4F.js";import"./PdfViewerSidebarHeader-DdXKCHWe.js";import"./useBaseUiId-Bh3moove.js";import"./useControlled-C4eqeGIw.js";import"./CompositeRoot-DgeM1Mnl.js";import"./CompositeItem-DZtRWtLO.js";import"./ToolbarRootContext-FqIVkw-A.js";import"./composite-BBE6Lj1u.js";import"./svgIconContainer-BU7OxppY.js";import"./PdfViewerSearchBar-DczPlpoE.js";import"./chevron-up-xa-GvYYw.js";import"./chevron-down-yj-Bk-PK.js";import"./cross-DpXB_Ps1.js";import"./PdfViewerSidebar-KluG1LTI.js";import"./index-DcTul6uP.js";import"./index-CPBLZVtg.js";import"./index-tbQAWs3B.js";import"./PdfViewerToolbar-De__aUmW.js";import"./Button-BaF7ht4j.js";import"./chevron-right-ClP8NyBQ.js";import"./Input-CGLEj01j.js";import"./search-7u3ddEhN.js";import"./spin-Cs66Wzmd.js";import"./error-B7GqCXyt.js";import"./withOsdkMetrics-xS-Om8wD.js";import"./makeExternalStore-DrpoL1n0.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
