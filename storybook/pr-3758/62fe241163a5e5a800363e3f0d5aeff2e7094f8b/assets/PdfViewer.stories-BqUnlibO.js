import{j as r,M as s}from"./iframe-DSTev5eS.js";import{P as p}from"./pdf-viewer-U2jmRd1p.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BED51Aer.js";import"./preload-helper-C0ahMEab.js";import"./PdfRenderer-DDzzHash.js";import"./index-BtWbeQUf.js";import"./PdfViewer-DPRqS3gZ.js";import"./PdfViewer.module.css-Bikrwcxg.js";import"./PdfViewerAnnotationLayer-Bd8sdAwY.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-y8iyRL01.js";import"./PdfViewerOutlineSidebar-Dbf3BBn_.js";import"./PdfViewerSidebarHeader-BcGg1ydg.js";import"./useBaseUiId-B59XoFeA.js";import"./useControlled-Da-Y32Lj.js";import"./CompositeRoot-DfP5ZbjN.js";import"./CompositeItem-CNtoihVd.js";import"./ToolbarRootContext-BBHEgGcZ.js";import"./composite-BJhDqHa5.js";import"./svgIconContainer-Cai_TSPH.js";import"./PdfViewerSearchBar-is6xshSZ.js";import"./chevron-up-TRLh5AtL.js";import"./chevron-down-BhNoewVe.js";import"./cross-C10Jdqp4.js";import"./PdfViewerSidebar-B_yjLUAt.js";import"./index-dImclggj.js";import"./index-BwPzfPTv.js";import"./index-S3ZDNn8V.js";import"./PdfViewerToolbar-BqfxYcNj.js";import"./Button-CdwVU5le.js";import"./chevron-right-c5D86F06.js";import"./Input-CzYxINMZ.js";import"./search-DMSt_gFn.js";import"./spin-BH0l_ACb.js";import"./error-Dov-wMuf.js";import"./withOsdkMetrics-DyUr7g82.js";import"./makeExternalStore-CuCFyRpr.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
