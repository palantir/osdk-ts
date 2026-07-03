import{j as r,M as s}from"./iframe-CyqMwwwa.js";import{P as p}from"./pdf-viewer-Bn_VPbPw.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DYQFbyeN.js";import"./preload-helper-AtWPu6x5.js";import"./PdfRenderer-Bod2VgNI.js";import"./index-BQ01XBWb.js";import"./PdfViewer-CzBWPNlp.js";import"./PdfViewer.module.css-BFu8wzCj.js";import"./PdfViewerAnnotationLayer-BSCh98bI.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-bNw0rrII.js";import"./PdfViewerOutlineSidebar-BA5-YyXF.js";import"./PdfViewerSidebarHeader-Bsr3jeDq.js";import"./useBaseUiId-DzGITZS5.js";import"./useControlled-rqeQw8gV.js";import"./CompositeRoot-CvZgkcxo.js";import"./CompositeItem-BgpsbA-o.js";import"./ToolbarRootContext-Ck6me1lS.js";import"./composite-Duq6hh4g.js";import"./svgIconContainer-B6yM1sE_.js";import"./PdfViewerSearchBar-CAWFHeB9.js";import"./chevron-up-w-5ut68c.js";import"./chevron-down-B36C-D_2.js";import"./cross-DO-0I_3Y.js";import"./PdfViewerSidebar-DVkdJdP-.js";import"./index-DLKsCh9P.js";import"./index-DYsHBxeE.js";import"./index-CcpSGuBk.js";import"./PdfViewerToolbar-Dt-rHVYy.js";import"./Button-CXO_Rr9x.js";import"./chevron-right-BfM19XvG.js";import"./Input-BtpaAmi8.js";import"./minus-CEraPhPD.js";import"./search-cwTssfHk.js";import"./spin-BzeSljbv.js";import"./error-po-IxwNG.js";import"./withOsdkMetrics-Dbs3QriX.js";import"./makeExternalStore-D9iTGIhU.js";const W={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
