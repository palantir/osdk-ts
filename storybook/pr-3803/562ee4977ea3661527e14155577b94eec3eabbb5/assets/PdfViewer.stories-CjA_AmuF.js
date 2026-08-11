import{j as r,M as s}from"./iframe-fAfbdLhf.js";import{P as p}from"./pdf-viewer-BZz8XjfB.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-prWTwKu3.js";import"./preload-helper-DWDN4VMu.js";import"./PdfRenderer-hhhSZj9o.js";import"./index-CBwRWuPv.js";import"./PdfViewer-COzTJ3Fh.js";import"./PdfViewer.module.css-BRrnlU3W.js";import"./PdfViewerAnnotationLayer-BY_N4h5F.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-yu5zwRr2.js";import"./PdfViewerOutlineSidebar-DXpkzKQg.js";import"./PdfViewerSidebarHeader-B7BBjrHq.js";import"./useBaseUiId-DE9gu32f.js";import"./useControlled-BUpGFmgH.js";import"./CompositeRoot-DztrsG74.js";import"./CompositeItem-AttJnCul.js";import"./ToolbarRootContext-CAvhaC10.js";import"./composite-CtiB8fcn.js";import"./svgIconContainer-BBjFJa49.js";import"./PdfViewerSearchBar-Cl2tiA94.js";import"./chevron-up-C94WnSbK.js";import"./chevron-down-D5pYynjB.js";import"./cross-ByzYitNg.js";import"./PdfViewerSidebar-D4YHHz5W.js";import"./index-9zEFE1EL.js";import"./index-UPhMUfRS.js";import"./index-DpDZejss.js";import"./PdfViewerToolbar-BsL7izN9.js";import"./Button-D_3jmW16.js";import"./chevron-right-1rIgEBMu.js";import"./Input-xMPnLU6F.js";import"./search-eStI4uI5.js";import"./spin-DwD1o5aO.js";import"./error-1ACuOiBT.js";import"./withOsdkMetrics-gL21sZFb.js";import"./makeExternalStore-CPFS4LBF.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
