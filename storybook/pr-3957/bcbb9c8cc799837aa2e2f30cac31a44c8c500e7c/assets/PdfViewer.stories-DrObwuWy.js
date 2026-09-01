import{j as r,M as s}from"./iframe-TApi_89H.js";import{P as p}from"./pdf-viewer-BsSGRmIS.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D6PYlP4L.js";import"./preload-helper-sYHE9xkK.js";import"./PdfViewer-B4Xb1iQp.js";import"./index-C7k_RZGy.js";import"./BasePdfViewer-BSeF_oHS.js";import"./BasePdfViewer.module.css-CiLJcm4b.js";import"./PdfViewerAnnotationLayer-BrnzpX1N.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DGVEBmji.js";import"./PdfViewerOutlineSidebar-UnDcaRFw.js";import"./PdfViewerSidebarHeader-DUK7AjML.js";import"./useBaseUiId-D7C__S_-.js";import"./useControlled-CD3Nk51s.js";import"./CompositeRoot-BgtuexoJ.js";import"./CompositeItem-DWMayDud.js";import"./ToolbarRootContext-CXJo9eGs.js";import"./composite-DCCTyU-Y.js";import"./svgIconContainer-C7DRNdJN.js";import"./PdfViewerSearchBar-Cd7zwU01.js";import"./chevron-up-Dkimdggo.js";import"./chevron-down-Bn6U06zL.js";import"./cross-fnS0M6qm.js";import"./PdfViewerSidebar-DyJLkocC.js";import"./index-s3cuk91h.js";import"./index-XwwRSRPj.js";import"./index-ZB-gWh6L.js";import"./PdfViewerToolbar-CTOx_D3p.js";import"./Button-5wphI9oR.js";import"./chevron-right-DDZCuLuR.js";import"./Input-BvP2l_mS.js";import"./search-COp09I1s.js";import"./spin-DtayIh83.js";import"./error-BnvoNHjd.js";import"./withOsdkMetrics-B-5Iqtjd.js";import"./makeExternalStore-DBGeSdOF.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
