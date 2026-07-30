import{j as r,M as s}from"./iframe-FyhVxTrk.js";import{P as p}from"./pdf-viewer-Ca9Ug3ou.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B5wwEa4s.js";import"./preload-helper-Dgs_n9Dy.js";import"./PdfRenderer-yWp-8Ukl.js";import"./index-CXzmbyfT.js";import"./PdfViewer-DPa25tpX.js";import"./PdfViewer.module.css-D6AQF7d3.js";import"./PdfViewerAnnotationLayer-vsy_jn4J.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-X2NYvu_9.js";import"./PdfViewerOutlineSidebar-CatWbCfy.js";import"./PdfViewerSidebarHeader-Cv9S9FAf.js";import"./useBaseUiId-BsG-Zm5E.js";import"./useControlled-qW1tEB03.js";import"./CompositeRoot-CtyvLDad.js";import"./CompositeItem-D8I-jjeP.js";import"./ToolbarRootContext-_joG3CJi.js";import"./composite-DaCZVCOl.js";import"./svgIconContainer-mVuSeb5R.js";import"./PdfViewerSearchBar-BaTnq-AN.js";import"./chevron-up-Ck-oYLss.js";import"./chevron-down-Dm-2k2rq.js";import"./cross-DPb3Lanf.js";import"./PdfViewerSidebar-DJo8w7Hp.js";import"./index-CXhL9gtU.js";import"./index-DRvakaoR.js";import"./index-BcB9qF6v.js";import"./PdfViewerToolbar-76sT9_Zo.js";import"./Button-DZSjklBP.js";import"./chevron-right-DkNYiL2j.js";import"./Input-CqlCBTmB.js";import"./search-CtSjt_Wn.js";import"./spin-Ciw0WR94.js";import"./error-BlFFjo7T.js";import"./withOsdkMetrics-BYmyRLlT.js";import"./makeExternalStore-nNw6ACoo.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
