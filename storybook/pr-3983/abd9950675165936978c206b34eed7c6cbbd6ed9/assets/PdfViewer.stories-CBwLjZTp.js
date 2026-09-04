import{j as r,M as s}from"./iframe-DvFhas0q.js";import{P as p}from"./pdf-viewer-z3_-E40p.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DPvz2nPF.js";import"./preload-helper-QHjuDrJd.js";import"./PdfViewer-CVR8J9nA.js";import"./index-CmLQwMDk.js";import"./BasePdfViewer-B8NvHLxb.js";import"./BasePdfViewer.module.css-ti9MWSqP.js";import"./PdfViewerAnnotationLayer-ouxvjKrB.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CYw2S_30.js";import"./PdfViewerOutlineSidebar-mnUiL9qK.js";import"./PdfViewerSidebarHeader-BCYc6K6v.js";import"./useBaseUiId-BFo_-NKJ.js";import"./useControlled-CxHMv-Gu.js";import"./CompositeRoot-CwTTqsB_.js";import"./CompositeItem-Dn55C0Ya.js";import"./ToolbarRootContext-Dzf-NS_o.js";import"./composite-C99jNiLY.js";import"./svgIconContainer-BHO7oNHP.js";import"./PdfViewerSearchBar-nxKTnHTK.js";import"./chevron-up-CdfQr7_J.js";import"./chevron-down-EuTJEAw_.js";import"./cross-CM36P0tx.js";import"./PdfViewerSidebar-B2BEvuc0.js";import"./index-YzetP2f8.js";import"./index-Apg0qjyu.js";import"./index-BoSI0BFD.js";import"./PdfViewerToolbar-B36jZSBU.js";import"./Button-CK4f3ZCw.js";import"./chevron-right-DEPw7xU8.js";import"./Input-Co66Vae_.js";import"./search-C6DWKwgW.js";import"./spin-DVHQyyeR.js";import"./error-ASo9jiXR.js";import"./withOsdkMetrics-UKaUAaA5.js";import"./makeExternalStore-wKI12oPU.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
