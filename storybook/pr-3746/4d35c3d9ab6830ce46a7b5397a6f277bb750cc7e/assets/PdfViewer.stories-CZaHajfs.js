import{j as r,M as s}from"./iframe-Da42tfo0.js";import{P as p}from"./pdf-viewer-CyrNS-9u.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BxKQxKKG.js";import"./preload-helper-DAikJXZa.js";import"./PdfRenderer-rfOLpYb0.js";import"./index-Bomen_f9.js";import"./PdfViewer-C0nihmVI.js";import"./PdfViewer.module.css-BJKnqHmJ.js";import"./PdfViewerAnnotationLayer-kP2AkdhL.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BYLwGfGD.js";import"./PdfViewerOutlineSidebar-B3YNG2Yc.js";import"./PdfViewerSidebarHeader-CNOUOmd5.js";import"./useBaseUiId-BeAjw0Pz.js";import"./useControlled-tfkpEIEU.js";import"./CompositeRoot-4xhbfFIS.js";import"./CompositeItem-BgwdEem5.js";import"./ToolbarRootContext-BmwtS_AT.js";import"./composite-BM8dnVYH.js";import"./svgIconContainer-C1uFDFQ-.js";import"./PdfViewerSearchBar-EmRfW6-C.js";import"./chevron-up-HpUmaoT2.js";import"./chevron-down-B9ztHwbJ.js";import"./cross-DG6Fu1MX.js";import"./PdfViewerSidebar-CIyn49ZO.js";import"./index-CUDqNzSs.js";import"./index-CMocEMCd.js";import"./index-B31UFyDN.js";import"./PdfViewerToolbar-BLuPuKvZ.js";import"./Button-DNGlddJW.js";import"./chevron-right-DrgOl6IF.js";import"./Input-CsGs3Ea-.js";import"./search-CMGFB0Gl.js";import"./spin-BHOOhn7K.js";import"./error-C20szSnY.js";import"./withOsdkMetrics-DcVf3U6k.js";import"./makeExternalStore-DY6l4t0Z.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
