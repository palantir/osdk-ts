import{j as r,M as s}from"./iframe-BYt9UAqA.js";import{P as p}from"./pdf-viewer-tcliy7jb.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DHdyWb-7.js";import"./preload-helper-yIviZ9L6.js";import"./PdfRenderer-DlsNRGZi.js";import"./index-BC6Pjr27.js";import"./PdfViewer-qSdPIv6x.js";import"./PdfViewer.module.css-BY0DoqE4.js";import"./PdfViewerAnnotationLayer-Qvqg8fVU.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CwasSi_Q.js";import"./PdfViewerOutlineSidebar-CCnygq29.js";import"./PdfViewerSidebarHeader-DFRbaRqH.js";import"./useBaseUiId-CX-DJsYz.js";import"./useControlled-DiqM8TqM.js";import"./CompositeRoot-DTsowffB.js";import"./CompositeItem-DlwscB2S.js";import"./ToolbarRootContext-cmhAQD8Q.js";import"./composite-CRwy05TL.js";import"./svgIconContainer-DKmscGn9.js";import"./PdfViewerSearchBar-MWqxEwmG.js";import"./chevron-up-DRJe5AeU.js";import"./chevron-down-DYvqUoHK.js";import"./cross-CKRZSi7q.js";import"./PdfViewerSidebar-C87NNCqU.js";import"./index-CWLjiktv.js";import"./index-Vcxx2LcZ.js";import"./index-D39wjJst.js";import"./PdfViewerToolbar-B_xbzzKJ.js";import"./Button-DlbDHCxX.js";import"./chevron-right-BPkws834.js";import"./Input-C67re26D.js";import"./search-BD6zxTta.js";import"./spin-Cn2xHwk6.js";import"./error-BHuFHr_-.js";import"./withOsdkMetrics-Dk4rTGU7.js";import"./makeExternalStore-CuKd-Tw9.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
