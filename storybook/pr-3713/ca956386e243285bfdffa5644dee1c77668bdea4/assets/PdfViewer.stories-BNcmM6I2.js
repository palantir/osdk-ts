import{j as r,M as s}from"./iframe-BxlJWUnI.js";import{P as p}from"./pdf-viewer-ztSkO-gt.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BIdb3mDi.js";import"./preload-helper-DEzBsDva.js";import"./PdfRenderer-DA-sk4c2.js";import"./index-C3Vz1CWs.js";import"./PdfViewer-B7nVWMkv.js";import"./PdfViewer.module.css-DhD1cXXU.js";import"./PdfViewerAnnotationLayer-DT8e5iOU.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BeZb-6mn.js";import"./PdfViewerOutlineSidebar-BG5xv7pD.js";import"./PdfViewerSidebarHeader-CyC2ou4X.js";import"./useBaseUiId-BwdClmHp.js";import"./useControlled-Cq0jPoim.js";import"./CompositeRoot-CWjo3pR1.js";import"./CompositeItem-CtYq2wv2.js";import"./ToolbarRootContext-eKkO_S8s.js";import"./composite-BNPxx5Qm.js";import"./svgIconContainer-X5m_oOio.js";import"./PdfViewerSearchBar-CW36Ixis.js";import"./chevron-up-C1DicniJ.js";import"./chevron-down-Demu3Liu.js";import"./cross-Dj5VOQuq.js";import"./PdfViewerSidebar-COy9UuoQ.js";import"./index-V8230MnH.js";import"./index-ClDDuz4C.js";import"./index-Bo4V7efg.js";import"./PdfViewerToolbar-CPoOFTWl.js";import"./Button-DE5_yCTw.js";import"./chevron-right-BaTI3uI5.js";import"./Input-D2ToTu6w.js";import"./search-BWhtNrWP.js";import"./spin-8KpdNBef.js";import"./error-BszREstB.js";import"./withOsdkMetrics-BgQUIMpa.js";import"./makeExternalStore-rcO4r3Tb.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
