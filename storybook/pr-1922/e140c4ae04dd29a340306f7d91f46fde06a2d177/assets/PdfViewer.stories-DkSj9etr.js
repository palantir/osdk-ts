import{j as r,M as s}from"./iframe-CY0l_yrm.js";import{P as p}from"./pdf-viewer-Cnea_YdY.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DL9OzVMK.js";import"./preload-helper-DND0VgR5.js";import"./PdfViewer-BpBtaY9Y.js";import"./index-jD6aOkFv.js";import"./BasePdfViewer-BMT3RAjs.js";import"./BasePdfViewer.module.css-DklZEJFX.js";import"./PdfViewerAnnotationLayer-BvmeFf8x.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Br-WKghA.js";import"./PdfViewerOutlineSidebar-BRhJsvKM.js";import"./PdfViewerSidebarHeader-DMZvUZwr.js";import"./useBaseUiId-CnQ31eNT.js";import"./useControlled-C5au6PDu.js";import"./CompositeRoot-hAfSplJR.js";import"./CompositeItem-CBwjlwAY.js";import"./ToolbarRootContext-CxL7mdgL.js";import"./composite-CtsMuCZE.js";import"./svgIconContainer-CS1jdY6Z.js";import"./PdfViewerSearchBar-IC09IAbH.js";import"./chevron-up-jZ1csiz0.js";import"./chevron-down-CevA26oJ.js";import"./cross-Cx7CV6yi.js";import"./PdfViewerSidebar-CwGyYSsF.js";import"./index-Bc195Ow-.js";import"./index-BwcD2Xpb.js";import"./index-CYc2nEZM.js";import"./PdfViewerToolbar-C2xakzHh.js";import"./Button-BSjQUjCf.js";import"./chevron-right-CKUVv4ZC.js";import"./Input-BSPMw6pL.js";import"./search-pW8689hu.js";import"./spin-Df1pcgIX.js";import"./error-CvxyrBuz.js";import"./withOsdkMetrics-B5SRPOi7.js";import"./makeExternalStore-DLJSnM06.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
        code: \`// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
