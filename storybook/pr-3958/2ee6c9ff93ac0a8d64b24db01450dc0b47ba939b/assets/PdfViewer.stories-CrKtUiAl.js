import{j as r,M as s}from"./iframe-BE_0juHq.js";import{P as p}from"./pdf-viewer-Bo-CL1r4.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DJ2HB-yf.js";import"./preload-helper-DGE0hYRw.js";import"./PdfViewer-Dj0_SP4-.js";import"./index-CZ-KL49G.js";import"./BasePdfViewer-CMoRgCF5.js";import"./BasePdfViewer.module.css-CFp4Xbfk.js";import"./PdfViewerAnnotationLayer-BYpeqg8h.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-F6BvfNow.js";import"./PdfViewerOutlineSidebar-BAVznmqZ.js";import"./PdfViewerSidebarHeader-BKxIj9Pe.js";import"./useBaseUiId-CyOhG5WV.js";import"./useControlled-C0uJcmsm.js";import"./CompositeRoot-aMEdyEDi.js";import"./CompositeItem-CAbmT9yz.js";import"./ToolbarRootContext-Bo_aNGPT.js";import"./composite-BMP3afRS.js";import"./svgIconContainer-DTm7GTT3.js";import"./PdfViewerSearchBar-DajqNWPc.js";import"./chevron-up-CK6uqyw7.js";import"./chevron-down-Cem4vbB0.js";import"./cross-CUPzUyHl.js";import"./PdfViewerSidebar-Bsqbimm-.js";import"./index-CVu1gKpb.js";import"./index-YpmziLMg.js";import"./index-DPXYEgdz.js";import"./PdfViewerToolbar-3pkamh3H.js";import"./Button-DoRYjZBD.js";import"./chevron-right-D1kBvPCl.js";import"./Input-eCN9724n.js";import"./search-BJgzsAei.js";import"./spin-Bv-EzbUE.js";import"./error-BpU3JwpA.js";import"./withOsdkMetrics-CLNWKIq7.js";import"./makeExternalStore-nfAmPwlH.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
