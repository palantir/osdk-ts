import{j as r,M as s}from"./iframe-6DWpb4n8.js";import{P as p}from"./pdf-viewer-BDd7V_4X.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-TMCGvJjW.js";import"./preload-helper-CKC3MDBV.js";import"./PdfRenderer-J15Xm36y.js";import"./index-DvSw4Y8y.js";import"./PdfViewer-DYWPPXeL.js";import"./PdfViewer.module.css-D7UCk9n6.js";import"./PdfViewerAnnotationLayer-DXXpB_pa.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DQk_Ycqu.js";import"./PdfViewerOutlineSidebar-snSwcWiW.js";import"./PdfViewerSidebarHeader-e73hUV0S.js";import"./useBaseUiId-BMfPZQEL.js";import"./useControlled-Cmd5jpf8.js";import"./CompositeRoot-BWokcKdC.js";import"./CompositeItem-Zyxnw8On.js";import"./ToolbarRootContext-j9l86UQ6.js";import"./composite-BP4DAUSV.js";import"./svgIconContainer-CEcqlPd6.js";import"./PdfViewerSearchBar-DRpAgAqk.js";import"./chevron-up-BSbW-5j0.js";import"./chevron-down-DWI2AdOf.js";import"./cross-DzEIRlDS.js";import"./PdfViewerSidebar-x3aBfuIc.js";import"./index-BFiua2g7.js";import"./index-kjbPB0Tc.js";import"./index-DXie4Vqe.js";import"./PdfViewerToolbar-0RKBlmHC.js";import"./Button-DZvQGd15.js";import"./chevron-right-knPYufpk.js";import"./Input-fwKnahH6.js";import"./minus-BsyllDxp.js";import"./search-C_ZrWNSR.js";import"./spin-BpZsF4dQ.js";import"./error-Co_RU7lE.js";import"./withOsdkMetrics-DsHZN0Lu.js";import"./makeExternalStore-M8_UnZ4Q.js";const W={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const X=["Default"];export{o as Default,X as __namedExportsOrder,W as default};
