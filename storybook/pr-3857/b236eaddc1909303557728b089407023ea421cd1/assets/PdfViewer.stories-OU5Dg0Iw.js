import{j as r,M as s}from"./iframe-C8cvGscG.js";import{P as p}from"./pdf-viewer-Cn-C1S1Q.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CpX4ylxu.js";import"./preload-helper-DC1YHagZ.js";import"./PdfViewer-gth8rShc.js";import"./index-D4FQYl0T.js";import"./BasePdfViewer-DP9UjeKh.js";import"./BasePdfViewer.module.css-Bmp5ZDB1.js";import"./PdfViewerAnnotationLayer-uWu0fCbF.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BJERI3xJ.js";import"./PdfViewerOutlineSidebar-BV6NO48H.js";import"./PdfViewerSidebarHeader-IPELwU5Y.js";import"./useBaseUiId-CTQW4Qod.js";import"./useControlled-DPYDb1X5.js";import"./CompositeRoot-UNZZ6l8N.js";import"./CompositeItem-CZOJvSSZ.js";import"./ToolbarRootContext-DOPDMGFM.js";import"./composite-BI_-Y8ZI.js";import"./svgIconContainer-D4IADJhB.js";import"./PdfViewerSearchBar-CiXU1Qtu.js";import"./chevron-up-Dm3HZz0B.js";import"./chevron-down-Bg2Fi8_v.js";import"./cross-CprIKEkv.js";import"./PdfViewerSidebar-Kdny1DEp.js";import"./index-BTdV_y6h.js";import"./index-Cv_Heaoa.js";import"./index-oJ8Xwr6M.js";import"./PdfViewerToolbar-DG_mUU8K.js";import"./Button-s9umFZ1s.js";import"./chevron-right-B-SmDr13.js";import"./Input-4ZH7Uf17.js";import"./search-DscZjBaM.js";import"./spin-C6-dArtw.js";import"./error-BmJxtr8m.js";import"./withOsdkMetrics-Bep4H7WL.js";import"./makeExternalStore-a9HEG5rq.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
