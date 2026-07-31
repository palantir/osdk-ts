import{j as r,M as s}from"./iframe-DNFazLRo.js";import{P as p}from"./pdf-viewer-ITjDaf65.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Bci3BS0C.js";import"./preload-helper-CSOKbrIj.js";import"./PdfRenderer-Jwy5epPb.js";import"./index-D8TskzeX.js";import"./PdfViewer-CgWxnL9B.js";import"./PdfViewer.module.css-Dobwr6as.js";import"./PdfViewerAnnotationLayer-D8ozMnd5.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CvuZ4Bzi.js";import"./PdfViewerOutlineSidebar-BqGoh01a.js";import"./PdfViewerSidebarHeader-C0SlV6Mq.js";import"./useBaseUiId-Bk1k55aA.js";import"./useControlled-DqGw_9SJ.js";import"./CompositeRoot-D1mhRdZZ.js";import"./CompositeItem-f4mP3DUQ.js";import"./ToolbarRootContext-DiLS0IHp.js";import"./composite-SJWY6A2_.js";import"./svgIconContainer-D3tpgr1_.js";import"./PdfViewerSearchBar-DLbAB6YO.js";import"./chevron-up-CWBeKl99.js";import"./chevron-down-SokcOk50.js";import"./cross-BIdaAy0r.js";import"./PdfViewerSidebar-DzY3zh6g.js";import"./index-VHSNuB9X.js";import"./index-Bwgkh0sx.js";import"./index-DGsBqEMa.js";import"./PdfViewerToolbar-CUArzoqF.js";import"./Button-Dx6KadTF.js";import"./chevron-right-B5vYh4na.js";import"./Input-Bvkv7SHA.js";import"./search-DafmKbOj.js";import"./spin-WZppgOhm.js";import"./error-B_y1x8OC.js";import"./withOsdkMetrics-Rac-iTvD.js";import"./makeExternalStore-Cya9wI0B.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
