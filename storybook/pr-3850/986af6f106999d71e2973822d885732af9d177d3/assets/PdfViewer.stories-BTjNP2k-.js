import{j as r,M as s}from"./iframe-B8ePIdgx.js";import{P as p}from"./pdf-viewer-De3-rkV_.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BPPXNB5c.js";import"./preload-helper-CO52apix.js";import"./PdfRenderer-DZUlEEMA.js";import"./index-DUi6XBWn.js";import"./PdfViewer-CVISk0jS.js";import"./PdfViewer.module.css-sXnAcbou.js";import"./PdfViewerAnnotationLayer-BwOGSSLD.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BBENqSUM.js";import"./PdfViewerOutlineSidebar-BleFEKPo.js";import"./PdfViewerSidebarHeader-BwclEZLu.js";import"./useBaseUiId--yhQINEj.js";import"./useControlled-DkyHp8L_.js";import"./CompositeRoot-tRDi8tne.js";import"./CompositeItem-DUbz8YTd.js";import"./ToolbarRootContext-CpKnibLo.js";import"./composite-DrvPRKh9.js";import"./svgIconContainer-B5mfSzbk.js";import"./PdfViewerSearchBar-DokT8veq.js";import"./chevron-up-Dk8NB1Cs.js";import"./chevron-down-VVimmYFs.js";import"./cross-Z2WIVKHq.js";import"./PdfViewerSidebar-DkE-fnqG.js";import"./index-cjRW8DRN.js";import"./index-DzqwBQvc.js";import"./index-BDjNZM-d.js";import"./PdfViewerToolbar-DHSmBh3y.js";import"./Button-B1Ldn3Hf.js";import"./chevron-right-B0QBz1nN.js";import"./Input-D21o8IPI.js";import"./search-CRVGvOET.js";import"./spin-DVAvVMfH.js";import"./error-Cey_f2IB.js";import"./withOsdkMetrics-CXP8M-KN.js";import"./makeExternalStore-BIU4uaP7.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
