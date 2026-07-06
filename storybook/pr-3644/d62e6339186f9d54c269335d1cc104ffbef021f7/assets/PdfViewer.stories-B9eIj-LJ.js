import{j as r,M as s}from"./iframe-DD-sY41C.js";import{P as p}from"./pdf-viewer-ZZpYbaRF.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Dg2FT2U1.js";import"./preload-helper-5__Lz23Y.js";import"./PdfRenderer-P_2D6plX.js";import"./index-DFpVWQaH.js";import"./PdfViewer-Y_2GA1v4.js";import"./PdfViewer.module.css-BeteWMjj.js";import"./PdfViewerAnnotationLayer-De-rpHLp.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-jdTglrcz.js";import"./PdfViewerOutlineSidebar-R8zgSvHu.js";import"./PdfViewerSidebarHeader-BZQ6-bow.js";import"./useBaseUiId-DxfPKsWQ.js";import"./useControlled-Dym6gTEg.js";import"./CompositeRoot-CkwS-b2T.js";import"./CompositeItem-LcGaYN6G.js";import"./ToolbarRootContext-BA5CPKJH.js";import"./composite-CSdXqb3j.js";import"./svgIconContainer-B-j9KSns.js";import"./PdfViewerSearchBar-uLGG1Pao.js";import"./chevron-up-DepcLPNb.js";import"./chevron-down-ybK0QuTX.js";import"./cross-DfrTo7j3.js";import"./PdfViewerSidebar-DcnaNKh7.js";import"./index-Bz6Dx7Fv.js";import"./index-BBeu3EMd.js";import"./index-C2FCvJks.js";import"./PdfViewerToolbar-Br0sIklk.js";import"./Button-C03k3Hmi.js";import"./chevron-right-CmsKRqLd.js";import"./Input-Cpv8q5Re.js";import"./search-C-wSGCX5.js";import"./spin-BQgh2HAd.js";import"./error-IQA24bgf.js";import"./withOsdkMetrics-hwQdk7mj.js";import"./makeExternalStore-BAzCglqy.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
