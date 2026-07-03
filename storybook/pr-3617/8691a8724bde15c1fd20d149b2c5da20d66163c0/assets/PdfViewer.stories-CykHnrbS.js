import{j as r,M as s}from"./iframe-B7ygTo9W.js";import{P as p}from"./pdf-viewer-UctmodON.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BPPUAnk2.js";import"./preload-helper-CDqBt4yR.js";import"./PdfRenderer-c9U2iVKL.js";import"./index-C5S5PNED.js";import"./PdfViewer-CilvRmV6.js";import"./PdfViewer.module.css-ONSx2qrT.js";import"./PdfViewerAnnotationLayer-wNIg1crC.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Ci7Ya872.js";import"./PdfViewerOutlineSidebar-BnPvtu8A.js";import"./PdfViewerSidebarHeader-DnEArKrr.js";import"./useBaseUiId-BL8QwdSd.js";import"./useControlled-C8aPrRAZ.js";import"./CompositeRoot-DG50uDdx.js";import"./CompositeItem-CUibmTbJ.js";import"./ToolbarRootContext-BPlJHUij.js";import"./composite-CKpqhrZy.js";import"./svgIconContainer-CISnPs82.js";import"./PdfViewerSearchBar-BHdd8prr.js";import"./chevron-up-C-DJmCmA.js";import"./chevron-down-7Oeft8QW.js";import"./cross-LWZ52ovi.js";import"./PdfViewerSidebar-BYcmEUVs.js";import"./index-BWmqsa15.js";import"./index-B3P4AJaW.js";import"./index-CHKj7ln1.js";import"./PdfViewerToolbar-DQkkc_zi.js";import"./Button-TKGMPkN8.js";import"./chevron-right-B-2u3DOn.js";import"./Input-D14AIbfF.js";import"./minus-CKO-Xbst.js";import"./search-rp6d_gvf.js";import"./spin-Bvi3ZOWE.js";import"./error-TL5g5sOy.js";import"./withOsdkMetrics-EtNcQe-d.js";import"./makeExternalStore-Bv-s2QjN.js";const W={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const X=["Default"];export{o as Default,X as __namedExportsOrder,W as default};
