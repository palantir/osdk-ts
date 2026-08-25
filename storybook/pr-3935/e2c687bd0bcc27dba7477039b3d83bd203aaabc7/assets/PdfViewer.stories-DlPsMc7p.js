import{j as r,M as s}from"./iframe-XrofcpbD.js";import{P as p}from"./pdf-viewer-DFAJoZI9.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BGIrsFcc.js";import"./preload-helper-4aKSNE4Z.js";import"./PdfViewer-0S3D4BoH.js";import"./index-BpIQk31K.js";import"./BasePdfViewer-CiTMIhVW.js";import"./BasePdfViewer.module.css-C8u8SsoX.js";import"./PdfViewerAnnotationLayer-ClLkTJxi.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B916c-_d.js";import"./PdfViewerOutlineSidebar-Bsah4uon.js";import"./PdfViewerSidebarHeader-CSYosFWr.js";import"./useBaseUiId-Pjnp1WCR.js";import"./useControlled-DZJgL9vi.js";import"./CompositeRoot-BoFkBhVR.js";import"./CompositeItem-BEvI0D6E.js";import"./ToolbarRootContext-AhwQqi4V.js";import"./composite-CVP2vWQr.js";import"./svgIconContainer-BRYxzENj.js";import"./PdfViewerSearchBar-CW674-ki.js";import"./chevron-up-oz53Mo2L.js";import"./chevron-down-CD2YsHKM.js";import"./cross-xvFBNCq9.js";import"./PdfViewerSidebar-Dudvn0S4.js";import"./index-UBL3yvSp.js";import"./index-YIz0O6eI.js";import"./index-BiB6mgaY.js";import"./PdfViewerToolbar-CNknMs59.js";import"./Button-D93TIJdR.js";import"./chevron-right-BuJer222.js";import"./Input-DP0HZuep.js";import"./search-CpQHwDsV.js";import"./spin-D05RsXz-.js";import"./error-CCJEPyJx.js";import"./withOsdkMetrics-BHkoZ0sq.js";import"./makeExternalStore-YYVkatD5.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
