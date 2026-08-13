import{j as r,M as s}from"./iframe-DB-361_v.js";import{P as p}from"./pdf-viewer-BToGUhWj.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject--f4ZOFGw.js";import"./preload-helper-zvjHNL09.js";import"./PdfRenderer-BZxPfizS.js";import"./index-DdwLnrfs.js";import"./PdfViewer-DrSZ6qMf.js";import"./PdfViewer.module.css-jFdJsMru.js";import"./PdfViewerAnnotationLayer-CITAaNJ7.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Daf1BXvq.js";import"./PdfViewerOutlineSidebar-ChNRO9C0.js";import"./PdfViewerSidebarHeader-D1SEr9eL.js";import"./useBaseUiId-Dyby1NGR.js";import"./useControlled-B9yE7kao.js";import"./CompositeRoot-pE-rS2el.js";import"./CompositeItem-DCbSD_ZK.js";import"./ToolbarRootContext-DLRpCM8y.js";import"./composite-CEGpAhVN.js";import"./svgIconContainer-tDogG8TB.js";import"./PdfViewerSearchBar-Dx6OHXk-.js";import"./chevron-up-B9Lhh2u7.js";import"./chevron-down-DXD_htwf.js";import"./cross-CgBmw6jw.js";import"./PdfViewerSidebar-B-xcsyBB.js";import"./index-z1u9RwtB.js";import"./index-Bd_TtvqJ.js";import"./index-LD-tkTix.js";import"./PdfViewerToolbar-BZ_46N21.js";import"./Button-B9h9wyoq.js";import"./chevron-right-BqRFoedw.js";import"./Input-Du43rCnX.js";import"./search-Y_2o6rdR.js";import"./spin-DTUhVSqU.js";import"./error-B4op4QY1.js";import"./withOsdkMetrics-5AfJM7Y3.js";import"./makeExternalStore-D-AXHTbe.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
