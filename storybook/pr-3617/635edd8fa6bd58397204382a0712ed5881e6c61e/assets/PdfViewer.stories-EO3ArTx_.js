import{j as r,M as s}from"./iframe-BYiHt7Yx.js";import{P as p}from"./pdf-viewer-D1rLWz3Y.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CL05kQBl.js";import"./preload-helper-Cg-Qahjf.js";import"./PdfRenderer-DOEa-qMW.js";import"./index-BxgnQNzz.js";import"./PdfViewer-xZhiN98T.js";import"./PdfViewer.module.css-oDyQedjr.js";import"./PdfViewerAnnotationLayer-BduMftnP.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B2vPXHab.js";import"./PdfViewerOutlineSidebar-Bgx1KU8v.js";import"./PdfViewerSidebarHeader-D-Ei3Vba.js";import"./useBaseUiId-B-6563bh.js";import"./useControlled-W_DxegSv.js";import"./CompositeRoot-B49tjKJ1.js";import"./CompositeItem-CKpX90zr.js";import"./ToolbarRootContext-CRm7m06b.js";import"./composite-CzYUoSki.js";import"./svgIconContainer-DdKf9FwK.js";import"./PdfViewerSearchBar-Z7mVEFRv.js";import"./chevron-up-23UhUUh4.js";import"./chevron-down-0qpSsMok.js";import"./cross-C5MZKfQn.js";import"./PdfViewerSidebar-BytS7-hW.js";import"./index-A8C_3FIg.js";import"./index-DF7ZFgpi.js";import"./index-Dbye0IN8.js";import"./PdfViewerToolbar-CoTJm14U.js";import"./Button-CFENmCqX.js";import"./chevron-right-CcLmE4Pv.js";import"./Input-CTAeT0FB.js";import"./minus-gwu3U-hb.js";import"./search-BTo56nkz.js";import"./spin-BEjOGZtB.js";import"./error-BztkUCs6.js";import"./withOsdkMetrics-Dn9qlUhE.js";import"./makeExternalStore-B88I9ii1.js";const W={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
