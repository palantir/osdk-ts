import{j as r,M as s}from"./iframe-D3AG5tAD.js";import{P as p}from"./pdf-viewer-QM1CyvZj.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DUapHvo5.js";import"./preload-helper-B-YtZbVH.js";import"./PdfRenderer-DXWeQ0cG.js";import"./index-CU_7NiMA.js";import"./PdfViewer-unYenR2H.js";import"./PdfViewer.module.css-nocJU_TX.js";import"./PdfViewerAnnotationLayer-ziFODyuf.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B2zMpIFB.js";import"./PdfViewerOutlineSidebar-DUVDkHfS.js";import"./PdfViewerSidebarHeader-D5-iMe2Z.js";import"./useBaseUiId-CdoAVwix.js";import"./useControlled-B37jSgMz.js";import"./CompositeRoot-CiImbutR.js";import"./CompositeItem-BU_R-6TT.js";import"./ToolbarRootContext-DzrhBWFL.js";import"./composite-DbU-tGJF.js";import"./svgIconContainer-CsB1NaGz.js";import"./PdfViewerSearchBar-C_bHIWmM.js";import"./chevron-up-BIXfDwF4.js";import"./chevron-down-DHx9quO2.js";import"./cross-fuBUoHYF.js";import"./PdfViewerSidebar-IexgcrEb.js";import"./index-CBd9Rybf.js";import"./index-BZVvyLb2.js";import"./index-CUoB2gGZ.js";import"./PdfViewerToolbar-kaM-L-fD.js";import"./Button-DctYu487.js";import"./chevron-right-DYO-bxjx.js";import"./Input-B0piQqS7.js";import"./search-MNCXehF6.js";import"./spin-B7jR5pnX.js";import"./error-vXB8Gt0N.js";import"./withOsdkMetrics-O49zzeg3.js";import"./makeExternalStore-BF60C0Cg.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
