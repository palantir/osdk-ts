import{j as r,M as s}from"./iframe-BLnZQotn.js";import{P as p}from"./pdf-viewer-DY6zDqs0.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BIcb-w0c.js";import"./preload-helper-DY9jpKUC.js";import"./PdfRenderer-C6fJLQ_-.js";import"./index-Br-sIVdK.js";import"./PdfViewer-DKPNG2w_.js";import"./PdfViewer.module.css-DyDv6x9n.js";import"./PdfViewerAnnotationLayer-lNnWYHAu.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BiOUSQzY.js";import"./PdfViewerOutlineSidebar-CoC9uLI-.js";import"./PdfViewerSidebarHeader-BFBJxXEZ.js";import"./useBaseUiId-mj7-YtUe.js";import"./useControlled-B6GUHUJM.js";import"./CompositeRoot-No9wznlu.js";import"./CompositeItem-DzcXIyhE.js";import"./ToolbarRootContext-C8cCGqF-.js";import"./composite-BKQJBcnd.js";import"./svgIconContainer-4F-xtBaI.js";import"./PdfViewerSearchBar-B-XQdTDw.js";import"./chevron-up-Dxo7Jp5G.js";import"./chevron-down-h1RtSMOg.js";import"./cross-DScBbaG7.js";import"./PdfViewerSidebar-D_FWZ39M.js";import"./index-DFPaFGKs.js";import"./index-B4OHcS41.js";import"./index-CZctS6MH.js";import"./PdfViewerToolbar-UAXzGUtk.js";import"./Button-BjgeWM_v.js";import"./chevron-right-CPqqVg27.js";import"./Input-BhzFnYGF.js";import"./search-XfyocaRu.js";import"./spin-CRYKkGR7.js";import"./error-BjkGAX5r.js";import"./withOsdkMetrics-DPb2-OHp.js";import"./makeExternalStore-eh1oPVcU.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
