import{j as r,M as s}from"./iframe-DeDsL1Xz.js";import{P as p}from"./pdf-viewer-BiUWP7al.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B9oBxzzQ.js";import"./preload-helper-BVBQesVt.js";import"./PdfViewer-CAtIpRiM.js";import"./index-BU8-F79N.js";import"./BasePdfViewer-8o5or31-.js";import"./BasePdfViewer.module.css-CqAdWx-s.js";import"./PdfViewerAnnotationLayer-B-zA3tIZ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BxaEeRIc.js";import"./PdfViewerOutlineSidebar-BNDfsqPb.js";import"./PdfViewerSidebarHeader-BEaiUloX.js";import"./useBaseUiId-CQ4hkA7O.js";import"./useControlled-BbxyP0yd.js";import"./CompositeRoot-Dw-zWUkG.js";import"./CompositeItem-DHAlezUZ.js";import"./ToolbarRootContext-DhOdNxhK.js";import"./composite-BCcUbicN.js";import"./svgIconContainer-Aqj8Zd5l.js";import"./PdfViewerSearchBar-C0v_WFdx.js";import"./chevron-up-DL4MSdPF.js";import"./chevron-down-DuWqNP_i.js";import"./cross-jIk7qGHQ.js";import"./PdfViewerSidebar-DCxlq1Li.js";import"./index-DG83v6db.js";import"./index-DoWEUVS1.js";import"./index-Cy0o1bod.js";import"./PdfViewerToolbar-F6jCaquk.js";import"./Button-B4hehT03.js";import"./chevron-right-NA4t9cUC.js";import"./Input-W5uf4VNK.js";import"./search-DyYzy_rN.js";import"./spin-DaBflwtB.js";import"./error-IDubZlnB.js";import"./withOsdkMetrics-CfFdQ5R1.js";import"./makeExternalStore-v6gib538.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
