import{j as r,M as s}from"./iframe-Ba_yScUR.js";import{P as p}from"./pdf-viewer-DC-mtHbj.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BQ79wnFN.js";import"./preload-helper-IJpyRu8x.js";import"./PdfRenderer-DsL5EDdk.js";import"./index-DmdWqsF0.js";import"./PdfViewer-bq_161Hf.js";import"./PdfViewer.module.css-DqKV0wfY.js";import"./PdfViewerAnnotationLayer-BkWuz-Mc.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BLYfJebv.js";import"./PdfViewerOutlineSidebar-BOa6vLj9.js";import"./PdfViewerSidebarHeader-DrzVenZU.js";import"./useBaseUiId-DJn92JIx.js";import"./useControlled-w8mFcKfd.js";import"./CompositeRoot-Dv4NPdSQ.js";import"./CompositeItem-rllQ73bp.js";import"./ToolbarRootContext-DGb7OxDN.js";import"./composite-C01Tb6yu.js";import"./svgIconContainer-HHegecv0.js";import"./PdfViewerSearchBar-C5b6s47G.js";import"./chevron-up-0HX5JBLc.js";import"./chevron-down-a5MKrIoV.js";import"./cross-DzoKopMm.js";import"./PdfViewerSidebar-DMDwhvRu.js";import"./index-CtadddT9.js";import"./index-BkiBi9Wg.js";import"./index-D6d4Acn2.js";import"./PdfViewerToolbar-DypKkA7s.js";import"./Button-xdPBbPzF.js";import"./chevron-right-C3_0T8YC.js";import"./Input-C6JTtoom.js";import"./search-BdkdtwH9.js";import"./spin-B4i3qDkz.js";import"./error-J2vgcaCR.js";import"./withOsdkMetrics-DO7OhjM7.js";import"./makeExternalStore-BPXa91cY.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
