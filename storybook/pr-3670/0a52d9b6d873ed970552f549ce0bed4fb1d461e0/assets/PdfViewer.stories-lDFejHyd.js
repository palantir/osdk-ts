import{j as r,M as s}from"./iframe-DeTIsQxL.js";import{P as p}from"./pdf-viewer-FDcxVQF5.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C15us17J.js";import"./preload-helper-CB0krISm.js";import"./PdfRenderer-BihhToLS.js";import"./index-DJCw2I8F.js";import"./PdfViewer-Dpg-_9yX.js";import"./PdfViewer.module.css-DdAdn5Oa.js";import"./PdfViewerAnnotationLayer-1ZzurFNw.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B6abvfzH.js";import"./PdfViewerOutlineSidebar-BvwtdGG_.js";import"./PdfViewerSidebarHeader-T5D0q84B.js";import"./useBaseUiId-a2IWdv8a.js";import"./useControlled-CVbfP8LM.js";import"./CompositeRoot-DJEXDPsN.js";import"./CompositeItem-DmMZR4gE.js";import"./ToolbarRootContext-5TGYojqS.js";import"./composite-tRtN087v.js";import"./svgIconContainer-DRoX0Vsv.js";import"./PdfViewerSearchBar-C94GM2-S.js";import"./chevron-up-DCe6Rln9.js";import"./chevron-down-BmmuVHCT.js";import"./cross-B6qSpTyB.js";import"./PdfViewerSidebar-L7wv2uNr.js";import"./index-BG5hwvad.js";import"./index--ckDM66E.js";import"./index-CvmIGShp.js";import"./PdfViewerToolbar-By_olQxE.js";import"./Button-DVNiVWo0.js";import"./chevron-right--JcYwkH3.js";import"./Input-DfREMPWD.js";import"./search-aX2fvTHi.js";import"./spin-BPMftYP6.js";import"./error-MuE1w4dN.js";import"./withOsdkMetrics-CUyQGeFt.js";import"./makeExternalStore-D3ohMW2u.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
