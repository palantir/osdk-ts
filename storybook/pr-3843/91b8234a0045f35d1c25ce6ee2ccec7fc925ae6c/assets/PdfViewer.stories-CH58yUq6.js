import{j as r,M as s}from"./iframe-YPYsIb22.js";import{P as p}from"./pdf-viewer-C5TSs0Eb.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BWyotSbH.js";import"./preload-helper-Bm267i2E.js";import"./PdfRenderer-CYWXRm4S.js";import"./index-tbAq8Ohd.js";import"./PdfViewer-BJJK7vQb.js";import"./PdfViewer.module.css-BGd4thN8.js";import"./PdfViewerAnnotationLayer-gwpo07Go.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DYq0zEMV.js";import"./PdfViewerOutlineSidebar-lfYvCE4Y.js";import"./PdfViewerSidebarHeader-BFtAHxMZ.js";import"./useBaseUiId-DcZVCxGy.js";import"./useControlled-CSFowk_7.js";import"./CompositeRoot-BuZjy6qJ.js";import"./CompositeItem-guz_X3dC.js";import"./ToolbarRootContext-BbwNnKOF.js";import"./composite-DzJGJJnK.js";import"./svgIconContainer-DjM3XCjt.js";import"./PdfViewerSearchBar-4UeLeBq5.js";import"./chevron-up-B7Rc-xmz.js";import"./chevron-down-DA0ta6Kf.js";import"./cross-Bvh9g_GQ.js";import"./PdfViewerSidebar-DcUWF3Ii.js";import"./index-rKVmsUIV.js";import"./index-Cg0mmqLz.js";import"./index-DBWmIQLG.js";import"./PdfViewerToolbar-CJDB5_gC.js";import"./Button-BIBGF6Kj.js";import"./chevron-right-B5mZxkl6.js";import"./Input-C7Rttt_L.js";import"./search-Cmuvm24Z.js";import"./spin-DphLfXpI.js";import"./error-C5wdbzy2.js";import"./withOsdkMetrics-B5RDuhJT.js";import"./makeExternalStore-6VAz4fOk.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
