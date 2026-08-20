import{j as r,M as s}from"./iframe-CMBFeC_L.js";import{P as p}from"./pdf-viewer-a-cEVsEI.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C_DBPOnt.js";import"./preload-helper-CS36ADie.js";import"./PdfViewer-96CUAKax.js";import"./index-D4Y_w0hd.js";import"./BasePdfViewer-Bw0l9Gdd.js";import"./BasePdfViewer.module.css-Be7UUGdh.js";import"./PdfViewerAnnotationLayer-KjNnP__K.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-ChoJ0TtS.js";import"./PdfViewerOutlineSidebar-CJplwS9p.js";import"./PdfViewerSidebarHeader-DlSEodKx.js";import"./useBaseUiId-WiYHgttz.js";import"./useControlled-BjH4SKxs.js";import"./CompositeRoot-j11CLQzS.js";import"./CompositeItem-DRB9ulRp.js";import"./ToolbarRootContext-CR2_3FrA.js";import"./composite-W5TWwyjD.js";import"./svgIconContainer-DJxkQhhX.js";import"./PdfViewerSearchBar-C4kQBcqr.js";import"./chevron-up-B5haxwiP.js";import"./chevron-down-B4P3-pPo.js";import"./cross-yG9BF8uH.js";import"./PdfViewerSidebar-Bt3SIlv5.js";import"./index-BS3ExYik.js";import"./index-CZe2rHSJ.js";import"./index-CEtYmfNL.js";import"./PdfViewerToolbar-2NHB3uQJ.js";import"./Button-fIVGb80W.js";import"./chevron-right-B3-P8OaP.js";import"./Input-BxRwyONo.js";import"./search-CdxSaiZT.js";import"./spin-CvMPjlGP.js";import"./error-7AoAvQSe.js";import"./withOsdkMetrics-Bwu4txGZ.js";import"./makeExternalStore-BHl7EDPd.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
