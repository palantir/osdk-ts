import{j as r,M as s}from"./iframe-BeCKStTi.js";import{P as p}from"./pdf-viewer-ZLtdqLx0.js";import{E as d}from"./Employee-BBLL99Vm.js";import{u as a}from"./useOsdkObject-Ww3DIuU1.js";import"./preload-helper-BICrzKRt.js";import"./PdfRenderer-LS-QTkcC.js";import"./index-BfYzXW_3.js";import"./PdfViewer-CkoX5nKm.js";import"./PdfViewer.module.css-BsuUGzIE.js";import"./PdfViewerAnnotationLayer-fZjGDmfj.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DK6unOZt.js";import"./PdfViewerOutlineSidebar-BiT5wcDc.js";import"./PdfViewerSidebarHeader-BReRA7h7.js";import"./useBaseUiId-COsIpFVh.js";import"./useControlled-5Cxw9uoZ.js";import"./CompositeRoot-r5VPPZg3.js";import"./CompositeItem-DkAKuEhG.js";import"./ToolbarRootContext-HD-Y_-jz.js";import"./composite-U2ojCD3f.js";import"./svgIconContainer-D-9_AOAs.js";import"./PdfViewerSearchBar-Bl8vV7Dk.js";import"./chevron-up-BthBkyrK.js";import"./chevron-down-BtABU6Ff.js";import"./cross-DDXI9CZ5.js";import"./PdfViewerSidebar-Bkr8M1jp.js";import"./index-DWv9wz-O.js";import"./index-BkJ0Lguu.js";import"./index-BPIvZm15.js";import"./PdfViewerToolbar-s6o0ppC9.js";import"./Button-to0u69wN.js";import"./chevron-right-BFpwcuaa.js";import"./Input-fr7UgVSn.js";import"./search-CZf2_gwq.js";import"./spin-Dc6yxLwi.js";import"./error-DvUULirA.js";import"./withOsdkMetrics-DoKVZacI.js";import"./makeExternalStore-WWCfiCZx.js";const U={component:p,parameters:{controls:{expanded:!0}},tags:["beta"],title:"Components/DocumentViewer/Renderers/PdfViewer"},o={parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />`}}},render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})}};var t,m,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  },
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
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
