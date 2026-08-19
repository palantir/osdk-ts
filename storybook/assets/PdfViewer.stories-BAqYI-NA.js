import{j as r,M as s}from"./iframe-Bu669Pxz.js";import{P as p}from"./pdf-viewer-BPL7y5eV.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Bv7oYVNO.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfViewer-DDASS9eo.js";import"./index-DKHlcWi3.js";import"./BasePdfViewer-Dubo_N0a.js";import"./BasePdfViewer.module.css-BJHoBovL.js";import"./PdfViewerAnnotationLayer-CVymISH8.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CS0E2TLN.js";import"./PdfViewerOutlineSidebar-D7Kc5mRe.js";import"./PdfViewerSidebarHeader-0Jn5D_wB.js";import"./useBaseUiId-B-sZe3p-.js";import"./useControlled-DxXQTGIF.js";import"./CompositeRoot-Dq0RsexA.js";import"./CompositeItem-BEsWan-K.js";import"./ToolbarRootContext-BLCkh9_F.js";import"./composite-C8rBSBTd.js";import"./svgIconContainer-zdH7oio0.js";import"./PdfViewerSearchBar-DeLiwwRr.js";import"./chevron-up-HOmCp1md.js";import"./chevron-down-Cy5tfknz.js";import"./cross-6sB-IXgJ.js";import"./PdfViewerSidebar-BUFX3aHH.js";import"./index-DEkRoDzJ.js";import"./index-Qt20q_8J.js";import"./index-DtY732wl.js";import"./PdfViewerToolbar-CKM0KGX1.js";import"./Button-qSnmCYaa.js";import"./chevron-right-BNFMI_5C.js";import"./Input-bVe5DU0v.js";import"./search-083fpx5Y.js";import"./spin-BXEnPCV0.js";import"./error-BWta7cvF.js";import"./withOsdkMetrics-DgxQm_Yv.js";import"./makeExternalStore-BcdadG9D.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
