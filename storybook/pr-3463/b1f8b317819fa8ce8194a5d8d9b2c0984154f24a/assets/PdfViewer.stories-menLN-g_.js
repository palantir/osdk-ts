import{j as r,M as s}from"./iframe-Ezmn3SpD.js";import{P as p}from"./pdf-viewer-BuLULX6a.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C0EqNA_G.js";import"./preload-helper-D1sYuYBN.js";import"./PdfRenderer-DTFV5csS.js";import"./index-Dvdston6.js";import"./PdfViewer-CNFZTU7m.js";import"./PdfViewer.module.css-Cw13gqfo.js";import"./PdfViewerAnnotationLayer-DvECCT0o.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B9l8voXY.js";import"./PdfViewerOutlineSidebar-DIFbLNgs.js";import"./PdfViewerSidebarHeader-CixTp2bK.js";import"./useBaseUiId-DpAA4MUF.js";import"./useControlled-CyVTukR4.js";import"./CompositeRoot-BFzebkHe.js";import"./CompositeItem-BryZKdtO.js";import"./ToolbarRootContext-BKo8VDoh.js";import"./composite-BJqFUzwo.js";import"./svgIconContainer-D8jweW8c.js";import"./PdfViewerSearchBar-uO2CNaK5.js";import"./chevron-up-Bl8dDqF5.js";import"./chevron-down-rI_3aJAm.js";import"./cross-DSxhrQdq.js";import"./PdfViewerSidebar-BisQgBTK.js";import"./index-DInb5O-C.js";import"./index-Cka30kGH.js";import"./index-D74pndlv.js";import"./PdfViewerToolbar-CEbA9wDr.js";import"./Button-DHPNKO3h.js";import"./chevron-right-CctH97w0.js";import"./Input-mfyhe4pd.js";import"./search-BuE3nooh.js";import"./spin-B28F92V6.js";import"./error-kPlzrDKd.js";import"./withOsdkMetrics--KcbetR1.js";import"./makeExternalStore-CHWv51JV.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
