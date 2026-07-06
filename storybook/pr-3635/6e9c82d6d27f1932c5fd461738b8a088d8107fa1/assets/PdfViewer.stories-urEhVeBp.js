import{j as r,M as s}from"./iframe-BpDeShyS.js";import{P as p}from"./pdf-viewer-DVbzZeWf.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DgRziHG0.js";import"./preload-helper-B-0wrbxX.js";import"./PdfRenderer-B3c422zP.js";import"./index-CYxuTrkm.js";import"./PdfViewer-DJA-evah.js";import"./PdfViewer.module.css-C-pNHrvf.js";import"./PdfViewerAnnotationLayer-Do15ry76.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-ZGZ21Dwl.js";import"./PdfViewerOutlineSidebar-DzV7ynXw.js";import"./PdfViewerSidebarHeader-D_I4vUYV.js";import"./useBaseUiId-Bh4Yjb1r.js";import"./useControlled-rZl8AVCP.js";import"./CompositeRoot-CJLwIbzq.js";import"./CompositeItem-BgFRAk_V.js";import"./ToolbarRootContext-WVW4tlVJ.js";import"./composite-DbX2upHH.js";import"./svgIconContainer-CJ-G1u9Y.js";import"./PdfViewerSearchBar-OA3OlWpg.js";import"./chevron-up-BPguhMYh.js";import"./chevron-down-5dq9MdCe.js";import"./cross-DIrqZ5WP.js";import"./PdfViewerSidebar-DcFS0xZ4.js";import"./index-BKDSk60q.js";import"./index-B2BkSIhx.js";import"./index-tuiBHj_E.js";import"./PdfViewerToolbar-gRJr8bfq.js";import"./Button-CAWJVUn8.js";import"./chevron-right-BlxP2EGD.js";import"./Input-Eu_59Ma6.js";import"./search-D3juWUDm.js";import"./spin-F4652xM9.js";import"./error-C45PaoHC.js";import"./withOsdkMetrics-BPquOBmZ.js";import"./makeExternalStore-DdHqmlr6.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
