import{j as r,M as s}from"./iframe-nPEDWuq5.js";import{P as p}from"./pdf-viewer-B2mUUej2.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Mse927SE.js";import"./preload-helper-C6v3Woxd.js";import"./PdfViewer-Y3S1Cmxk.js";import"./index-BDaAzszu.js";import"./BasePdfViewer-Cv_nPimw.js";import"./BasePdfViewer.module.css-BHNp1lUe.js";import"./PdfViewerAnnotationLayer-wzaud8r2.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BX1qUJPV.js";import"./PdfViewerOutlineSidebar-C9aqoalU.js";import"./PdfViewerSidebarHeader-pcSysull.js";import"./useBaseUiId-BXoUi6bA.js";import"./useControlled-BvjcIJZ1.js";import"./CompositeRoot-QgGEs31a.js";import"./CompositeItem-CryHE6pf.js";import"./ToolbarRootContext-kq769ncg.js";import"./composite-CnhzSObF.js";import"./svgIconContainer-Buy0gbpp.js";import"./PdfViewerSearchBar-D07oaShF.js";import"./chevron-up-AbdLcMMP.js";import"./chevron-down-I8DXHveL.js";import"./cross-CAR7WZMr.js";import"./PdfViewerSidebar-yxEz_Xxu.js";import"./index-Bdb3f4mb.js";import"./index-BWMgc9TH.js";import"./index-DshB7Dwn.js";import"./PdfViewerToolbar-BMTMuqc-.js";import"./Button-BdGhF_Br.js";import"./chevron-right-DkJP2U2q.js";import"./Input-D9N0trYU.js";import"./search-CDt_zXJw.js";import"./spin-BjbS2i9e.js";import"./error-CBIwIhhP.js";import"./withOsdkMetrics-DX-TmC7j.js";import"./makeExternalStore-CYa6UY1g.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
