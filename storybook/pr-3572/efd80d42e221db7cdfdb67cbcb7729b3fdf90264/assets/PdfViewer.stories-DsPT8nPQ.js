import{j as r,M as s}from"./iframe-BMWLVu1B.js";import{P as p}from"./pdf-viewer-DHrW1Y-q.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CR7MahGE.js";import"./preload-helper-CD98YvT3.js";import"./PdfRenderer-DDCfZlud.js";import"./index-C_CSLeaI.js";import"./PdfViewer-7O0iis8_.js";import"./PdfViewer.module.css-DZvpTM30.js";import"./PdfViewerAnnotationLayer-DalgDuKi.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DdQ_b2Qs.js";import"./PdfViewerOutlineSidebar-DU8B_rj7.js";import"./PdfViewerSidebarHeader-BLVLi5Pk.js";import"./useBaseUiId-rgc-9xpG.js";import"./useControlled-Bfojft4Y.js";import"./CompositeRoot-BhSGkgow.js";import"./CompositeItem-XO12oXBx.js";import"./ToolbarRootContext-DfTMi3Dg.js";import"./composite-DYUx8nh9.js";import"./svgIconContainer-ChJGYcue.js";import"./PdfViewerSearchBar-BnwsjlfH.js";import"./chevron-up-HD-TGblS.js";import"./chevron-down-CmjTA-FB.js";import"./cross-p8R5_cfS.js";import"./PdfViewerSidebar-mpUswE2V.js";import"./index-pGHJ9wYX.js";import"./index-4cLeK3Jc.js";import"./index-AHIlm2Fz.js";import"./PdfViewerToolbar-7cf46pZ-.js";import"./Button-Bk--HmG4.js";import"./chevron-right-CioNp467.js";import"./Input-EoHvS4g1.js";import"./minus-BI_eIHcn.js";import"./search-DgKFphhq.js";import"./spin-A5628aoM.js";import"./error-CLqxyRzW.js";import"./withOsdkMetrics-CM4amC2X.js";import"./makeExternalStore-D9Kx5fbz.js";const W={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
