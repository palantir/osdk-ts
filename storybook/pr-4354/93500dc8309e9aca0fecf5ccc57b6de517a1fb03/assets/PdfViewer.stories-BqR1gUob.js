import{j as r,M as s}from"./iframe-BIP88-50.js";import{P as p}from"./pdf-viewer-O7ZuCFub.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CvV4YqR8.js";import"./preload-helper-CJkHOWC7.js";import"./PdfViewer-BhYaWmOF.js";import"./index-CGkdPPI9.js";import"./BasePdfViewer-D-xrYLgD.js";import"./BasePdfViewer.module.css-Ojemy3Lv.js";import"./PdfViewerAnnotationLayer-BwDP7vk7.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CjucehTf.js";import"./PdfViewerOutlineSidebar-C7WaoR5i.js";import"./PdfViewerSidebarHeader-CktGKDE3.js";import"./useBaseUiId-Cj-jJj6K.js";import"./useControlled-fuVP_NbG.js";import"./CompositeRoot-BsS1SVMa.js";import"./CompositeItem-CVTunDpb.js";import"./ToolbarRootContext-CRygSzuk.js";import"./composite-BpLHrmIE.js";import"./svgIconContainer-Dz6akIgn.js";import"./PdfViewerSearchBar-BPgw_Lky.js";import"./chevron-up-3UPspuaA.js";import"./chevron-down-BX7qMt__.js";import"./cross-qB-EknTM.js";import"./PdfViewerSidebar-DQX1cKyR.js";import"./index-D59kjkiP.js";import"./index-KnvC-9LR.js";import"./index-BrS4cRkH.js";import"./PdfViewerToolbar-DRGNPNiN.js";import"./Button-CjK6G0Gi.js";import"./chevron-right-KpiOE5Xm.js";import"./Input-DYBooigU.js";import"./search-DgaGEvbD.js";import"./spin-xXGvYYsw.js";import"./error-y3-k7YV5.js";import"./withOsdkMetrics-YF4jnVsf.js";import"./makeExternalStore-bK2uAKO3.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
