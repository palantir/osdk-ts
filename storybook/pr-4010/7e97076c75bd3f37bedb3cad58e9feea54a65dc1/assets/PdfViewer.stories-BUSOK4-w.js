import{j as r,M as s}from"./iframe-DieBzf9y.js";import{P as p}from"./pdf-viewer-rn6cqSwm.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BufQLSwO.js";import"./preload-helper-nfOhyenq.js";import"./PdfViewer-BwdTfzRM.js";import"./index-CueLTBHP.js";import"./BasePdfViewer-Iz-9LG9n.js";import"./BasePdfViewer.module.css-84SeadFa.js";import"./PdfViewerAnnotationLayer-C4qyG7bg.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cej82hnQ.js";import"./PdfViewerOutlineSidebar-AKNm_4IQ.js";import"./PdfViewerSidebarHeader-NP9aOrX2.js";import"./useBaseUiId-Bxe_lFSq.js";import"./useControlled-D4dAPTSV.js";import"./CompositeRoot-j7SquUIt.js";import"./CompositeItem-Bk12yzpP.js";import"./ToolbarRootContext-SW8tVZST.js";import"./composite-BvpzVpYi.js";import"./svgIconContainer-C4rlmgrB.js";import"./PdfViewerSearchBar-DXP2Kssy.js";import"./chevron-up-t1l06puB.js";import"./chevron-down-MpT91KZy.js";import"./cross-t6O5j7uz.js";import"./PdfViewerSidebar-AwQNkgZo.js";import"./index-BvOU7Oie.js";import"./index-BSQeylJ3.js";import"./index-QupaIjGx.js";import"./PdfViewerToolbar-BC1LhlQv.js";import"./Button-C1caW-IN.js";import"./chevron-right-BymnhBEj.js";import"./Input-Ckaolz8l.js";import"./search-LxBHfv5l.js";import"./spin-BE-UiMl4.js";import"./error-BL3TgcOC.js";import"./withOsdkMetrics-LkUW4C5C.js";import"./makeExternalStore-Bmuig1mM.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
