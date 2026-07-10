import{j as r,M as s}from"./iframe-5hUGPGFG.js";import{P as p}from"./pdf-viewer-DnGNiJ3I.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DjrvkuuA.js";import"./preload-helper-CJdwYBXx.js";import"./PdfRenderer-B0B2AWH4.js";import"./index-DLcCUbn1.js";import"./PdfViewer-BYgEreju.js";import"./PdfViewer.module.css-DvHWpVgx.js";import"./PdfViewerAnnotationLayer-Cbk6sj1M.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-ChD_se1Y.js";import"./PdfViewerOutlineSidebar-BaqwZgH4.js";import"./PdfViewerSidebarHeader-C1NoKbyJ.js";import"./useBaseUiId-DJajkDSm.js";import"./useControlled-B2g2UBH_.js";import"./CompositeRoot-c1WTyAqK.js";import"./CompositeItem-gDdBu88z.js";import"./ToolbarRootContext-CO-RKzZj.js";import"./composite-_LrboIJk.js";import"./svgIconContainer-B5Jyq-Wg.js";import"./PdfViewerSearchBar-ChN13Nsm.js";import"./chevron-up-DDhzsXLr.js";import"./chevron-down-CdGGh6rq.js";import"./cross-U1SWpnoO.js";import"./PdfViewerSidebar-BdN-XmQM.js";import"./index-DLqXMb-q.js";import"./index-BiaN8C24.js";import"./index-CQiTfYP_.js";import"./PdfViewerToolbar-Bphypr0K.js";import"./Button-BaWfHYRR.js";import"./chevron-right-oXt-jhsc.js";import"./Input-DKvYXO_W.js";import"./search-B42e95Ec.js";import"./spin-gwxeS08M.js";import"./error-B87B4TKS.js";import"./withOsdkMetrics-Kwe1rYAM.js";import"./makeExternalStore-qHOfLjNT.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
