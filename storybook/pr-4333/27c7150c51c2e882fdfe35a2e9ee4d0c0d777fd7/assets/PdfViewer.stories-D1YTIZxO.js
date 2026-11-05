import{j as r,M as s}from"./iframe-DfZQ9M6i.js";import{P as p}from"./pdf-viewer-DEOqE6A9.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CGd2rWhz.js";import"./preload-helper-E2urLAES.js";import"./PdfViewer-DHlIww8j.js";import"./index-B0k0bEti.js";import"./BasePdfViewer-DwiDIhzl.js";import"./BasePdfViewer.module.css-_T97HPmn.js";import"./PdfViewerAnnotationLayer-C19JOBTD.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D4NmbKFS.js";import"./PdfViewerOutlineSidebar-Ba1ENhpH.js";import"./PdfViewerSidebarHeader-DGWstvW6.js";import"./useBaseUiId-Chm1jq62.js";import"./useControlled-CftsWT9B.js";import"./CompositeRoot-HXK9hrzX.js";import"./CompositeItem-Hd7LuzxE.js";import"./ToolbarRootContext-CfFBsMXS.js";import"./composite-C2Pj8gPK.js";import"./svgIconContainer-eylyBn5f.js";import"./PdfViewerSearchBar-CKjLMv4N.js";import"./chevron-up-BLsB_a-Y.js";import"./chevron-down-tsxmIRBn.js";import"./cross-BioDKNkS.js";import"./PdfViewerSidebar-DQmHtHJe.js";import"./index-kN-BpEU5.js";import"./index-DMZF7jCE.js";import"./index-DLq5Bkcx.js";import"./PdfViewerToolbar-C5z42ngJ.js";import"./Button-B2R87CaB.js";import"./chevron-right-Cw9KUj_x.js";import"./Input-CYJZLefv.js";import"./search-g1T2rl--.js";import"./spin-CEqzH1rF.js";import"./error-BTFoLABS.js";import"./withOsdkMetrics-lGVwuAms.js";import"./makeExternalStore-ChnBYuE7.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
