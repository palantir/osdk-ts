import{j as r,M as s}from"./iframe-BmIumiFy.js";import{P as p}from"./pdf-viewer-CR3lXwu4.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BTMem6Mp.js";import"./preload-helper-DOudssxF.js";import"./PdfRenderer-CyMVSAwa.js";import"./index-COtMTDwh.js";import"./PdfViewer-Wyk0qsf2.js";import"./PdfViewer.module.css-kPP1R8bQ.js";import"./PdfViewerAnnotationLayer-CilfqN8E.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BFVUjDrO.js";import"./PdfViewerOutlineSidebar-Bq4ia2vy.js";import"./PdfViewerSidebarHeader-CqatVC1e.js";import"./useBaseUiId-u6D5SNaO.js";import"./useControlled-BF-5Gu-Y.js";import"./CompositeRoot-BTz4FEjb.js";import"./CompositeItem-CEPi8VM6.js";import"./ToolbarRootContext-ujFBXNzR.js";import"./composite-xXwZ5piC.js";import"./svgIconContainer-zzO9ThP2.js";import"./PdfViewerSearchBar-DcEAgypt.js";import"./chevron-up-CLLQAEFI.js";import"./chevron-down-SL5FndRp.js";import"./cross-DwaGakXk.js";import"./PdfViewerSidebar-C28O4IOW.js";import"./index-0qJVcbl0.js";import"./index-C3Iv1KGN.js";import"./index-sxuF88AO.js";import"./PdfViewerToolbar-D48YbeI9.js";import"./Button-BMFo_q3G.js";import"./chevron-right-BgIxWTUI.js";import"./Input-DMQEWRf3.js";import"./search-B4tx0NX2.js";import"./spin-BHuBPK4V.js";import"./error-BsBgpzWK.js";import"./withOsdkMetrics-aOoiWXTE.js";import"./makeExternalStore-B__ysOOH.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
