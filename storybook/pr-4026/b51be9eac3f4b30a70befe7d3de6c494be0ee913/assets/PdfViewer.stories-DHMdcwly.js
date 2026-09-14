import{j as r,M as s}from"./iframe-BFWJZaOo.js";import{P as p}from"./pdf-viewer-byxLYzTm.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C0L6ZZHo.js";import"./preload-helper-BB-wZWHQ.js";import"./PdfViewer-CnzBv9WT.js";import"./index-XqSw18dv.js";import"./BasePdfViewer-BXHRT0ZG.js";import"./BasePdfViewer.module.css-NCa8bLdD.js";import"./PdfViewerAnnotationLayer-DXmiPqWh.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BvMoyjX9.js";import"./PdfViewerOutlineSidebar-DoIUPocr.js";import"./PdfViewerSidebarHeader-CKQJVwYq.js";import"./useBaseUiId-D0TRwsGc.js";import"./useControlled-B54yZwri.js";import"./CompositeRoot-D0VNorFa.js";import"./CompositeItem-BYv_HkoB.js";import"./ToolbarRootContext-t3ZlqxTu.js";import"./composite-BuqSO83P.js";import"./svgIconContainer-D508kkfI.js";import"./PdfViewerSearchBar-CEFmWQAE.js";import"./chevron-up-B2UI6qyl.js";import"./chevron-down-jCzULGyN.js";import"./cross-Bdxg6WL4.js";import"./PdfViewerSidebar-DLxAXqbG.js";import"./index-DhrvNfiG.js";import"./index-13lJ30rX.js";import"./index-CxTEg5iL.js";import"./PdfViewerToolbar-SX0mUIqQ.js";import"./Button-BucLG5Fq.js";import"./chevron-right-CNbJtGbT.js";import"./Input-CT8p6Er9.js";import"./search-CoXqkvjq.js";import"./spin-DwtWeUMM.js";import"./error-ov0Da29u.js";import"./withOsdkMetrics-Dvr0Y_2G.js";import"./makeExternalStore-BBLYkrLM.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
        code: \`// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
