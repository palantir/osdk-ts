import{j as r,M as s}from"./iframe-1jbFjwiV.js";import{P as p}from"./pdf-viewer-BHF1XBzF.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-ZEyMjiH1.js";import"./preload-helper-DDQFdjFD.js";import"./PdfRenderer-dniUpqy9.js";import"./index-DrtZOUD6.js";import"./PdfViewer-DN0QQfsR.js";import"./PdfViewer.module.css-JEZR2wYP.js";import"./PdfViewerAnnotationLayer-BiMIqeIn.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C5APIOMC.js";import"./PdfViewerOutlineSidebar-D9FzFaIx.js";import"./PdfViewerSidebarHeader-6j8wseyA.js";import"./useBaseUiId-BKjYHqRc.js";import"./useControlled-D_GXWtOb.js";import"./CompositeRoot-CgNI89Bv.js";import"./CompositeItem-BtXbDyV5.js";import"./ToolbarRootContext-BpBhNPL-.js";import"./composite-C_OP_X0f.js";import"./svgIconContainer-BZV_aBV9.js";import"./PdfViewerSearchBar-R7j4ClnH.js";import"./chevron-up-B5r6nVJI.js";import"./chevron-down-D5mZ3A2l.js";import"./cross-Bl1j4Wqv.js";import"./PdfViewerSidebar-BhgpkEkZ.js";import"./index-4XSemlsK.js";import"./index-jEd0VEdG.js";import"./index-CeLprUqR.js";import"./PdfViewerToolbar-C-in1oJU.js";import"./Button-BjqCYLqC.js";import"./chevron-right-wON0OLiJ.js";import"./Input-CwglRXzQ.js";import"./search-fjW_pUDA.js";import"./spin-BfzyqlwM.js";import"./error-2uW8vzmQ.js";import"./withOsdkMetrics-C0Xi5TsE.js";import"./makeExternalStore-DBATKRlp.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
