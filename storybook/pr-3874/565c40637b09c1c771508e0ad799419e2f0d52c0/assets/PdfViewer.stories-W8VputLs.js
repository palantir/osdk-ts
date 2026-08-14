import{j as r,M as s}from"./iframe-CEoeK06g.js";import{P as p}from"./pdf-viewer-BsvIC6yi.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-_iW-Foqi.js";import"./preload-helper-D0HY9C8v.js";import"./PdfViewer-DMVDs9Mh.js";import"./index-CbcAYo9G.js";import"./BasePdfViewer-CFJWxdjG.js";import"./BasePdfViewer.module.css-DexQOnIj.js";import"./PdfViewerAnnotationLayer-8EqxfYtU.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-vxas_29Z.js";import"./PdfViewerOutlineSidebar-Bg2Uwv2B.js";import"./PdfViewerSidebarHeader-EtGyD-RF.js";import"./useBaseUiId-DlA3_oGO.js";import"./useControlled-BAISDtcI.js";import"./CompositeRoot-DN13X3Sa.js";import"./CompositeItem-Hmlr3-VY.js";import"./ToolbarRootContext-DAZXfHsD.js";import"./composite-DO_ZxZQ1.js";import"./svgIconContainer-CtUSixF7.js";import"./PdfViewerSearchBar-B2kYCK_G.js";import"./chevron-up-CPJp1Ocq.js";import"./chevron-down-CM7IFICS.js";import"./cross-D1VoGJpt.js";import"./PdfViewerSidebar-Zl8KSORu.js";import"./index-D39DbJ__.js";import"./index-CDp82B90.js";import"./index-BWMfSkVY.js";import"./PdfViewerToolbar-BUFxDF-f.js";import"./Button-xvTdbQWs.js";import"./chevron-right-Dz2HYLCJ.js";import"./Input-BNn8L34r.js";import"./search-Dv4SY-Fw.js";import"./spin-DD1Q0VcJ.js";import"./error-gl_nrOic.js";import"./withOsdkMetrics-CNrGK-H6.js";import"./makeExternalStore-B-qUAwEg.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
