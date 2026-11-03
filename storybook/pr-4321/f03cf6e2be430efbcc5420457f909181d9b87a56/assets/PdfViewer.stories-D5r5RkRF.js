import{j as r,M as s}from"./iframe-CvOjOlaX.js";import{P as p}from"./pdf-viewer-BaUbiBrV.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B8p5gO1A.js";import"./preload-helper-CMIwN0Ht.js";import"./PdfViewer-D4J2f0_R.js";import"./index-CrAKByIV.js";import"./BasePdfViewer-XxYFUhy-.js";import"./BasePdfViewer.module.css-CS7G9jaH.js";import"./PdfViewerAnnotationLayer-1nQ56Sfs.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DtGGfLUN.js";import"./PdfViewerOutlineSidebar-allfpWgw.js";import"./PdfViewerSidebarHeader-MUH0IPp6.js";import"./useBaseUiId-2b2yWiLC.js";import"./useControlled-Bk4S-y5O.js";import"./CompositeRoot-Dik6S4f6.js";import"./CompositeItem-CqY36BxB.js";import"./ToolbarRootContext-jTzvi3TC.js";import"./composite-DBq50y_B.js";import"./svgIconContainer-CCgDAq3h.js";import"./PdfViewerSearchBar-Q_dnxO6t.js";import"./chevron-up-CGfHgAPT.js";import"./chevron-down-DE6gjpOR.js";import"./cross-DiBcry41.js";import"./PdfViewerSidebar-DQRM2gBM.js";import"./index-hoOdhAdW.js";import"./index-3CFeZz8S.js";import"./index-BfsFuLyL.js";import"./PdfViewerToolbar-ButAyDRs.js";import"./Button-VY6TA0Ac.js";import"./chevron-right-Bd3FDsuH.js";import"./Input-B3WzxSEN.js";import"./search-C9_Jgha_.js";import"./spin-C_j8e1Tw.js";import"./error-BYaZivRW.js";import"./withOsdkMetrics-BRorics0.js";import"./makeExternalStore-Bvn4jvir.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
