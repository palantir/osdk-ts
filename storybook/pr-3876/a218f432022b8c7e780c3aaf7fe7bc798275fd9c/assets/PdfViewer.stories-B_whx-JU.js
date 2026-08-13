import{j as r,M as s}from"./iframe-D9x1t_vp.js";import{P as p}from"./pdf-viewer-B6njBChV.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DO3JRC1A.js";import"./preload-helper-G-W5TAZO.js";import"./PdfViewer-Ct56Dpzj.js";import"./index-DkawwfeN.js";import"./BasePdfViewer-DcBMGYhC.js";import"./BasePdfViewer.module.css-B_03j6o8.js";import"./PdfViewerAnnotationLayer-BIxV5Oai.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BE07GP2D.js";import"./PdfViewerOutlineSidebar-CeI8iYRw.js";import"./PdfViewerSidebarHeader-tibY95KL.js";import"./useBaseUiId-BXGjoli7.js";import"./useControlled-B_3qzWS0.js";import"./CompositeRoot-CwW-4vIE.js";import"./CompositeItem-DbzCphWS.js";import"./ToolbarRootContext-CB_Eo7a2.js";import"./composite-DbEdsmcW.js";import"./svgIconContainer-GJo4FLSZ.js";import"./PdfViewerSearchBar-DntTEBgn.js";import"./chevron-up-st1OsVhj.js";import"./chevron-down-BPV9QsLo.js";import"./cross-B-D0ldT_.js";import"./PdfViewerSidebar-BQcttWsn.js";import"./index-BuAwYtSM.js";import"./index-CDz91Otv.js";import"./index-DvF6dXob.js";import"./PdfViewerToolbar-Bs--KQuX.js";import"./Button-Dn0Wamri.js";import"./chevron-right-Bl1iTTzc.js";import"./Input-BURRu-rg.js";import"./search-C5Hx3O16.js";import"./spin-D_bkAnYJ.js";import"./error-BA6zdh3z.js";import"./withOsdkMetrics-C_ks6dJ2.js";import"./makeExternalStore-DFF9EkpS.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
