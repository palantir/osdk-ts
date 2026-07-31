import{j as r,M as s}from"./iframe-gzVrYTak.js";import{P as p}from"./pdf-viewer-8rH8MQkg.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-i0aAuJhg.js";import"./preload-helper-L3pE98T_.js";import"./PdfRenderer-CVR4BlpX.js";import"./index-RDVHJcvo.js";import"./PdfViewer-CGXV4ITX.js";import"./PdfViewer.module.css-Dxm2MT4d.js";import"./PdfViewerAnnotationLayer-BDxv6XPe.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DFgyOGpq.js";import"./PdfViewerOutlineSidebar-BiMsgymM.js";import"./PdfViewerSidebarHeader-D3Wz46vo.js";import"./useBaseUiId-B81zB54n.js";import"./useControlled-IkTNQ6K_.js";import"./CompositeRoot-D2OH492G.js";import"./CompositeItem-Y24lxPAU.js";import"./ToolbarRootContext-BEITgtkO.js";import"./composite-DQVnyrFk.js";import"./svgIconContainer-kSLl__Df.js";import"./PdfViewerSearchBar-C5uQaEGJ.js";import"./chevron-up-C5zob6dX.js";import"./chevron-down-ErG01cxd.js";import"./cross-CM3TMApR.js";import"./PdfViewerSidebar-CXSS0H6Z.js";import"./index-BxtnWxzi.js";import"./index-Cj4q3NWW.js";import"./index-CrUm-nlo.js";import"./PdfViewerToolbar-CUaA62Wz.js";import"./Button-iNtaOIhz.js";import"./chevron-right-C_0sTtg9.js";import"./Input-vdipARBj.js";import"./search-DQCB2p55.js";import"./spin-B7npiIYE.js";import"./error-DbGHRKTj.js";import"./withOsdkMetrics-CkrFpESP.js";import"./makeExternalStore-Cb7zye3Q.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
