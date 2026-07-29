import{j as r,M as s}from"./iframe-hzfvyDmq.js";import{P as p}from"./pdf-viewer-QwuGkPBM.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-s4AGyT4A.js";import"./preload-helper-CdJNp2PB.js";import"./PdfRenderer-BtQoRS60.js";import"./index-f5Cgh3Nq.js";import"./PdfViewer-DbVI6r-S.js";import"./PdfViewer.module.css-Bk1E1ylV.js";import"./PdfViewerAnnotationLayer-dPRcHGDR.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BbJhNYQK.js";import"./PdfViewerOutlineSidebar-CjxojTwS.js";import"./PdfViewerSidebarHeader-BnHw5l9H.js";import"./useBaseUiId-DmC4LGoz.js";import"./useControlled-DAR7PUt5.js";import"./CompositeRoot-CuvmGxkl.js";import"./CompositeItem-CjjHoPXP.js";import"./ToolbarRootContext-BGTK6XuR.js";import"./composite-BH-1n-px.js";import"./svgIconContainer-Cb51Sm7i.js";import"./PdfViewerSearchBar-DHh186Yu.js";import"./chevron-up-DK8zhm2p.js";import"./chevron-down-CrjOKJrn.js";import"./cross-CRChT_Fc.js";import"./PdfViewerSidebar-ryPL2QqA.js";import"./index-DO9rqWWH.js";import"./index-B1JvKBAi.js";import"./index-BLrf7TRG.js";import"./PdfViewerToolbar-CdhI5mpO.js";import"./Button-B5teW1fu.js";import"./chevron-right-CSZqDuaM.js";import"./Input-j4WQNWPZ.js";import"./search-Cx-34oit.js";import"./spin-DGBcxWtw.js";import"./error-D9W8A-KQ.js";import"./withOsdkMetrics-u8-t1UQo.js";import"./makeExternalStore-DOrHHMWU.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
