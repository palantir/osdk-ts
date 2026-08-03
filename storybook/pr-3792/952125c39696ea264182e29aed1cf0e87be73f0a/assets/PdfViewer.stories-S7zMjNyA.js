import{j as r,M as s}from"./iframe-ChCYWkFC.js";import{P as p}from"./pdf-viewer-h6SY_IJr.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-ni2_aw2e.js";import"./preload-helper-2e0CXzEG.js";import"./PdfRenderer-sNCGuyEJ.js";import"./index-Be19pAzV.js";import"./PdfViewer-CvfHdgoD.js";import"./PdfViewer.module.css-Faz9-t_N.js";import"./PdfViewerAnnotationLayer-B8MXA9rO.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-2rf63RNh.js";import"./PdfViewerOutlineSidebar-BwYl-a6w.js";import"./PdfViewerSidebarHeader-Boafnw3K.js";import"./useBaseUiId-D7_MSijo.js";import"./useControlled-Cy91VBio.js";import"./CompositeRoot-CMK-sw0u.js";import"./CompositeItem-BwVCbGsl.js";import"./ToolbarRootContext-Bp-TiK-m.js";import"./composite-Dsg-9HAA.js";import"./svgIconContainer-C2FhCoFe.js";import"./PdfViewerSearchBar-BLZ7NvT6.js";import"./chevron-up-C_dbPpbv.js";import"./chevron-down-sfySf6B-.js";import"./cross-BkiSPzBk.js";import"./PdfViewerSidebar-B15Jhh0D.js";import"./index-DvYGmwtE.js";import"./index-D9paw9rd.js";import"./index-CeE-gYem.js";import"./PdfViewerToolbar-7b6eZLmi.js";import"./Button-DPenXW8U.js";import"./chevron-right-BHiA8wP0.js";import"./Input-BD-LZGDG.js";import"./search-D9jFpevZ.js";import"./spin-97i9GEy-.js";import"./error-lNGXoKCc.js";import"./withOsdkMetrics-CuxbWZN_.js";import"./makeExternalStore-BdUDleba.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
