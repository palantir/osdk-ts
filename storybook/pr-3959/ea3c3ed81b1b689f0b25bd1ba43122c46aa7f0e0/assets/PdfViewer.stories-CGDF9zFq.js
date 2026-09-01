import{j as r,M as s}from"./iframe-DkzbgSAD.js";import{P as p}from"./pdf-viewer-DxeuxLY2.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-3qs06Bw9.js";import"./preload-helper-BiwIe667.js";import"./PdfViewer-DomTfZWA.js";import"./index-DjIOOe4t.js";import"./BasePdfViewer-BKLxptoQ.js";import"./BasePdfViewer.module.css-C-8bPt06.js";import"./PdfViewerAnnotationLayer-Cpr2MFDD.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-jxIf4y1m.js";import"./PdfViewerOutlineSidebar-B4kApcAr.js";import"./PdfViewerSidebarHeader-BiT0wzOa.js";import"./useBaseUiId-CdNYBUR5.js";import"./useControlled-C8Dvxw0_.js";import"./CompositeRoot-Cd6zKnLT.js";import"./CompositeItem-B0TjqzOk.js";import"./ToolbarRootContext-Z-VSuc63.js";import"./composite-CynzhD0V.js";import"./svgIconContainer-DSZ9Y-N3.js";import"./PdfViewerSearchBar-BVl33to1.js";import"./chevron-up-C9YSxQqF.js";import"./chevron-down-D4koVRNt.js";import"./cross-Cd4Ezf-o.js";import"./PdfViewerSidebar-IpTe4lKA.js";import"./index-BSrr_0Jz.js";import"./index-CtmpuiHr.js";import"./index-DKOk24VN.js";import"./PdfViewerToolbar-BN4oP6te.js";import"./Button-BHYsrTUy.js";import"./chevron-right-tbRHbMQx.js";import"./Input-CAjIPIjE.js";import"./search-DVRH7Lct.js";import"./spin-Ba63rLI2.js";import"./error-CAfn1z7w.js";import"./withOsdkMetrics-BhSP4CDN.js";import"./makeExternalStore-CBYxH43f.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
