import{j as r,M as s}from"./iframe-ZsXNUFF6.js";import{P as p}from"./pdf-viewer-DJQSH9qu.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BfxK0mTz.js";import"./preload-helper-B7akXiok.js";import"./PdfRenderer-EAPCSJds.js";import"./index-B5zzfAZe.js";import"./PdfViewer-BuQgAFK6.js";import"./PdfViewer.module.css-BVhNTMEf.js";import"./PdfViewerAnnotationLayer-BRLCmvgG.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BiB5p_fL.js";import"./PdfViewerOutlineSidebar-GD9MzQIh.js";import"./PdfViewerSidebarHeader-FMBCDRe0.js";import"./useBaseUiId-DYGOKp_u.js";import"./useControlled-DM56nnwz.js";import"./CompositeRoot-Bu1e1w71.js";import"./CompositeItem-64C7TVkf.js";import"./ToolbarRootContext-BDcT9N5A.js";import"./composite-DdmqKmDs.js";import"./svgIconContainer-DW3JlD9F.js";import"./PdfViewerSearchBar-0FaBudid.js";import"./chevron-up-BfSGRdRe.js";import"./chevron-down-D5zhsdmR.js";import"./cross-BYK_51r0.js";import"./PdfViewerSidebar-D6Q7P5bx.js";import"./index-DX6qVoIG.js";import"./index-DKJpgcXb.js";import"./index-CxFS4__M.js";import"./PdfViewerToolbar-DO3a1hOP.js";import"./Button-BT5XCJpm.js";import"./chevron-right-CTYN2eiV.js";import"./Input-04CIfLJP.js";import"./search-EhyZku2j.js";import"./spin-qtzWLv7_.js";import"./error-hVPnrc5f.js";import"./withOsdkMetrics-B8vZeoii.js";import"./makeExternalStore-Cflc95vd.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
