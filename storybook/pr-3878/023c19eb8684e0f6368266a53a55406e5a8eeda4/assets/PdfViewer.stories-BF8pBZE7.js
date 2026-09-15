import{j as r,M as s}from"./iframe-Y5vGGcvP.js";import{P as p}from"./pdf-viewer-DMUQ1yUT.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CF555joP.js";import"./preload-helper-BDwImvib.js";import"./PdfViewer-UpJUUMD_.js";import"./index-BTH20MTv.js";import"./BasePdfViewer-B3PBNDZs.js";import"./BasePdfViewer.module.css-D_7Xsi2L.js";import"./PdfViewerAnnotationLayer-Cqk5JRmF.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Ya0BxF09.js";import"./PdfViewerOutlineSidebar-BjHmOQRX.js";import"./PdfViewerSidebarHeader-BdSgUBwt.js";import"./useBaseUiId-RL85XbnS.js";import"./useControlled-jE3VG63K.js";import"./CompositeRoot-BchOA9pq.js";import"./CompositeItem-1PZRLRt5.js";import"./ToolbarRootContext-BC-Ed_Oq.js";import"./composite-DfEzUBGr.js";import"./svgIconContainer-BIHKAVWB.js";import"./PdfViewerSearchBar-BHUmyojr.js";import"./chevron-up-oHTOtwsU.js";import"./chevron-down-mTWE-r4G.js";import"./cross-C6XfWSCb.js";import"./PdfViewerSidebar-BRn86Ls7.js";import"./index-CNA7S_DK.js";import"./index-BF11wRFE.js";import"./index-BqEmZbFH.js";import"./PdfViewerToolbar-CRvdUaBM.js";import"./Button--cxRM2vq.js";import"./chevron-right-BQiMrfK2.js";import"./Input-Dw8vFEHs.js";import"./search-DfUtBVkM.js";import"./spin-BJU_nyHX.js";import"./error-DU3E2pjz.js";import"./withOsdkMetrics-CAQdN2b1.js";import"./makeExternalStore-CH64p8Fa.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
