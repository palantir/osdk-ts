import{j as r,M as s}from"./iframe-ISHOQfc5.js";import{P as p}from"./pdf-viewer-BTuZU43N.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C_srnjJI.js";import"./preload-helper-DvlVZRRW.js";import"./PdfRenderer-CjbuRHwK.js";import"./index-DIh3jcjT.js";import"./PdfViewer-DNSzi2kr.js";import"./PdfViewer.module.css-BtJXy_1f.js";import"./PdfViewerAnnotationLayer-BLgtcDTf.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CvFf5W8J.js";import"./PdfViewerOutlineSidebar-8FgpdyaN.js";import"./PdfViewerSidebarHeader-DEdAtoY8.js";import"./useBaseUiId-uKaeTVeA.js";import"./useControlled-CINon2aU.js";import"./CompositeRoot-DCb9eNz0.js";import"./CompositeItem-Bo1P1gWs.js";import"./ToolbarRootContext-Dob_jToB.js";import"./composite-B80WA38w.js";import"./svgIconContainer-DtuqW3jd.js";import"./PdfViewerSearchBar-CDeAHLef.js";import"./chevron-up-IhMZxIUt.js";import"./chevron-down-DhII4Rpq.js";import"./cross-CBjHcWLp.js";import"./PdfViewerSidebar-BaCSZuVw.js";import"./index-BZc_8tWb.js";import"./index-D_YubaQ1.js";import"./index-Dqqtt2Iv.js";import"./PdfViewerToolbar-DJg-61ks.js";import"./Button-DhvUcPPD.js";import"./chevron-right-DKeOxFI0.js";import"./Input-DdoFIUV_.js";import"./search-CMnUBHZ2.js";import"./spin-D7r0mKdH.js";import"./error-DUcOx40G.js";import"./withOsdkMetrics-Bw8tRnT9.js";import"./makeExternalStore-V0faKrRY.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
